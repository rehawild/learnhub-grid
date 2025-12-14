import { ScoreRecord, Goal } from "@/types/scoretrack";

export const MOCK_RECORDS: ScoreRecord[] = [
    {
        id: "rec-1",
        testType: "IELTS",
        details: "Mock Test 1 (Reading)",
        date: "2024-03-01",
        score: 6.5,
        maxScore: 9.0,
        tags: ["Reading", "Practice"]
    },
    {
        id: "rec-2",
        testType: "IELTS",
        details: "Mock Test 2 (Full)",
        date: "2024-03-05",
        score: 7.0,
        maxScore: 9.0,
        tags: ["Full Exam"]
    },
    {
        id: "rec-3",
        testType: "TOEFL",
        details: "Integrated Speaking Drill",
        date: "2024-03-10",
        score: 24,
        maxScore: 30,
        tags: ["Speaking"]
    },
    {
        id: "rec-4",
        testType: "Mock Test",
        details: "General English Proficiency",
        date: "2024-03-12",
        score: 85,
        maxScore: 100,
        tags: ["General"]
    },
    {
        id: "rec-5",
        testType: "Cambridge",
        details: "Use of English Part 1",
        date: "2024-03-15",
        score: 8,
        maxScore: 10,
        tags: ["Use of English"]
    }
];

export const MOCK_GOALS: Goal[] = [
    {
        id: "g-1",
        testType: "IELTS",
        targetScore: 8.0,
        deadline: "2024-06-01",
        description: "Achieve band 8 for university admission."
    },
    {
        id: "g-2",
        testType: "TOEFL",
        targetScore: 100,
        deadline: "2024-05-15",
        description: "Target score for exchange program."
    }
];
