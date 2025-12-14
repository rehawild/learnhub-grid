import { POSDeck } from "@/types/partsofspeech";

export const samplePOSDecks: POSDeck[] = [
    {
        id: "basic-nouns-verbs",
        name: "Nouns & Verbs",
        description: "Identify the people, places, things, and actions",
        questions: [
            {
                id: "nv1",
                sentence: "The *cat* sat on the mat.",
                targetWord: "cat",
                correctAnswer: "noun",
                options: ["noun", "verb", "adjective", "adverb"],
                explanation: "A cat is a thing (animal), so it is a noun.",
            },
            {
                id: "nv2",
                sentence: "She *runs* very fast.",
                targetWord: "runs",
                correctAnswer: "verb",
                options: ["noun", "verb", "adjective", "adverb"],
                explanation: "Runs is an action, so it is a verb.",
            },
            {
                id: "nv3",
                sentence: "London is a big *city*.",
                targetWord: "city",
                correctAnswer: "noun",
                options: ["noun", "verb", "adjective", "adverb"],
                explanation: "City is a text for a place, so it is a noun.",
            },
        ],
    },
    {
        id: "adjectives-adverbs",
        name: "Adjectives & Adverbs",
        description: "Describing words for nouns and verbs",
        questions: [
            {
                id: "aa1",
                sentence: "He has a *red* car.",
                targetWord: "red",
                correctAnswer: "adjective",
                options: ["noun", "verb", "adjective", "adverb"],
                explanation: "Red describes the car (noun), so it is an adjective.",
            },
            {
                id: "aa2",
                sentence: "She sings *beautifully*.",
                targetWord: "beautifully",
                correctAnswer: "adverb",
                options: ["noun", "verb", "adjective", "adverb"],
                explanation: "Beautifully describes how she sings (verb), so it is an adverb.",
            },
            {
                id: "aa3",
                sentence: "The *happy* dog wagged its tail.",
                targetWord: "happy",
                correctAnswer: "adjective",
                options: ["noun", "verb", "adjective", "adverb"],
                explanation: "Happy describes the dog (noun), so it is an adjective.",
            },
        ],
    },
    {
        id: "challenge-mix",
        name: "Grammar Mix",
        description: "Pronouns, Prepositions, and Conjunctions",
        questions: [
            {
                id: "cm1",
                sentence: "*She* went to the store.",
                targetWord: "She",
                correctAnswer: "pronoun",
                options: ["noun", "pronoun", "preposition", "conjunction"],
                explanation: "She replaces a specialized name, so it is a pronoun.",
            },
            {
                id: "cm2",
                sentence: "The book is *on* the table.",
                targetWord: "on",
                correctAnswer: "preposition",
                options: ["verb", "adjective", "preposition", "conjunction"],
                explanation: "On shows the relationship/position, so it is a preposition.",
            },
            {
                id: "cm3",
                sentence: "I want pizza *and* pasta.",
                targetWord: "and",
                correctAnswer: "conjunction",
                options: ["verb", "adverb", "preposition", "conjunction"],
                explanation: "And connects two ideas, so it is a conjunction.",
            },
        ],
    },
];
