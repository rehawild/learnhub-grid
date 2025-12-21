import { TriviaCategory } from "@/types/trivia";

export const mediaTrivia: TriviaCategory = {
    id: "media",
    name: "Movies & Music",
    description: "Test your knowledge of pop culture.",
    icon: "🎬",
    questions: [
        {
            id: "q_m_1",
            text: "Who directed 'Inception'?",
            options: [
                { id: "a", text: "Steven Spielberg" },
                { id: "b", text: "Christopher Nolan" },
                { id: "c", text: "Quentin Tarantino" },
                { id: "d", text: "James Cameron" }
            ],
            correctOptionId: "b",
            explanation: "Christopher Nolan directed Inception, released in 2010."
        },
        {
            id: "q_m_2",
            text: "Which band released the album 'Abbey Road'?",
            options: [
                { id: "a", text: "The Rolling Stones" },
                { id: "b", text: "The Beatles" },
                { id: "c", text: "Pink Floyd" },
                { id: "d", text: "Queen" }
            ],
            correctOptionId: "b",
            explanation: "Abbey Road is the eleventh studio album by the English rock band the Beatles."
        },
        {
            id: "q_m_3",
            text: "What is the highest-grossing film of all time (unadjusted for inflation)?",
            options: [
                { id: "a", text: "Avengers: Endgame" },
                { id: "b", text: "Avatar" },
                { id: "c", text: "Titanic" },
                { id: "d", text: "Star Wars: The Force Awakens" }
            ],
            correctOptionId: "b",
            explanation: "Avatar (2009) holds the record for highest global box office earnings."
        },
        {
            id: "q_m_4",
            text: "Who played role of Harry Potter in the movies?",
            options: [
                { id: "a", text: "Elijah Wood" },
                { id: "b", text: "Daniel Radcliffe" },
                { id: "c", text: "Tom Holland" },
                { id: "d", text: "Rupert Grint" }
            ],
            correctOptionId: "b",
            explanation: "Daniel Radcliffe played the titular character in all eight films."
        },
        {
            id: "q_m_5",
            text: "Which movie won the Oscar for Best Picture in 2020?",
            options: [
                { id: "a", text: "1917" },
                { id: "b", text: "Parasite" },
                { id: "c", text: "Joker" },
                { id: "d", text: "Once Upon a Time... in Hollywood" }
            ],
            correctOptionId: "b",
            explanation: "Parasite became the first non-English language film to win Best Picture."
        }
    ]
};

export const scienceTrivia: TriviaCategory = {
    id: "science",
    name: "Science & Nature",
    description: "Questions about the physical world.",
    icon: "🧬",
    questions: [
        {
            id: "q_s_1",
            text: "What is the chemical symbol for Gold?",
            options: [
                { id: "a", text: "Gd" },
                { id: "b", text: "Au" },
                { id: "c", text: "Ag" },
                { id: "d", text: "Fe" }
            ],
            correctOptionId: "b",
            explanation: "Au comes from the Latin word for gold, 'Aurum'."
        },
        {
            id: "q_s_2",
            text: "What is the hardest natural substance on Earth?",
            options: [
                { id: "a", text: "Gold" },
                { id: "b", text: "Iron" },
                { id: "c", text: "Diamond" },
                { id: "d", text: "Platinum" }
            ],
            correctOptionId: "c",
            explanation: "Diamond is the hardest known natural mineral."
        },
        {
            id: "q_s_3",
            text: "Which planet is known as the Red Planet?",
            options: [
                { id: "a", text: "Mars" },
                { id: "b", text: "Jupiter" },
                { id: "c", text: "Saturn" },
                { id: "d", text: "Venus" }
            ],
            correctOptionId: "a",
            explanation: "Mars appears red due to iron oxide prevalent on its surface."
        },
        {
            id: "q_s_4",
            text: "What gas do plants absorb from the atmosphere for photosynthesis?",
            options: [
                { id: "a", text: "Oxygen" },
                { id: "b", text: "Carbon Dioxide" },
                { id: "c", text: "Nitrogen" },
                { id: "d", text: "Hydrogen" }
            ],
            correctOptionId: "b",
            explanation: "Plants take in Carbon Dioxide (CO2) and release Oxygen."
        },
        {
            id: "q_s_5",
            text: "What is the powerhouse of the cell?",
            options: [
                { id: "a", text: "Nucleus" },
                { id: "b", text: "Ribosome" },
                { id: "c", text: "Mitochondria" },
                { id: "d", text: "Cytoplasm" }
            ],
            correctOptionId: "c",
            explanation: "Mitochondria generate most of the chemical energy needed to power the cell."
        }
    ]
};

export const historyTrivia: TriviaCategory = {
    id: "history",
    name: "History",
    description: "Events from the past.",
    icon: "🏛️",
    questions: [
        {
            id: "q_h_1",
            text: "Who was the first President of the United States?",
            options: [
                { id: "a", text: "Thomas Jefferson" },
                { id: "b", text: "Benjamin Franklin" },
                { id: "c", text: "George Washington" },
                { id: "d", text: "Abraham Lincoln" }
            ],
            correctOptionId: "c",
            explanation: "George Washington served as the first president from 1789 to 1797."
        },
        {
            id: "q_h_2",
            text: "In which year did World War II end?",
            options: [
                { id: "a", text: "1943" },
                { id: "b", text: "1945" },
                { id: "c", text: "1947" },
                { id: "d", text: "1950" }
            ],
            correctOptionId: "b",
            explanation: "World War II ended in 1945 with the surrender of the Axis powers."
        },
        {
            id: "q_h_3",
            text: "Who painted the Mona Lisa?",
            options: [
                { id: "a", text: "Vincent van Gogh" },
                { id: "b", text: "Pablo Picasso" },
                { id: "c", text: "Leonardo da Vinci" },
                { id: "d", text: "Michelangelo" }
            ],
            correctOptionId: "c",
            explanation: "Leonardo da Vinci painted the Mona Lisa in the early 16th century."
        },
        {
            id: "q_h_4",
            text: "What was the name of the ship that sank in 1912?",
            options: [
                { id: "a", text: "Titanic" },
                { id: "b", text: "Olympic" },
                { id: "c", text: "Britannic" },
                { id: "d", text: "Lusitania" }
            ],
            correctOptionId: "a",
            explanation: "The RMS Titanic sank in 1912 after hitting an iceberg."
        },
        {
            id: "q_h_5",
            text: "Which ancient civilization built the pyramids?",
            options: [
                { id: "a", text: "Romans" },
                { id: "b", text: "Greeks" },
                { id: "c", text: "Egyptians" },
                { id: "d", text: "Mayans" }
            ],
            correctOptionId: "c",
            explanation: "The Ancient Egyptians built the pyramids as tombs for their pharaohs."
        }
    ]
};

export const triviaCategories: TriviaCategory[] = [scienceTrivia, historyTrivia, mediaTrivia];
