import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Layout, Sparkles, Zap, Trophy, Link2, Compass } from "lucide-react";
import { useCollocations } from "@/hooks/useCollocations";
import { collocationCategories } from "@/data/collocations/categories";
import { CategorySelector } from "@/components/collocations/CategorySelector";
import { CollocationCard } from "@/components/collocations/CollocationCard";
import { CollocationDrill } from "@/components/collocations/CollocationDrill";
import { cn } from "@/lib/utils";

export default function Collocations() {
    const {
        state,
        selectCategory,
        nextStep,
        prevStep,
        addScore,
        resetTool
    } = useCollocations();

    const { mode, currentCategory, currentIndex, score } = state;

    return (
        <div className="min-h-screen bg-background pb-20">
            <div className="container max-w-6xl mx-auto px-4 py-8">

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
                            <Compass className="w-4 h-4 text-primary" />
                            <span className="text-sm font-bold text-primary uppercase tracking-tighter">Match Master: {score}</span>
                        </div>
                    )}
                </div>

                {/* Standardized Tool Title & Description */}
                <div className="text-center mb-12 animate-in fade-in duration-700">
                    <h1 className="text-4xl font-bold text-foreground mb-2 flex items-center justify-center gap-3">
                        <span className="text-primary">🤞</span> Collocations
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto italic">
                        {currentCategory ? currentCategory.title : "Master the natural partnerships that make your English sound authentic."}
                    </p>
                </div>

                {/* Content Flow */}
                {mode === 'selection' ? (
                    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-500">
                        <div className="flex items-center gap-2 justify-center mb-8">
                            <Layout className="w-5 h-5 text-primary" />
                            <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest text-center">Select a Domain of Mastery</span>
                        </div>
                        <CategorySelector categories={collocationCategories} onSelect={selectCategory} />
                    </div>
                ) : (
                    <div className="space-y-8">
                        {mode === 'discovery' && currentCategory && (
                            <CollocationCard
                                collocation={currentCategory.collocations[currentIndex]}
                                onNext={nextStep}
                                onPrev={prevStep}
                                isFirst={currentIndex === 0 && mode === 'discovery'}
                            />
                        )}

                        {mode === 'drill' && currentCategory && (
                            <CollocationDrill
                                collocation={currentCategory.collocations[currentIndex]}
                                onScore={addScore}
                                onComplete={nextStep}
                                onBack={prevStep}
                            />
                        )}

                        {mode === 'results' && (
                            <div className="text-center space-y-8 animate-in zoom-in duration-500">
                                <div className="bg-primary/10 p-12 rounded-3xl border-2 border-primary/20 max-w-xl mx-auto relative overflow-hidden">
                                    <div className="absolute -top-6 -right-6 text-primary opacity-10 rotate-12">
                                        <Trophy className="w-32 h-32" />
                                    </div>
                                    <h2 className="text-4xl font-bold mb-4">Partnerships Perfected!</h2>
                                    <p className="text-muted-foreground text-lg mb-8 italic">You've successfully mastered all word pairings in this category.</p>
                                    <div className="text-6xl font-bold text-primary mb-2">{score}</div>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Mastery Score</p>
                                </div>
                                <Button size="lg" className="w-64 py-8 text-xl font-bold uppercase tracking-widest" onClick={resetTool}>
                                    Try Another Set
                                </Button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
