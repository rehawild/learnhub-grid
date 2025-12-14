import { AccentRegion } from "@/types/accenttrainer";

export const accentRegions: AccentRegion[] = [
    {
        id: "us_general",
        name: "American (General)",
        flag: "🇺🇸",
        description: "The standard accent often heard in US media.",
        characteristics: ["Rhotic 'r' (pronounced)", "Flapped 't' (water -> wader)", "Short 'o' (lot -> laht)"],
        examples: [
            { id: "us1", phrase: "Water bottle", phonetic: "/ˈwɔːtər ˈbɑːtl/", audioSrc: "", tip: "Turn the 't' in water into a soft 'd' sound." },
            { id: "us2", phrase: "I can't do it", phonetic: "/aɪ kænt duː ɪt/", audioSrc: "", tip: "The 'a' in 'can't' is flat like 'cat'." }
        ]
    },
    {
        id: "uk_rp",
        name: "British (RP)",
        flag: "🇬🇧",
        description: "Received Pronunciation, the standard accent of Southern England.",
        characteristics: ["Non-rhotic 'r' (dropped at ends)", "Clear 't' sounds", "Long 'a' (bath -> bahth)"],
        examples: [
            { id: "uk1", phrase: "Water bottle", phonetic: "/ˈwɔːtə ˈbɒtl/", audioSrc: "", tip: "Drop the 'r' at the end of water. Enunciate the 't'." },
            { id: "uk2", phrase: "I can't do it", phonetic: "/aɪ kɑːnt duː ɪt/", audioSrc: "", tip: "Use a long 'ah' sound for 'can't'." }
        ]
    },
    {
        id: "au_general",
        name: "Australian",
        flag: "🇦🇺",
        description: "A distinctive blend, known for vowel shifts and rising intonation.",
        characteristics: ["Non-rhotic", "Vowels shift (day -> die)", "Rising inflection"],
        examples: [
            { id: "au1", phrase: "Good day, mate", phonetic: "/ɡʊd deɪ meɪt/", audioSrc: "", tip: "The 'a' in day sounds almost like 'eye'." },
            { id: "au2", phrase: "No worries", phonetic: "/nəʊ ˈwʌriz/", audioSrc: "", tip: "Relax your jaw and don't pronounce the 'r' too hard." }
        ]
    },
    {
        id: "in_general",
        name: "Indian",
        flag: "🇮🇳",
        description: "Characterized by distinct rhythm and retroflex consonants.",
        characteristics: ["Retroflex 't' and 'd'", "Musical intonation", "syllable-timed rhythm"],
        examples: [
            { id: "in1", phrase: "What is the time?", phonetic: "/wɒt ɪz ðə taɪm/", audioSrc: "", tip: "Pronounce the 't' clearly and slightly further back." },
            { id: "in2", phrase: "Please do the needful", phonetic: "/pliːz duː ðə ˈniːdfʊl/", audioSrc: "", tip: "Focus on a steady rhythm for each syllable." }
        ]
    }
];
