import { TOEFLModule } from "@/types/toeflprep";

export const toeflModules: TOEFLModule[] = [
    {
        id: "toefl-spk-1",
        title: "Integrated Speaking: Campus Situation",
        type: "speaking_integrated",
        description: "Read a short announcement, listen to a conversation, then explain the opinion stated.",
        content: {
            readingText: "University Policy Change: The university has decided to eliminate the late-night bus service. Currently, the bus runs until 2:00 AM on weekends, but starting next semester, it will stop running at 11:00 PM. The administration claims that ridership specific to these hours is too low to justify the expense of hiring drivers and maintaining the vehicles. Additionally, the university hopes to encourage students to focus more on their studies on weekends.",
            readingTimeSeconds: 45,
            listeningScript: [
                "Male Student: Did you see this announcement about the bus service?",
                "Female Student: Yeah, I did. I totally disagree with it.",
                "Male Student: Really? Why? The university says nobody uses it.",
                "Female Student: That's mostly true during the week, but on Friday and Saturday nights, it's packed! Students use it to get back from the library or from town safely.",
                "Male Student: But they said it costs too much.",
                "Female Student: Maybe, but think about the safety issue. If there's no bus, students might walk alone in the dark or pay for expensive taxis. It's not just about convenience; it's about safety.",
                "Male Student: That makes sense. What about the study part?",
                "Female Student: Oh please. Cutting the bus won't make people study more. It just makes it harder for them to get home once they're done studying at the library!"
            ],
            listeningDurationSeconds: 15, // Accelerated for demo
            question: "The woman expresses her opinion about the university's plan. State her opinion and explain the reasons she gives for holding that opinion.",
            prepTimeSeconds: 30,
            speakTimeSeconds: 60
        }
    },
    {
        id: "toefl-spk-2",
        title: "Independent Speaking: Preference",
        type: "speaking_independent",
        description: "State your personal preference between two choices.",
        content: {
            question: "Some people prefer to work in a team. Others prefer to work alone. Which do you prefer and why? Use specific details and examples in your explanation.",
            prepTimeSeconds: 15,
            speakTimeSeconds: 45
        }
    }
];
