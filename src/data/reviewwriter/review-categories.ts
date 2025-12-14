import { ReviewCategory } from "@/types/reviewwriter";

export const reviewCategories: ReviewCategory[] = [
    {
        id: "book",
        label: "Book",
        icon: "BookOpen",
        description: "Share your thoughts on a recent read.",
        placeholderTitle: "Book Title",
        tips: ["Discuss the characters.", "How was the pacing?", "Did you like the ending?"]
    },
    {
        id: "movie",
        label: "Movie",
        icon: "Film",
        description: "Critique a film you've watched.",
        placeholderTitle: "Movie Title",
        tips: ["Comment on the acting.", "How were the visuals?", "Was the plot engaging?"]
    },
    {
        id: "product",
        label: "Product",
        icon: "ShoppingBag",
        description: "Review a gadget, toy, or item.",
        placeholderTitle: "Product Name",
        tips: ["Is it durable?", "Is it good value for money?", "Who is this for?"]
    },
    {
        id: "restaurant",
        label: "Restaurant",
        icon: "Utensils",
        description: "Describe a dining experience.",
        placeholderTitle: "Restaurant Name",
        tips: ["How was the service?", "Describe your favorite dish.", "Comment on the atmosphere."]
    },
    {
        id: "game",
        label: "Game",
        icon: "Gamepad2",
        description: "Review a video game or board game.",
        placeholderTitle: "Game Title",
        tips: ["Is the gameplay fun?", "How are the graphics?", "Is it challenging?"]
    }
];
