import { useState, useCallback, useEffect } from 'react';
import { WordChainCategory, ChainEntry, WordChainState } from '@/types/wordchain';
import { v4 as uuidv4 } from 'uuid';

const MAX_LIVES = 3;

export const useWordChain = (category: WordChainCategory | null) => {
    // State
    const [chain, setChain] = useState<ChainEntry[]>([]);
    const [score, setScore] = useState(0);
    const [lives, setLives] = useState(MAX_LIVES);
    const [isGameOver, setIsGameOver] = useState(false);
    const [message, setMessage] = useState("");
    const [isBotTurn, setIsBotTurn] = useState(false);

    // Initial Game Setup
    const initGame = useCallback(() => {
        if (!category) return;

        // Pick random start word from category
        const startWord = category.words[Math.floor(Math.random() * category.words.length)];

        setChain([{
            id: uuidv4(),
            word: startWord,
            speaker: 'bot',
            timestamp: Date.now()
        }]);
        setScore(0);
        setLives(MAX_LIVES);
        setIsGameOver(false);
        setMessage("Your turn! Use the last letter.");
        setIsBotTurn(false);
    }, [category]);

    useEffect(() => {
        initGame();
    }, [initGame]);

    // Derived: specific required letter
    const lastWord = chain[chain.length - 1]?.word;
    const requiredLetter = lastWord ? lastWord.slice(-1).toUpperCase() : "";

    // Bot Logic
    useEffect(() => {
        if (!isBotTurn || isGameOver || !category) return;

        const timer = setTimeout(() => {
            // Find a valid word in category that hasn't been used and starts with requiredLetter
            const usedWords = new Set(chain.map(c => c.word));
            const validWords = category.words.filter(w =>
                w.startsWith(requiredLetter) && !usedWords.has(w)
            );

            if (validWords.length > 0) {
                const pick = validWords[Math.floor(Math.random() * validWords.length)];
                setChain(prev => [...prev, {
                    id: uuidv4(),
                    word: pick,
                    speaker: 'bot',
                    timestamp: Date.now()
                }]);
                setIsBotTurn(false);
                setMessage("Your turn!");
            } else {
                // Bot stuck!
                setIsGameOver(true);
                setMessage("I'm stuck! You win!");
                setScore(s => s + 50); // Bonus for beating bot
            }
        }, 1500); // 1.5s delay for "thinking"

        return () => clearTimeout(timer);
    }, [isBotTurn, isGameOver, category, chain, requiredLetter]);


    const submitWord = (word: string) => {
        if (isGameOver || isBotTurn) return;

        const normalized = word.toUpperCase().trim();

        // VAL 1: Length
        if (normalized.length < 2) {
            setMessage("Too short!");
            return;
        }

        // VAL 2: Starts with correct letter
        if (!normalized.startsWith(requiredLetter)) {
            setMessage(`Must start with '${requiredLetter}'!`);
            handleMistake();
            return;
        }

        // VAL 3: Not used before
        if (chain.some(c => c.word === normalized)) {
            setMessage("Word already used!");
            handleMistake();
            return;
        }

        // VAL 4: Is in category checks? (Sandbox mode: accept anything)
        // Ideally we check if it is a real word, but similar to Scrabble, let's assume valid English for now
        // OR check strict category if 'Animals' etc.
        if (category && category.id !== 'general') {
            // For strict categories, check inclusion? 
            // Or allow user to add new words if reasonable?
            // Let's stick to strict if category provided to keep game sane.
            if (!category.words.includes(normalized)) {
                // But our lists are small. Let's assume 'general' validation loosely or accept all.
                // Let's just create a "Warning" but accept it for better UX in prototype,
                // OR enforce strictly if we had a big dictionary.
                // Given the specific categories (Animals), strict is annoying if list is incomplete.
                // Let's just WARN but ACCEPT for prototype fun, or maybe strict for Animals?
                // Let's go with: Only enforce start letter and uniqueness for now.
            }
        }

        // Success
        setChain(prev => [...prev, {
            id: uuidv4(),
            word: normalized,
            speaker: 'user',
            timestamp: Date.now()
        }]);
        setScore(s => s + normalized.length);
        setIsBotTurn(true);
        setMessage("Thinking...");
    };

    const handleMistake = () => {
        setLives(prev => {
            const newLives = prev - 1;
            if (newLives <= 0) {
                setIsGameOver(true);
                setMessage("Game Over!");
            }
            return newLives;
        });
    };

    return {
        chain,
        score,
        lives,
        isGameOver,
        message,
        requiredLetter,
        isBotTurn,
        submitWord,
        resetGame: initGame
    };
};
