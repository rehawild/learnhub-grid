import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Layout, Sparkles, Zap, Trophy, Compass } from "lucide-react";
import { useProverbs } from "@/hooks/useProverbs";
import { proverbCategories } from "@/data/proverbs/categories";
import { CategorySelector } from "@/components/proverbs/CategorySelector";
import { ProverbCard } from "@/components/proverbs/ProverbCard";
import { WisdomDrill } from "@/components/proverbs/WisdomDrill";
import { ProverbsProgress } from "@/components/proverbs/ProverbsProgress";
import { cn } from "@/lib/utils";

export default function Proverbs() {
    const {
        state,
        selectCategory,
        nextStep,
        prevStep,
        addScore,
        resetTool
    } = useProverbs();

    const { mode, currentCategory, currentIndex, score } = state;

    return (
        <div className="min-h-screen bg-background pb-20">
            <div className="container max-w-4xl mx-auto px-4 py-8">

                {/* Simple Navigation */}
                <div className="mb-12 flex items-center justify-between">
                    <Button variant="ghost" size="sm" onClick={mode === 'selection' ? undefined : resetTool}>
                        {mode === 'selection' ? (
                            <Link to="/" className="flex items-center gap-2">
                                <ArrowLeft className="h-4 w-4" />
                                <span>Back to Tools</span>
                            </Link>
                        ) : (
                            <div className="flex items-center gap-2">
                                <ArrowLeft className="h-4 w-4" />
                                <span>Exit Session</span>
                            </div>
                        )}
                    </Button>

                    {mode !== 'selection' && mode !== 'results' && (
                        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10">
                            <Trophy className="w-4 h-4 text-primary" />
                            <span className="text-sm font-bold text-primary tabular-nums">{score}</span>
                        </div>
                    )}
                </div>

                {/* Content Flow */}
                {mode === 'selection' ? (
                    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-500">
                        <div className="text-center space-y-4">
                            <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center text-4xl mx-auto mb-6 shadow-xl shadow-primary/5">
                                🦉
                            </div>
                            <h1 className="text-5xl font-bold text-foreground tracking-tight">Proverbs</h1>
                            <p className="text-muted-foreground text-xl max-w-2xl mx-auto font-medium">
                                Uncover the ancestral wisdom that serves as the moral compass of the English language.
                            </p>
                        </div>
                        <CategorySelector categories={proverbCategories} onSelect={selectCategory} />
                    </div>
                ) : (
                    <div className="max-w-2xl mx-auto">
                        {mode !== 'results' && currentCategory && (
                            <ProverbsProgress
                                current={currentIndex}
                                total={currentCategory.proverbs.length}
                                categoryTitle={currentCategory.title}
                            />
                        )}

                        <div className="mt-12">
                            {mode === 'discovery' && currentCategory && (
                                <ProverbCard
                                    proverb={currentCategory.proverbs[currentIndex]}
                                    onNext={nextStep}
                                    onPrev={prevStep}
                                    isFirst={currentIndex === 0}
                                />
                            )}

                            {mode === 'drill' && currentCategory && (
                                <WisdomDrill
                                    proverb={currentCategory.proverbs[currentIndex]}
                                    onScore={addScore}
                                    onComplete={nextStep}
                                    onBack={prevStep}
                                />
                            )}

                            {mode === 'results' && (
                                <div className="text-center space-y-10 animate-in zoom-in duration-500">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full" />
                                        <div className="relative bg-card p-16 rounded-[3rem] border-2 border-primary/20 shadow-2xl overflow-hidden max-w-md mx-auto">
                                            <Trophy className="w-24 h-24 text-primary mx-auto mb-8 animate-bounce" />
                                            <h2 className="text-4xl font-bold mb-4 leading-tight">Wisdom Mastered</h2>
                                            <p className="text-muted-foreground text-lg mb-8 font-medium">You've successfully decoded every proverb in this set.</p>
                                            <div className="text-7xl font-bold text-primary mb-2 tabular-nums">{score}</div>
                                            <p className="text-xs font-bold uppercase tracking-widest text-primary/50">Total Mastery Score</p>
                                        </div>
                                    </div>
                                    <Button size="lg" className="h-20 px-12 text-xl font-bold uppercase tracking-widest rounded-2xl shadow-xl shadow-primary/20" onClick={resetTool}>
                                        Consult the Elders Again
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
