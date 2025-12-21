import { ProverbCategory } from "@/types/proverbs";

export const proverbCategories: ProverbCategory[] = [
    {
        id: "wisdom-life",
        title: "Wisdom & Life",
        description: "Universal truths about existence and the human experience.",
        icon: "🦉",
        proverbs: [
            {
                id: "p1",
                phrase: "Actions speak louder than words.",
                meaning: "What people do is more important than what they say.",
                origin: "Ancient roots, popular since the 17th century.",
                missingWord: "loudest",
                distractors: ["faster", "clearer", "stronger"]
            },
            {
                id: "p2",
                phrase: "All that glitters is not gold.",
                meaning: "Not everything that looks valuable or true is actually so.",
                origin: "Derived from Shakespeare's 'The Merchant of Venice'.",
                missingWord: "glitters",
                distractors: ["shines", "glows", "sparkles"]
            },
            {
                id: "p3",
                phrase: "Honesty is the best policy.",
                meaning: "It is always better to tell the truth than to lie.",
                origin: "First recorded in the 16th century.",
                missingWord: "policy",
                distractors: ["choice", "habit", "route"]
            }
        ]
    },
    {
        id: "effort-persistence",
        title: "Effort & Persistence",
        description: "Inspiration for staying the course even when things get tough.",
        icon: "💪",
        proverbs: [
            {
                id: "p4",
                phrase: "Where there's a will, there's a way.",
                meaning: "If you are determined to do something, you will find a way to do it.",
                origin: "A common English expression from the 17th century.",
                missingWord: "will",
                distractors: ["wish", "goal", "hope"]
            },
            {
                id: "p5",
                phrase: "A journey of a thousand miles begins with a single step.",
                meaning: "Even the longest and most difficult ventures have a starting point.",
                origin: "Attributed to the Chinese philosopher Lao Tzu.",
                missingWord: "begins",
                distractors: ["starts", "moves", "walks"]
            },
            {
                id: "p6",
                phrase: "Practice makes perfect.",
                meaning: "Doing something repeatedly is the only way to become good at it.",
                origin: "Dates back to the mid-16th century.",
                missingWord: "perfect",
                distractors: ["mastery", "better", "expert"]
            }
        ]
    },
    {
        id: "time-opportunity",
        title: "Time & Opportunity",
        description: "Advice on making the most of every moment and situation.",
        icon: "⏳",
        proverbs: [
            {
                id: "p7",
                phrase: "The early bird catches the worm.",
                meaning: "The person who starts early has a better chance of success.",
                origin: "Commonly used since the mid-17th century.",
                missingWord: "worm",
                distractors: ["prey", "prize", "seed"]
            },
            {
                id: "p8",
                phrase: "Strike while the iron is hot.",
                meaning: "Take action while the situation is favorable.",
                origin: "A reference to blacksmithing, dating back centuries.",
                missingWord: "hot",
                distractors: ["ready", "new", "bright"]
            },
            {
                id: "p9",
                phrase: "Time and tide wait for no man.",
                meaning: "Certain things will happen regardless of what we wish or do.",
                origin: "An old English saying about the inevitability of time.",
                missingWord: "wait",
                distractors: ["stop", "stay", "pause"]
            }
        ]
    }
];
