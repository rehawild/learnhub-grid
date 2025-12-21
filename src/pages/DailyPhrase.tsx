import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Sparkles, Wand2, FlaskConical, History } from "lucide-react";
import { useDailyPhrase } from "@/hooks/useDailyPhrase";
import { Athanor } from "@/components/dailyphrase/Athanor";
import { ReagentShards, CompositionSlots } from "@/components/dailyphrase/ReagentShards";
import { LinguisticCodex } from "@/components/dailyphrase/LinguisticCodex";
import { cn } from "@/lib/utils";

export default function DailyPhrase() {
    const { state, startComposition, selectShard, resetComposition } = useDailyPhrase();
    const { mode, currentPhrase, compositionShards, selectedShards, isCorrect, score } = state;

    if (!currentPhrase) return null;

    return (
        <div className="min-h-screen bg-background pb-20 selection:bg-lime-500/30">
            <div className="container max-w-4xl mx-auto px-4 py-8">

                {/* Alchemist's Navigation */}
                <div className="mb-12 flex items-center justify-between">
                    <Link to="/">
                        <Button variant="ghost" size="icon" className="hover:bg-lime-500/10 hover:text-lime-400 group">
                            <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
                        </Button>
                    </Link>

                    <div className="flex items-center gap-3 bg-lime-500/5 px-6 py-2.5 rounded-full border border-lime-500/20 shadow-inner">
                        <Wand2 className="w-4 h-4 text-lime-400 animate-pulse" />
                        <span className="text-sm font-bold text-lime-500 uppercase tracking-tighter">Alchemy Rank: {score}</span>
                    </div>
                </div>

                {/* Title Section */}
                <div className="text-center mb-16 space-y-4">
                    <h1 className="text-5xl font-bold tracking-tighter flex items-center justify-center gap-4">
                        <FlaskConical className="w-10 h-10 text-lime-500" />
                        <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
                            Daily Phrase
                        </span>
                        <span className="text-lime-500 text-3xl font-Fredoka">Alchemy</span>
                    </h1>
                    <p className="text-muted-foreground/60 text-lg italic font-medium max-w-xl mx-auto">
                        Transmute raw linguistic elements into pure conversational gold.
                    </p>
                </div>

                {/* The Alchemy Chamber */}
                <div className="relative">
                    {mode !== 'unlocked' ? (
                        <div className="space-y-16 py-8">
                            <Athanor mode={mode} isCorrect={isCorrect}>
                                {mode === 'discovery' ? (
                                    <div className="space-y-8 animate-in fade-in zoom-in duration-1000">
                                        <div className="w-24 h-24 bg-lime-500/20 rounded-full flex items-center justify-center mx-auto ring-4 ring-lime-500/10 shadow-[0_0_30px_rgba(163,230,53,0.2)]">
                                            <Sparkles className="w-12 h-12 text-lime-500" />
                                        </div>
                                        <div className="space-y-4">
                                            <h2 className="text-3xl font-bold text-foreground">New Essence Detected</h2>
                                            <p className="text-muted-foreground">The planetary alignment has revealed a new linguistic pattern for today.</p>
                                        </div>
                                        <Button
                                            size="lg"
                                            onClick={startComposition}
                                            className="bg-lime-600 hover:bg-lime-700 h-16 px-12 text-lg font-bold rounded-2xl shadow-xl shadow-lime-500/20 transition-all hover:scale-105 active:scale-95"
                                        >
                                            Begin Transmutation
                                        </Button>
                                    </div>
                                ) : (
                                    <div className="w-full space-y-12">
                                        <CompositionSlots selected={selectedShards} isCorrect={isCorrect} />
                                        <ReagentShards
                                            shards={compositionShards}
                                            onSelect={selectShard}
                                            active={isCorrect !== true}
                                        />

                                        <div className="flex justify-center gap-4">
                                            <Button
                                                variant="ghost"
                                                onClick={resetComposition}
                                                className="text-muted-foreground hover:bg-red-500/10 hover:text-red-400"
                                            >
                                                <History className="w-4 h-4 mr-2" />
                                                Purge Crucible
                                            </Button>
                                        </div>
                                    </div>
                                )}
                            </Athanor>

                            {/* Alchemical Symbols (Decorative) */}
                            <div className="flex justify-center gap-12 opacity-20 grayscale pointer-events-none">
                                <span className="text-4xl text-lime-500">🜂</span>
                                <span className="text-4xl text-lime-500">🜃</span>
                                <span className="text-4xl text-lime-500">🜁</span>
                                <span className="text-4xl text-lime-500">🜄</span>
                            </div>
                        </div>
                    ) : (
                        <div className="animate-in fade-in slide-in-from-bottom-12 duration-1000">
                            <LinguisticCodex phrase={currentPhrase} />

                            <div className="mt-12 text-center">
                                <Link to="/">
                                    <Button
                                        variant="outline"
                                        className="h-16 px-8 rounded-2xl border-lime-500/20 text-lime-400 hover:bg-lime-500/10"
                                    >
                                        Return to the Hub
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer Subtle Detail */}
                <div className="mt-20 flex items-center justify-center gap-2 opacity-30">
                    <div className="h-[1px] w-12 bg-lime-500/50" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Aurum Linguistica</span>
                    <div className="h-[1px] w-12 bg-lime-500/50" />
                </div>
            </div>
        </div>
    );
}
