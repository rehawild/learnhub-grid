import { ParagraphGuide } from "@/types/paragraphpro";

export const paragraphGuides: ParagraphGuide[] = [
    {
        id: "informative",
        name: "Informative Paragraph",
        description: "Teach the reader about a specific fact or topic.",
        icon: "BookOpen", // Using string names for Lucide icons
        structure: "Fact-based and Clear",
        parts: [
            {
                id: "topic",
                label: "Topic Sentence",
                placeholder: "State the main idea clearly...",
                tips: ["Introduce the subject.", "Keep it specific."],
                value: ""
            },
            {
                id: "supporting1",
                label: "Fact 1",
                placeholder: "Provide the first key detail...",
                tips: ["Use numbers or dates if applicable.", "Explain why it matters."],
                value: ""
            },
            {
                id: "supporting2",
                label: "Fact 2",
                placeholder: "Provide another important detail...",
                tips: ["Add more depth.", "Connect to the first fact."],
                value: ""
            },
            {
                id: "supporting3",
                label: "Example",
                placeholder: "Give a concrete example or illustration...",
                tips: ["Make it relatable.", "Helps visualize the topic."],
                value: ""
            },
            {
                id: "conclusion",
                label: "Concluding Sentence",
                placeholder: "Wrap up the main point...",
                tips: ["Summarize the info.", "Don't introduce new facts."],
                value: ""
            }
        ]
    },
    {
        id: "opinion",
        name: "Opinion Paragraph",
        description: "Express your thoughts or feelings on a subject.",
        icon: "MessageCircle",
        structure: "Persuasive and Personal",
        parts: [
            {
                id: "topic",
                label: "Opinion Statement",
                placeholder: "State your opinion clearly...",
                tips: ["Use specific words.", "Avoid 'I think' if possible."],
                value: ""
            },
            {
                id: "supporting1",
                label: "Reason 1",
                placeholder: "Why do you feel this way?",
                tips: ["Give a strong reason.", "Be logical."],
                value: ""
            },
            {
                id: "supporting2",
                label: "Reason 2",
                placeholder: "Another reason for your opinion...",
                tips: ["Add a personal experience.", "Appeal to emotion."],
                value: ""
            },
            {
                id: "supporting3",
                label: "Counter-point",
                placeholder: "Briefly address an opposing view...",
                tips: ["Show you understand others.", "Explain why you disagree."],
                value: ""
            },
            {
                id: "conclusion",
                label: "Closing Thought",
                placeholder: "Restate your opinion in a new way...",
                tips: ["End with a strong feeling.", "Call to action."],
                value: ""
            }
        ]
    },
    {
        id: "descriptive",
        name: "Descriptive Paragraph",
        description: "Paint a picture with words.",
        icon: "Palette",
        structure: "Vivid and Sensory",
        parts: [
            {
                id: "topic",
                label: "Subject Introduction",
                placeholder: "What are you describing?",
                tips: ["Set the scene.", "Establish the mood."],
                value: ""
            },
            {
                id: "supporting1",
                label: "Visual Details",
                placeholder: "What does it look like?",
                tips: ["Colors, shapes, sizes.", "Focus on light/shadow."],
                value: ""
            },
            {
                id: "supporting2",
                label: "Sensory Details",
                placeholder: "What does it sound/smell/feel like?",
                tips: ["Texture, temperature, scent.", "Be specific."],
                value: ""
            },
            {
                id: "supporting3",
                label: "Action/Movement",
                placeholder: "Is anything moving or changing?",
                tips: ["Verbs create energy.", "Describe the atmosphere."],
                value: ""
            },
            {
                id: "conclusion",
                label: "Final Impression",
                placeholder: "How does it make you feel?",
                tips: ["Overall effect.", "Lasting image."],
                value: ""
            }
        ]
    }
];
