import { TOEFLState } from "@/types/toeflprep";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Headphones, Mic, Volume2, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { useEffect } from "react";

interface IntegratedTaskStageProps {
    state: TOEFLState;
    onNext: () => void;
}

export const IntegratedTaskStage = ({ state, onNext }: IntegratedTaskStageProps) => {
    const { currentModule, stage, timer, totalTime } = state;
    if (!currentModule) return null;

    // Auto-advance effect for automated stages
    useEffect(() => {
        if (timer === 0 && stage !== 'completed' && stage !== 'reading') {
            onNext();
        }
    }, [timer, stage, onNext]);

    const progressValue = ((totalTime - timer) / totalTime) * 100;

    return (
        <div className="max-w-3xl mx-auto space-y-6">

            {/* Top Bar: Timer & Stage */}
            <div className="flex items-center justify-between bg-card border rounded-full px-6 py-3 shadow-sm">
                <div className="flex items-center gap-2 font-mono font-bold text-xl text-primary">
                    <Clock className="w-5 h-5" />
                    {timer}s
                </div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                    Current Stage: <span className="text-foreground font-bold">{stage}</span>
                </div>
            </div>

            {/* Stage Progress Bar */}
            {stage !== 'completed' && (
                <Progress value={progressValue} className="h-2" />
            )}

            {/* Main Stage Content */}
            <Card className="min-h-[400px] flex flex-col justify-center items-center text-center shadow-lg relative overflow-hidden transition-all duration-500">
                <CardContent className="p-8 w-full">

                    {stage === 'reading' && (
                        <div className="text-left space-y-4 animate-in fade-in">
                            <h2 className="text-xl font-bold border-b pb-2">Reading Passage</h2>
                            <p className="text-lg leading-relaxed text-card-foreground">
                                {currentModule.content.readingText}
                            </p>
                            <div className="pt-4 flex justify-end">
                                <Button onClick={onNext} className="gap-2">Finished Reading <ArrowRight className="w-4 h-4" /></Button>
                            </div>
                        </div>
                    )}

                    {stage === 'listening' && (
                        <div className="space-y-6 animate-in zoom-in-95">
                            <div className="w-32 h-32 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto animate-pulse">
                                <Headphones className="w-16 h-16 text-blue-500" />
                            </div>
                            <h2 className="text-2xl font-bold">Listening Section</h2>
                            <p className="text-muted-foreground">Listen to a conversation related to the reading.</p>
                            <div className="max-w-md mx-auto bg-muted p-4 rounded-lg text-left text-sm font-mono opacity-80 h-32 overflow-hidden relative">
                                {/* Pseudocode for scrolling transcript if we wanted */}
                                <p className="text-center italic text-muted-foreground mt-10">Simulating Audio Playback...</p>
                                <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-muted to-transparent"></div>
                            </div>
                        </div>
                    )}

                    {stage === 'preparing' && (
                        <div className="space-y-6 animate-in slide-in-from-bottom-4">
                            <h2 className="text-xl font-bold text-orange-500 uppercase tracking-widest">Question</h2>
                            <p className="text-2xl font-semibold max-w-2xl mx-auto">
                                {currentModule.content.question}
                            </p>
                            <div className="p-6 bg-orange-50 dark:bg-orange-900/10 rounded-xl border border-orange-100 dark:border-orange-800">
                                <p className="text-muted-foreground font-medium">Prepare your response.</p>
                            </div>
                        </div>
                    )}

                    {stage === 'speaking' && (
                        <div className="space-y-6 animate-in pulse">
                            <div className="w-32 h-32 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto relative">
                                <Mic className="w-16 h-16 text-red-500" />
                                <span className="absolute -top-2 -right-2 flex h-4 w-4">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
                                </span>
                            </div>
                            <h2 className="text-3xl font-bold text-destructive">Recording...</h2>
                            <p className="text-lg">Speak clearly and answer the question.</p>
                            <div className="max-w-2xl mx-auto text-sm text-muted-foreground border-t pt-4">
                                Question: {currentModule.content.question}
                            </div>
                        </div>
                    )}

                    {stage === 'completed' && (
                        <div className="space-y-6 animate-in zoom-in">
                            <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                                <CheckCircle className="w-12 h-12" />
                            </div>
                            <h2 className="text-3xl font-bold">Task Completed!</h2>
                            <p className="text-muted-foreground">You have finished this TOEFL practice module.</p>
                            <Button variant="outline" className="gap-2">
                                <Volume2 className="w-4 h-4" /> Listen to Your Recording
                            </Button>
                        </div>
                    )}

                </CardContent>
            </Card>
        </div>
    );
};
