import { LetterTemplate } from "@/types/letterwriter";

export const letterTemplates: LetterTemplate[] = [
    {
        id: "friendly_letter",
        name: "Friendly Letter",
        description: "Write to a friend or family member.",
        icon: "Mail",
        layout: "informal",
        fields: [
            {
                id: "date",
                label: "Date",
                placeholder: "Select date",
                tips: ["Typically top right."],
                value: "",
                required: true,
                type: "date"
            },
            {
                id: "greeting",
                label: "Greeting",
                placeholder: "Dear [Name],",
                tips: ["Use a comma after the name."],
                value: "",
                required: true,
                type: "text"
            },
            {
                id: "body",
                label: "Body Paragraphs",
                placeholder: "How have you been? I wanted to tell you about...",
                tips: ["Keep it casual.", "Ask questions."],
                value: "",
                required: true,
                type: "textarea"
            },
            {
                id: "closing",
                label: "Closing",
                placeholder: "Your friend,",
                tips: ["'Love,' or 'Best,' work well."],
                value: "",
                required: true,
                type: "text"
            },
            {
                id: "signature",
                label: "Signature",
                placeholder: "Your Name",
                tips: ["Sign your first name."],
                value: "",
                required: true,
                type: "text"
            }
        ]
    },
    {
        id: "formal_letter",
        name: "Formal Letter",
        description: "Official correspondence or business letters.",
        icon: "Briefcase",
        layout: "formal",
        fields: [
            {
                id: "sender_info",
                label: "Sender Information",
                placeholder: "Your Name\nYour Address",
                tips: ["Include full address."],
                value: "",
                required: true,
                type: "textarea"
            },
            {
                id: "date",
                label: "Date",
                placeholder: "Select date",
                tips: ["Full date (Month Day, Year)."],
                value: "",
                required: true,
                type: "date"
            },
            {
                id: "recipient_info",
                label: "Recipient Information",
                placeholder: "Recipient Name\nTitle\nCompany\nAddress",
                tips: ["Be accurate."],
                value: "",
                required: true,
                type: "textarea"
            },
            {
                id: "greeting",
                label: "Salutation",
                placeholder: "Dear Mr./Ms. [Last Name]:",
                tips: ["Use a colon for formal letters."],
                value: "",
                required: true,
                type: "text"
            },
            {
                id: "body",
                label: "Body",
                placeholder: "I am writing to inquire about...",
                tips: ["State purpose clearly.", "Be concise."],
                value: "",
                required: true,
                type: "textarea"
            },
            {
                id: "closing",
                label: "Closing",
                placeholder: "Sincerely,",
                tips: ["Always appropriate."],
                value: "",
                required: true,
                type: "text"
            },
            {
                id: "signature",
                label: "Signature (Printed)",
                placeholder: "Your Full Name",
                tips: ["You sign above this line."],
                value: "",
                required: true,
                type: "text"
            }
        ]
    },
    {
        id: "thank_you_note",
        name: "Thank You Note",
        description: "Express gratitude for a gift or favor.",
        icon: "Heart",
        layout: "informal",
        fields: [
            {
                id: "date",
                label: "Date",
                placeholder: "Select date",
                tips: [],
                value: "",
                required: true,
                type: "date"
            },
            {
                id: "greeting",
                label: "Greeting",
                placeholder: "Dear [Name],",
                tips: [],
                value: "",
                required: true,
                type: "text"
            },
            {
                id: "body",
                label: "Message",
                placeholder: "Thank you so much for the...",
                tips: ["Mention the specific gift.", "Say how you'll use it."],
                value: "",
                required: true,
                type: "textarea"
            },
            {
                id: "closing",
                label: "Closing",
                placeholder: "Sincerely/Warmly,",
                tips: [],
                value: "",
                required: true,
                type: "text"
            },
            {
                id: "signature",
                label: "Your Name",
                placeholder: "Name",
                tips: [],
                value: "",
                required: true,
                type: "text"
            }
        ]
    }
];
