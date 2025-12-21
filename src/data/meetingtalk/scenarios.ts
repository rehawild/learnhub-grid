import { MeetingScenario } from "@/types/meetingtalk";

export const meetingScenarios: MeetingScenario[] = [
    {
        id: "opening",
        title: "Opening a Meeting",
        description: "Start the meeting professionally and set the agenda.",
        icon: "🚀",
        phrases: [
            {
                id: "o1",
                text: "I'd like to thank everyone for coming today.",
                meaning: "A formal way to welcome participants.",
                context: "Use this right at the beginning to show appreciation for attendance."
            },
            {
                id: "o2",
                text: "The main purpose of today's meeting is to...",
                meaning: "Clearly stating the objective.",
                context: "Essential for keeping the meeting focused."
            },
            {
                id: "o3",
                text: "Does everyone have a copy of the agenda?",
                meaning: "Ensuring all participants are prepared.",
                context: "Good for checking if everyone follows the structure."
            }
        ]
    },
    {
        id: "stating-opinion",
        title: "Stating Opinions",
        description: "Express your views clearly and professionally.",
        icon: "💡",
        phrases: [
            {
                id: "s1",
                text: "From my perspective, the best approach would be...",
                meaning: "Offering a personal professional view.",
                context: "Polite but firm way to suggest a direction."
            },
            {
                id: "s2",
                text: "I'm not entirely convinced that this is the best solution.",
                meaning: "Expressing doubt professionally.",
                context: "Useful when you disagree with a proposal."
            },
            {
                id: "s3",
                text: "I see what you mean, but I have a few concerns.",
                meaning: "Acknowledging a point before disagreeing.",
                context: "A diplomatic way to introduce a counter-argument."
            }
        ]
    },
    {
        id: "interrupting",
        title: "Interrupting",
        description: "Politely jump into a conversation when needed.",
        icon: "💬",
        phrases: [
            {
                id: "i1",
                text: "Could I just jump in for a second?",
                meaning: "Asking for permission to speak.",
                context: "Casual but polite way to interrupt in a fast-paced meeting."
            },
            {
                id: "i2",
                text: "Sorry to interrupt, but I have a quick question.",
                meaning: "Standard interruption phrase.",
                context: "Use this when you need immediate clarification."
            },
            {
                id: "i3",
                text: "Before we move on, I'd like to add something here.",
                meaning: "Intercepting a transition.",
                context: "Prevents the speaker from changing topics before you contribute."
            }
        ]
    },
    {
        id: "clarifying",
        title: "Clarifying Information",
        description: "Ensure you and others understand everything.",
        icon: "🔍",
        phrases: [
            {
                id: "c1",
                text: "Could you elaborate on that point?",
                meaning: "Asking for more detail.",
                context: "Formal way to ask for more info about a specific topic."
            },
            {
                id: "c2",
                text: "If I understand correctly, you're saying that...",
                meaning: "Summarizing to check understanding.",
                context: "Crucial for avoiding misunderstandings later."
            },
            {
                id: "c3",
                text: "What exactly do you mean by that?",
                meaning: "Direct request for definition.",
                context: "Use when a speaker uses vague terms."
            }
        ]
    },
    {
        id: "closing",
        title: "Closing & Summarizing",
        description: "End the meeting with clear next steps.",
        icon: "🏁",
        phrases: [
            {
                id: "cl1",
                text: "To wrap things up, let's summarize the main points.",
                meaning: "Beginning the conclusion.",
                context: "Signals that the meeting is coming to an end."
            },
            {
                id: "cl2",
                text: "Let's go over the action items for each of us.",
                meaning: "Assigning tasks.",
                context: "Crucial for accountability after the meeting."
            },
            {
                id: "cl3",
                text: "I think we've covered everything on the agenda.",
                meaning: "Final check.",
                context: "Ensures no one has anything else to add before leaving."
            }
        ]
    }
];
