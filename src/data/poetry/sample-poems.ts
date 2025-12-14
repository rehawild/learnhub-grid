import { Poem } from "@/types/poetry";

export const samplePoems: Poem[] = [
    {
        id: "road-not-taken",
        title: "The Road Not Taken",
        author: "Robert Frost",
        theme: "Choices & Regret",
        tags: ["Nature", "Philosophy"],
        lines: [
            "Two roads diverged in a yellow wood,",
            "And sorry I could not travel both",
            "And be one traveler, long I stood",
            "And looked down one as far as I could",
            "To where it bent in the undergrowth;",
            "",
            "Then took the other, as just as fair,",
            "And having perhaps the better claim,",
            "Because it was grassy and wanted wear;",
            "Though as for that the passing there",
            "Had worn them really about the same,"
        ],
        questions: [
            {
                id: "q1",
                question: "What is the main metaphor of the poem?",
                options: ["A walk in the park", "Making life choices", "Getting lost in the woods", "Building a road"],
                correctAnswer: "Making life choices",
                explanation: "The diverging roads symbolize the choices we make in life and how they shape our future."
            },
            {
                id: "q2",
                question: "What does 'yellow wood' suggest about the setting?",
                options: ["Ideally Summer", "It is Autumn", "It is Winter", "It is Spring"],
                correctAnswer: "It is Autumn",
                explanation: "Yellow leaves are characteristic of Autumn, often symbolizing change or the later years of something."
            }
        ]
    },
    {
        id: "hope-is-the-thing",
        title: "Hope is the thing with feathers",
        author: "Emily Dickinson",
        theme: "Resilience",
        tags: ["Hope", "Nature"],
        lines: [
            "Hope is the thing with feathers -",
            "That perches in the soul -",
            "And sings the tune without the words -",
            "And never stops - at all -",
            "",
            "And sweetest - in the Gale - is heard -",
            "And sore must be the storm -",
            "That could abash the little Bird",
            "That kept so many warm -"
        ],
        questions: [
            {
                id: "q1",
                question: "How is 'Hope' personified in this poem?",
                options: ["As a storm", "As a bird", "As a song", "As a feather"],
                correctAnswer: "As a bird",
                explanation: "Dickinson describes hope as a 'thing with feathers' that 'perches' and 'sings', characteristics of a bird."
            },
            {
                id: "q2",
                question: "When is the bird's song 'sweetest'?",
                options: ["In the Gale (storm)", "In the Summer", "When it is fed", "When it is quiet"],
                correctAnswer: "In the Gale (storm)",
                explanation: "The poem says 'sweetest - in the Gale - is heard', meaning hope is most powerful in difficult times."
            }
        ]
    },
    {
        id: "daffodils",
        title: "I Wandered Lonely as a Cloud",
        author: "William Wordsworth",
        theme: "Nature & Memory",
        tags: ["Nature", "Beauty"],
        lines: [
            "I wandered lonely as a cloud",
            "That floats on high o'er vales and hills,",
            "When all at once I saw a crowd,",
            "A host, of golden daffodils;",
            "Beside the lake, beneath the trees,",
            "Fluttering and dancing in the breeze."
        ],
        questions: [
            {
                id: "q1",
                question: "What figure of speech is 'lonely as a cloud'?",
                options: ["Metaphor", "Simile", "Alliteration", "Hyperbole"],
                correctAnswer: "Simile",
                explanation: "A simile compares two things using 'like' or 'as'. Here, the speaker compares their loneliness to a cloud."
            },
            {
                id: "q2",
                question: "What human action are the daffodils doing?",
                options: ["Sleeping", "Dancing", "Singing", "Walking"],
                correctAnswer: "Dancing",
                explanation: "The poem describes them as 'Fluttering and dancing', attributing human movement to the flowers (Personification)."
            }
        ]
    }
];
