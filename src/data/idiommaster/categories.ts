import { IdiomCategory } from "@/types/idiommaster";

export const idiomCategories: IdiomCategory[] = [
    {
        id: "business",
        title: "Corporate & Workplace",
        description: "Navigate office culture with common business metaphors and expressions.",
        icon: "💼",
        idioms: [
            {
                id: "i1",
                phrase: "Get the ball rolling",
                meaning: "To start a process or project.",
                example: "Let's have a meeting to get the ball rolling on the new marketing campaign.",
                context: "We need everyone's input to _____ on the research phase."
            },
            {
                id: "i2",
                phrase: "Think outside the box",
                meaning: "To think creatively or from a new perspective.",
                example: "We need to think outside the box to solve this complex engineering problem.",
                context: "Our typical solutions aren't working; it's time to _____."
            },
            {
                id: "i3",
                phrase: "Touch base",
                meaning: "To briefly contact or reconnect with someone.",
                example: "I'll touch base with you later this afternoon to confirm the final details.",
                context: "I just wanted to _____ and see how the client call went."
            }
        ]
    },
    {
        id: "time-speed",
        title: "Time & Speed",
        description: "Expressions related to urgency, patience, and the passage of time.",
        icon: "⏳",
        idioms: [
            {
                id: "i4",
                phrase: "Once in a blue moon",
                meaning: "Something that happens very rarely.",
                example: "I only see my distant cousins once in a blue moon.",
                context: "He actually cleans his room, but only _____, usually when guests are coming."
            },
            {
                id: "i5",
                phrase: "Beat around the bush",
                meaning: "To avoid talking about the main topic directly.",
                example: "Stop beating around the bush and tell me exactly what happened.",
                context: "Don't _____; if you want a raise, just ask for it."
            },
            {
                id: "i6",
                phrase: "Under the weather",
                meaning: "Feeling slightly sick or unwell.",
                example: "I'm feeling a bit under the weather today, so I think I'll stay home.",
                context: "She stayed home from work because she was feeling a little _____."
            }
        ]
    },
    {
        id: "success-failure",
        title: "Success & Effort",
        description: "Idioms about reaching goals, working hard, and facing setbacks.",
        icon: "🏆",
        idioms: [
            {
                id: "i7",
                phrase: "The best of both worlds",
                meaning: "A situation where you can enjoy the advantages of two very different things.",
                example: "Working from home gives me the best of both worlds: a great career and time with family.",
                context: "By living in the suburbs and working in the city, she gets _____."
            },
            {
                id: "i8",
                phrase: "Barking up the wrong tree",
                meaning: "To follow a wrong line of thought or course of action.",
                example: "If you think I'm the one who took your umbrella, you're barking up the wrong tree.",
                context: "The police realized they were _____ when they found the actual culprit's fingerprints."
            },
            {
                id: "i9",
                phrase: "Piece of cake",
                meaning: "Something that is very easy to do.",
                example: "The exam was a piece of cake; I finished it in twenty minutes.",
                context: "After practicing for weeks, the actual performance was a _____."
            }
        ]
    }
];
