import { Story } from "@/types/storytime";

export const sampleStories: Story[] = [
    {
        id: "lion-mouse",
        title: "The Lion and the Mouse",
        author: "Aesop",
        coverEmoji: "🦁",
        content: [
            "A Lion lay asleep in the forest, his great head resting on his paws. A timid little Mouse came upon him unexpectedly, and in her fright and haste to get away, ran across the Lion's nose. Roused from his nap, the Lion laid his huge paw angrily on the tiny creature to kill her.",
            "\"Spare me!\" begged the poor Mouse. \"Please let me go and some day I will surely repay you.\" The Lion was much amused to think that a Mouse could ever help him. But he was generous and finally let the Mouse go.",
            "Some days later, while stalking his prey in the forest, the Lion was caught in the toils of a hunter's net. Unable to free himself, he filled the forest with his angry roaring. The Mouse knew the voice and quickly found the Lion struggling in the net.",
            "Running to one of the great ropes that bound him, she gnawed it until it parted, and soon the Lion was free. \"You laughed when I said I would repay you,\" said the Mouse. \"Now you see that even a Mouse can help a Lion.\""
        ],
        questions: [
            {
                id: "q1",
                question: "Why did the Lion wake up?",
                options: ["He was hungry.", "The Mouse ran across his nose.", "He heard a hunter.", "It was morning."],
                correctAnswer: "The Mouse ran across his nose."
            },
            {
                id: "q2",
                question: "How did the Lion react initially?",
                options: ["He was happy.", "He ignored the mouse.", "He was angry and caught the mouse.", "He ran away."],
                correctAnswer: "He was angry and caught the mouse."
            },
            {
                id: "q3",
                question: "How did the Mouse save the Lion?",
                options: ["She bit the hunter.", "She gnawed the ropes.", "She called for help.", "She untied the knot."],
                correctAnswer: "She gnawed the ropes."
            }
        ]
    },
    {
        id: "tortoise-hare",
        title: "The Tortoise and the Hare",
        author: "Aesop",
        coverEmoji: "🐢",
        content: [
            "The Hare was once boasting of his speed before the other animals. \"I have never yet been beaten,\" said he, \"when I put forth my full speed. I challenge any one here to race with me.\"",
            "The Tortoise said quietly, \"I accept your challenge.\" \"That is a good joke,\" said the Hare. \"I could dance round you all the way.\"",
            "The race started. The Hare darted almost out of sight at once, but soon stopped and, to show his contempt for the Tortoise, lay down to have a nap. The Tortoise plodded on and plodded on, and when the Hare awoke from his nap, he saw the Tortoise just near the winning-post.",
            "The Hare ran his swiftest, but he could not overtake the Tortoise in time."
        ],
        questions: [
            {
                id: "q1",
                question: "What was the Hare proud of?",
                options: ["His ears", "His speed", "His tail", "His friends"],
                correctAnswer: "His speed"
            },
            {
                id: "q2",
                question: "Why did the Hare stop?",
                options: ["He was tired.", "He hurt his leg.", "To take a nap and show off.", "He got lost."],
                correctAnswer: "To take a nap and show off."
            },
            {
                id: "q3",
                question: "Who won the race?",
                options: ["The Hare", "The Tortoise", "It was a tie", "The Fox"],
                correctAnswer: "The Tortoise"
            }
        ]
    }
];
