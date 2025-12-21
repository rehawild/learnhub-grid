import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, Zap, TrendingUp, Sparkles, Layout, Compass } from "lucide-react";
import { usePhrasalVerbs } from "@/hooks/usePhrasalVerbs";
import { phrasalVerbCategories } from "@/data/phrasalverbs/categories";
import { CategorySelector } from "@/components/phrasalverbs/CategorySelector";
import { ParticleCard } from "@/components/phrasalverbs/ParticleCard";
import { SentenceSculptor } from "@/components/phrasalverbs/SentenceSculptor";
import { cn } from "@/lib/utils";

export default function PhrasalVerbs() {
    const {
        state,
        selectCategory,
        nextStep,
        prevStep,
        addScore,
        resetTool
    } = usePhrasalVerbs();

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
                            <span className="text-sm font-bold text-primary uppercase tracking-tighter">Particle Mastery: {score}</span>
                        </div>
                    )}
                </div>

                {/* Standardized Tool Title & Description */}
                <div className="text-center mb-12 animate-in fade-in duration-700">
                    <h1 className="text-4xl font-bold text-foreground mb-2 flex items-center justify-center gap-3">
                        <span className="text-primary">🚀</span> Phrasal Verbs
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto italic">
                        {currentCategory ? currentCategory.title : "Master the combinations that define natural English fluency."}
                    </p>
                </div>

                {/* Content */}
                {mode === 'selection' ? (
                    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-500">
                        <div className="flex items-center gap-2 justify-center mb-8">
                            <Layout className="w-5 h-5 text-primary" />
                            <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest text-center">Select a Mastery Domain</span>
                        </div>
                        <CategorySelector categories={phrasalVerbCategories} onSelect={selectCategory} />
                    </div>
                ) : (
                    <div className="space-y-8">
                        {mode === 'learning' && currentCategory && (
                            <ParticleCard
                                verb={currentCategory.verbs[currentIndex]}
                                onNext={nextStep}
                                onPrev={prevStep}
                                isFirst={currentIndex === 0 && mode === 'learning'}
                                isLast={false}
                            />
                        )}

                        {mode === 'practice' && currentCategory && (
                            <SentenceSculptor
                                verb={currentCategory.verbs[currentIndex]}
                                onScore={addScore}
                                onComplete={nextStep}
                                onBack={prevStep}
                            />
                        )}

                        {mode === 'results' && (
                            <div className="text-center space-y-8 animate-in zoom-in duration-500">
                                <div className="bg-primary/10 p-12 rounded-3xl border-2 border-primary/20 max-w-xl mx-auto">
                                    <h2 className="text-4xl font-bold mb-4">Domain Mastered!</h2>
                                    <p className="text-muted-foreground text-lg mb-8">You've successfully sculpted all phrasal verbs in this category.</p>
                                    <div className="text-6xl font-bold text-primary mb-2">{score}</div>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Mastery Score</p>
                                </div>
                                <Button size="lg" className="w-64 py-8 text-xl font-bold" onClick={resetTool}>
                                    Back to Selection
                                </Button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
