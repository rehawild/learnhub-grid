import { EssayTemplate } from "@/types/essayhelper";

export const essayTemplates: EssayTemplate[] = [
    {
        id: "persuasive",
        name: "Persuasive Essay",
        description: "Convince your reader to agree with your opinion.",
        icon: "🗣️",
        sections: [
            {
                id: "intro",
                title: "Introduction",
                placeholder: "Start with a hook, state your topic, and present your thesis statement...",
                tips: ["Use a strong opening sentence.", "Clearly state your position.", "Outline your main arguments."],
                content: ""
            },
            {
                id: "body1",
                title: "Argument 1",
                placeholder: "Present your first main point with evidence...",
                tips: ["State the point clearly.", "Provide facts or examples.", "Explain how this supports your thesis."],
                content: ""
            },
            {
                id: "body2",
                title: "Argument 2",
                placeholder: "Present your second main point...",
                tips: ["Build upon your first argument.", "Use transition words.", "Include strong evidence."],
                content: ""
            },
            {
                id: "counter",
                title: "Counter-Argument",
                placeholder: "Address an opposing view and refute it...",
                tips: ["Acknowledge the other side.", "Explain why your position is stronger.", "Be respectful but firm."],
                content: ""
            },
            {
                id: "conclusion",
                title: "Conclusion",
                placeholder: "Restate your thesis and summarize your arguments...",
                tips: ["Don't introduce new ideas.", "Leave a lasting impression.", "Call to action if appropriate."],
                content: ""
            }
        ]
    },
    {
        id: "narrative",
        name: "Narrative Essay",
        description: "Tell a compelling story from your life.",
        icon: "📖",
        sections: [
            {
                id: "intro",
                title: "Introduction",
                placeholder: "Set the scene and introduce the characters...",
                tips: ["Describe the setting.", "Introduce the main conflict.", "Hook the reader."],
                content: ""
            },
            {
                id: "rising_action",
                title: "Rising Action",
                placeholder: "Describe the events leading up to the climax...",
                tips: ["Build tension.", "Show, don't just tell.", "Develop the characters."],
                content: ""
            },
            {
                id: "climax",
                title: "Climax",
                placeholder: "The turning point or most exciting moment...",
                tips: ["Focus on emotions.", "Make it the peak of the story.", "Keep the pacing fast."],
                content: ""
            },
            {
                id: "falling_action",
                title: "Falling Action",
                placeholder: "What happened after the climax?",
                tips: ["Resolve immediate conflicts.", "Show the consequences.", "Prepare for the end."],
                content: ""
            },
            {
                id: "resolution",
                title: "Resolution",
                placeholder: "How did the story end? What did you learn?",
                tips: ["Reflect on the experience.", "Provide satisfying closure.", "Connect back to the beginning."],
                content: ""
            }
        ]
    },
    {
        id: "expository",
        name: "Expository Essay",
        description: "Explain a topic clearly and logically.",
        icon: "💡",
        sections: [
            {
                id: "intro",
                title: "Introduction",
                placeholder: "Introduce the topic and your thesis...",
                tips: ["Define key terms.", "State the purpose of the essay.", "Keep it objective."],
                content: ""
            },
            {
                id: "point1",
                title: "Main Point 1",
                placeholder: "Explain your first key aspect...",
                tips: ["Focus on facts.", "Use clear examples.", "Avoid opinions."],
                content: ""
            },
            {
                id: "point2",
                title: "Main Point 2",
                placeholder: "Explain your second key aspect...",
                tips: ["Ensure logical flow.", "Use data if available.", "Clarify complex ideas."],
                content: ""
            },
            {
                id: "point3",
                title: "Main Point 3",
                placeholder: "Explain your third key aspect...",
                tips: ["Cover all necessary angles.", "Maintain a neutral tone.", "Be thorough."],
                content: ""
            },
            {
                id: "conclusion",
                title: "Conclusion",
                placeholder: "Summarize the main points...",
                tips: ["Reiterate the importance of the topic.", "Summarize key findings.", "Final thought."],
                content: ""
            }
        ]
    }
];
