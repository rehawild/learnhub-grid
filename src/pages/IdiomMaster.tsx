import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, Zap, TrendingUp, Sparkles, Layout } from "lucide-react";
import { useIdiomMaster } from "@/hooks/useIdiomMaster";
import { idiomCategories } from "@/data/idiommaster/categories";
import { CategorySelector } from "@/components/idiommaster/CategorySelector";
import { IdiomCard } from "@/components/idiommaster/IdiomCard";
import { MeaningDrill } from "@/components/idiommaster/MeaningDrill";
import { cn } from "@/lib/utils";

export default function IdiomMaster() {
    const {
        state,
        selectCategory,
        setMode,
        nextIdiom,
        prevIdiom,
        makeSelection,
        resetTool
    } = useIdiomMaster();

    const { mode, currentCategory, currentIdiomIndex, score } = state;

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
                            <TrendingUp className="w-4 h-4 text-primary" />
                            <span className="text-sm font-bold text-primary uppercase tracking-tighter">Fluency Level</span>
                        </div>
                    )}
                </div>

                {/* Standardized Tool Title & Description */}
                <div className="text-center mb-12 animate-in fade-in duration-700">
                    <h1 className="text-4xl font-bold text-foreground mb-2">
                        🗝️ Idiom Master
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto italic font-medium">
                        {currentCategory ? currentCategory.title : "Unlock the secrets of English expressions and figurative language."}
                    </p>
                </div>

                {/* Content */}
                {mode === 'selection' ? (
                    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-500">
                        <div className="flex items-center gap-2 justify-center mb-8">
                            <Layout className="w-5 h-5 text-primary" />
                            <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest text-center">Select an Idiom Category</span>
                        </div>
                        <CategorySelector categories={idiomCategories} onSelect={selectCategory} />
                    </div>
                ) : (
                    <div className="space-y-8">
                        {/* Mode Toggle */}
                        <div className="flex justify-center mb-8">
                            <div className="bg-muted p-1 rounded-xl flex gap-1 border border-border/50 shadow-inner">
                                <Button
                                    variant={mode === 'learning' ? 'default' : 'ghost'}
                                    className={cn(
                                        "rounded-lg px-8 font-bold transition-all duration-300",
                                        mode === 'learning' ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-md shadow-primary/20" : "text-muted-foreground hover:text-foreground"
                                    )}
                                    onClick={() => setMode('learning')}
                                >
                                    <Sparkles className="w-4 h-4 mr-2" />
                                    Flashcards
                                </Button>
                                <Button
                                    variant={mode === 'practice' ? 'default' : 'ghost'}
                                    className={cn(
                                        "rounded-lg px-8 font-bold transition-all duration-300",
                                        mode === 'practice' ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-md shadow-primary/20" : "text-muted-foreground hover:text-foreground"
                                    )}
                                    onClick={() => setMode('practice')}
                                >
                                    <Zap className="w-4 h-4 mr-2" />
                                    Mastery Drill
                                </Button>
                            </div>
                        </div>

                        {mode === 'learning' && currentCategory && (
                            <IdiomCard
                                idiom={currentCategory.idioms[currentIdiomIndex]}
                                onNext={nextIdiom}
                                onPrev={prevIdiom}
                                isFirst={currentIdiomIndex === 0}
                                isLast={currentIdiomIndex === currentCategory.idioms.length - 1}
                            />
                        )}

                        {mode === 'practice' && currentCategory && (
                            <MeaningDrill
                                idioms={currentCategory.idioms}
                                onComplete={(s) => console.log('Practice complete', s)}
                                onBack={resetTool}
                                onSelect={makeSelection}
                            />
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
