import { SlangCategory } from "@/types/slangschool";

export const slangCategories: SlangCategory[] = [
    {
        id: "gen-z",
        title: "Gen Z & Digital Lingo",
        description: "Decoding the language of social media and the next generation.",
        icon: "📱",
        terms: [
            {
                id: "s1",
                term: "Cap / No Cap",
                category: "Gen Z",
                standardEnglish: "Lying / Truthfully",
                meaning: "Used to indicate that someone is lying (cap) or telling the truth (no cap).",
                example: "That was the best burger I've ever had, no cap.",
                distractors: ["Exaggerating", "Kidding", "Bragging"]
            },
            {
                id: "s2",
                term: "Rent Free",
                category: "Gen Z",
                standardEnglish: "Obsessively",
                meaning: "When something or someone takes up all your thoughts without you wanting them to.",
                example: "That song has been living in my head rent free all week.",
                distractors: ["For free", "Suddenly", "Quietly"]
            },
            {
                id: "s3",
                term: "Bet",
                category: "Gen Z",
                standardEnglish: "Agreement / Approval",
                meaning: "Used to express agreement, confirmation, or 'Challenge accepted'.",
                example: "A: 'Want to go to the movies?' B: 'Bet.'",
                distractors: ["Gambling", "Maybe", "Later"]
            }
        ]
    },
    {
        id: "british",
        title: "British Pub & Street",
        description: "Understand the local 'banter' and expressions from across the UK.",
        icon: "🇬🇧",
        terms: [
            {
                id: "s4",
                term: "Knackered",
                category: "British",
                standardEnglish: "Extremely Tired",
                meaning: "Feeling completely exhausted after a long day or hard work.",
                example: "I'm absolutely knackered after that gym session.",
                distractors: ["Angry", "Bored", "Confused"]
            },
            {
                id: "s5",
                term: "Gutted",
                category: "British",
                standardEnglish: "Deeply Disappointed",
                meaning: "Feeling very sad or disappointed about something.",
                example: "I was gutted when I found out the concert was cancelled.",
                distractors: ["Surprised", "Excited", "Nervous"]
            },
            {
                id: "s6",
                term: "Chuffed",
                category: "British",
                standardEnglish: "Very Pleased",
                meaning: "Feeling very proud or happy about an achievement.",
                example: "He was really chuffed with his exam results.",
                distractors: ["Annoyed", "Jealous", "Worried"]
            }
        ]
    },
    {
        id: "australian",
        title: "Aussie Outback & Surf",
        description: "Unique and colorful expressions from 'Down Under'.",
        icon: "🇦🇺",
        terms: [
            {
                id: "s7",
                term: "Arvo",
                category: "Australian",
                standardEnglish: "Afternoon",
                meaning: "The period of time between noon and evening.",
                example: "Let's meet up this arvo for a swim.",
                distractors: ["Tomorrow", "Morning", "Evening"]
            },
            {
                id: "s8",
                term: "Fair Dinkum",
                category: "Australian",
                standardEnglish: "Genuine / Honest",
                meaning: "Used to declare that something is true or authentic.",
                example: "That's a fair dinkum Aussie barbecue right there!",
                distractors: ["Expensive", "Dangerous", "Loud"]
            },
            {
                id: "s9",
                term: "Barbie",
                category: "Australian",
                standardEnglish: "Barbecue",
                meaning: "A meal cooked outdoors on a grill.",
                example: "Throw another shrimp on the barbie!",
                distractors: ["Market", "Holiday", "Breakfast"]
            }
        ]
    }
];
