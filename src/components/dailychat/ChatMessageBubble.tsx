import { ChatMessage } from "@/types/dailychat";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface ChatMessageBubbleProps {
    message: ChatMessage;
    isUser: boolean;
}

export const ChatMessageBubble = ({ message, isUser }: ChatMessageBubbleProps) => {
    return (
        <div className={cn("flex gap-3 mb-4 max-w-[85%]", isUser ? "ml-auto flex-row-reverse" : "mr-auto")}>
            <Avatar className="w-8 h-8">
                <AvatarFallback className={cn("text-xs font-bold", isUser ? "bg-primary text-primary-foreground" : "bg-muted")}>
                    {isUser ? "ME" : "AI"}
                </AvatarFallback>
            </Avatar>
            <div className={cn(
                "p-3 rounded-2xl text-sm leading-relaxed shadow-sm",
                isUser
                    ? "bg-primary text-primary-foreground rounded-tr-none"
                    : "bg-secondary text-secondary-foreground border rounded-tl-none"
            )}>
                {message.text}
                <div className={cn("text-[10px] mt-1 opacity-70", isUser ? "text-primary-foreground/80" : "text-muted-foreground")}>
                    {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
            </div>
        </div>
    );
};
