import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Gavel, Brain, BookOpen, GraduationCap, TrendingUp } from "lucide-react";
import { useNegotiation } from "@/hooks/useNegotiation";
import { negotiationScenarios } from "@/data/negotiation/scenarios";
import { ScenarioSelector } from "@/components/negotiation/ScenarioSelector";
import { NegotiationCard } from "@/components/negotiation/NegotiationCard";
import { PracticeArea } from "@/components/negotiation/PracticeArea";
import { cn } from "@/lib/utils";

export default function Negotiation() {
    const {
        state,
        selectScenario,
        setMode,
        nextPhrase,
        prevPhrase,
        updateScore,
        resetTool
    } = useNegotiation();

    const { mode, currentScenario, currentPhraseIndex, score } = state;

    return (
        <div className="min-h-screen bg-background pb-20">
            <div className="container max-w-5xl mx-auto px-4 py-8">

                {/* Header */}
                <div className="mb-12 flex items-center justify-between">
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
                            <span className="text-sm font-bold text-primary uppercase tracking-tighter">Strategy Mastery</span>
                        </div>
                    )}
                </div>

                {/* Tool Title & Description */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-foreground mb-2">
                        💼 Negotiation
                    </h1>
                    <p className="text-muted-foreground">
                        {currentScenario ? currentScenario.title : "Master the high-stakes world of business deals"}
                    </p>
                </div>

                {/* Content */}
                {mode === 'selection' ? (
                    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-500">
                        <ScenarioSelector scenarios={negotiationScenarios} onSelect={selectScenario} />
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
                                    <BookOpen className="w-4 h-4 mr-2" />
                                    Strategies
                                </Button>
                                <Button
                                    variant={mode === 'practice' ? 'default' : 'ghost'}
                                    className={cn(
                                        "rounded-lg px-8 font-bold",
                                        mode === 'practice' ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-md shadow-primary/20" : "text-muted-foreground"
                                    )}
                                    onClick={() => setMode('practice')}
                                >
                                    <Brain className="w-4 h-4 mr-2" />
                                    Drills
                                </Button>
                            </div>
                        </div>

                        {mode === 'learning' && currentScenario && (
                            <NegotiationCard
                                phrase={currentScenario.phrases[currentPhraseIndex]}
                                onNext={nextPhrase}
                                onPrev={prevPhrase}
                                isFirst={currentPhraseIndex === 0}
                                isLast={currentPhraseIndex === currentScenario.phrases.length - 1}
                            />
                        )}

                        {mode === 'practice' && currentScenario && (
                            <PracticeArea
                                phrases={currentScenario.phrases}
                                onComplete={updateScore}
                                onBack={resetTool}
                            />
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
