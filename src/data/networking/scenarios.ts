import { NetworkingScenario } from "@/types/networking";

export const networkingScenarios: NetworkingScenario[] = [
    {
        id: "opening-lines",
        title: "Opening Lines",
        description: "Break the ice naturally with peers or senior leaders.",
        icon: "👋",
        phrases: [
            {
                id: "n1",
                text: "Hi, I don't think we've met yet. I'm [Name] from the marketing team.",
                meaning: "A direct but friendly introduction.",
                context: "Standing at a coffee table or before a seminar starts.",
                intention: "introduction"
            },
            {
                id: "n2",
                text: "That was a great presentation. What was your main takeaway?",
                meaning: "Using a shared experience to start a conversation.",
                context: "Immediately after a talk or workshop.",
                intention: "rapport"
            },
            {
                id: "n3",
                text: "Mind if I join you? I've heard great things about your department.",
                meaning: "Politely entering a small group conversation.",
                context: "Social mixers or lunch breaks.",
                intention: "rapport"
            }
        ]
    },
    {
        id: "elevator-pitch",
        title: "The Elevator Pitch",
        description: "Summarize who you are and what you do in 30 seconds.",
        icon: "🚀",
        phrases: [
            {
                id: "n4",
                text: "I specialize in streamlining supply chain operations to boost efficiency.",
                meaning: "Stating your niche and value proposition.",
                context: "Answering 'What do you do?' at a professional event.",
                intention: "elevator-pitch"
            },
            {
                id: "n5",
                text: "Our team is currently leveraging AI to personalize customer experiences.",
                meaning: "Showcasing a current high-impact project.",
                context: "Demonstrating expertise during a brief intro.",
                intention: "elevator-pitch"
            }
        ]
    },
    {
        id: "diving-deeper",
        title: "Diving Deeper",
        description: "Move beyond 'What do you do?' to meaningful connection.",
        icon: "🔍",
        phrases: [
            {
                id: "n6",
                text: "What's the biggest challenge your team is currently tackling?",
                meaning: "Shifting the focus to the other person's professional life.",
                context: "Building deeper professional rapport.",
                intention: "rapport"
            },
            {
                id: "n7",
                text: "How did you get your start in this industry?",
                meaning: "Asking for a personal/professional origin story.",
                context: "Mid-conversation during a one-on-one networking chat.",
                intention: "rapport"
            }
        ]
    },
    {
        id: "strategic-exits",
        title: "Strategic Exits",
        description: "End a conversation gracefully while preserving the connection.",
        icon: "🚪",
        phrases: [
            {
                id: "n8",
                text: "It's been great chatting! I see someone I need to catch before they leave.",
                meaning: "A soft exit with a clear reason.",
                context: "Ending a long conversation to talk to others.",
                intention: "exit"
            },
            {
                id: "n9",
                text: "I'd love to hear more about that. Do you have a card so we can follow up?",
                meaning: "Exiting while ensuring a future connection.",
                context: "The proactive way to end a productive chat.",
                intention: "exit"
            },
            {
                id: "n10",
                text: "I'm going to grab a refill, but it was a pleasure meeting you.",
                meaning: "A casual but polite way to disconnect.",
                context: "Cocktail parties or mixer events.",
                intention: "exit"
            }
        ]
    }
];
