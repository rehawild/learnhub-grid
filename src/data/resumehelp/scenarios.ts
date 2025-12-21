import { ResumeCategory } from "@/types/resumehelp";

export const resumeCategories: ResumeCategory[] = [
    {
        id: "management",
        title: "Leadership & Management",
        description: "Transform generic management tasks into high-impact leadership achievements.",
        icon: "👑",
        bullets: [
            {
                id: "r1",
                weak: "Managed a team of 10 people.",
                strong: "Spearheaded a cross-functional team of 10, delivering the project 2 weeks ahead of schedule.",
                actionVerb: "Spearheaded",
                impactLabel: "Leadership & Efficiency",
                explanation: "'Spearheaded' implies proactive leadership, and adding a specific timeframe demonstrates tangible results."
            },
            {
                id: "r2",
                weak: "Attended meetings and took notes.",
                strong: "Facilitated weekly stakeholder alignments, ensuring 100% project transparency across departments.",
                actionVerb: "Facilitated",
                impactLabel: "Communication & Organization",
                explanation: "'Facilitated' shows you drove the process rather than just being present. 'Transparency' is a key corporate value."
            }
        ]
    },
    {
        id: "tech-engine",
        title: "Technical & Engineering",
        description: "Showcase your technical prowess with data-driven impact statements.",
        icon: "⚙️",
        bullets: [
            {
                id: "r3",
                weak: "Fixed bugs in the code.",
                strong: "Optimized legacy codebases, resulting in a 30% reduction in system latency.",
                actionVerb: "Optimized",
                impactLabel: "Performance & Technical Debt",
                explanation: "'Optimized' is stronger than 'fixed'. Quantifying the result (30% reduction) makes it undeniable."
            },
            {
                id: "r4",
                weak: "Wrote documentation for the API.",
                strong: "Architected comprehensive API technical specs, reducing developer onboarding time by 40%.",
                actionVerb: "Architected",
                impactLabel: "Strategy & Onboarding",
                explanation: "'Architected' suggests high-level design. Connecting it to a business outcome (onboarding time) adds value."
            }
        ]
    },
    {
        id: "marketing-sales",
        title: "Marketing & Sales",
        description: "Highlight growth, conversion, and revenue-generating activities.",
        icon: "📈",
        bullets: [
            {
                id: "r5",
                weak: "Headed the social media campaign.",
                strong: "Engineered a viral social strategy that boosted organic engagement by 150% in 3 months.",
                actionVerb: "Engineered",
                impactLabel: "Growth & Strategy",
                explanation: "'Engineered' sounds more precise than 'headed'. The 150% growth is the 'wow' factor."
            },
            {
                id: "r6",
                weak: "Sold products to customers.",
                strong: "Exceeded annual sales targets for 3 consecutive years, generating $2M in new revenue.",
                actionVerb: "Exceeded",
                impactLabel: "Revenue & Consistency",
                explanation: "'Exceeded' shows performance above expectations. Mentioning specific dollar amounts is crucial in sales."
            }
        ]
    },
    {
        id: "entry-level",
        title: "Entry Level & Internship",
        description: "Perfect for students and career changers. Learn to value your education and early roles.",
        icon: "🎓",
        bullets: [
            {
                id: "r7",
                weak: "Did a group project in college.",
                strong: "Coordinated a 5-member project team, earning an 'A' grade for an innovative market analysis report.",
                actionVerb: "Coordinated",
                impactLabel: "Collaboration & Research",
                explanation: "'Coordinated' is better than 'did'. Even academic 'A' grades serve as proof of quality for beginners."
            },
            {
                id: "r8",
                weak: "Used Microsoft Office for assignments.",
                strong: "Leveraged advanced Excel functions to automate data tracking for a student organization of 200+ members.",
                actionVerb: "Leveraged",
                impactLabel: "Technical Efficiency",
                explanation: "Instead of just 'using' a tool, show how you 'leveraged' it to solve a problem or automate a task."
            }
        ]
    },
    {
        id: "soft-skills",
        title: "General & Soft Skills",
        description: "Make your universal skills (Time Management, Service) sound professional and impactful.",
        icon: "🌟",
        bullets: [
            {
                id: "r9",
                weak: "Answered phones and helped customers.",
                strong: "Resolved over 50 customer inquiries daily, maintaining a 95% satisfaction rate during peak hours.",
                actionVerb: "Resolved",
                impactLabel: "Customer Success & Volume",
                explanation: "'Resolved' implies problem-solving. Adding a daily volume (50+) shows you can handle high-pressure environments."
            },
            {
                id: "r10",
                weak: "Good at meeting deadlines.",
                strong: "Consistently surpassed internal milestones for 5+ concurrent tasks without compromising quality.",
                actionVerb: "Surpassed",
                impactLabel: "Reliability & Multi-tasking",
                explanation: "Instead of saying you are 'good' at something, show a history of 'consistently surpassing' expectations."
            }
        ]
    }
];
