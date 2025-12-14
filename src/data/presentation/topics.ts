import { PresentationTopic } from "@/types/presentation";

export const presentationTopics: PresentationTopic[] = [
    {
        id: "p1",
        title: "Product Pitch",
        description: "Pitch a revolutionary new app that solves a common daily problem.",
        category: "Business",
        slides: [
            "The Problem: What sucks right now?",
            "The Solution: Your App",
            "Key Features: Demo time",
            "Market Opportunity: Who buys this?",
            "Call to Action: Download now"
        ]
    },
    {
        id: "p2",
        title: "Climate Solutions",
        description: "Explain a specific technology or policy to fight climate change.",
        category: "Academic",
        slides: [
            "Introduction: The urgency",
            "The Mechanism: How it works",
            "Feasibility: Cost and scale",
            "Impact: Expected results",
            "Conclusion: The path forward"
        ]
    },
    {
        id: "p3",
        title: "My Perfect Weekend",
        description: "Describe your ideal weekend getaway.",
        category: "Creative",
        slides: [
            "Destination Reveal",
            "Day 1 Activities",
            "The Food Scene",
            "Relaxation Time",
            "Why it's perfect"
        ]
    },
    {
        id: "p4",
        title: "Random Object",
        description: "Sell us this pen (or any random object near you).",
        category: "Impromptu",
        slides: [
            "What is it?",
            "Hidden features",
            "Why you need it",
            "The price",
            "Buy it now!"
        ]
    }
];
