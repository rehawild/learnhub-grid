import { PrepositionDeck } from "@/types/prepositionpro";

export const samplePrepositionDecks: PrepositionDeck[] = [
    {
        id: "time-preps",
        name: "Time Prepositions",
        description: "Master at, on, and in for time",
        questions: [
            {
                id: "q1",
                sentence: "I wake up ___ 7 o'clock.",
                options: ["at", "on", "in", "to"],
                correctAnswer: "at",
                explanation: "We use 'at' for precise times (at 7 o'clock, at noon).",
            },
            {
                id: "q2",
                sentence: "My birthday is ___ May.",
                options: ["at", "on", "in", "of"],
                correctAnswer: "in",
                explanation: "We use 'in' for months, years, and long periods.",
            },
            {
                id: "q3",
                sentence: "See you ___ Monday!",
                options: ["at", "on", "in", "by"],
                correctAnswer: "on",
                explanation: "We use 'on' for days of the week and dates.",
            },
            {
                id: "q4",
                sentence: "We usually ski ___ winter.",
                options: ["at", "on", "in", "during"],
                correctAnswer: "in",
                explanation: "We use 'in' for seasons (in winter, in summer).",
            },
            {
                id: "q5",
                sentence: "The party is ___ New Year's Eve.",
                options: ["at", "on", "in", "for"],
                correctAnswer: "on",
                explanation: "We use 'on' for specific days and holidays (on Christmas Day).",
            },
        ],
    },
    {
        id: "place-preps",
        name: "Place Prepositions",
        description: "Learn where things are (at, in, on)",
        questions: [
            {
                id: "p1",
                sentence: "She is waiting ___ the bus stop.",
                options: ["at", "on", "in", "to"],
                correctAnswer: "at",
                explanation: "We use 'at' for specific points or locations.",
            },
            {
                id: "p2",
                sentence: "The keys are ___ my pocket.",
                options: ["at", "on", "in", "into"],
                correctAnswer: "in",
                explanation: "We use 'in' when something is inside a container or enclosed space.",
            },
            {
                id: "p3",
                sentence: "There is a picture ___ the wall.",
                options: ["at", "on", "in", "above"],
                correctAnswer: "on",
                explanation: "We use 'on' for surfaces.",
            },
            {
                id: "p4",
                sentence: "I live ___ London.",
                options: ["at", "on", "in", "from"],
                correctAnswer: "in",
                explanation: "We use 'in' for cities, countries, and neighborhoods.",
            },
            {
                id: "p5",
                sentence: "Meet me ___ the corner of the street.",
                options: ["at", "on", "in", "by"],
                correctAnswer: "at",
                explanation: "We use 'at' for specific coordinates or points.",
            },
        ],
    },
    {
        id: "movement",
        name: "Movement",
        description: "To, into, towards, and more",
        questions: [
            {
                id: "m1",
                sentence: "He walked ___ the room.",
                options: ["in", "into", "at", "on"],
                correctAnswer: "into",
                explanation: "We use 'into' to show movement entering an enclosed space.",
            },
            {
                id: "m2",
                sentence: "We are driving ___ the airport.",
                options: ["to", "at", "in", "on"],
                correctAnswer: "to",
                explanation: "We use 'to' to show destination.",
            },
            {
                id: "m3",
                sentence: "The cat jumped ___ the table.",
                options: ["off", "out", "of", "away"],
                correctAnswer: "off",
                explanation: "We use 'off' to show movement away from a surface.",
            },
        ],
    },
];
