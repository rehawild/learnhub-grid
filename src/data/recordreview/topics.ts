import { ReviewTopic } from "@/types/recordreview";

export const reviewTopics: ReviewTopic[] = [
    {
        id: "t1",
        title: "Daily Journal",
        description: "Reflect on your day. What happened? How did you feel?",
        questions: [
            "What was the highlight of your day?",
            "Did you face any challenges?",
            "What are you looking forward to tomorrow?"
        ]
    },
    {
        id: "t2",
        title: "Opinion",
        description: "Express your opinion on a current event or general topic.",
        questions: [
            "What is your opinion on remote work?",
            "Do you think technology brings people closer or drives them apart?",
            "What is the best way to learn a new language?"
        ]
    },
    {
        id: "t3",
        title: "Storytelling",
        description: "Practice your narrative skills by telling a short story.",
        questions: [
            "Tell a story about a memorable vacation.",
            "Describe a funny thing that happened to you recently.",
            "Talk about a childhood memory."
        ]
    },
    {
        id: "t4",
        title: "Description",
        description: "Describe a person, place, or object in detail.",
        questions: [
            "Describe your best friend.",
            "Describe your dream house.",
            "Describe your favorite city."
        ]
    }
];
