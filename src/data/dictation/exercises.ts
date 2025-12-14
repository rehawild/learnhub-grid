import { DictationExercise } from "@/types/dictation";

export const dictationExercises: DictationExercise[] = [
    {
        id: "dic_001",
        title: "Grocery List",
        description: "A simple list of items to buy at the store.",
        level: "Beginner",
        category: "Daily Life",
        audioSrc: "",
        transcript: "I need to buy apples, bananas, milk, and bread. Don't forget the eggs!"
    },
    {
        id: "dic_002",
        title: "Weather Report",
        description: "A short forecast for the weekend.",
        level: "Intermediate",
        category: "News",
        audioSrc: "",
        transcript: "This weekend will be sunny with a chance of rain in the late afternoon. Temperatures will reach twenty-five degrees."
    },
    {
        id: "dic_003",
        title: "Business Voicemail",
        description: "Leaving a message for a colleague.",
        level: "Advanced",
        category: "Business",
        audioSrc: "",
        transcript: "Hi Sarah, this is John. Could you please send me the quarterly report by Friday? We need to review the numbers before the meeting."
    },
    {
        id: "dic_004",
        title: "Directions to the Station",
        description: "Asking for and receiving directions.",
        level: "Intermediate",
        category: "Travel",
        audioSrc: "",
        transcript: "Go straight down Main Street, turn left at the traffic light, and the station will be on your right, just past the library."
    },
    {
        id: "dic_005",
        title: "Tech Support",
        description: "Troubleshooting a computer issue.",
        level: "Advanced",
        category: "Technology",
        audioSrc: "",
        transcript: "Have you tried restarting the router? usually, a simple reboot fixes connection dropouts. If that doesn't work, check the cables."
    }
];
