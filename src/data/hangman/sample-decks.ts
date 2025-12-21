import { HangmanDeck } from "@/types/hangman";

export const hangmanDecks: HangmanDeck[] = [
    {
        id: "animals",
        name: "Animals",
        description: "Guess the animal name.",
        difficulty: "easy",
        words: ["ELEPHANT", "GIRAFFE", "ZEBRA", "KANGAROO", "PENGUIN", "DOLPHIN", "OSTRICH", "CHEETAH", "GORILLA", "SQUIRREL"]
    },
    {
        id: "countries",
        name: "Countries",
        description: "Countries from around the world.",
        difficulty: "medium",
        words: ["BRAZIL", "CANADA", "JAPAN", "AUSTRALIA", "GERMANY", "EGYPT", "ARGENTINA", "THAILAND", "SWEDEN", "ZIMBABWE"]
    },
    {
        id: "fruits",
        name: "Fruits",
        description: "Delicious fruits.",
        difficulty: "easy",
        words: ["STRAWBERRY", "PINEAPPLE", "BLUEBERRY", "POMEGRANATE", "RASPBERRY", "WATERMELON", "APRICOT", "COCONUT", "MANGO", "PAPAYA"]
    },
    {
        id: "professions",
        name: "Professions",
        description: "Jobs and careers.",
        difficulty: "medium",
        words: ["ASTRONAUT", "ARCHITECT", "ENGINEER", "DENTIST", "SCIENTIST", "JOURNALIST", "MUSICIAN", "PLUMBER", "SURGEON", "LAWYER"]
    },
    {
        id: "space",
        name: "Space",
        description: "Astronomical terms.",
        difficulty: "hard",
        words: ["GALAXY", "NEBULA", "ASTEROID", "JUPITER", "SUPERNOVA", "CONSTELLATION", "TELESCOPE", "UNIVERSE", "METEOR", "SATELLITE"]
    }
];
