import { CrosswordDeck } from "@/types/crossword";

export const crosswordDecks: CrosswordDeck[] = [
    {
        id: "mini-1",
        name: "Mini: Basics",
        description: "A quick 3x3 puzzle to warm up.",
        difficulty: "easy",
        width: 3,
        height: 3,
        clues: [
            {
                id: "1-across",
                number: 1,
                direction: "across",
                text: "Unlocks a door",
                answer: "KEY",
                row: 0,
                col: 0
            },
            {
                id: "1-down",
                number: 1,
                direction: "down",
                text: "First aid ___",
                answer: "KIT",
                row: 0,
                col: 0
            },
            {
                id: "2-down",
                number: 2,
                direction: "down",
                text: "Breakfast food",
                answer: "EGG",
                row: 0,
                col: 1
            },
            {
                id: "3-down",
                number: 3,
                direction: "down",
                text: "Opposite of no",
                answer: "YES",
                row: 0,
                col: 2
            }
        ]
    },
    {
        id: "colors-shapes",
        name: "Colors & Shapes",
        description: "Simple shapes and colors vocabulary.",
        difficulty: "easy",
        width: 6,
        height: 6,
        // Grid Plan:
        // C I R C L E (0,0) Across
        // O       I
        // N       N
        // E       E
        //
        // 1 Across: CIRCLE (0,0)
        // 1 Down: CONE (0,0)
        // 4 Down: LINE (0,5) -> L, I, N, E
        clues: [
            {
                id: "1-across",
                number: 1,
                direction: "across",
                text: "Round shape with no corners",
                answer: "CIRCLE",
                row: 0,
                col: 0
            },
            {
                id: "1-down",
                number: 1,
                direction: "down",
                text: "New York ice cream shape",
                answer: "CONE",
                row: 0,
                col: 0
            },

            {
                id: "2-down",
                number: 2,
                direction: "down",
                text: "Sour green fruit",
                answer: "LIME",
                row: 0,
                col: 4
            },
            {
                id: "3-across",
                number: 3,
                direction: "across",
                text: "A very short duration of time",
                answer: "MOMENT",
                row: 2,
                col: 0
                // M O M E N T
                // 2 Down (LIME) at col 4 intersects row 2 at M?
                // L(0), I(1), M(2). YES.
            }
        ]
    }
];
