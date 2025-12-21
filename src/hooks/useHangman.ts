import { useState, useCallback, useEffect } from 'react';
import { HangmanDeck, GameStatus } from '@/types/hangman';

const MAX_LIVES = 6;

export const useHangman = (deck: HangmanDeck | null) => {
    const [currentWord, setCurrentWord] = useState('');
    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
    const [status, setStatus] = useState<GameStatus>('playing');
    // lives usually counts down from MAX to 0? Or mistakes up from 0 to MAX?
    // Let's do mistakes count (0 to 6)
    const [mistakes, setMistakes] = useState(0);

    const initGame = useCallback(() => {
        if (!deck) return;
        const randomWord = deck.words[Math.floor(Math.random() * deck.words.length)];
        setCurrentWord(randomWord);
        setGuessedLetters([]);
        setMistakes(0);
        setStatus('playing');
    }, [deck]);

    // Initial start
    useEffect(() => {
        initGame();
    }, [initGame]);

    const guessLetter = useCallback((letter: string) => {
        if (status !== 'playing' || !currentWord) return;

        const normalized = letter.toUpperCase();
        if (guessedLetters.includes(normalized)) return;

        setGuessedLetters(prev => {
            const newGuessed = [...prev, normalized];

            // Check if letter is in word
            if (!currentWord.includes(normalized)) {
                setMistakes(prevMistakes => {
                    const newMistakes = prevMistakes + 1;
                    if (newMistakes >= MAX_LIVES) {
                        setStatus('lost');
                    }
                    return newMistakes;
                });
            } else {
                // Check win condition
                const allLettersFound = currentWord.split('').every(l => newGuessed.includes(l));
                if (allLettersFound) {
                    setStatus('won');
                }
            }
            return newGuessed;
        });

    }, [currentWord, guessedLetters, status]);

    return {
        currentWord,
        guessedLetters,
        mistakes,
        maxLives: MAX_LIVES,
        status,
        guessLetter,
        resetGame: initGame
    };
};
