import { PodcastEpisode } from "@/types/podcasthub";

export const samplePodcasts: PodcastEpisode[] = [
    {
        id: "pod_001",
        title: "The Coffee Break Chat",
        description: "A casual conversation about morning routines and coffee culture around the world.",
        duration: "5:30",
        level: "Intermediate",
        category: "Culture",
        audioSrc: "", // We'll simulate playback
        thumbnail: "☕",
        transcript: [
            { id: "s1", timestamp: 0, speaker: "Host", text: "Welcome back! Today we're talking about everyone's favorite morning drink: coffee." },
            { id: "s2", timestamp: 5, speaker: "Guest", text: "Thanks for having me. I actually prefer tea, but I know I'm in the minority!" },
            { id: "s3", timestamp: 12, speaker: "Host", text: "Haha, well, in Italy, asking for tea in the morning might get you a strange look." }
        ]
    },
    {
        id: "pod_002",
        title: "Tech Trends 2024",
        description: "Discussing the latest gadgets and software updates expected this year.",
        duration: "8:15",
        level: "Advanced",
        category: "Technology",
        audioSrc: "",
        thumbnail: "🤖",
        transcript: [
            { id: "s1", timestamp: 0, speaker: "Host", text: "AI is moving faster than ever. Have you seen the new models released last week?" },
            { id: "s2", timestamp: 8, speaker: "Expert", text: "Absolutely. The speed of processing has doubled, effectively changing how we code." }
        ]
    },
    {
        id: "pod_003",
        title: "Travel Tales: Japan",
        description: "Exploring the sights and sounds of Kyoto and Tokyo.",
        duration: "6:45",
        level: "Beginner",
        category: "Travel",
        audioSrc: "",
        thumbnail: "🗾",
        transcript: [
            { id: "s1", timestamp: 0, speaker: "Narrator", text: "Kyoto is famous for its beautiful temples and traditional tea houses." },
            { id: "s2", timestamp: 10, speaker: "Guide", text: "If you look to your left, you can see the Golden Pavilion reflecting in the pond." }
        ]
    }
];
