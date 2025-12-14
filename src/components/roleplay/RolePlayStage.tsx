import { RolePlayScenario, ChatMessage } from "@/types/roleplay";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mic, Square, GripHorizontal } from "lucide-react";
import { ChatBubble } from "./ChatBubble";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface RolePlayStageProps {
    scenario: RolePlayScenario;
    messages: ChatMessage[];
    isRecording: boolean;
    isProcessing: boolean;
    onStartRecording: () => void;
    onStopRecording: () => void;
    onPlayAudio: (blob: Blob) => void;
}

export const RolePlayStage = ({
    scenario,
    messages,
    isRecording,
    isProcessing,
    onStartRecording,
    onStopRecording,
    onPlayAudio
}: RolePlayStageProps) => {

    const scrollRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom on new messages
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages, isProcessing]);

    return (
        <div className="flex flex-col h-[600px] border rounded-xl overflow-hidden bg-background shadow-lg">

            {/* Header */}
            <div className="bg-muted/50 p-4 border-b flex justify-between items-center">
                <div>
                    <h2 className="font-bold text-lg">{scenario.title}</h2>
                    <p className="text-xs text-muted-foreground">Partner is {scenario.partnerRole} @ {scenario.location}</p>
                </div>
                <div className="text-sm font-medium bg-secondary px-3 py-1 rounded-full">
                    {messages.length} msgs
                </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50 dark:bg-slate-950/20">
                {messages.map((msg) => (
                    <ChatBubble key={msg.id} message={msg} onPlayAudio={onPlayAudio} />
                ))}

                {isProcessing && (
                    <div className="mr-auto flex items-center gap-2 text-muted-foreground text-sm p-4">
                        <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-current rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                            <div className="w-2 h-2 bg-current rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                            <div className="w-2 h-2 bg-current rounded-full animate-bounce"></div>
                        </div>
                        {scenario.partnerRole} is thinking...
                    </div>
                )}

                <div ref={scrollRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t bg-background">
                <div className="flex justify-center items-center gap-4">
                    {/* Placeholder for text input in future */}
                    <Button
                        size="lg"
                        variant={isRecording ? "destructive" : "default"}
                        className={cn(
                            "w-full max-w-sm rounded-full h-14 text-lg shadow-lg hover:scale-[1.02] transition-all",
                            isRecording && "animate-pulse"
                        )}
                        onClick={isRecording ? onStopRecording : onStartRecording}
                        disabled={isProcessing}
                    >
                        {isRecording ? <Square className="w-6 h-6 mr-2" /> : <Mic className="w-6 h-6 mr-2" />}
                        {isRecording ? "Stop Recording" : "Hold to Record"}
                    </Button>
                </div>
                <p className="text-center text-xs text-muted-foreground mt-3">
                    {isRecording ? "Listening..." : "Tap to speak. Your partner will respond automatically."}
                </p>
            </div>
        </div>
    );
};
