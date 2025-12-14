import { NewsArticle } from "@/types/newsreader";

export const sampleNewsArticles: NewsArticle[] = [
    {
        id: "mars-colony",
        headline: "Humans on Mars by 2040?",
        summary: "Space agencies propose ambitious new timelines for the first human colony on the Red Planet.",
        source: "Space Today",
        date: "Dec 12, 2025",
        category: "Science",
        imageEmoji: "🚀",
        content: [
            "Major space agencies around the world have updated their projections for human missions to Mars. With rapid advancements in rocket technology and life support systems, the dream of becoming a multi-planetary species is closer than ever.",
            "Engineers are currently testing habitats that can withstand the harsh Martian environment. These structures must protect astronauts from high radiation levels and extreme cold. 3D printing technology is expected to play a crucial role in building these shelters using local Martian soil.",
            "However, significant challenges remain. The journey itself takes roughly seven months, and the psychological impact of isolation on the crew is a major concern. Scientists are conducting long-term isolation experiments on Earth to prepare for these difficulties."
        ],
        vocabulary: [
            { word: "Ambitious", definition: "Having or showing a strong desire and determination to succeed." },
            { word: "Habitat", definition: "The natural home or environment of an animal, plant, or other organism." },
            { word: "Isolation", definition: "The process or fact of isolating or being isolated." }
        ],
        questions: [
            {
                id: "q1",
                question: "What is the projected timeline mentioned in the headline?",
                options: ["2030", "2040", "2050", "2100"],
                correctAnswer: "2040"
            },
            {
                id: "q2",
                question: "What technology will help build shelters?",
                options: ["Robotic arms", "3D printing", "Laser cutting", "Manual labor"],
                correctAnswer: "3D printing"
            }
        ]
    },
    {
        id: "green-energy",
        headline: "Solar Power Breaks New Records",
        summary: "Renewable energy sources surpass coal in global energy production for the first time.",
        source: "Eco Watch",
        date: "Dec 10, 2025",
        category: "Environment",
        imageEmoji: "☀️",
        content: [
            "In a historic milestone for renewable energy, solar power generation has officially surpassed coal production worldwide. This shift marks a significant turning point in the global fight against climate change.",
            "Experts attribute this success to the plummeting costs of solar panels and improved battery storage technology. As governments invest more in green infrastructure, the reliance on fossil fuels continues to decline.",
            "\"This is just the beginning,\" says Dr. Sarah Chen, a leading climate scientist. \"We are witnessing the start of a clean energy revolution that will reshape our economies and protect our planet for future generations.\""
        ],
        vocabulary: [
            { word: "Renewable", definition: "Energy from a source that is not depleted when used, such as wind or solar power." },
            { word: "Milestone", definition: "An important discovery or event." },
            { word: "Infrastructure", definition: "The basic physical and organizational structures and facilities needed for the operation of a society." }
        ],
        questions: [
            {
                id: "q1",
                question: "What did solar power surpass?",
                options: ["Wind power", "Coal production", "Nuclear energy", "Oil reserves"],
                correctAnswer: "Coal production"
            },
            {
                id: "q2",
                question: "Who is Dr. Sarah Chen?",
                options: ["A politician", "A solar panel engineer", "A climate scientist", "An economist"],
                correctAnswer: "A climate scientist"
            }
        ]
    },
    {
        id: "robot-chef",
        headline: "Robot Chefs Take Over Kitchens",
        summary: "New AI-powered robots are cooking gourmet meals in restaurants across Tokyo.",
        source: "Tech Daily",
        date: "Dec 08, 2025",
        category: "Technology",
        imageEmoji: "🤖",
        content: [
            "Restaurants in Tokyo are introducing a new kind of chef to their kitchens: robots. These AI-powered machines can slice, dice, and sauté with precision that rivals human master chefs.",
            "The robots are designed to handle repetitive tasks, allowing human chefs to focus on creativity and menu design. Customers report that the food quality is consistent and delicious, though some miss the personal touch of a human cook.",
            "Critics worry about job losses in the culinary industry, but proponents argue that this technology will create new opportunities for food engineers and maintenance technicians."
        ],
        vocabulary: [
            { word: "Gourmet", definition: "Involving high-quality or exotic ingredients and skilled preparation." },
            { word: "Precision", definition: "The quality, condition, or fact of being exact and accurate." },
            { word: "Proponent", definition: "A person who advocates a theory, proposal, or project." }
        ],
        questions: [
            {
                id: "q1",
                question: "Where are these robot chefs working?",
                options: ["New York", "Paris", "Tokyo", "London"],
                correctAnswer: "Tokyo"
            },
            {
                id: "q2",
                question: "What is the main advantage of robot chefs mentioned?",
                options: ["They are cheaper", "Precision and consistency", "They are faster", "They create better menus"],
                correctAnswer: "Precision and consistency"
            }
        ]
    }
];
