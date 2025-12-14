import { ClueLevel } from "@/types/contextclues";

export const sampleClues: ClueLevel[] = [
    {
        id: "beginner",
        name: "Word Detective",
        description: "Start your journey by deducing meanings of common but tricky words.",
        difficulty: "Beginner",
        questions: [
            {
                id: "beg_1",
                sentence: "The *gigantic* elephant towered over the small cars in the parade.",
                targetWord: "gigantic",
                options: ["Tiny", "Huge", "Colorful", "Fast"],
                correctAnswer: "Huge",
                hint: "Contrast it with 'small cars'."
            },
            {
                id: "beg_2",
                sentence: "She was *elated* when she found out she won the contest, jumping for joy.",
                targetWord: "elated",
                options: ["Sad", "Bored", "Very happy", "Tired"],
                correctAnswer: "Very happy",
                hint: "Her action 'jumping for joy' is a clue."
            },
            {
                id: "beg_3",
                sentence: "The desert is *arid*, so very few plants can survive there without water.",
                targetWord: "arid",
                options: ["Dry", "Cold", "Wet", "Crowded"],
                correctAnswer: "Dry",
                hint: "Think about 'without water'."
            }
        ]
    },
    {
        id: "intermediate",
        name: "Context Captain",
        description: "Challenge yourself with more sophisticated vocabulary.",
        difficulty: "Intermediate",
        questions: [
            {
                id: "int_1",
                sentence: "The student's *diligent* study habits earned him top marks in the class.",
                targetWord: "diligent",
                options: ["Lazy", "Hard-working", "Careless", "Lucky"],
                correctAnswer: "Hard-working",
                hint: "It leads to 'top marks'."
            },
            {
                id: "int_2",
                sentence: "Though the movie was long, the plot was so *riveting* that no one left their seats.",
                targetWord: "riveting",
                options: ["Boring", "Confusing", "Engaging", "Slow"],
                correctAnswer: "Engaging",
                hint: "If no one left, they were interested."
            },
            {
                id: "int_3",
                sentence: "The fog was so *dense* that I couldn't see my hand in front of my face.",
                targetWord: "dense",
                options: ["Light", "Thick", "Smart", "Empty"],
                correctAnswer: "Thick",
                hint: "Visibility was zero."
            }
        ]
    },
    {
        id: "advanced",
        name: "Vocabulary Virtuoso",
        description: "Master complex words using subtle hints.",
        difficulty: "Advanced",
        questions: [
            {
                id: "adv_1",
                sentence: "His *benevolent* nature was evident in his constant volunteering and donations.",
                targetWord: "benevolent",
                options: ["Greedy", "Kind", "Angry", "Shy"],
                correctAnswer: "Kind",
                hint: "Volunteering and donating are kind acts."
            },
            {
                id: "adv_2",
                sentence: "The politician gave an *ambiguous* answer, leaving everyone unsure of his true stance.",
                targetWord: "ambiguous",
                options: ["Clear", "Unclear", "Loud", "Short"],
                correctAnswer: "Unclear",
                hint: "People were 'unsure'."
            },
            {
                id: "adv_3",
                sentence: "Despite the chaos around him, he remained *placid* and focused on his work.",
                targetWord: "placid",
                options: ["Calm", "Upset", "Noisy", "Fearful"],
                correctAnswer: "Calm",
                hint: "Contrast with 'chaos'."
            }
        ]
    }
];
