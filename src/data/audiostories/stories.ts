import { AudioStory } from "@/types/audiostories";

export const sampleStories: AudioStory[] = [
    {
        id: "story_001",
        title: "The Lost Key",
        author: "Emily Chen",
        level: "Beginner",
        category: "Mystery",
        coverImage: "🔑",
        audioSrc: "",
        content: "One sunny morning, Sara was walking to the park. She reached into her pocket to get her phone, but she felt something cold instead. It was a silver key. She didn't recognize it. Was it for a house? A car? A treasure chest? Sara looked around. Nobody was nearby. She decided to investigate. She walked to the old library on the corner. The door had a large silver lock. Her hand shook as she tried the key...",
        quiz: [
            { id: "q1", question: "What did Sara find in her pocket?", options: ["A phone", "A silver key", "A wallet", "A coin"], correctAnswer: 1 },
            { id: "q2", question: "Where did Sara go to investigate?", options: ["The police station", "The park", "The old library", "Her house"], correctAnswer: 2 }
        ]
    },
    {
        id: "story_002",
        title: "Journey to Mars",
        author: "Dr. A. Space",
        level: "Advanced",
        category: "Sci-Fi",
        coverImage: "🚀",
        audioSrc: "",
        content: "The engines hummed a low, steady vibration that Commander Lewis felt in his bones. After six months of travel, the Red Planet loomed large in the viewport. Dust storms swirled across the surface, painting the atmosphere in shades of rusty orange. 'Initiate landing sequence,' Lewis commanded. The crew scrambled to their stations. This wasn't just another mission; this was the first colony attempt. Failure was not an option.",
        quiz: [
            { id: "q1", question: "How long had the crew been traveling?", options: ["One year", "Six months", "Three weeks", "Two years"], correctAnswer: 1 },
            { id: "q2", question: "What was the mission goal?", options: ["To explore a crater", "To return home", "To establish a colony", "To find water"], correctAnswer: 2 }
        ]
    },
    {
        id: "story_003",
        title: "The Roman Feast",
        author: "Marcus Historicus",
        level: "Intermediate",
        category: "History",
        coverImage: "🍇",
        audioSrc: "",
        content: "In ancient Rome, dinner was not just a meal; it was an event. Wealthy citizens would recline on couches while servants brought course after course. There were exotic dishes like flamingo tongue and dormice. Guests would discuss politics, philosophy, and gossip late into the night. It was a display of power and wealth as much as it was about food.",
        quiz: [
            { id: "q1", question: "How did wealthy Romans eat dinner?", options: ["Standing up", "Sitting at tables", "Reclining on couches", "Walking around"], correctAnswer: 2 },
            { id: "q2", question: "What does the text say the dinner was a display of?", options: ["Friendship", "Culinary skill", "Power and wealth", "Religious devotion"], correctAnswer: 2 }
        ]
    }
];
