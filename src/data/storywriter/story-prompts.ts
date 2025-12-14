import { StoryGenre } from "@/types/storywriter";

export const storyGenres: StoryGenre[] = [
    {
        id: "fantasy",
        name: "Fantasy",
        description: "Magic, dragons, and quests in distant lands.",
        icon: "🐉",
        prompts: [
            {
                id: "fan_1",
                text: "You discover an ancient map tucked inside a library book.",
                elements: ["A hidden door", "A talking animal", "A spell gone wrong"]
            },
            {
                id: "fan_2",
                text: "The kingdom has lost its daylight, and you must find the Sun Stone.",
                elements: ["A mysterious lantern", "A fearful village", "A mountain peak"]
            }
        ]
    },
    {
        id: "scifi",
        name: "Sci-Fi",
        description: "Robots, space travel, and future technologies.",
        icon: "🚀",
        prompts: [
            {
                id: "sci_1",
                text: "Your robot companion suddenly starts acting distinctly human.",
                elements: ["A glitchy screen", "An old memory chip", "A secret code"]
            },
            {
                id: "sci_2",
                text: "You wake up on a spaceship with no memory of how you got there.",
                elements: ["A flashing red light", "Zero gravity", "A strange message"]
            }
        ]
    },
    {
        id: "mystery",
        name: "Mystery",
        description: "Puzzles, detectives, and secrets to uncover.",
        icon: "🕵️‍♀️",
        prompts: [
            {
                id: "mys_1",
                text: "The famous town statue has vanished overnight.",
                elements: ["Muddy footprints", "A torn note", "A suspicious stranger"]
            },
            {
                id: "mys_2",
                text: "You receive a letter dated 50 years in the future.",
                elements: ["A faded stamp", "A warning", "A familiar signature"]
            }
        ]
    }
];
