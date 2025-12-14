import { FixDeck } from "@/types/sentencefix";

export const sampleFixDecks: FixDeck[] = [
    {
        id: "subject-verb",
        name: "Subject-Verb Agreement",
        description: "Match subjects with the right verb forms",
        questions: [
            {
                id: "sv1",
                incorrectSentence: "The group of students are waiting.",
                correctSentence: "The group of students is waiting.",
                options: [
                    "The group of students are waiting.",
                    "The group of students is waiting.",
                    "The group of students be waiting.",
                ],
                explanation: "The subject 'group' is singular, so it takes the singular verb 'is'.",
            },
            {
                id: "sv2",
                incorrectSentence: "She don't like broccoli.",
                correctSentence: "She doesn't like broccoli.",
                options: [
                    "She don't like broccoli.",
                    "She doesn't like broccoli.",
                    "She no like broccoli.",
                ],
                explanation: "Third-person singular (She) uses 'doesn't', not 'don't'.",
            },
            {
                id: "sv3",
                incorrectSentence: "There is many people here.",
                correctSentence: "There are many people here.",
                options: [
                    "There is many people here.",
                    "There are many people here.",
                    "There was many people here.",
                ],
                explanation: "'People' is plural, so we use 'are', not 'is'.",
            },
        ],
    },
    {
        id: "common-mistakes",
        name: "Common Mistakes",
        description: "Frequently confused words and structures",
        questions: [
            {
                id: "cm1",
                incorrectSentence: "I have visited London last year.",
                correctSentence: "I visited London last year.",
                options: [
                    "I have visited London last year.",
                    "I visited London last year.",
                    "I was visited London last year.",
                ],
                explanation: "We use Past Simple (visited) with specific past time expressions like 'last year', not Present Perfect.",
            },
            {
                id: "cm2",
                incorrectSentence: "She is married with a doctor.",
                correctSentence: "She is married to a doctor.",
                options: [
                    "She is married with a doctor.",
                    "She is married to a doctor.",
                    "She is married by a doctor.",
                ],
                explanation: "The correct preposition phrase is 'married to'.",
            },
            {
                id: "cm3",
                incorrectSentence: "I am agree with you.",
                correctSentence: "I agree with you.",
                options: [
                    "I am agree with you.",
                    "I agree with you.",
                    "I agreeing with you.",
                ],
                explanation: "'Agree' is a verb. We say 'I agree', not 'I am agree'.",
            },
        ],
    },
];
