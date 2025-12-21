import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Brain, BookOpen, Mic2, TrendingUp, Lightbulb } from "lucide-react";
import { usePitching } from "@/hooks/usePitching";
import { pitchScenarios } from "@/data/pitching/scenarios";
import { ScenarioSelector } from "@/components/pitching/ScenarioSelector";
import { LearnArea } from "@/components/pitching/LearnArea";
import { ImpactPractice } from "@/components/pitching/ImpactPractice";
import { cn } from "@/lib/utils";

export default function Pitching() {
    const {
        state,
        selectScenario,
        setMode,
        makeSelection,
        nextSegment,
        resetTool
    } = usePitching();

    const { mode, currentScenario, totalScore } = state;

    return (
        <div className="min-h-screen bg-background pb-20">
            <div className="container max-w-5xl mx-auto px-4 py-8">

                {/* Navigation Header */}
                <div className="mb-8 items-center justify-between flex">
                    <div className="flex items-center gap-4">
                        {mode !== 'selection' ? (
                            <Button variant="ghost" size="icon" onClick={resetTool}>
                                <ArrowLeft className="h-5 w-5" />
                            </Button>
                        ) : (
                            <Link to="/">
                                <Button variant="ghost" size="icon">
                                    <ArrowLeft className="h-5 w-5" />
                                </Button>
                            </Link>
                        )}
                    </div>

                    {mode !== 'selection' && (
                        <div className="hidden sm:flex items-center gap-2 bg-primary/5 px-4 py-2 rounded-full border border-primary/10">
                            <TrendingUp className="w-4 h-4 text-primary" />
                            <span className="text-sm font-bold text-primary uppercase tracking-tighter">Persuasion Level</span>
                        </div>
                    )}
                </div>

                {/* Standardized Tool Title & Description */}
                <div className="text-center mb-12 animate-in fade-in duration-700">
                    <h1 className="text-4xl font-bold text-foreground mb-2">
                        📢 Pitching
                    </h1>
                    <p className="text-muted-foreground">
                        {currentScenario ? currentScenario.title : "Master the blueprint of high-impact professional pitches"}
                    </p>
                </div>

                {/* Content */}
                {mode === 'selection' ? (
                    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-500">
                        <ScenarioSelector scenarios={pitchScenarios} onSelect={selectScenario} />
                    </div>
                ) : (
                    <div className="space-y-8">
                        {/* Mode Toggle */}
                        <div className="flex justify-center mb-8">
                            <div className="bg-muted p-1 rounded-xl flex gap-1 border border-border/50">
                                <Button
                                    variant={mode === 'learning' ? 'default' : 'ghost'}
                                    className={cn(
                                        "rounded-lg px-8 font-bold",
                                        mode === 'learning' ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-md shadow-primary/20" : "text-muted-foreground"
                                    )}
                                    onClick={() => setMode('learning')}
                                >
                                    <Lightbulb className="w-4 h-4 mr-2" />
                                    Blueprint
                                </Button>
                                <Button
                                    variant={mode === 'practice' ? 'default' : 'ghost'}
                                    className={cn(
                                        "rounded-lg px-8 font-bold",
                                        mode === 'practice' ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-md shadow-primary/20" : "text-muted-foreground"
                                    )}
                                    onClick={() => setMode('practice')}
                                >
                                    <Mic2 className="w-4 h-4 mr-2" />
                                    Pitch Room
                                </Button>
                            </div>
                        </div>

                        {mode === 'learning' && currentScenario && (
                            <LearnArea
                                scenario={currentScenario}
                                onStartPractice={() => setMode('practice')}
                            />
                        )}

                        {mode === 'practice' && currentScenario && (
                            <ImpactPractice
                                scenario={currentScenario}
                                onComplete={(score) => console.log('Final Score:', score)}
                                onBack={resetTool}
                            />
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
