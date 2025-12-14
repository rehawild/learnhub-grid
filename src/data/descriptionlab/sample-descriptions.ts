import { DescriptionExercise, SensoryInput } from "@/types/descriptionlab";

export const sensoryInputs: SensoryInput[] = [
    { id: 'sight', label: 'Sight', icon: '👀', placeholder: 'Colors, shapes, light...', prompt: 'What do you see?' },
    { id: 'sound', label: 'Sound', icon: '👂', placeholder: 'Loud, quiet, rhythmic...', prompt: 'What do you hear?' },
    { id: 'smell', label: 'Smell', icon: '👃', placeholder: 'Sweet, pungent, fresh...', prompt: 'Are there any scents?' },
    { id: 'touch', label: 'Touch', icon: '✋', placeholder: 'Rough, soft, cold...', prompt: 'What textures are there?' },
    { id: 'taste', label: 'Taste', icon: '👅', placeholder: 'Salty, sweet, bitter...', prompt: 'Is there a taste involved?' },
    { id: 'emotion', label: 'Emotion', icon: '❤️', placeholder: 'Happy, scared, calm...', prompt: 'How does it make you feel?' },
];

export const descriptionExercises: DescriptionExercise[] = [
    {
        id: "abandoned_house",
        title: "The Abandoned House",
        description: "Describe an old, empty house at the end of the street.",
        imagePrompt: "🏚️",
        category: "Place",
        keyElements: ["Broken windows", "Creaking floorboards", "Dust"]
    },
    {
        id: "bustling_market",
        title: "Morning Market",
        description: "A busy street market early in the morning.",
        imagePrompt: "🏪",
        category: "Place",
        keyElements: ["Fresh fruit", "Shouting vendors", "Crowded aisles"]
    },
    {
        id: "stormy_night",
        title: "Thunderstorm",
        description: "A sudden heavy storm breaks out.",
        imagePrompt: "⛈️",
        category: "Event",
        keyElements: ["Lightning flash", "Thunder roll", "Rain smell"]
    },
    {
        id: "mysterious_relic",
        title: "Ancient Artifact",
        description: "A strange object found in a cave.",
        imagePrompt: "🏺",
        category: "Object",
        keyElements: ["Glowing symbols", "Cold metal", "Humming sound"]
    },
    {
        id: "forest_guardian",
        title: "Forest Guardian",
        description: "A mythical creature protecting the woods.",
        imagePrompt: "🦌",
        category: "Character",
        keyElements: ["Mossy fur", "Gentle eyes", "Silent steps"]
    }
];
