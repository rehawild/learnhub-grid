import { useState, useEffect, useRef } from "react";
import { DailyChatState, ChatMessage, UserStats } from "@/types/dailychat";
import { DAILY_TOPICS, AI_RESPONSES } from "@/data/dailychat/topics";

const MOCK_STATS: UserStats = {
    currentStreak: 4,
    totalDays: 12,
    lastActiveDate: "2024-05-20" // Mock date
};

const BOT_ID = "bot-1";
const USER_ID = "user-1";

export const useDailyChat = () => {
    // Determine today's topic or fallback
    const todayStr = new Date().toISOString().split('T')[0];
    const initialTopic = DAILY_TOPICS.find(t => t.date === todayStr) || DAILY_TOPICS[0];

    const [state, setState] = useState<DailyChatState>({
        currentTopic: initialTopic,
        messages: [],
        stats: MOCK_STATS,
        isTyping: false
    });

    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Initial greeting
    useEffect(() => {
        if (state.messages.length === 0) {
            const greeting: ChatMessage = {
                id: "init-1",
                senderId: BOT_ID,
                text: `Hi! Today's topic is: "${initialTopic.title}". ${initialTopic.question}`,
                timestamp: Date.now()
            };
            setState(prev => ({ ...prev, messages: [greeting] }));
        }
    }, [initialTopic]);

    // Auto-scroll
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [state.messages, state.isTyping]);

    const sendMessage = (text: string) => {
        const userMsg: ChatMessage = {
            id: Date.now().toString(),
            senderId: USER_ID,
            text,
            timestamp: Date.now()
        };

        setState(prev => ({
            ...prev,
            messages: [...prev.messages, userMsg],
            isTyping: true
        }));

        // Simulate AI response
        setTimeout(() => {
            const randomResponse = AI_RESPONSES[Math.floor(Math.random() * AI_RESPONSES.length)];
            const botMsg: ChatMessage = {
                id: (Date.now() + 1).toString(),
                senderId: BOT_ID,
                text: randomResponse,
                timestamp: Date.now()
            };

            setState(prev => ({
                ...prev,
                messages: [...prev.messages, botMsg],
                isTyping: false
            }));

            // In a real app, update stats here if it's the first msg of the day
        }, 1500 + Math.random() * 1000);
    };

    return {
        state,
        sendMessage,
        messagesEndRef,
        currentUserId: USER_ID
    };
};
