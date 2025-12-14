import { ClauseDeck } from "@/types/clausebuilder";

export const sampleClauseDecks: ClauseDeck[] = [
    {
        id: "conditionals",
        name: "Conditionals (If/Unless)",
        description: "Master Zero, First, Second, and Third conditionals",
        questions: [
            {
                id: "cond1",
                sentenceStart: "I will call you...",
                correctClause: "...if I arrive late.",
                options: ["...if I arrive late.", "...unless I arrived late.", "...if I will arrive late."],
                explanation: "First conditional: 'Will' in result clause requires Present Simple in the 'if' clause.",
                type: "conditional",
            },
            {
                id: "cond2",
                sentenceStart: "If I won the lottery...",
                correctClause: "...I would buy a house.",
                options: ["...I would buy a house.", "...I will buy a house.", "...I bought a house."],
                explanation: "Second conditional: Past Simple in 'if' clause requires 'would' in result clause.",
                type: "conditional",
            },
            {
                id: "cond3",
                sentenceStart: "You won't pass the exam...",
                correctClause: "...unless you study.",
                options: ["...unless you study.", "...if you don't study.", "...unless you don't study."],
                explanation: "'Unless' means 'if not'. 'Unless you study' = 'If you don't study'.",
                type: "conditional",
            },
        ],
    },
    {
        id: "relatives",
        name: "Relative Clauses",
        description: "Who, Which, That, Whose",
        questions: [
            {
                id: "rel1",
                sentenceStart: "That is the man...",
                correctClause: "...who stole my bag.",
                options: ["...who stole my bag.", "...which stole my bag.", "...whose stole my bag."],
                explanation: "Use 'who' for people.",
                type: "relative",
            },
            {
                id: "rel2",
                sentenceStart: "I lost the book...",
                correctClause: "...that you gave me.",
                options: ["...that you gave me.", "...who you gave me.", "...where you gave me."],
                explanation: "Use 'that' or 'which' for things.",
                type: "relative",
            },
            {
                id: "rel3",
                sentenceStart: "This is the restaurant...",
                correctClause: "...where we met.",
                options: ["...where we met.", "...which we met.", "...that we met."],
                explanation: "Use 'where' for places.",
                type: "relative",
            },
        ],
    },
    {
        id: "connectors",
        name: "Complex Connectors",
        description: "Although, Despite, Because, So",
        questions: [
            {
                id: "conn1",
                sentenceStart: "He went to work...",
                correctClause: "...although he was sick.",
                options: ["...although he was sick.", "...despite he was sick.", "...because he was sick."],
                explanation: "'Although' introduces a contrast. 'Despite' must be followed by a noun/-ing.",
                type: "conjunction",
            },
            {
                id: "conn2",
                sentenceStart: "It was raining heavily,...",
                correctClause: "...so we stayed inside.",
                options: ["...so we stayed inside.", "...because we stayed inside.", "...but we stayed inside."],
                explanation: "'So' introduces a result.",
                type: "conjunction",
            },
        ],
    },
];
