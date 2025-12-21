import { useState } from "react";
import { SmallTalkTopic, DialogueOption } from "@/types/smalltalk";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MessageCircle, CheckCircle2, XCircle, AlertCircle, ArrowRight, User, Sparkles, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

interface ConversationFlowProps {
    topic: SmallTalkTopic;
    currentTurnIndex: number;
    onSelect: (turnId: string, option: DialogueOption) => void;
    onNext: () => void;
    selections: { turnId: string; optionId: string }[];
    totalScore: number;
    reset: () => void;
}

export const ConversationFlow = ({
    topic,
    currentTurnIndex,
    onSelect,
    onNext,
    selections,
    totalScore,
    reset
}: ConversationFlowProps) => {
    const currentTurn = topic.turns[currentTurnIndex];
    const selection = selections.find(s => s.turnId === currentTurn.id);
    const selectedOption = currentTurn.options.find(o => o.id === selection?.optionId);

    return (
        <div className="w-full max-w-3xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">

            {/* 1. Partner's Prompt */}
            <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-muted border border-border flex items-center justify-center shrink-0">
                    <User className="w-6 h-6 text-muted-foreground" />
                </div>
                <div className="bg-muted text-foreground p-5 rounded-2xl rounded-tl-none shadow-sm max-w-[85%] border border-border/50">
                    <p className="text-lg font-medium leading-relaxed italic">"{currentTurn.partnerSays}"</p>
                    <div className="mt-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 flex items-center gap-1.5">
                        <MessageCircle className="w-3 h-3" /> Partner is waiting...
                    </div>
                </div>
            </div>

            {/* 2. User's Options */}
            <div className="space-y-4 pt-4">
                <div className="flex items-center gap-2 justify-center mb-6">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-tighter">Choose Your Response</span>
                </div>

                {currentTurn.options.map((option) => (
                    <Card
                        key={option.id}
                        className={cn(
                            "cursor-pointer transition-all duration-300 border-2 overflow-hidden",
                            !selectedOption && "hover:border-primary/50 hover:bg-primary/5",
                            selectedOption?.id === option.id && (
                                option.impact === 'high' ? "border-green-500/50 bg-green-500/5" :
                                    option.impact === 'medium' ? "border-yellow-500/50 bg-yellow-500/5" :
                                        "border-red-500/50 bg-red-500/5"
                            ),
                            selectedOption && selectedOption.id !== option.id && "opacity-50 grayscale pointer-events-none"
                        )}
                        onClick={() => onSelect(currentTurn.id, option)}
                    >
                        <CardContent className="p-5">
                            <div className="flex items-center justify-between gap-4">
                                <p className="text-lg font-bold italic">"{option.text}"</p>
                                {selectedOption?.id === option.id && (
                                    <div className="shrink-0 animate-in zoom-in duration-300">
                                        {option.impact === 'high' ? <CheckCircle2 className="w-6 h-6 text-green-500" /> :
                                            option.impact === 'medium' ? <AlertCircle className="w-6 h-6 text-yellow-500" /> :
                                                <XCircle className="w-6 h-6 text-red-500" />}
                                    </div>
                                )}
                            </div>

                            {selectedOption?.id === option.id && (
                                <div className="mt-4 pt-4 border-t border-border/40 animate-in slide-in-from-top-2 duration-300">
                                    <div className={cn(
                                        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-2 shadow-sm",
                                        option.impact === 'high' ? "bg-green-100 text-green-700" :
                                            option.impact === 'medium' ? "bg-yellow-100 text-yellow-700" :
                                                "bg-red-100 text-red-700"
                                    )}>
                                        {option.impact} Charisma Impact
                                    </div>
                                    <p className="text-sm text-foreground leading-relaxed italic">{option.feedback}</p>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </div>

            {selectedOption && (
                <div className="flex justify-center pt-8">
                    <Button size="lg" className="w-64 py-6 text-xl font-bold shadow-xl shadow-primary/20" onClick={onNext}>
                        {currentTurnIndex === topic.turns.length - 1 ? "End Conversation" : "Next Response"}
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                </div>
            )}
        </div>
    );
};

export const ResultsView = ({ score, topic, reset }: { score: number, topic: SmallTalkTopic, reset: () => void }) => {
    return (
        <Card className="w-full max-w-xl mx-auto text-center p-8 space-y-6 animate-in fade-in zoom-in duration-500 border-2 border-primary/20 shadow-2xl">
            <div className="flex justify-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center border-4 border-primary/5">
                    <Trophy className="w-12 h-12 text-primary drop-shadow-sm" />
                </div>
            </div>
            <CardHeader className="space-y-2">
                <CardTitle className="text-3xl font-black text-foreground uppercase tracking-tight">Social Maestro!</CardTitle>
                <CardDescription className="text-lg font-medium text-muted-foreground italic">
                    You navigated the "{topic.title}" conversation with style.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="bg-muted/30 py-8 rounded-3xl border border-border/30 mb-4">
                    <div className="text-6xl font-black text-primary mb-2 drop-shadow-sm">
                        {score}
                    </div>
                    <p className="text-muted-foreground font-bold uppercase tracking-widest text-[10px]">Charisma Quotient</p>
                </div>
            </CardContent>
            <div className="flex flex-col gap-3">
                <Button onClick={reset} size="lg" className="w-full py-8 text-xl font-bold shadow-xl shadow-primary/20 hover:scale-[1.02] transition-transform">
                    Start New Interaction
                </Button>
            </div>
        </Card>
    );
};
