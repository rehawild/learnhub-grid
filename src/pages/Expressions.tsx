import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Layout, Sparkles, Trophy, MessageSquare } from "lucide-react";
import { useExpressions } from "@/hooks/useExpressions";
import { expressionCategories } from "@/data/expressions/categories";
import { ExpressionsProgress } from "@/components/expressions/ExpressionsProgress";
import { CategorySelector } from "@/components/expressions/CategorySelector";
import { ExpressionCard } from "@/components/expressions/ExpressionCard";
import { ResponseDrill } from "@/components/expressions/ResponseDrill";

export default function Expressions() {
    const {
        state,
        selectCategory,
        nextStep,
        prevStep,
        addScore,
        resetTool
    } = useExpressions();

    const { mode, currentCategory, currentIndex, score } = state;

    return (
        <div className="min-h-screen bg-background pb-20">
            <div className="container max-w-6xl mx-auto px-4 py-8">

                {/* Navigation Header */}
                <div className="mb-8 items-center justify-between flex">
                    <div className="flex items-center gap-4">
                        {mode !== 'selection' ? (
                            <Button variant="ghost" size="icon" onClick={resetTool} className="hover:bg-yellow-50 hover:text-yellow-600">
                                <ArrowLeft className="h-5 w-5" />
                            </Button>
                        ) : (
                            <Link to="/">
                                <Button variant="ghost" size="icon" className="hover:bg-yellow-50">
                                    <ArrowLeft className="h-5 w-5" />
                                </Button>
                            </Link>
                        )}
                    </div>

                    {mode !== 'selection' && (
                        <div className="hidden sm:flex items-center gap-2 bg-yellow-50 px-4 py-2 rounded-full border border-yellow-100">
                            <Sparkles className="w-4 h-4 text-yellow-500" />
                            <span className="text-sm font-bold text-yellow-600 uppercase tracking-tighter">Social Savvy: {score}</span>
                        </div>
                    )}
                </div>

                {/* Standardized Tool Title & Description */}
                <div className="text-center mb-12 animate-in fade-in duration-700">
                    <h1 className="text-4xl font-bold text-foreground mb-2 flex items-center justify-center gap-3">
                        <span className="text-purple-500">😃</span> <span className="text-yellow-500">Expressions</span>
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto italic font-medium">
                        {currentCategory ? currentCategory.title : "Master functional language patterns for every social situation."}
                    </p>
                </div>

                {/* Content Flow */}
                {mode === 'selection' ? (
                    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-500">
                        <div className="flex items-center gap-2 justify-center mb-8">
                            <Layout className="w-5 h-5 text-yellow-400" />
                            <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest text-center">Join a Conversation Context</span>
                        </div>
                        <CategorySelector categories={expressionCategories} onSelect={selectCategory} />
                    </div>
                ) : (
                    <div className="space-y-8">
                        {currentCategory && (
                            <ExpressionsProgress
                                current={currentIndex + (mode === 'drill' ? 1 : 0.5)}
                                total={currentCategory.expressions.length}
                                categoryTitle={currentCategory.title}
                            />
                        )}

                        {mode === 'discovery' && currentCategory && (
                            <ExpressionCard
                                expression={currentCategory.expressions[currentIndex]}
                                onNext={nextStep}
                                onPrev={prevStep}
                                isFirst={currentIndex === 0 && mode === 'discovery'}
                            />
                        )}

                        {mode === 'drill' && currentCategory && (
                            <ResponseDrill
                                expression={currentCategory.expressions[currentIndex]}
                                onScore={addScore}
                                onComplete={nextStep}
                                onBack={prevStep}
                            />
                        )}

                        {mode === 'results' && (
                            <div className="text-center space-y-8 animate-in zoom-in duration-500">
                                <div className="bg-yellow-50 p-12 rounded-[3rem] border-2 border-yellow-100 max-w-xl mx-auto relative overflow-hidden shadow-2xl">
                                    <div className="absolute -top-6 -right-6 text-yellow-500 opacity-10 rotate-12">
                                        <Trophy className="w-32 h-32" />
                                    </div>
                                    <h2 className="text-4xl font-bold mb-4 text-yellow-900">Charisma Mastered!</h2>
                                    <p className="text-yellow-600 text-lg mb-8 italic font-medium">You've successfully decoded all social patterns in this category.</p>
                                    <div className="text-7xl font-bold text-yellow-600 mb-2">{score}</div>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-yellow-400">Total Fluency Points</p>
                                </div>
                                <Button size="lg" className="h-20 w-72 text-xl font-bold rounded-2xl bg-yellow-600 hover:bg-yellow-700 shadow-xl shadow-yellow-500/20" onClick={resetTool}>
                                    Master Another Context
                                </Button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
