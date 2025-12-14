import { PhoneScenario } from "@/types/phoneenglish";

export const phoneScenarios: PhoneScenario[] = [
    {
        id: "ph1",
        title: "Table Reservation",
        description: "Call to book a table at a busy Italian restaurant.",
        difficulty: "Easy",
        context: "You are planning a dinner date.",
        objective: "Book a table for 2 people at 8 PM this Friday.",
        script: [] // In a real app, this would be populated or fetched
    },
    {
        id: "ph2",
        title: "IT Support",
        description: "Report a problem with your internet connection.",
        difficulty: "Medium",
        context: "Your internet has been down for 2 hours.",
        objective: "Get a technician scheduled.",
        script: []
    },
    {
        id: "ph3",
        title: "Medical Appointment",
        description: "Schedule a check-up with your doctor.",
        difficulty: "Easy",
        context: "You have a mild headache.",
        objective: "Book the earliest available slot.",
        script: []
    },
    {
        id: "ph4",
        title: "Client Call",
        description: "Discuss changes to the project timeline.",
        difficulty: "Hard",
        context: "The project is delayed by 1 week.",
        objective: "Explain the delay and get approval.",
        script: []
    }
];
