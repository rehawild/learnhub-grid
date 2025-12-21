import { JargonCategory } from "@/types/jargonbuster";

export const jargonCategories: JargonCategory[] = [
    {
        id: "corporate-speak",
        title: "Corporate Speak",
        description: "Navigate the boardroom with confidence by decoding common office buzzwords.",
        icon: "🏢",
        terms: [
            {
                id: "j1",
                term: "Bandwidth",
                definition: "The physical or mental capacity to take on more work.",
                plainEnglish: "Capacity / Time",
                example: "I don't have the bandwidth to lead this project right now."
            },
            {
                id: "j2",
                term: "Synergy",
                definition: "The interaction of two or more agents to produce a combined effect greater than the sum of their separate effects.",
                plainEnglish: "Collaboration / Cooperation",
                example: "We need to find synergy between the sales and marketing departments."
            },
            {
                id: "j3",
                term: "Low-hanging fruit",
                definition: "Tasks or goals that are easily achieved.",
                plainEnglish: "Easy wins",
                example: "Let's focus on the low-hanging fruit first to show some quick progress."
            },
            {
                id: "j4",
                term: "Actionable",
                definition: "Refers to information that can be acted upon.",
                plainEnglish: "Useful / Practical",
                example: "Make sure the feedback we give the team is actionable."
            }
        ]
    },
    {
        id: "tech-lingo",
        title: "Tech Lingo",
        description: "Understand the language of developers and product managers.",
        icon: "💻",
        terms: [
            {
                id: "j5",
                term: "Technical Debt",
                definition: "The cost of additional rework caused by choosing an easy solution now instead of using a better approach that would take longer.",
                plainEnglish: "Code shortcuts / Hidden rework",
                example: "If we rush this release, we'll accumulate significant technical debt."
            },
            {
                id: "j6",
                term: "Siloed",
                definition: "Occurs when different departments or teams don't communicate with each other.",
                plainEnglish: "Isolated / Uncoordinated",
                example: "Our engineering and design teams are too siloed."
            },
            {
                id: "j7",
                term: "Scalability",
                definition: "The capacity of a system to handle a growing amount of work.",
                plainEnglish: "Ability to grow",
                example: "We need to ensure the new architecture has high scalability."
            }
        ]
    },
    {
        id: "marketing-buzz",
        title: "Marketing Buzz",
        description: "Decode the jargon used in advertising and customer acquisition.",
        icon: "📢",
        terms: [
            {
                id: "j8",
                term: "Evergreen",
                definition: "Content that remains relevant and useful for a long period.",
                plainEnglish: "Timeless / Long-lasting",
                example: "We should invest more in evergreen blog posts."
            },
            {
                id: "j9",
                term: "Growth Hacking",
                definition: "A process of rapid experimentation across marketing channels to identify the most effective ways to grow a business.",
                plainEnglish: "Rapid experiments / Targeted growth",
                example: "Our growth hacking tactics resulted in a 20% spike in signups."
            }
        ]
    }
];
