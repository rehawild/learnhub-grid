import { InterviewTopic } from "@/types/interviewprep";

export const interviewTopics: InterviewTopic[] = [
    {
        id: "topic_general",
        title: "General Introduction",
        description: "Review common questions asked at the start of an interview.",
        icon: "👋",
        questions: [
            {
                id: "q_intro_1",
                text: "Tell me about yourself.",
                tips: ["Keep it professional", "Focus on your career journey", "Mention key achievements"],
                sampleAnswer: "I started my career in marketing 5 years ago... I'm passionate about data-driven strategies..."
            },
            {
                id: "q_intro_2",
                text: "Why do you want to work here?",
                tips: ["Show you've researched the company", "Align your values with theirs", "Express genuine enthusiasm"],
                sampleAnswer: "I've admired your company's innovation in the sustainable energy sector..."
            }
        ]
    },
    {
        id: "topic_behavioral",
        title: "Behavioral",
        description: "Questions about past experiences and how you handle situations.",
        icon: "🧠",
        questions: [
            {
                id: "q_behav_1",
                text: "Describe a challenge you faced and how you overcame it.",
                tips: ["Use the STAR method (Situation, Task, Action, Result)", "Focus on your actions", "Keep it positive"],
                sampleAnswer: "In my last role, we faced a tight deadline... I organized daily stand-ups... We delivered on time."
            },
            {
                id: "q_behav_2",
                text: "Tell me about a time you worked in a team.",
                tips: ["Highlight your collaboration skills", "Mention your specific role", "Discuss the outcome"],
                sampleAnswer: "We were working on a cross-functional project... I facilitated communication between design and dev..."
            }
        ]
    },
    {
        id: "topic_weakness",
        title: "Strengths & Weaknesses",
        description: "Navigating questions about your personal attributes.",
        icon: "💪",
        questions: [
            {
                id: "q_sw_1",
                text: "What is your greatest weakness?",
                tips: ["Choose a real weakness", "Show how you are working to improve it", "Don't say 'I work too hard'"],
                sampleAnswer: "I sometimes struggle with public speaking... I've joined Toastmasters to improve confidence..."
            },
            {
                id: "q_sw_2",
                text: "What are your greatest strengths?",
                tips: ["Relate them to the job", "Provide examples", "Be confident but humble"],
                sampleAnswer: "My greatest strength is my problem-solving ability... For example, I optimized a workflow that saved..."
            }
        ]
    }
];
