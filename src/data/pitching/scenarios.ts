import { PitchScenario } from "@/types/pitching";

export const pitchScenarios: PitchScenario[] = [
    {
        id: "investor-pitch",
        title: "The Investor Deck",
        description: "Secure funding by building a narrative of growth and scalability.",
        icon: "💰",
        segments: [
            {
                id: "s1",
                type: "hook",
                title: "The Hook",
                options: [
                    {
                        id: "o1",
                        text: "Hi, we are building a new app for personal finance management.",
                        impact: "low",
                        feedback: "A bit too generic. Investors hear this every day. Try to lead with a startling fact."
                    },
                    {
                        id: "o2",
                        text: "60% of millennials can't cover a $1,000 emergency. We're here to fix that.",
                        impact: "high",
                        feedback: "Excellent. You've identified a massive, painful problem immediately."
                    },
                    {
                        id: "o3",
                        text: "Our team has experience at big banks and we've built a secure platform.",
                        impact: "medium",
                        feedback: "Good credibility, but lacks the 'why now' urgency of a great hook."
                    }
                ]
            },
            {
                id: "s2",
                type: "problem",
                title: "The Problem",
                options: [
                    {
                        id: "o4",
                        text: "Current apps are too complicated and people give up using them.",
                        impact: "medium",
                        feedback: "True, but 'complicated' is subjective. Can you be more specific about the pain?"
                    },
                    {
                        id: "o5",
                        text: "The financial gap is widening because traditional tools are designed for bankers, not people.",
                        impact: "high",
                        feedback: "Great framing. You're positioning your solution as a necessary alternative to an outdated system."
                    },
                    {
                        id: "o6",
                        text: "Many people just don't know how to save money effectively.",
                        impact: "low",
                        feedback: "Avoid sounding like you're blaming the customer. Focus on the systemic failure."
                    }
                ]
            },
            {
                id: "s3",
                type: "solution",
                title: "The Solution",
                options: [
                    {
                        id: "o7",
                        text: "We have an AI-driven dashboard that automates your savings based on your spending.",
                        impact: "high",
                        feedback: "Perfect. It's specific, automated, and addresses the 'hard' part of saving."
                    },
                    {
                        id: "o8",
                        text: "Our app makes it easy to see where your money goes every month.",
                        impact: "medium",
                        feedback: "Useful, but 'visibility' isn't as transformative as 'automation'."
                    }
                ]
            },
            {
                id: "s4",
                type: "ask",
                title: "The Ask",
                options: [
                    {
                        id: "o9",
                        text: "We're looking for $2M to hire developers and start marketing.",
                        impact: "medium",
                        feedback: "Clear, but try to tie the 'Ask' to specific growth milestones."
                    },
                    {
                        id: "o10",
                        text: "We're raising a $2M Seed round to reach 100k users by Q4. Join us.",
                        impact: "high",
                        feedback: "Powerful. You've stated the amount, the goal, and invited them to the journey."
                    }
                ]
            }
        ]
    },
    {
        id: "internal-proposal",
        title: "Internal Pivot",
        description: "Convince your stakeholders to shift resources to a new project.",
        icon: "🔄",
        segments: [
            {
                id: "s5",
                type: "hook",
                title: "The Context",
                options: [
                    {
                        id: "o11",
                        text: "I think we should stop working on Project X and start Project Y.",
                        impact: "low",
                        feedback: "Too abrupt. You need to justify the 'why' before the 'what'."
                    },
                    {
                        id: "o12",
                        text: "Over the last quarter, we've seen a 30% drop in ROI on our legacy systems.",
                        impact: "high",
                        feedback: "Strong data-led opening. Numbers get stakeholders' attention immediately."
                    }
                ]
            },
            {
                id: "s6",
                type: "solution",
                title: "The Pivot",
                options: [
                    {
                        id: "o13",
                        text: "By reallocating 20% of the team to AI R&D, we can future-proof our core product.",
                        impact: "high",
                        feedback: "Specific and logical. It sounds like a measured risk rather than a gamble."
                    },
                    {
                        id: "o14",
                        text: "We should start look into AI because everyone else is doing it right now.",
                        impact: "low",
                        feedback: "Don't follow trends blindly—focus on the specific value to your company."
                    }
                ]
            }
        ]
    }
];
