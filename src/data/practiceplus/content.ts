import { DailyChallenge } from "@/types/practiceplus";

export const WEEKLY_CHALLENGES: DailyChallenge[] = [
    {
        id: "day-1",
        title: "Monday Mix",
        description: "Start the week with a blend of grammar and vocabulary basics.",
        estimatedMinutes: 5,
        rewards: 50,
        items: [
            {
                id: "d1-q1",
                type: "grammar",
                question: "Which sentence is correct?",
                options: ["He doesn't have no money.", "He doesn't have any money.", "He don't have money."],
                correctAnswer: "He doesn't have any money.",
                explanation: "Double negatives are incorrect in standard English. 'Does not' takes the base form 'have'."
            },
            {
                id: "d1-q2",
                type: "vocabulary",
                question: "Select the synonym for 'Eager'.",
                options: ["Bored", "Keen", "Slow", "Angry"],
                correctAnswer: "Keen",
                explanation: "'Keen' implies showing enthusiasm or interest, similar to 'Eager'."
            },
            {
                id: "d1-q3",
                type: "reading",
                question: "What is the main idea?",
                context: "The koala is an arboreal herbivorous marsupial native to Australia. It is the only extant representative of the family Phascolarctidae and its closest living relatives are the wombats.",
                options: ["Koalas are bears.", "Koalas live in the water.", "Koalas are Australian marsupials.", "Koalas eat meat."],
                correctAnswer: "Koalas are Australian marsupials."
            }
        ]
    },
    {
        id: "day-2",
        title: "Tuesday Tenses",
        description: "Focus on past and future tense precision.",
        estimatedMinutes: 5,
        rewards: 50,
        items: [
            {
                id: "d2-q1",
                type: "grammar",
                question: "By this time next year, I ________ graduated.",
                options: ["will have", "have", "had", "will be"],
                correctAnswer: "will have",
                explanation: "Future Perfect Tense describes an action that will be completed before a specific time in the future."
            }
        ]
    },
    {
        id: "day-3",
        title: "Wednesday Words",
        description: "Expand your business vocabulary.",
        estimatedMinutes: 4,
        rewards: 50,
        items: [
            {
                id: "d3-q1",
                type: "vocabulary",
                question: "To ________ a meeting means to lead or supervise it.",
                options: ["chair", "table", "book", "minute"],
                correctAnswer: "chair",
                explanation: "To 'chair' a meeting is to preside over it."
            }
        ]
    }
];
