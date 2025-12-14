import { MockExam } from "@/types/mocktests";

export const mockExams: MockExam[] = [
    {
        id: "exam-1",
        title: "General English Proficiency (A2/B1)",
        description: "A comprehensive test covering grammar, vocabulary, and reading comprehension basics.",
        durationMinutes: 30,
        difficulty: "Intermediate",
        sections: [
            {
                id: "sec-1",
                title: "Grammar & Vocabulary",
                description: "Choose the correct words to complete the sentences.",
                questions: [
                    {
                        id: "q1",
                        type: "multiple_choice",
                        text: "I ________ to the cinema yesterday.",
                        options: ["go", "went", "have gone", "was going"],
                        correctAnswer: "went",
                        points: 1
                    },
                    {
                        id: "q2",
                        type: "multiple_choice",
                        text: "She is interested ________ learning French.",
                        options: ["on", "at", "in", "for"],
                        correctAnswer: "in",
                        points: 1
                    }
                ]
            },
            {
                id: "sec-2",
                title: "Reading Comprehension",
                description: "Read the short text and answer true/false.",
                questions: [
                    {
                        id: "q3",
                        type: "true_false",
                        text: "London is the capital of France.",
                        correctAnswer: "False",
                        points: 1
                    },
                    {
                        id: "q4",
                        type: "true_false",
                        text: "Water boils at 100 degrees Celsius.",
                        correctAnswer: "True",
                        points: 1
                    }
                ]
            }
        ]
    },
    {
        id: "exam-2",
        title: "Business English Basics",
        description: "Test your knowledge of common business terms and email etiquette.",
        durationMinutes: 20,
        difficulty: "Intermediate",
        sections: [
            {
                id: "sec-3",
                title: "Business Vocabulary",
                description: "Fill in the blanks with the correct business terms.",
                questions: [
                    {
                        id: "q5",
                        type: "fill_blank",
                        text: "The CEO decided to ________ the meeting until next week. (postpone)",
                        correctAnswer: "postpone",
                        points: 2
                    }
                ]
            }
        ]
    }
];
