import { WordSearchDeck } from "@/types/wordsearch";

export const wordSearchDecks: WordSearchDeck[] = [
    {
        id: "colors",
        name: "Colors",
        description: "Find the hidden color names.",
        difficulty: "easy",
        topics: ["vocabulary", "basic"],
        words: ["RED", "BLUE", "GREEN", "YELLOW", "PURPLE", "ORANGE", "BLACK", "WHITE", "PINK", "BROWN"]
    },
    {
        id: "animals",
        name: "Animals",
        description: "Search for common animals.",
        difficulty: "easy",
        topics: ["vocabulary", "nature"],
        words: ["CAT", "DOG", "ELEPHANT", "TIGER", "LION", "ZEBRA", "GIRAFFE", "MONKEY", "RABBIT", "BEAR"]
    },
    {
        id: "countries",
        name: "Countries",
        description: "Find country names from around the world.",
        difficulty: "medium",
        topics: ["geography", "world"],
        words: ["FRANCE", "GERMANY", "JAPAN", "BRAZIL", "CANADA", "INDIA", "CHINA", "ITALY", "SPAIN", "EGYPT"]
    },
    {
        id: "fruit-veg",
        name: "Fruits & Vegetables",
        description: "Healthy food items to find.",
        difficulty: "medium",
        topics: ["food", "vocabulary"],
        words: ["APPLE", "BANANA", "CARROT", "POTATO", "TOMATO", "GRAPE", "ORANGE", "PEACH", "MANGO", "LEMON"]
    },
    {
        id: "science",
        name: "Scientific Terms",
        description: "Scientific concepts and terms.",
        difficulty: "hard",
        topics: ["science", "academic"],
        words: ["ATOM", "ENERGY", "FORCE", "GRAVITY", "MATTER", "CELL", "GENE", "PLANET", "STAR", "LIGHT"]
    },
    {
        id: "technology",
        name: "Technology",
        description: "Tech related words.",
        difficulty: "hard",
        topics: ["tech", "modern"],
        words: ["COMPUTER", "INTERNET", "SOFTWARE", "HARDWARE", "MOUSE", "KEYBOARD", "SCREEN", "DATA", "CODE", "WIFI"]
    }
];
