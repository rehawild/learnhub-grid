import { ChatMessage } from "@/types/roleplay";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

interface ChatBubbleProps {
    message: ChatMessage;
    onPlayAudio: (blob: Blob) => void;
}

export const ChatBubble = ({ message, onPlayAudio }: ChatBubbleProps) => {
    const isUser = message.sender === 'user';

    return (
        <div className={cn("flex gap-3 max-w-[80%]", isUser ? "ml-auto flex-row-reverse" : "mr-auto")}>
            <Avatar className="w-10 h-10 border">
                <AvatarFallback>{isUser ? "ME" : "AI"}</AvatarFallback>
            </Avatar>
            <div className={cn(
                "p-4 rounded-xl text-sm",
                isUser ? "bg-primary text-primary-foreground rounded-br-none" : "bg-muted rounded-bl-none"
            )}>
                {message.audioBlob ? (
                    <Button
                        variant="secondary"
                        size="sm"
                        className="gap-2 bg-background/20 hover:bg-background/30 text-inherit border-0"
                        onClick={() => onPlayAudio(message.audioBlob!)}
                    >
                        <Play className="w-4 h-4" /> Listen to Recording
                    </Button>
                ) : (
                    <p>{message.text}</p>
                )}
                <div className="text-[10px] opacity-70 mt-1 text-right">
                    {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
            </div>
        </div>
    );
};
