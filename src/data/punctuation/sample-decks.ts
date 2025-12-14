import { PunctuationDeck } from "@/types/punctuation";

export const samplePunctuationDecks: PunctuationDeck[] = [
    {
        id: "end-marks",
        name: "End Marks",
        description: "Periods, question marks, and exclamation marks",
        questions: [
            {
                id: "em1",
                sentence: "Where are you going___",
                correctAnswer: "?",
                options: [".", "?", "!", ","],
                explanation: "This is a question, so it ends with a question mark.",
            },
            {
                id: "em2",
                sentence: "I love ice cream___",
                correctAnswer: "!",
                options: [".", "?", "!", ","],
                explanation: "Exclamation marks show strong emotion or excitement.",
            },
            {
                id: "em3",
                sentence: "The bus arrives at noon___",
                correctAnswer: ".",
                options: [".", "?", "!", ","],
                explanation: "This is a statement, so it ends with a period.",
            },
            {
                id: "em4",
                sentence: "Watch out___",
                correctAnswer: "!",
                options: [".", "?", "!", ","],
                explanation: "Used for warnings or urgent commands.",
            },
        ],
    },
    {
        id: "commas",
        name: "Comma Essentials",
        description: "Lists, introductions, and pauses",
        questions: [
            {
                id: "cm1",
                sentence: "I need milk, eggs___ and bread.",
                correctAnswer: ",",
                options: [".", ";", ",", ":"],
                explanation: "Use commas to separate items in a list (Oxford comma style).",
            },
            {
                id: "cm2",
                sentence: "However___ I don't agree.",
                correctAnswer: ",",
                options: [".", ";", ",", ":"],
                explanation: "Use a comma after introductory words like 'However'.",
            },
            {
                id: "cm3",
                sentence: "She is smart___ funny, and kind.",
                correctAnswer: ",",
                options: [".", ";", ",", "?"],
                explanation: "Commas separate adjectives in a list.",
            },
        ],
    },
    {
        id: "colons-semicolons",
        name: "Colons & Semicolons",
        description: "Connecting ideas correctly",
        questions: [
            {
                id: "cs1",
                sentence: "I have a big exam tomorrow___ I need to study.",
                correctAnswer: ";",
                options: [",", ";", ":", "."],
                explanation: "Use a semicolon to join two related independent clauses without a conjunction.",
            },
            {
                id: "cs2",
                sentence: "Please bring the following___ pen, paper, and ruler.",
                correctAnswer: ":",
                options: [",", ";", ":", "."],
                explanation: "Use a colon to introduce a list after a complete sentence.",
            },
        ],
    },
];
