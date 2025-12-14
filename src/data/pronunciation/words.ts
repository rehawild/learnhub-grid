import { PronunciationWord } from "@/types/pronunciation";

export const pronunciationWords: PronunciationWord[] = [
    {
        id: "w1",
        word: "Though",
        phonetic: "/ðoʊ/",
        difficulty: "Medium",
        category: "Consonants",
        tips: "Focus on the voiced 'th' sound. It should be soft and buzzy. Do not confuse it with 'd' or 'z'."
    },
    {
        id: "w2",
        word: "Through",
        phonetic: "/θruː/",
        difficulty: "Medium",
        category: "Consonants",
        tips: "Use the unvoiced 'th' sound, like blowing air through your teeth. Then transition to the 'r' sound."
    },
    {
        id: "w3",
        word: "Colonel",
        phonetic: "/ˈkɜːrnəl/",
        difficulty: "Hard",
        category: "Clusters",
        tips: "This is a tricky one! It sounds exactly like 'kernel'. ignore the 'l' in the spelling."
    },
    {
        id: "w4",
        word: "Squirrel",
        phonetic: "/ˈskwɜːrəl/",
        difficulty: "Hard",
        category: "Clusters",
        tips: "Start with 'skw', then curl your tongue back for the 'rr' sound. It rhymes with 'girl'."
    },
    {
        id: "w5",
        word: "Schedule",
        phonetic: "/ˈʃedʒuːl/",
        difficulty: "Medium",
        category: "Consonants",
        tips: "In American English, it starts with a 'sk' sound. In British English, it's often 'sheh-dyool'."
    },
    {
        id: "w6",
        word: "Iron",
        phonetic: "/ˈaɪərn/",
        difficulty: "Easy",
        category: "Vowels",
        tips: "The 'r' is very subtle. It sounds more like 'I-earn'."
    }
];

export const categories = ["All", "Vowels", "Consonants", "Clusters", "Intonation"];
