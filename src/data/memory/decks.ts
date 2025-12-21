import { MemoryDeck } from "@/types/memory";

export const memoryDecks: MemoryDeck[] = [
    {
        id: "animals",
        name: "Animals",
        description: "Match animals with their names.",
        pairs: [
            { text: "Dog", icon: "🐕" },
            { text: "Cat", icon: "🐈" },
            { text: "Monkey", icon: "🐒" },
            { text: "Lion", icon: "🦁" },
            { text: "Tiger", icon: "🐅" },
            { text: "Horse", icon: "🐎" },
            { text: "Cow", icon: "🐄" },
            { text: "Pig", icon: "🐖" }
        ]
    },
    {
        id: "fruits",
        name: "Fruits",
        description: "Match fruits with their names.",
        pairs: [
            { text: "Apple", icon: "🍎" },
            { text: "Banana", icon: "🍌" },
            { text: "Grapes", icon: "🍇" },
            { text: "Orange", icon: "🍊" },
            { text: "Lemon", icon: "🍋" },
            { text: "Strawberry", icon: "🍓" },
            { text: "Watermelon", icon: "🍉" },
            { text: "Cherry", icon: "🍒" }
        ]
    },
    {
        id: "weather",
        name: "Weather",
        description: "Weather phenomena.",
        pairs: [
            { text: "Sun", icon: "☀️" },
            { text: "Rain", icon: "🌧️" },
            { text: "Cloud", icon: "☁️" },
            { text: "Snow", icon: "❄️" },
            { text: "Thunder", icon: "⚡" },
            { text: "Rainbow", icon: "🌈" },
            { text: "Wind", icon: "💨" },
            { text: "Star", icon: "⭐" }
        ]
    }
];
