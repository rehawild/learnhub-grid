import { SmallTalkTopic } from "@/types/smalltalk";

export const smallTalkTopics: SmallTalkTopic[] = [
    {
        id: "weather-opener",
        title: "The Weather & Beyond",
        description: "Start with the safest topic and pivot to something more personal.",
        icon: "☁️",
        turns: [
            {
                id: "t1",
                partnerSays: "It's surprisingly cold for this time of year, isn't it?",
                options: [
                    {
                        id: "o1",
                        text: "Yes, it is. I hate winter.",
                        impact: "low",
                        feedback: "Too negative and ends the loop. Try to validate their feeling and add a positive detail."
                    },
                    {
                        id: "o2",
                        text: "Tell me about it! I saw people wearing parkas this morning. Are you a summer person?",
                        impact: "high",
                        feedback: "Perfect. You agreed with energy and asked an open-ended question to transition the topic."
                    },
                    {
                        id: "o3",
                        text: "I suppose so. Do you know if the buffet is open yet?",
                        impact: "medium",
                        feedback: "Acceptable as an acknowledgement, but the sudden shift to the buffet is a bit abrupt."
                    }
                ]
            },
            {
                id: "t2",
                partnerSays: "Definitely a summer person! I grew up near the coast, so I'm used to the heat. How about you?",
                options: [
                    {
                        id: "o4",
                        text: "I prefer the mountains, actually. Have you ever tried skiing?",
                        impact: "high",
                        feedback: "Great work. You shared a personal preference and immediately invited them into a new activity-based topic."
                    },
                    {
                        id: "o5",
                        text: "I like nice weather too. Which coast?",
                        impact: "medium",
                        feedback: "Polite and keeps it going, but doesn't share much about yourself."
                    }
                ]
            }
        ]
    },
    {
        id: "professional-mixer",
        title: "Networking Social",
        description: "Break the ice at a conference or professional gathering.",
        icon: "🍸",
        turns: [
            {
                id: "t3",
                partnerSays: "I've just arrived—this venue is impressive, but a bit overwhelming!",
                options: [
                    {
                        id: "o6",
                        text: "It really is. Have you attended this conference before?",
                        impact: "high",
                        feedback: "Excellent empathy. Asking about their history with the event is a classic, effective pivot."
                    },
                    {
                        id: "o7",
                        text: "I've been here three times. It gets easier.",
                        impact: "medium",
                        feedback: "Reassuring, but a bit focused on your experience. Try asking them a question."
                    }
                ]
            },
            {
                id: "t4",
                partnerSays: "No, it's my first time. I'm mainly here to learn about the new sustainability trends.",
                options: [
                    {
                        id: "o8",
                        text: "That's a hot topic! What's been the most interesting talk you've caught so far?",
                        impact: "high",
                        feedback: "Bingo. You validated their interest and asked for a specific opinion."
                    },
                    {
                        id: "o9",
                        text: "Sustainability is important, I agree.",
                        impact: "low",
                        feedback: "This is a 'dead-end' response. It agrees but gives the other person nowhere to go."
                    }
                ]
            }
        ]
    }
];
