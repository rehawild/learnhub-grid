import { TedTalk } from "@/types/tedtalks";

export const sampleTalks: TedTalk[] = [
    {
        id: "talk_1",
        title: "The power of vulnerability",
        speaker: "Brené Brown",
        duration: "20:19",
        level: "Advanced",
        thumbnail: "https://img.youtube.com/vi/iCvmsMzlF7o/maxresdefault.jpg",
        videoUrl: "iCvmsMzlF7o", // YouTube ID
        transcript: [
            { id: "s1", startTime: 0, endTime: 5, text: "So, I'll start with this: a couple years ago, an event planner called me because I was going to do a speaking event." },
            { id: "s2", startTime: 5, endTime: 12, text: "And she called, and she said, 'I'm really struggling with how to write about you on the little flyer.'" },
            { id: "s3", startTime: 12, endTime: 1200, text: "And I thought, 'Well, what's the struggle?' And she said, 'Well, I saw you speak, and I'm going to call you a researcher, I think, but I'm afraid if I call you a researcher, no one will come, because they'll think you're boring and irrelevant.' [End of Sample Transcript]" }
        ],
        vocabulary: [
            { id: "v1", word: "vulnerability", definition: "The quality or state of being exposed to the possibility of being attacked or harmed, either physically or emotionally.", timestamp: 0 },
            { id: "v2", word: "irrelevant", definition: "Not connected with or relevant to something.", timestamp: 15 }
        ]
    },
    {
        id: "talk_2",
        title: "How to speak so that people want to listen",
        speaker: "Julian Treasure",
        duration: "09:58",
        level: "Intermediate",
        thumbnail: "https://img.youtube.com/vi/eIho2S0ZahI/maxresdefault.jpg",
        videoUrl: "eIho2S0ZahI",
        transcript: [
            { id: "s1", startTime: 0, endTime: 4, text: "The human voice: It's the instrument we all play. It's the most powerful sound in the world, probably." },
            { id: "s2", startTime: 4, endTime: 9, text: "It's the only one that can start a war or say 'I love you.' And yet many people have the experience that when they speak, people don't listen to them." }
        ],
        vocabulary: [
            { id: "v1", word: "instrument", definition: "A tool or implement, especially one for delicate or scientific work; here, metaphorically used for the voice.", timestamp: 1 }
        ]
    },
    {
        id: "talk_3",
        title: "Inside the mind of a master procrastinator",
        speaker: "Tim Urban",
        duration: "14:03",
        level: "Intermediate",
        thumbnail: "https://img.youtube.com/vi/arj7oStGLkU/maxresdefault.jpg",
        videoUrl: "arj7oStGLkU",
        transcript: [
            { id: "s1", startTime: 0, endTime: 5, text: "So in college, I was a government major, which means I had to write a lot of papers." },
            { id: "s2", startTime: 5, endTime: 10, text: "Now, when a normal student writes a paper, they might spread the work out a little like this." }
        ],
        vocabulary: [
            { id: "v1", word: "procrastinator", definition: "A person who habitually puts off doing things.", timestamp: 0 }
        ]
    }
];
