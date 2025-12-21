import { PhrasalVerbCategory } from "@/types/phrasalverbs";

export const phrasalVerbCategories: PhrasalVerbCategory[] = [
    {
        id: "work-office",
        title: "Office & Operations",
        description: "Master the verbs that keep the workplace running smoothly.",
        icon: "🏢",
        verbs: [
            {
                id: "pv1",
                phrase: "Carry out",
                verb: "Carry",
                particle: "out",
                meaning: "To complete a task, plan, or order.",
                example: "The team will carry out the research over the next few weeks.",
                distractors: ["off", "through", "on"],
                isSeparable: true,
                usageTip: "Separated: 'Carry the task out'."
            },
            {
                id: "pv2",
                phrase: "Look into",
                verb: "Look",
                particle: "into",
                meaning: "To investigate or examine something.",
                example: "We need to look into the cause of the system failure.",
                distractors: ["at", "over", "up"],
                isSeparable: false,
                usageTip: "Always together: You cannot 'look it into'."
            },
            {
                id: "pv3",
                phrase: "Draw up",
                verb: "Draw",
                particle: "up",
                meaning: "To prepare a formal document or contract.",
                example: "The lawyers are drawing up the final agreement now.",
                distractors: ["out", "off", "on"],
                isSeparable: true,
                usageTip: "Separated: 'Draw the contract up'."
            }
        ]
    },
    {
        id: "social-daily",
        title: "Social & Interaction",
        description: "Essential verbs for handling conversations and relationships.",
        icon: "☕",
        verbs: [
            {
                id: "pv4",
                phrase: "Catch up",
                verb: "Catch",
                particle: "up",
                meaning: "To talk to someone you haven't seen in a while to find out what they have been doing.",
                example: "Let's grab a coffee and catch up on everything.",
                distractors: ["on", "out", "off"],
                isSeparable: false
            },
            {
                id: "pv5",
                phrase: "Back down",
                verb: "Back",
                particle: "down",
                meaning: "To stop defending your opinion in a debate or argument.",
                example: "Neither side was willing to back down during the negotiations.",
                distractors: ["off", "away", "out"],
                isSeparable: false
            },
            {
                id: "pv6",
                phrase: "Bring up",
                verb: "Bring",
                particle: "up",
                meaning: "To mention a topic in a conversation.",
                example: "I didn't want to bring up the budget problem during the meeting.",
                distractors: ["on", "out", "off"],
                isSeparable: true,
                usageTip: "Separated: 'Bring the subject up'."
            }
        ]
    },
    {
        id: "travel-movement",
        title: "Travel & Motion",
        description: "Navigate your journey with these movement-based expressions.",
        icon: "✈️",
        verbs: [
            {
                id: "pv7",
                phrase: "Set off",
                verb: "Set",
                particle: "off",
                meaning: "To start a journey.",
                example: "We need to set off early to avoid the morning traffic.",
                distractors: ["out", "on", "up"],
                isSeparable: false
            },
            {
                id: "pv8",
                phrase: "Drop off",
                verb: "Drop",
                particle: "off",
                meaning: "To take someone or something to a place and leave them there.",
                example: "Can you drop me off at the train station?",
                distractors: ["out", "away", "in"],
                isSeparable: true,
                usageTip: "Commonly separated: 'Drop them off'."
            },
            {
                id: "pv9",
                phrase: "Check in",
                verb: "Check",
                particle: "in",
                meaning: "To register at a hotel or airport.",
                example: "You must check in at least two hours before your flight.",
                distractors: ["on", "out", "at"],
                isSeparable: false
            }
        ]
    }
];
