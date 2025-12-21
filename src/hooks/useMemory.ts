import { useState, useEffect, useCallback } from 'react';
import { MemoryCard, MemoryDeck, MemoryState } from '@/types/memory';
import { v4 as uuidv4 } from 'uuid';

export const useMemory = (deck: MemoryDeck | null) => {
    const [state, setState] = useState<MemoryState>({
        cards: [],
        moves: 0,
        matches: 0,
        isComplete: false,
        isLocked: false
    });
    const [flippedCards, setFlippedCards] = useState<string[]>([]); // holds IDs

    const initGame = useCallback(() => {
        if (!deck) return;

        // Generate cards
        let cards: MemoryCard[] = [];
        deck.pairs.forEach((pair, index) => {
            const pairId = `pair-${index}`;
            // Card 1: Text
            cards.push({
                id: uuidv4(),
                pairId,
                content: pair.text,
                type: 'text',
                isFlipped: false,
                isMatched: false
            });
            // Card 2: Icon
            cards.push({
                id: uuidv4(),
                pairId,
                content: pair.icon,
                type: 'icon',
                isFlipped: false,
                isMatched: false
            });
        });

        // Shuffle
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }

        setState({
            cards,
            moves: 0,
            matches: 0,
            isComplete: false,
            isLocked: false
        });
        setFlippedCards([]);
    }, [deck]);

    useEffect(() => {
        initGame();
    }, [initGame]);

    const handleCardClick = (id: string) => {
        if (state.isLocked) return;

        const cardIndex = state.cards.findIndex(c => c.id === id);
        const card = state.cards[cardIndex];

        // Ignore if already flipped or matched
        if (card.isFlipped || card.isMatched) return;

        // Flip card
        const newCards = [...state.cards];
        newCards[cardIndex].isFlipped = true;
        setState(prev => ({ ...prev, cards: newCards }));

        const newFlipped = [...flippedCards, id];
        setFlippedCards(newFlipped);

        if (newFlipped.length === 2) {
            // Check Match
            setState(prev => ({ ...prev, isLocked: true, moves: prev.moves + 1 }));

            const [id1, id2] = newFlipped;
            const card1 = newCards.find(c => c.id === id1)!;
            const card2 = newCards.find(c => c.id === id2)!;

            if (card1.pairId === card2.pairId) {
                // Match!
                setTimeout(() => {
                    const matchedCards = newCards.map(c =>
                        (c.id === id1 || c.id === id2) ? { ...c, isMatched: true } : c
                    );

                    const newMatches = state.matches + 1;
                    const isComplete = newMatches === deck!.pairs.length;

                    setState(prev => ({
                        ...prev,
                        cards: matchedCards,
                        matches: newMatches,
                        isComplete,
                        isLocked: false
                    }));
                    setFlippedCards([]);
                }, 500);
            } else {
                // No Match
                setTimeout(() => {
                    const resetCards = newCards.map(c =>
                        (c.id === id1 || c.id === id2) ? { ...c, isFlipped: false } : c
                    );
                    setState(prev => ({
                        ...prev,
                        cards: resetCards,
                        isLocked: false
                    }));
                    setFlippedCards([]);
                }, 1000);
            }
        }
    };

    return {
        ...state,
        handleCardClick,
        resetGame: initGame
    };
};
