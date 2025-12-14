import { FillGapExercise } from "@/types/fillthegap";

export const sampleExercises: FillGapExercise[] = [
    {
        id: "ex_business_1",
        title: "The Project Meeting",
        description: "Complete the conversation about a project deadline.",
        level: "Intermediate",
        category: "Business",
        dialogue: [
            {
                id: "d1",
                speaker: "Sarah",
                avatar: "👩‍💼",
                segments: [
                    "Hi John, do you have a ",
                    { id: "g1", correctWord: "minute", options: ["moment", "minute", "time", "clock"] },
                    " to discuss the quarterly report?"
                ]
            },
            {
                id: "d2",
                speaker: "John",
                avatar: "👨‍💼",
                segments: [
                    "Sure, Sarah. I actually just ",
                    { id: "g2", correctWord: "finished", options: ["ended", "finished", "closed", "stopped"] },
                    " reviewing the data."
                ]
            },
            {
                id: "d3",
                speaker: "Sarah",
                avatar: "👩‍💼",
                segments: [
                    "Great. Are we on ",
                    { id: "g3", correctWord: "track", options: ["way", "track", "road", "line"] },
                    " to meet the deadline?"
                ]
            }
        ]
    },
    {
        id: "ex_coffee_1",
        title: "At the Coffee Shop",
        description: "Ordering a drink and a snack.",
        level: "Beginner",
        category: "Casual",
        dialogue: [
            {
                id: "d1",
                speaker: "Barista",
                avatar: "☕",
                segments: [
                    "Hi! What can I ",
                    { id: "g1", correctWord: "get", options: ["give", "get", "take", "do"] },
                    " for you today?"
                ]
            },
            {
                id: "d2",
                speaker: "Customer",
                avatar: "🧑",
                segments: [
                    "I'd ",
                    { id: "g2", correctWord: "like", options: ["want", "love", "like", "need"] },
                    " a medium latte, please."
                ]
            },
            {
                id: "d3",
                speaker: "Barista",
                avatar: "☕",
                segments: [
                    "Would you like anything ",
                    { id: "g3", correctWord: "else", options: ["more", "extra", "else", "other"] },
                    "?"
                ]
            }
        ]
    },
    {
        id: "ex_travel_1",
        title: "Hotel Check-in",
        description: "Arriving at a hotel.",
        level: "Intermediate",
        category: "Travel",
        dialogue: [
            {
                id: "d1",
                speaker: "Receptionist",
                avatar: "🏨",
                segments: [
                    "Good evening, welcome to the Grand Hotel. How can I ",
                    { id: "g1", correctWord: "help", options: ["assist", "help", "serve", "aid"] },
                    " you?"
                ]
            },
            {
                id: "d2",
                speaker: "Guest",
                avatar: "🧳",
                segments: [
                    "Hello, I have a ",
                    { id: "g2", correctWord: "reservation", options: ["booking", "reservation", "place", "room"] },
                    " under the name Smith."
                ]
            }
        ]
    }
];
