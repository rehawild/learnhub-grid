import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Globe, Zap, Compass } from "lucide-react";
import { useBritishVsUs } from "@/hooks/useBritishVsUs";
import { DialectProgress } from "@/components/britishvsus/DialectProgress";
import { DialectCard } from "@/components/britishvsus/DialectCard";
import { ComparisonResults } from "@/components/britishvsus/ComparisonResults";

export default function BritishVsUS() {
    const {
        state,
        currentItem,
        handleCorrect,
        handleWrong,
        reset,
        totalItemsCount
    } = useBritishVsUs();

    const { currentIndex, score, completed } = state;

    return (
        <div className="min-h-screen bg-background pb-20">
            <div className="container max-w-6xl mx-auto px-4 py-8">

                {/* Navigation Header */}
                <div className="mb-12 items-center justify-between flex">
                    <div className="flex items-center gap-4">
                        <Link to="/">
                            <Button variant="ghost" size="icon" className="hover:bg-yellow-50 text-yellow-600">
                                <ArrowLeft className="h-5 w-5" />
                            </Button>
                        </Link>
                    </div>

                    {!completed && (
                        <div className="flex items-center gap-3 bg-yellow-50 px-5 py-2.5 rounded-full border border-yellow-100 shadow-sm">
                            <Zap className="w-4 h-4 text-yellow-500" />
                            <span className="text-sm font-bold text-yellow-600 uppercase tracking-tighter">Dialect Points: {score}</span>
                        </div>
                    )}
                </div>

                {/* Standardized Tool Title */}
                <div className="text-center mb-16 animate-in fade-in duration-1000">
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-yellow-500/5 border border-yellow-500/10 text-yellow-600 text-xs font-bold uppercase tracking-widest">
                        <Compass className="w-3 h-3" />
                        Transatlantic Transformer
                    </div>
                    <h1 className="text-4xl font-bold text-foreground mb-3 flex items-center justify-center gap-4">
                        <span className="text-purple-500">🇬🇧</span> British vs US <span className="text-yellow-500">🇺🇸</span>
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto italic font-medium">
                        Seamlessly switch between dialects and master regional linguistic nuances.
                    </p>
                </div>

                {/* Interaction Flow */}
                {completed ? (
                    <ComparisonResults score={score} onReset={reset} />
                ) : (
                    <div className="space-y-10">
                        <DialectProgress current={currentIndex} total={totalItemsCount} />

                        {currentItem && (
                            <DialectCard
                                item={currentItem}
                                onCorrect={handleCorrect}
                                onWrong={handleWrong}
                            />
                        )}

                        <div className="flex items-center justify-center gap-2 pt-8 opacity-40">
                            <Globe className="w-4 h-4 text-theme-yellow" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Global Linguistic Synchronizer</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
