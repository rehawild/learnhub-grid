import { useRef, useEffect } from "react";
import { ChainEntry } from "@/types/wordchain";
import { cn } from "@/lib/utils";
import { User, Bot } from "lucide-react";

interface ChainListProps {
    chain: ChainEntry[];
}

export const ChainList = ({ chain }: ChainListProps) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [chain]);

    return (
        <div
            ref={scrollRef}
            className="flex-1 w-full max-w-xl mx-auto overflow-y-auto p-4 space-y-4 bg-muted/20 rounded-xl border min-h-[300px] max-h-[500px]"
        >
            {chain.map((entry, i) => {
                const isUser = entry.speaker === 'user';
                // Highlight the connecting letter
                const prevWord = chain[i - 1]?.word;
                const connectingChar = prevWord ? prevWord.slice(-1) : "";

                return (
                    <div
                        key={entry.id}
                        className={cn(
                            "flex gap-3 items-end animate-in fade-in slide-in-from-bottom-2",
                            isUser ? "flex-row-reverse" : "flex-row"
                        )}
                    >
                        {/* Avatar */}
                        <div className={cn(
                            "w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-sm",
                            isUser ? "bg-primary text-primary-foreground" : "bg-card border"
                        )}>
                            {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                        </div>

                        {/* Bubble */}
                        <div className={cn(
                            "px-4 py-2 rounded-2xl max-w-[80%] shadow-sm border",
                            isUser
                                ? "bg-primary text-primary-foreground rounded-tr-none"
                                : "bg-card text-card-foreground rounded-tl-none"
                        )}>
                            <span className="font-bold tracking-wide text-lg">
                                {/* Highlight first letter for continuity visual */}
                                <span className={isUser ? "text-primary-foreground/70" : "text-primary"}>
                                    {entry.word.charAt(0)}
                                </span>
                                {entry.word.slice(1)}
                            </span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
