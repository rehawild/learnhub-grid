import { RiddleDeck } from "@/types/riddles";

export const riddleDecks: RiddleDeck[] = [
    {
        id: "classic-riddles",
        name: "Classic Riddles",
        description: "Time-tested brain teasers that will make you think.",
        difficulty: "easy",
        riddles: [
            {
                id: "c1",
                question: "What has to be broken before you can use it?",
                answer: "An egg",
                difficulty: "easy"
            },
            {
                id: "c2",
                question: "I’m tall when I’m young, and I’m short when I’m old. What am I?",
                answer: "A candle",
                difficulty: "easy"
            },
            {
                id: "c3",
                question: "What month of the year has 28 days?",
                answer: "All of them",
                difficulty: "easy"
            },
            {
                id: "c4",
                question: "What is full of holes but still holds water?",
                answer: "A sponge",
                difficulty: "easy"
            },
            {
                id: "c5",
                question: "What question can you never answer yes to?",
                answer: "Are you asleep yet?",
                difficulty: "easy"
            }
        ]
    },
    {
        id: "logic-riddles",
        name: "Logic Puzzles",
        description: "Challenge your analytical thinking with these logic-based riddles.",
        difficulty: "medium",
        riddles: [
            {
                id: "l1",
                question: "What is always in front of you but can’t be seen?",
                answer: "The future",
                difficulty: "medium"
            },
            {
                id: "l2",
                question: "There’s a one-story house in which everything is yellow. Yellow walls, yellow doors, yellow furniture. What color are the stairs?",
                answer: "There are no stairs—it’s a one-story house.",
                difficulty: "medium"
            },
            {
                id: "l3",
                question: "What can you break, even if you never pick it up or touch it?",
                answer: "A promise",
                difficulty: "medium"
            },
            {
                id: "l4",
                question: "What goes up but never comes down?",
                answer: "Your age",
                difficulty: "medium"
            },
            {
                id: "l5",
                question: "A man who was outside in the rain without an umbrella or hat didn’t get a single hair on his head wet. Why?",
                answer: "He was bald.",
                difficulty: "medium"
            }
        ]
    },
    {
        id: "hard-riddles",
        name: "Hard Riddles",
        description: "Only for the sharpest minds. These riddles are truly tricky.",
        difficulty: "hard",
        riddles: [
            {
                id: "h1",
                question: "I follow you all day long, but when the night comes, I’m gone. What am I?",
                answer: "Your shadow",
                difficulty: "hard"
            },
            {
                id: "h2",
                question: "What has keys, but no locks; space, but no room; and you can enter, but never leave?",
                answer: "A keyboard",
                difficulty: "hard"
            },
            {
                id: "h3",
                question: "What can you catch, but not throw?",
                answer: "A cold",
                difficulty: "hard"
            },
            {
                id: "h4",
                question: "What has a thumb and four fingers, but is not a hand?",
                answer: "A glove",
                difficulty: "hard"
            },
            {
                id: "h5",
                question: "What has many teeth, but cannot bite?",
                answer: "A comb",
                difficulty: "hard"
            }
        ]
    }
];
