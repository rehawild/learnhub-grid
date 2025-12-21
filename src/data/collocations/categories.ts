import { CollocationCategory } from "@/types/collocations";

export const collocationCategories: CollocationCategory[] = [
    {
        id: "business-corp",
        title: "Business & Corporate",
        description: "Sound like a professional with these industry-standard word pairings.",
        icon: "💼",
        collocations: [
            {
                id: "c1",
                phrase: "Make a decision",
                headword: "decision",
                collocate: "Make",
                type: "Verb + Noun",
                meaning: "To reach a conclusion or choice after consideration.",
                example: "We need to make a decision about the new project by Friday.",
                distractors: ["Do", "Take", "Get"],
                usageNote: "You 'make' decisions, you don't 'do' them."
            },
            {
                id: "c2",
                phrase: "Slight advantage",
                headword: "advantage",
                collocate: "Slight",
                type: "Adjective + Noun",
                meaning: "A small or minor benefit or upper hand.",
                example: "The home team has a slight advantage in the final match.",
                distractors: ["Small", "Tiny", "Little"],
                usageNote: "'Slight' is the natural partner for 'advantage' in formal contexts."
            },
            {
                id: "c3",
                phrase: "Conduct research",
                headword: "research",
                collocate: "Conduct",
                type: "Verb + Noun",
                meaning: "To carry out a systematic investigation.",
                example: "The university is conducting research into renewable energy.",
                distractors: ["Do", "Make", "Perform"],
                usageNote: "'Conduct' is more formal than 'do' when talking about research."
            }
        ]
    },
    {
        id: "academic-study",
        title: "Academic & Analytical",
        description: "Elevate your writing and speech with precise academic partnerships.",
        icon: "🎓",
        collocations: [
            {
                id: "c4",
                phrase: "Critically analyze",
                headword: "analyze",
                collocate: "Critically",
                type: "Adverb + Verb",
                meaning: "To examine something carefully and objectively.",
                example: "Students are expected to critically analyze the historical documents.",
                distractors: ["Strictly", "Heavily", "Deeply"],
                usageNote: "Essential for essay writing and higher-level thinking."
            },
            {
                id: "c5",
                phrase: "Vast majority",
                headword: "majority",
                collocate: "Vast",
                type: "Adjective + Noun",
                meaning: "A very large part or number of something.",
                example: "The vast majority of participants agreed with the proposal.",
                distractors: ["Big", "Huge", "Large"]
            },
            {
                id: "c6",
                phrase: "Draw a conclusion",
                headword: "conclusion",
                collocate: "Draw",
                type: "Verb + Noun",
                meaning: "To form an opinion based on information or evidence.",
                example: "It's difficult to draw a conclusion from such limited data.",
                distractors: ["Make", "Get", "Do"]
            }
        ]
    },
    {
        id: "social-daily",
        title: "Daily Life & Social",
        description: "Natural everyday combinations for fluent, effortless conversation.",
        icon: "🤝",
        collocations: [
            {
                id: "c7",
                phrase: "Burst into tears",
                headword: "tears",
                collocate: "Burst into",
                type: "Verb + Noun",
                meaning: "To suddenly start crying.",
                example: "She burst into tears when she heard the good news.",
                distractors: ["Fall into", "Start into", "Break into"]
            },
            {
                id: "c8",
                phrase: "Heavily rain",
                headword: "rain",
                collocate: "Heavily",
                type: "Adverb + Verb",
                meaning: "To rain a lot or with great force.",
                example: "It was raining heavily so we stayed indoors.",
                distractors: ["Strongly", "Quickly", "Bigly"]
            },
            {
                id: "c9",
                phrase: "Keep a secret",
                headword: "secret",
                collocate: "Keep",
                type: "Verb + Noun",
                meaning: "To not tell anyone else what you have been told.",
                example: "Can you keep a secret? I'm getting promoted!",
                distractors: ["Stay", "Save", "Hold"]
            }
        ]
    }
];
