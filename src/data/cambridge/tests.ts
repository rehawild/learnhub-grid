import { CambridgeTest } from "@/types/cambridge";

export const cambridgeTests: CambridgeTest[] = [
    {
        id: "cam-1",
        title: "C1 Advanced: Use of English",
        level: "C1 Advanced",
        parts: [
            {
                id: "p1",
                type: "multiple_choice_cloze",
                title: "Part 1: Multiple Choice Cloze",
                description: "Read the text and decide which answer (A, B, C or D) best fits each gap.",
                text: "The internet has **(1)** changed the way we communicate. In the past, letters often took days or even weeks to arrive. Now, emails are sent and received **(2)**. However, this speed can also be a disadvantage. We often expect an immediate reply and can become **(3)** if we don't get one.",
                items: [
                    {
                        id: "1",
                        options: { A: "dramatically", B: "physically", C: "socially", D: "historically" },
                        correctAnswer: "A"
                    },
                    {
                        id: "2",
                        options: { A: "momentarily", B: "instantly", C: "initially", D: "continuously" },
                        correctAnswer: "B"
                    },
                    {
                        id: "3",
                        options: { A: "patient", B: "anxious", C: "relaxed", D: "bored" },
                        correctAnswer: "B"
                    }
                ]
            },
            {
                id: "p3",
                type: "word_formation",
                title: "Part 3: Word Formation",
                description: "Use the word given in capitals at the end of some of the lines to form a word that fits in the gap in the same line.",
                items: [
                    {
                        id: "4",
                        sentence: "The ________ of the new system was challenging.",
                        rootWord: "INSTALL",
                        correctAnswer: "INSTALLATION"
                    },
                    {
                        id: "5",
                        sentence: "She looked at him in ________.",
                        rootWord: "AMAZE",
                        correctAnswer: "AMAZEMENT"
                    },
                    {
                        id: "6",
                        sentence: "It is ________ extremely cold in January.",
                        rootWord: "USUAL",
                        correctAnswer: "USUALLY"
                    }
                ]
            }
        ]
    }
];
