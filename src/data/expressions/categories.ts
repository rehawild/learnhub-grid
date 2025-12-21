import { ExpressionCategory } from "@/types/expressions";

export const expressionCategories: ExpressionCategory[] = [
    {
        id: "socializing",
        title: "Casual Socializing",
        description: "Navigate informal conversations and social gatherings with ease.",
        icon: "🥂",
        expressions: [
            {
                id: "long-time",
                expression: "Long time no see!",
                socialFunction: "Greeting someone after a gap",
                example: "Hey Mike! Long time no see! How have you been?",
                scenario: "You run into a former classmate at a coffee shop whom you haven't spoken to in three years.",
                prompt: "What's the most natural way to start the conversation?",
                distractors: ["It has been many hours.", "Nice to see you again today.", "Greeting to you, friend."]
            },
            {
                id: "catch-up",
                expression: "How's it going?",
                socialFunction: "Casual greeting/Check-in",
                example: "Hey Sarah, how's it going with the new job?",
                scenario: "You see a neighbor in the hallway and want to acknowledge them briefly but friendly.",
                prompt: "How would you greet them casually?",
                distractors: ["What is your current status?", "Are you functioning well?", "How is your life progressing?"]
            },
            {
                id: "mind-if",
                expression: "Do you mind if I...?",
                socialFunction: "Politely asking permission",
                example: "Do you mind if I join you guys for lunch?",
                scenario: "You see a group of colleagues sitting at a table and you want to sit with them.",
                prompt: "How do you ask to join them without being intrusive?",
                distractors: ["I will sit here now.", "Is this seat taken by your body?", "May I have the right to sit?"]
            }
        ]
    },
    {
        id: "office",
        title: "Professional Polish",
        description: "Master the subtle art of office etiquette and meeting participation.",
        icon: "💼",
        expressions: [
            {
                id: "circle-back",
                expression: "Let's circle back to that.",
                socialFunction: "Delaying a topic for later",
                example: "That's a great point, but let's circle back to that after the budget review.",
                scenario: "During a meeting, someone asks a question that is slightly off-topic from the current slide.",
                prompt: "How do you suggest discussing it later without dismissing the person?",
                distractors: ["Forget that for now.", "We will walk in a circle later.", "Stop talking about that please."]
            },
            {
                id: "on-the-same-page",
                expression: "Are we on the same page?",
                socialFunction: "Checking for mutual understanding",
                example: "Before we move on, I just want to make sure we're all on the same page regarding the deadline.",
                scenario: "You've just explained a complex project plan and want to ensure everyone understands the goals.",
                prompt: "How do you verify the team's alignment?",
                distractors: ["Are you reading this book?", "Is your brain like my brain?", "Do you know what I meant accurately?"]
            }
        ]
    },
    {
        id: "requests",
        title: "Requests & Favors",
        description: "Learn how to ask for help and offer assistance naturally.",
        icon: "🙏",
        expressions: [
            {
                id: "could-you-possibly",
                expression: "Could you possibly...?",
                socialFunction: "High-politeness request",
                example: "Could you possibly help me with these boxes? They're quite heavy.",
                scenario: "You need a stranger's help to reach something on a high shelf in a supermarket.",
                prompt: "How do you ask for help in the most polite way?",
                distractors: ["Reach this for me.", "You must help me.", "Can you do the reach now?"]
            }
        ]
    }
];
