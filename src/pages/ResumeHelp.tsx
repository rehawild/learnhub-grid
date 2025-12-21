import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText, Zap, TrendingUp, Sparkles, Layout } from "lucide-react";
import { useResumeHelp } from "@/hooks/useResumeHelp";
import { resumeCategories } from "@/data/resumehelp/scenarios";
import { ScenarioSelector } from "@/components/resumehelp/ScenarioSelector";
import { ResumeCard } from "@/components/resumehelp/ResumeCard";
import { AchievementDrill } from "@/components/resumehelp/AchievementDrill";
import { cn } from "@/lib/utils";

export default function ResumeHelp() {
    const {
        state,
        selectCategory,
        setMode,
        nextBullet,
        prevBullet,
        updateScore,
        resetTool
    } = useResumeHelp();

    const { mode, currentCategory, currentBulletIndex, score } = state;

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
                            <span className="text-sm font-bold text-primary uppercase tracking-tighter">Impact Level</span>
                        </div>
                    )}
                </div>

                {/* Standardized Tool Title & Description */}
                <div className="text-center mb-12 animate-in fade-in duration-700">
                    <h1 className="text-4xl font-bold text-foreground mb-2">
                        📃 Resume Help
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto italic">
                        {currentCategory ? currentCategory.title : "Transform your work experience into a narrative of achievement."}
                    </p>
                </div>

                {/* Content */}
                {mode === 'selection' ? (
                    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-500">
                        {/* Beginner's Guide Card */}
                        <div className="max-w-4xl mx-auto p-6 bg-primary/5 rounded-3xl border border-primary/20 flex flex-col md:flex-row gap-6 items-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                                <Sparkles className="w-8 h-8 text-primary" />
                            </div>
                            <div className="flex-1 text-center md:text-left">
                                <h3 className="text-lg font-bold text-foreground">Beginner's Cheat Sheet</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                                    Start with an <strong>Action Verb</strong>, add a <strong>Quantified Task</strong>, and end with the <strong>Business Result</strong>.
                                    Example: "Balanced (Verb) registers (Task) resulting in zero end-of-day discrepancies (Result)."
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 justify-center mb-8">
                            <Layout className="w-5 h-5 text-primary" />
                            <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest text-center">Select your career domain</span>
                        </div>
                        <ScenarioSelector categories={resumeCategories} onSelect={selectCategory} />
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
                                    Impact Lab
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
                                    Achievement Drill
                                </Button>
                            </div>
                        </div>

                        {mode === 'learning' && currentCategory && (
                            <ResumeCard
                                bullet={currentCategory.bullets[currentBulletIndex]}
                                onNext={nextBullet}
                                onPrev={prevBullet}
                                isFirst={currentBulletIndex === 0}
                                isLast={currentBulletIndex === currentCategory.bullets.length - 1}
                            />
                        )}

                        {mode === 'practice' && currentCategory && (
                            <AchievementDrill
                                bullets={currentCategory.bullets}
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
