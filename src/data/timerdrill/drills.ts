import { DrillCategory } from "@/types/timerdrill";

export const drillCategories: DrillCategory[] = [
    {
        id: "drill-1",
        title: "Synonym Sprint",
        description: "Select the synonym as fast as you can!",
        type: "synonym",
        defaultTimeSeconds: 60,
        items: [
            {
                id: "q1",
                question: "Happy",
                correctAnswers: ["Joyful"],
                options: ["Joyful", "Sad", "Angry", "Bored"]
            },
            {
                id: "q2",
                question: "Fast",
                correctAnswers: ["Quick"],
                options: ["Quick", "Slow", "Heavy", "Late"]
            },
            {
                id: "q3",
                question: "Difficult",
                correctAnswers: ["Hard"],
                options: ["Hard", "Easy", "Soft", "Simple"]
            },
            {
                id: "q4",
                question: "Start",
                correctAnswers: ["Begin"],
                options: ["Begin", "End", "Stop", "Finish"]
            },
            {
                id: "q5",
                question: "Big",
                correctAnswers: ["Large"],
                options: ["Large", "Small", "Tiny", "Short"]
            },
            {
                id: "q6",
                question: "Beautiful",
                correctAnswers: ["Pretty"],
                options: ["Pretty", "Ugly", "Bad", "Scary"]
            },
            {
                id: "q7",
                question: "Run",
                correctAnswers: ["Sprint"],
                options: ["Sprint", "Walk", "Sit", "Sleep"]
            },
            {
                id: "q8",
                question: "Quiet",
                correctAnswers: ["Silent"],
                options: ["Silent", "Loud", "Noisy", "Busy"]
            }
        ]
    },
    {
        id: "drill-2",
        title: "Preposition Dash",
        description: "Choose the correct preposition for the context.",
        type: "preposition",
        defaultTimeSeconds: 45,
        items: [
            {
                id: "p1",
                question: "Interested ___",
                correctAnswers: ["in"],
                options: ["in", "on", "at", "with"]
            },
            {
                id: "p2",
                question: "Good ___",
                correctAnswers: ["at"],
                options: ["at", "in", "on", "of"]
            },
            {
                id: "p3",
                question: "Afraid ___",
                correctAnswers: ["of"],
                options: ["of", "by", "with", "in"]
            },
            {
                id: "p4",
                question: "Listen ___",
                correctAnswers: ["to"],
                options: ["to", "at", "for", "with"]
            },
            {
                id: "p5",
                question: "Depend ___",
                correctAnswers: ["on"],
                options: ["on", "in", "at", "to"]
            }
        ]
    }
];
