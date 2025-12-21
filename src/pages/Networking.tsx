import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Brain, BookOpen, Handshake, Users, TrendingUp } from "lucide-react";
import { useNetworking } from "@/hooks/useNetworking";
import { networkingScenarios } from "@/data/networking/scenarios";
import { ScenarioSelector } from "@/components/networking/ScenarioSelector";
import { NetworkingCard } from "@/components/networking/NetworkingCard";
import { PracticeArea } from "@/components/networking/PracticeArea";
import { cn } from "@/lib/utils";

export default function Networking() {
    const {
        state,
        selectScenario,
        setMode,
        nextPhrase,
        prevPhrase,
        updateScore,
        resetTool
    } = useNetworking();

    const { mode, currentScenario, currentPhraseIndex, score } = state;

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
                            <span className="text-sm font-bold text-primary uppercase tracking-tighter">Charisma Level</span>
                        </div>
                    )}
                </div>

                {/* Standardized Tool Title & Description */}
                <div className="text-center mb-12 animate-in fade-in duration-700">
                    <h1 className="text-4xl font-bold text-foreground mb-2">
                        🌐 Networking
                    </h1>
                    <p className="text-muted-foreground">
                        {currentScenario ? currentScenario.title : "Master the art of professional social interaction"}
                    </p>
                </div>

                {/* Content */}
                {mode === 'selection' ? (
                    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-500">
                        <ScenarioSelector scenarios={networkingScenarios} onSelect={selectScenario} />
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
                                    <Users className="w-4 h-4 mr-2" />
                                    Social Drill
                                </Button>
                            </div>
                        </div>

                        {mode === 'learning' && currentScenario && (
                            <NetworkingCard
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
