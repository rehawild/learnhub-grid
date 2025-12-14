import { EmailTemplate } from "@/types/emailwriter";

export const emailTemplates: EmailTemplate[] = [
    {
        id: "formal_request",
        name: "Formal Request",
        description: "Ask for information, permission, or assistance professionally.",
        icon: "Briefcase",
        structure: "Professional and Polite",
        fields: [
            {
                id: "recipient",
                label: "Recipient Name",
                placeholder: "e.g., Mr. Smith, Hiring Manager",
                tips: ["Use proper titles if known."],
                value: "",
                required: true
            },
            {
                id: "subject",
                label: "Subject Line",
                placeholder: "e.g., Request for Interview, Question about Project X",
                tips: ["Keep it concise and clear.", "Mention the main topic."],
                value: "",
                required: true
            },
            {
                id: "greeting",
                label: "Salutation",
                placeholder: "e.g., Dear [Name],",
                tips: ["'Dear' is standard.", "Use 'To Whom It May Concern' if unknown."],
                value: "",
                required: true
            },
            {
                id: "body",
                label: "Message Body",
                placeholder: "State your purpose clearly. Explain why you are writing and what you need...",
                tips: ["Be direct but unique.", "Avoid slang.", "Proofread for errors."],
                value: "",
                required: true
            },
            {
                id: "closing",
                label: "Sign-off",
                placeholder: "e.g., Sincerely, Best regards,",
                tips: ["'Sincerely' is very formal.", "'Best regards' is standard professional."],
                value: "",
                required: true
            },
            {
                id: "sender",
                label: "Your Name",
                placeholder: "Your full name",
                tips: [],
                value: "",
                required: true
            }
        ]
    },
    {
        id: "informal_checkin",
        name: "Friendly Check-in",
        description: "Say hello to a friend or colleague casually.",
        icon: "Coffee",
        structure: "Casual and Warm",
        fields: [
            {
                id: "recipient",
                label: "Friend's Name",
                placeholder: "e.g., Sarah, Team",
                tips: ["First names are fine."],
                value: "",
                required: true
            },
            {
                id: "subject",
                label: "Subject",
                placeholder: "e.g., Catching up, Hello!",
                tips: ["Can be fun and short."],
                value: "",
                required: true
            },
            {
                id: "greeting",
                label: "Hi there,",
                placeholder: "e.g., Hi [Name], Hey everyone,",
                tips: ["'Hi' or 'Hey' works well."],
                value: "",
                required: true
            },
            {
                id: "body",
                label: "What's new?",
                placeholder: "Ask how they are, share some news...",
                tips: ["Keep it conversational.", "Use emojis if appropriate."],
                value: "",
                required: true
            },
            {
                id: "closing",
                label: "Closing",
                placeholder: "e.g., Best, Talk soon, Cheers,",
                tips: ["'Best' is safe.", "'Cheers' is friendly."],
                value: "",
                required: true
            },
            {
                id: "sender",
                label: "Your Name",
                placeholder: "Your name",
                tips: [],
                value: "",
                required: true
            }
        ]
    },
    {
        id: "apology",
        name: "Apology",
        description: "Sincerely apologize for a mistake or delay.",
        icon: "HeartHandshake",
        structure: "Sincere and Regretful",
        fields: [
            {
                id: "recipient",
                label: "Recipient",
                placeholder: "Name of person",
                tips: ["Address them directly."],
                value: "",
                required: true
            },
            {
                id: "subject",
                label: "Subject",
                placeholder: "e.g., Apology regarding..., So sorry for...",
                tips: ["Mention the issue briefly."],
                value: "",
                required: true
            },
            {
                id: "greeting",
                label: "Greeting",
                placeholder: "e.g., Dear [Name],",
                tips: ["Keep it respectful."],
                value: "",
                required: true
            },
            {
                id: "body",
                label: "Explanation",
                placeholder: "Admit the mistake, explain briefly (no excuses), and offer a solution...",
                tips: ["Take responsibility.", "Offer to make it right."],
                value: "",
                required: true
            },
            {
                id: "closing",
                label: "Sign-off",
                placeholder: "e.g., Sincerely, With apologies,",
                tips: ["Reiterate your regret."],
                value: "",
                required: true
            },
            {
                id: "sender",
                label: "Your Name",
                placeholder: "Your Full Name",
                tips: [],
                value: "",
                required: true
            }
        ]
    }
];
