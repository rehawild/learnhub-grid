import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, MessageSquare, TrendingUp, Lightbulb, Languages } from "lucide-react";
import { useJargonBuster } from "@/hooks/useJargonBuster";
import { jargonCategories } from "@/data/jargonbuster/scenarios";
import { CategorySelector } from "@/components/jargonbuster/CategorySelector";
import { JargonCard } from "@/components/jargonbuster/JargonCard";
import { TranslationDrill } from "@/components/jargonbuster/TranslationDrill";
import { cn } from "@/lib/utils";

export default function JargonBuster() {
    const {
        state,
        selectCategory,
        setMode,
        nextTerm,
        prevTerm,
        updateScore,
        resetTool
    } = useJargonBuster();

    const { mode, currentCategory, currentTermIndex, score } = state;

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
                            <span className="text-sm font-bold text-primary uppercase tracking-tighter">Communication Skills</span>
                        </div>
                    )}
                </div>

                {/* Standardized Tool Title & Description */}
                <div className="text-center mb-12 animate-in fade-in duration-700">
                    <h1 className="text-4xl font-bold text-foreground mb-2">
                        💡 Jargon Buster
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        {currentCategory ? currentCategory.title : "Decode complex corporate lingo into simple, actionable plain English."}
                    </p>
                </div>

                {/* Content */}
                {mode === 'selection' ? (
                    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-500">
                        <CategorySelector categories={jargonCategories} onSelect={selectCategory} />
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
                                    <BookOpen className="w-4 h-4 mr-2" />
                                    Glossary
                                </Button>
                                <Button
                                    variant={mode === 'practice' ? 'default' : 'ghost'}
                                    className={cn(
                                        "rounded-lg px-8 font-bold transition-all duration-300",
                                        mode === 'practice' ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-md shadow-primary/20" : "text-muted-foreground hover:text-foreground"
                                    )}
                                    onClick={() => setMode('practice')}
                                >
                                    <Languages className="w-4 h-4 mr-2" />
                                    Translator
                                </Button>
                            </div>
                        </div>

                        {mode === 'learning' && currentCategory && (
                            <JargonCard
                                term={currentCategory.terms[currentTermIndex]}
                                onNext={nextTerm}
                                onPrev={prevTerm}
                                isFirst={currentTermIndex === 0}
                                isLast={currentTermIndex === currentCategory.terms.length - 1}
                            />
                        )}

                        {mode === 'practice' && currentCategory && (
                            <TranslationDrill
                                terms={currentCategory.terms}
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
