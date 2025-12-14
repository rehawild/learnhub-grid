import { Song } from "@/types/songlyrics";

export const demoSongs: Song[] = [
    {
        id: "song_1",
        title: "Imagine Peace",
        artist: "The Dreamers",
        genre: "Pop Ballad",
        difficulty: "Easy",
        coverArt: "🕊️",
        audioSrc: "",
        lyrics: [
            { id: "l1", text: "Imagine there's no heaven", gaps: [{ word: "heaven", index: 3 }], startTime: 0 },
            { id: "l2", text: "It's easy if you try", gaps: [{ word: "easy", index: 1 }], startTime: 5 },
            { id: "l3", text: "No hell below us", gaps: [{ word: "below", index: 2 }], startTime: 10 },
            { id: "l4", text: "Above us only sky", gaps: [{ word: "only", index: 2 }], startTime: 15 }
        ]
    },
    {
        id: "song_2",
        title: "Walking on Sunshine",
        artist: "Waves & Rays",
        genre: "Upbeat Pop",
        difficulty: "Medium",
        coverArt: "☀️",
        audioSrc: "",
        lyrics: [
            { id: "l1", text: "I'm walking on sunshine, whoa", gaps: [{ word: "walking", index: 1 }], startTime: 0 },
            { id: "l2", text: "I'm walking on sunshine, whoa", gaps: [{ word: "sunshine", index: 3 }], startTime: 4 },
            { id: "l3", text: "And don't it feel good", gaps: [{ word: "feel", index: 3 }], startTime: 8 },
            { id: "l4", text: "Hey, alright now", gaps: [{ word: "alright", index: 1 }], startTime: 12 }
        ]
    },
    {
        id: "song_3",
        title: "Yesterday's Shadow",
        artist: "Melancholy Boys",
        genre: "Acoustic",
        difficulty: "Hard",
        coverArt: "🍂",
        audioSrc: "",
        lyrics: [
            { id: "l1", text: "Yesterday, all my troubles seemed so far away", gaps: [{ word: "troubles", index: 3 }, { word: "far", index: 6 }], startTime: 0 },
            { id: "l2", text: "Now it looks as though they're here to stay", gaps: [{ word: "looks", index: 2 }, { word: "stay", index: 8 }], startTime: 6 },
            { id: "l3", text: "Oh, I believe in yesterday", gaps: [{ word: "believe", index: 2 }], startTime: 12 }
        ]
    }
];
