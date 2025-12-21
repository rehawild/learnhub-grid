import { NegotiationScenario } from "@/types/negotiation";

export const negotiationScenarios: NegotiationScenario[] = [
    {
        id: "opening-bid",
        title: "Initial Proposal",
        description: "Learn how to set the scene and make your first offer.",
        icon: "🎯",
        difficulty: "easy",
        phrases: [
            {
                id: "n1",
                text: "We are prepared to offer a starting price of...",
                meaning: "Formal delivery of the first bid.",
                context: "Setting the initial anchor for the negotiation.",
                strategy: "Anchoring"
            },
            {
                id: "n2",
                text: "Our proposal is based on the current market value.",
                meaning: "Justifying the offer with data.",
                context: "Providing a rational basis for your position.",
                strategy: "Objectivity"
            },
            {
                id: "n3",
                text: "What are your primary objectives for this deal?",
                meaning: "Asking for information before committing.",
                context: "Understanding the other party's needs.",
                strategy: "Information Gathering"
            }
        ]
    },
    {
        id: "bargaining",
        title: "Bargaining & Countering",
        description: "Exchange offers and move towards a middle ground.",
        icon: "⚖️",
        difficulty: "medium",
        phrases: [
            {
                id: "n4",
                text: "If you can reduce the price, we could increase the volume.",
                meaning: "Offering a trade-off.",
                context: "Standard bargaining technique.",
                strategy: "Logrolling"
            },
            {
                id: "n5",
                text: "That proposal is slightly higher than we anticipated.",
                meaning: "Softly rejecting an offer.",
                context: "Managing expectations without breaking rapport.",
                strategy: "Positioning"
            },
            {
                id: "n6",
                text: "We might be able to move on that if you can meet us halfway.",
                meaning: "Suggesting a compromise.",
                context: "Pushing for a shared concession.",
                strategy: "Mutual Concession"
            }
        ]
    },
    {
        id: "objections",
        title: "Handling Objections",
        description: "Address concerns without losing your footing.",
        icon: "🛡️",
        difficulty: "medium",
        phrases: [
            {
                id: "n7",
                text: "I understand your concern about the timeline. However...",
                meaning: "Acknowledging before pivoting.",
                context: "Defusing tension before presenting a new point.",
                strategy: "Feel-Felt-Found"
            },
            {
                id: "n8",
                text: "What specifically is preventing you from moving forward?",
                meaning: "Pinpointing the exact issue.",
                context: "Moving from vague doubt to specific problem solving.",
                strategy: "Isolation"
            },
            {
                id: "n9",
                text: "Let's put that issue aside for a moment and look at the bigger picture.",
                meaning: "Temporarily ignoring a sticking point.",
                context: "Maintaining momentum when stuck on a detail.",
                strategy: "Parking"
            }
        ]
    },
    {
        id: "closing-the-deal",
        title: "Finalizing Agreement",
        description: "Seal the deal and ensure mutual satisfaction.",
        icon: "🤝",
        difficulty: "hard",
        phrases: [
            {
                id: "n10",
                text: "Shall we go ahead and finalize the documentation?",
                meaning: "Moving to the closing stage.",
                context: "Confirming that the verbal agreement is ready for paper.",
                strategy: "Direct Close"
            },
            {
                id: "n11",
                text: "I believe we have reached a mutually beneficial agreement.",
                meaning: "Confirming the win-win outcome.",
                context: "Ending on a positive, collaborative note.",
                strategy: "Summary Close"
            },
            {
                id: "n12",
                text: "Is there anything else we need to cover before we sign?",
                meaning: "Final check for hidden obstacles.",
                context: "Ensuring no last-minute surprises.",
                strategy: "Final Check"
            }
        ]
    }
];
