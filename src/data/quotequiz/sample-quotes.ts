import { QuoteCategory } from "@/types/quotequiz";

export const sampleQuotes: QuoteCategory[] = [
    {
        id: "literature",
        title: "Literary Giants",
        description: "Identify the famous authors behind these timeless lines.",
        icon: "📚",
        quotes: [
            {
                id: "lit_1",
                text: "It was the best of times, it was the worst of times.",
                author: "Charles Dickens",
                source: "A Tale of Two Cities",
                options: ["Charles Dickens", "Jane Austen", "Mark Twain", "Leo Tolstoy"],
                correctAnswer: "Charles Dickens"
            },
            {
                id: "lit_2",
                text: "All happy families are alike; each unhappy family is unhappy in its own way.",
                author: "Leo Tolstoy",
                source: "Anna Karenina",
                options: ["Fyodor Dostoevsky", "Leo Tolstoy", "Anton Chekhov", "Vladimir Nabokov"],
                correctAnswer: "Leo Tolstoy"
            },
            {
                id: "lit_3",
                text: "To be, or not to be, that is the question.",
                author: "William Shakespeare",
                source: "Hamlet",
                options: ["Christopher Marlowe", "William Shakespeare", "Ben Jonson", "John Milton"],
                correctAnswer: "William Shakespeare"
            }
        ]
    },
    {
        id: "history",
        title: "Historical Voices",
        description: "Match the quote to the historical figure.",
        icon: "🏛️",
        quotes: [
            {
                id: "hist_1",
                text: "I have a dream.",
                author: "Martin Luther King Jr.",
                options: ["Malcolm X", "Martin Luther King Jr.", "John F. Kennedy", "Barack Obama"],
                correctAnswer: "Martin Luther King Jr."
            },
            {
                id: "hist_2",
                text: "The only thing we have to fear is fear itself.",
                author: "Franklin D. Roosevelt",
                options: ["Winston Churchill", "Franklin D. Roosevelt", "Harry S. Truman", "Theodore Roosevelt"],
                correctAnswer: "Franklin D. Roosevelt"
            },
            {
                id: "hist_3",
                text: "Give me liberty, or give me death!",
                author: "Patrick Henry",
                options: ["Thomas Jefferson", "Patrick Henry", "George Washington", "Benjamin Franklin"],
                correctAnswer: "Patrick Henry"
            }
        ]
    },
    {
        id: "movies",
        title: "Movie Magic",
        description: "Guess the movie or character from the quote.",
        icon: "🎬",
        quotes: [
            {
                id: "mov_1",
                text: "May the Force be with you.",
                author: "Star Wars",
                options: ["Star Trek", "Star Wars", "Battlestar Galactica", "Avatar"],
                correctAnswer: "Star Wars"
            },
            {
                id: "mov_2",
                text: "Here's looking at you, kid.",
                author: "Casablanca",
                options: ["Gone with the Wind", "Casablanca", "Citizen Kane", "The Maltese Falcon"],
                correctAnswer: "Casablanca"
            },
            {
                id: "mov_3",
                text: "You're gonna need a bigger boat.",
                author: "Jaws",
                options: ["Titanic", "Jaws", "Moby Dick", "The Perfect Storm"],
                correctAnswer: "Jaws"
            }
        ]
    }
];
