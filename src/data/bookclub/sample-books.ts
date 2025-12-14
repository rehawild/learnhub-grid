import { Book } from "@/types/bookclub";

export const sampleBooks: Book[] = [
    {
        id: "pride-and-prejudice",
        title: "Pride and Prejudice",
        author: "Jane Austen",
        coverEmoji: "👒",
        description: "A classic novel of manners, upbringing, and marriage in early 19th-century England.",
        difficulty: "Medium",
        themes: ["Social Class", "Marriage", "Pride"],
        summary: [
            "The story follows Elizabeth Bennet, the second of five daughters of a country gentleman.",
            "Her mother is desperate to see them all married to wealthy men to secure their futures.",
            "When the wealthy Mr. Bingley moves nearby, he falls for the eldest daughter, Jane.",
            "However, his friend, the proud and aloof Mr. Darcy, initially dismisses Elizabeth, sparking a clash of wits and misunderstandings."
        ],
        questions: [
            {
                id: "q1",
                question: "What primary emotion drives Mr. Darcy's initial behavior towards Elizabeth?",
                type: "character",
                options: ["Shyness", "Pride", "Anger", "Jealousy"],
                correctAnswer: "Pride",
                explanation: "Darcy's pride in his social standing makes him initially dismissive of Elizabeth and her family's lower connections."
            },
            {
                id: "q2",
                question: "Which theme is most centrally criticized through Mrs. Bennet's character?",
                type: "theme",
                options: ["Political ambition", "Marriage for security", "Religious devotion", "Artistic talent"],
                correctAnswer: "Marriage for security",
                explanation: "Mrs. Bennet's obsession with marrying off her daughters highlights the societal pressure on women to marry for economic security rather than love."
            }
        ]
    },
    {
        id: "1984",
        title: "1984",
        author: "George Orwell",
        coverEmoji: "👁️",
        description: "A dystopian social science fiction novel and cautionary tale about the dangers of totalitarianism.",
        difficulty: "Hard",
        themes: ["Totalitarianism", "Surveillance", "Truth"],
        summary: [
            "Winston Smith is a low-ranking member of the Party in London, part of the nation of Oceania.",
            "Everywhere, the Party watches through telescreens, and the figurehead Big Brother is worshipped.",
            "Winston secretly hates the Party and dreams of rebellion.",
            "He begins a forbidden affair with Julia and keeps a diary, illegal acts of 'thoughtcrime'."
        ],
        questions: [
            {
                id: "q1",
                question: "What is the purpose of 'Newspeak' in the novel?",
                type: "theme",
                options: ["To expand vocabulary", "To limit thought", "To improve communication", "To teach history"],
                correctAnswer: "To limit thought",
                explanation: "Newspeak is designed to diminish the range of thought by cutting the choice of words, making subversive concepts impossible to articulate."
            },
            {
                id: "q2",
                question: "Why does Winston keep a diary?",
                type: "character",
                options: ["To publish a book", "To practice writing", "To preserve his sanity", "To send to O'Brien"],
                correctAnswer: "To preserve his sanity",
                explanation: "Writing in the diary is Winston's way of asserting his individual memory and truth against the Party's constant rewriting of history."
            }
        ]
    },
    {
        id: "great-gatsby",
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        coverEmoji: "🥂",
        description: "A tragedy exploring the decadence and excess of the Jazz Age in America.",
        difficulty: "Medium",
        themes: ["The American Dream", "Wealth", "Love"],
        summary: [
            "Nick Carraway moves to New York in the summer of 1922 and rents a house next to the mysterious millionaire Jay Gatsby.",
            "Gatsby throws lavish parties every weekend, hoping to attract his former love, Daisy Buchanan.",
            "It recounts Gatsby's tragic pursuit of the American Dream and his obsession with the past.",
            "Ultimately, the novel reveals the hollowness of the upper class."
        ],
        questions: [
            {
                id: "q1",
                question: "What does the 'green light' symbolize for Gatsby?",
                type: "theme",
                options: ["Money", "Jealousy", "Daisy and his future", "Nature"],
                correctAnswer: "Daisy and his future",
                explanation: "The green light at the end of Daisy's dock represents Gatsby's hopes and dreams for a future with her."
            },
            {
                id: "q2",
                question: "How is Tom Buchanan characterized?",
                type: "character",
                options: ["Kind and generous", "Aggressive and wealthy", "Quiet and studious", "Poor and humble"],
                correctAnswer: "Aggressive and wealthy",
                explanation: "Tom is depicted as physically imposing, immensely wealthy, and arrogant, representing the 'old money' establishment."
            }
        ]
    }
];
