import { ChatMessage, DailyTopic } from "@/types/dailychat";
import { Button } from "@/components/ui/button";
import { Send, Sparkles } from "lucide-react";
import { useState, KeyboardEvent, RefObject } from "react";
import { ChatMessageBubble } from "./ChatMessageBubble";
import { Input } from "@/components/ui/input";

interface ChatInterfaceProps {
    topic: DailyTopic;
    messages: ChatMessage[];
    isTyping: boolean;
    currentUserId: string;
    onSendMessage: (text: string) => void;
    messagesEndRef: RefObject<HTMLDivElement>;
}

export const ChatInterface = ({
    topic,
    messages,
    isTyping,
    currentUserId,
    onSendMessage,
    messagesEndRef
}: ChatInterfaceProps) => {
    const [input, setInput] = useState("");

    const handleSend = () => {
        if (!input.trim()) return;
        onSendMessage(input);
        setInput("");
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="flex flex-col h-[600px] border rounded-xl overflow-hidden shadow-sm bg-background">

            {/* Header / Topic Context */}
            <div className="bg-card border-b p-4 shadow-sm z-10 flex items-center justify-between">
                <div>
                    <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Daily Topic</h3>
                    <p className="font-medium text-lg leading-tight text-card-foreground">{topic.title}</p>
                </div>
                <Sparkles className="text-yellow-500 w-5 h-5" />
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6 bg-muted/20">
                {messages.map((msg) => (
                    <ChatMessageBubble
                        key={msg.id}
                        message={msg}
                        isUser={msg.senderId === currentUserId}
                    />
                ))}

                {isTyping && (
                    <div className="flex gap-3 mb-4 mr-auto max-w-[85%]">
                        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-[10px] font-bold">AI</div>
                        <div className="bg-secondary text-secondary-foreground border p-3 rounded-2xl rounded-tl-none flex gap-1 items-center h-10">
                            <div className="w-1.5 h-1.5 bg-foreground/50 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                            <div className="w-1.5 h-1.5 bg-foreground/50 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                            <div className="w-1.5 h-1.5 bg-foreground/50 rounded-full animate-bounce"></div>
                        </div>
                    </div>
                )}

                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-card border-t">
                {messages.length < 3 && (
                    <div className="flex gap-2 overflow-x-auto pb-3 mb-2 scrollbar-hide">
                        {topic.starterParams.map((starter, i) => (
                            <Button
                                key={i}
                                variant="outline"
                                size="sm"
                                className="whitespace-nowrap rounded-full text-xs text-muted-foreground hover:text-primary hover:border-primary bg-background"
                                onClick={() => setInput(starter + " ")}
                            >
                                {starter}
                            </Button>
                        ))}
                    </div>
                )}

                <div className="flex gap-2">
                    <Input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Type your message..."
                        className="rounded-full shadow-sm bg-background"
                        disabled={isTyping}
                        autoFocus
                    />
                    <Button
                        size="icon"
                        className="rounded-full w-10 h-10 shrink-0"
                        onClick={handleSend}
                        disabled={!input.trim() || isTyping}
                    >
                        <Send className="w-4 h-4 ml-0.5" />
                    </Button>
                </div>
            </div>
        </div>
    );
};
