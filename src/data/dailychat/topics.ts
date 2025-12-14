import { DailyTopic } from "@/types/dailychat";

// In a real app, this would be generated dynamically based on the date
export const DAILY_TOPICS: DailyTopic[] = [
    {
        id: "dt-1",
        date: new Date().toISOString().split('T')[0], // Today
        title: "Future Technology",
        question: "What piece of technology do you hope to see in the next 10 years?",
        starterParams: ["I hope to see...", "It would be amazing if...", "The biggest change might be..."]
    },
    {
        id: "dt-2",
        date: "2024-01-01",
        title: "New Year's Resolutions",
        question: "Do you believe in New Year's resolutions? Why or why not?",
        starterParams: ["I think resolutions are...", "Personally, I prefer to...", "Last year I..."]
    },
    {
        id: "dt-default",
        date: "default",
        title: "Random Thought",
        question: "If you could have dinner with any historical figure, who would it be?",
        starterParams: ["I would choose...", "It would be fascinating to meet...", "I have so many questions for..."]
    }
];

export const AI_RESPONSES = [
    "That's a really interesting perspective!",
    "I hadn't thought about it that way before.",
    "Could you tell me more about that?",
    "Why do you think that helps?",
    "That sounds wonderful.",
    "Do you think everyone would agree with that?",
    "What a unique answer!"
];
