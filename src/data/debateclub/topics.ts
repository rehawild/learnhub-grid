import { DebateTopic } from "@/types/debateclub";

export const debateTopics: DebateTopic[] = [
    {
        id: "d1",
        motion: "Social media does more harm than good.",
        category: "Society",
        difficulty: "Easy",
        pointsFor: ["Increases anxiety and depression", "Spreads misinformation", "Reduces face-to-face interaction"],
        pointsAgainst: ["Connects people globally", "Democratizes information", "Platform for marginalized voices"]
    },
    {
        id: "d2",
        motion: "Artificial Intelligence will eventually replace human workers.",
        category: "Technology",
        difficulty: "Medium",
        pointsFor: ["Automation efficiency", "Cost reduction for companies", "AI capability growth"],
        pointsAgainst: ["Creates new types of jobs", "Humans have empathy and creativity", "AI requires supervision"]
    },
    {
        id: "d3",
        motion: "Homework should be banned in schools.",
        category: "Education",
        difficulty: "Easy",
        pointsFor: ["Causes unnecessary stress", "Takes away from family time", "Disadvantages students without support"],
        pointsAgainst: ["Reinforces learning", "Teaches time management", "Allows parents to see progress"]
    },
    {
        id: "d4",
        motion: "Climate change is the single greatest threat to humanity.",
        category: "Environment",
        difficulty: "Hard",
        pointsFor: ["Extreme weather events", "Resource scarcity", "Mass migration potential"],
        pointsAgainst: ["Technological solutions exist", "Other threats like nuclear war are immediate", "Adaptation is possible"]
    }
];
