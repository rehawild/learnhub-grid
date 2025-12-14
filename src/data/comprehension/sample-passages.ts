import { CompPassage } from "@/types/comprehension";

export const samplePassages: CompPassage[] = [
    {
        id: "photosynthesis",
        title: "The Process of Photosynthesis",
        topic: "Biology",
        difficulty: "Level 2",
        content: [
            "Photosynthesis is the process by which green plants, algae, and some bacteria convert light energy into chemical energy. This energy is stored in the bonds of sugar molecules such as glucose, which organisms use for fuel.",
            "The process usually takes place in the chloroplasts of plant cells. These specialized organelles contain chlorophyll, a green pigment that absorbs light energy. Carbon dioxide from the air and water from the soil are the raw materials used in this reaction.",
            "Oxygen is released as a byproduct of photosynthesis. This is crucial for life on Earth, as it replenishes the oxygen in the atmosphere that animals and humans need to breathe."
        ],
        questions: [
            {
                id: "q1",
                type: "main-idea",
                question: "What is the primary purpose of photosynthesis described in the passage?",
                options: [
                    "To release oxygen into the atmosphere",
                    "To convert light energy into chemical energy",
                    "To absorb water from the soil",
                    "To create chlorophyll in plant cells"
                ],
                correctAnswer: "To convert light energy into chemical energy",
                explanation: "The first paragraph states that photosynthesis converts light energy into chemical energy stored in sugars."
            },
            {
                id: "q2",
                type: "detail",
                question: "Where does photosynthesis usually occur?",
                options: ["In the roots", "In the chloroplasts", "In the soil", "In the air"],
                correctAnswer: "In the chloroplasts",
                explanation: "The second paragraph explicitly states that the process usually takes place in the chloroplasts."
            },
            {
                id: "q3",
                type: "inference",
                question: "Why is photosynthesis important for humans?",
                options: [
                    "It produces the carbon dioxide we exhale",
                    "It creates soil for farming",
                    "It produces the oxygen we breathe",
                    "It removes bacteria from the air"
                ],
                correctAnswer: "It produces the oxygen we breathe",
                explanation: "The text mentions oxygen is a byproduct crucial for life because animals and humans need it to breathe."
            }
        ]
    },
    {
        id: "ancient-egypt",
        title: "Pyramids of Giza",
        topic: "History",
        difficulty: "Level 1",
        content: [
            "The Pyramids of Giza are among the most famous structures in the world. Built over 4,500 years ago, they served as massive tombs for Egyptian pharaohs. The Great Pyramid, built for Khufu, is the largest of them all.",
            "The construction of the pyramids required incredible engineering skills and the labor of thousands of workers. For centuries, historians debated how these massive stones were moved. Recent evidence suggests that the workers used wet sand to reduce friction while dragging the stones on sleds.",
            "Beyond their size, the pyramids are aligned with remarkable precision to the cardinal points of the compass. This suggests that the Ancient Egyptians had a deep understanding of astronomy and mathematics."
        ],
        questions: [
            {
                id: "q1",
                type: "main-idea",
                question: "What is the main topic of this passage?",
                options: [
                    "The life of Pharaoh Khufu",
                    "The engineering and significance of the Giza Pyramids",
                    "How to move heavy stones on sand",
                    "The geography of Ancient Egypt"
                ],
                correctAnswer: "The engineering and significance of the Giza Pyramids",
                explanation: "The passage discusses the Pyramids' history, construction methods, and alignment."
            },
            {
                id: "q2",
                type: "detail",
                question: "What technique might have been used to move the stones?",
                options: ["Wooden wheels", "Wet sand", "Iron cranes", "River boats"],
                correctAnswer: "Wet sand",
                explanation: "The text mentions recent evidence suggests workers used wet sand to reduce friction."
            }
        ]
    },
    {
        id: "internet-privacy",
        title: "Data Privacy in the Digital Age",
        topic: "Technology",
        difficulty: "Level 3",
        content: [
            "As we spend more of our lives online, the issue of data privacy has become increasingly complex. Every click, like, and share generates a digital footprint that companies use to build detailed profiles of users. These profiles are often sold to advertisers to target ads with uncanny accuracy.",
            "While personalized recommendations can be convenient, they raise concerns about surveillance and manipulation. Governments around the world are enacting laws, such as the GDPR in Europe, to give individuals more control over their personal information.",
            "However, technology moves faster than legislation. Emerging technologies like facial recognition/AI add new layers to the debate, forcing us to ask: how much privacy are we willing to sacrifice for convenience?"
        ],
        questions: [
            {
                id: "q1",
                type: "inference",
                question: "What does the author imply about current privacy laws?",
                options: [
                    "They are fully effective and sufficient",
                    "They are unnecessary because companies are responsible",
                    "They struggle to keep up with rapid technological changes",
                    "They are too strict and hinder innovation"
                ],
                correctAnswer: "They struggle to keep up with rapid technological changes",
                explanation: "The passage states 'technology moves faster than legislation', implying laws lag behind."
            },
            {
                id: "q2",
                type: "vocab",
                question: "In this context, what does 'uncanny' mean?",
                options: ["Poor", "Strange or mysterious in an unsettling way", "Random", "Helpful"],
                correctAnswer: "Strange or mysterious in an unsettling way",
                explanation: "Uncanny accuracy suggests the targeting is so precise it feels weird or unsettling."
            }
        ]
    }
];
