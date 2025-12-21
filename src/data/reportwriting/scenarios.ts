import { ReportSection } from "@/types/reportwriting";

export const reportSections: ReportSection[] = [
    {
        id: "exec-summary",
        title: "Executive Summary",
        description: "Condense complex reports into high-level overviews.",
        icon: "📜",
        phrases: [
            {
                id: "r1",
                text: "This report outlines the key findings of our market analysis.",
                meaning: "Introducing the purpose of the summary.",
                context: "The very first sentence of an executive summary.",
                tone: "direct"
            },
            {
                id: "r2",
                text: "The primary objective of this project was to identify cost-saving measures.",
                meaning: "Defining the core goal.",
                context: "Setting the scope for the reader.",
                tone: "objective"
            },
            {
                id: "r3",
                text: "Based on the data, we recommend an immediate expansion into the digital sector.",
                meaning: "Presenting the main conclusion early.",
                context: "High-level takeaway for decision makers.",
                tone: "persuasive"
            }
        ]
    },
    {
        id: "analysis",
        title: "Analysis & Findings",
        description: "Present data and observations with professional objectivity.",
        icon: "📊",
        phrases: [
            {
                id: "r4",
                text: "There is a significant correlation between user engagement and feature updates.",
                meaning: "Stating a result based on data.",
                context: "Presenting factual findings from a study.",
                tone: "objective"
            },
            {
                id: "r5",
                text: "Unexpectedly, the results indicate a decline in customer retention rates.",
                meaning: "Highlighting a surprising discovery.",
                context: "Adding nuance to the analysis section.",
                tone: "formal"
            },
            {
                id: "r6",
                text: "Current trends suggest that market saturation is imminent.",
                meaning: "Providing a data-driven prediction.",
                context: "Concluding a finding with a forward-looking statement.",
                tone: "direct"
            }
        ]
    },
    {
        id: "recommendations",
        title: "Recommendations",
        description: "Propose actions based on logic and analysis.",
        icon: "💡",
        phrases: [
            {
                id: "r7",
                text: "It is strongly advised that the company adopts a hybrid work model.",
                meaning: "Giving a firm suggestion.",
                context: "The core proposal of the recommendations section.",
                tone: "persuasive"
            },
            {
                id: "r8",
                text: "To mitigate risks, we suggest implementing a tiered security protocol.",
                meaning: "Linking an action to a specific problem.",
                context: "Providing a solution-oriented recommendation.",
                tone: "formal"
            },
            {
                id: "r9",
                text: "Further research is required to fully grasp the long-term implications.",
                meaning: "Tempering recommendations with a need for more info.",
                context: "A common closing recommendation for complex reports.",
                tone: "objective"
            }
        ]
    },
    {
        id: "conclusion",
        title: "Conclusions",
        description: "Summarize the final outcomes and synthesis.",
        icon: "🏁",
        phrases: [
            {
                id: "r10",
                text: "In conclusion, the proposed strategy is viable and low-risk.",
                meaning: "Summing up the main point.",
                context: "The definitive final statement of the report.",
                tone: "direct"
            },
            {
                id: "r11",
                text: "All evidence points toward a need for structural reorganization.",
                meaning: "Synthesizing various data points into one truth.",
                context: "Wrapping up complex findings.",
                tone: "formal"
            },
            {
                id: "r12",
                text: "The success of the initiative depends on timely resource allocation.",
                meaning: "Final warning or condition for success.",
                context: "A closing thought on implementation.",
                tone: "persuasive"
            }
        ]
    }
];
