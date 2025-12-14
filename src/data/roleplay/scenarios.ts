import { RolePlayScenario } from "@/types/roleplay";

export const rolePlayScenarios: RolePlayScenario[] = [
    {
        id: "rp1",
        title: "Ordering Coffee",
        description: "Practice ordering your favorite drink and a snack at a busy cafe.",
        difficulty: "Easy",
        userRole: "Customer",
        partnerRole: "Barista",
        location: "Cafe",
        initialMessage: "Hi there! What can I get started for you today?"
    },
    {
        id: "rp2",
        title: "Job Interview",
        description: "Answer common questions for a software developer position.",
        difficulty: "Hard",
        userRole: "Candidate",
        partnerRole: "Interviewer",
        location: "Office",
        initialMessage: "Good morning. Thanks for coming in. Can you tell me a little about yourself?"
    },
    {
        id: "rp3",
        title: "Asking for Directions",
        description: "You are lost in a new city. Ask a local for help finding the train station.",
        difficulty: "Medium",
        userRole: "Tourist",
        partnerRole: "Local",
        location: "Street Corner",
        initialMessage: "Excuse me? You look a bit lost. Can I help you find something?"
    },
    {
        id: "rp4",
        title: "Returning an Item",
        description: "You bought a shirt that doesn't fit. Return it to the store.",
        difficulty: "Medium",
        userRole: "Customer",
        partnerRole: "Shop Assistant",
        location: "Clothing Store",
        initialMessage: "Hello! Did you find everything okay today, or are you making a return?"
    }
];
