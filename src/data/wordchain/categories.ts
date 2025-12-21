import { WordChainCategory } from "@/types/wordchain";

const ANIMALS = [
    "ANT", "BEAR", "CAT", "DOG", "ELEPHANT", "FROG", "GIRAFFE", "HORSE", "IGUANA", "JELLYFISH",
    "KANGAROO", "LION", "MONKEY", "NEWT", "OSTRICH", "PENGUIN", "QUAIL", "RABBIT", "SNAKE", "TIGER",
    "URCHIN", "VULTURE", "WHALE", "XERUS", "YAK", "ZEBRA", "ALLIGATOR", "BAT", "CAMEL", "DOLPHIN",
    "EAGLE", "FALCON", "GOAT", "HIPPO", "IMPALA", "JAGUAR", "KOALA", "LEMUR", "MOOSE", "NARWHAL",
    "OCTOPUS", "PANDA", "QUOKKA", "RACCOON", "SEAL", "TOUCAN", "UNICORN", "VOLE", "WALRUS", "XENOPS",
    "YELLOWJACKET", "ZEBU"
];

const FOOD = [
    "APPLE", "BANANA", "CARROT", "DONUT", "EGG", "FIG", "GRAPE", "HONEY", "ICE", "JAM",
    "KIWI", "LEMON", "MANGO", "NUT", "ORANGE", "PEACH", "QUINCE", "RICE", "SOUP", "TOAST",
    "UDON", "VANILLA", "WATER", "XIGUA", "YAM", "ZUCCHINI", "AVOCADO", "BREAD", "CAKE", "DATES",
    "ECLAIR", "FISH", "GRAVY", "HAM", "ICING", "JELLY", "KALE", "LIME", "MEAT", "NOODLE",
    "OLIVE", "PASTA", "QUICHE", "RADISH", "SALAD", "TACO", "UGLI", "VEAL", "WAFFLE", "YOGURT", "ZEST"
];

export const wordChainCategories: WordChainCategory[] = [
    {
        id: "animals",
        name: "Animals",
        description: "Chain animal names.",
        words: ANIMALS
    },
    {
        id: "food",
        name: "Food",
        description: "Delicious food items.",
        words: FOOD
    },
    {
        id: "general",
        name: "General",
        description: "Any valid English word (Sandbox).",
        words: [...ANIMALS, ...FOOD] // Simplified for now
    }
];
