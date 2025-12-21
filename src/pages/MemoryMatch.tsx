import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
    ArrowLeft,
    RotateCcw,
    Puzzle,
    Timer,
    MousePointer2
} from "lucide-react";
import { useMemory } from "@/hooks/useMemory";
import { memoryDecks } from "@/data/memory/decks";
import { MemoryDeck } from "@/types/memory";
import { DeckSelector } from "@/components/memory/DeckSelector";
import { MemoryCard } from "@/components/memory/MemoryCard";

export default function MemoryMatch() {
    const [deck, setDeck] = useState<MemoryDeck | null>(null);
    const {
        cards,
        moves,
        matches,
        isComplete,
        handleCardClick,
        resetGame
    } = useMemory(deck);

    // Timer
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
        if (!deck || isComplete) return;
        const timer = setInterval(() => setSeconds(s => s + 1), 1000);
        return () => clearInterval(timer);
    }, [deck, isComplete]);

    // Reset timer on game reset/start
    useEffect(() => {
        setSeconds(0);
    }, [deck, isComplete === false]); // Simplified trigger

    const formatTime = (secs: number) => {
        const mins = Math.floor(secs / 60);
        const s = secs % 60;
        return `${mins}:${s.toString().padStart(2, '0')}`;
    };

    return (
        <div className="min-h-screen bg-background pb-20">
            <div className="container max-w-5xl mx-auto px-4 py-8">

                {/* Header */}
                <div className="mb-8 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        {deck ? (
                            <Button variant="ghost" size="icon" onClick={() => setDeck(null)}>
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

                    {deck && (
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <MousePointer2 className="w-4 h-4" />
                                <span className="font-mono font-bold text-foreground">{moves}</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <Timer className="w-4 h-4" />
                                <span className="font-mono font-bold text-foreground">{formatTime(seconds)}</span>
                            </div>
                        </div>
                    )}
                </div>

                {/* Tool Title & Description */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-foreground mb-2">
                        🧩 Memory Match
                    </h1>
                    <p className="text-muted-foreground">
                        {deck ? deck.name : "Find the matching pairs and boost your vocabulary"}
                    </p>
                </div>

                {!deck ? (
                    <div className="flex flex-col items-center gap-12 animate-in fade-in slide-in-from-bottom-4">
                        <DeckSelector decks={memoryDecks} onSelect={setDeck} />
                    </div>
                ) : (
                    <div className="flex flex-col items-center gap-8 animate-in fade-in zoom-in-95 duration-500">

                        {isComplete && (
                            <div className="bg-yellow-100 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 text-yellow-800 dark:text-yellow-200 px-6 py-4 rounded-xl flex flex-col items-center gap-2 text-center animate-bounce duration-[2000ms]">
                                <h3 className="text-xl font-bold">Puzzle Solved!</h3>
                                <p className="text-sm">Found {matches} pairs in {moves} moves ({formatTime(seconds)})</p>
                                <Button size="sm" onClick={() => {
                                    setSeconds(0);
                                    resetGame();
                                }} className="mt-2">
                                    <RotateCcw className="w-4 h-4 mr-2" />
                                    Play Again
                                </Button>
                            </div>
                        )}

                        <div className="grid grid-cols-4 gap-3 sm:gap-6 w-full max-w-2xl mx-auto">
                            {cards.map(card => (
                                <MemoryCard
                                    key={card.id}
                                    card={card}
                                    onClick={() => handleCardClick(card.id)}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
