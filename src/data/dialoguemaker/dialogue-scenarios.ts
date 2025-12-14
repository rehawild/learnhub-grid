import { DialogueScenario } from "@/types/dialoguemaker";

export const dialogueScenarios: DialogueScenario[] = [
    {
        id: "ordering_food",
        title: "Ordering Food",
        description: "Practice ordering a meal at a restaurant.",
        icon: "Utensils",
        characters: [
            { id: "customer", name: "You (Customer)", color: "bg-blue-100 text-blue-800", avatar: "😋" },
            { id: "server", name: "Server", color: "bg-orange-100 text-orange-800", avatar: "💁" }
        ],
        starters: [
            "I'd like to see the menu, please.",
            "Do you have any vegetarian options?",
            "Can I get the check?"
        ]
    },
    {
        id: "making_plans",
        title: "Making Weekend Plans",
        description: "Coordinate a meetup with a friend.",
        icon: "Calendar",
        characters: [
            { id: "me", name: "You", color: "bg-green-100 text-green-800", avatar: "😎" },
            { id: "friend", name: "Friend", color: "bg-purple-100 text-purple-800", avatar: "🤩" }
        ],
        starters: [
            "Are you free this Saturday?",
            "Let's go to the movies!",
            "What time should we meet?"
        ]
    },
    {
        id: "asking_directions",
        title: "Asking Directions",
        description: "Find your way in a new city.",
        icon: "MapPin",
        characters: [
            { id: "tourist", name: "You (Tourist)", color: "bg-red-100 text-red-800", avatar: "📸" },
            { id: "local", name: "Local", color: "bg-indigo-100 text-indigo-800", avatar: "🚶" }
        ],
        starters: [
            "Excuse me, how do I get to the museum?",
            "Is it far from here?",
            "Which bus should I take?"
        ]
    }
];
