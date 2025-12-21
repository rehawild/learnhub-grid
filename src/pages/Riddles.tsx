import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, RotateCcw, HelpCircle, Trophy } from "lucide-react";
import { useRiddles } from "@/hooks/useRiddles";
import { riddleDecks } from "@/data/riddles/sample-decks";
import { RiddleDeck } from "@/types/riddles";
import { DeckSelector } from "@/components/riddles/DeckSelector";
import { RiddleCard } from "@/components/riddles/RiddleCard";
import { Progress } from "@/components/ui/progress";

export default function Riddles() {
    const [selectedDeck, setSelectedDeck] = useState<RiddleDeck | null>(null);
    const {
        currentRiddle,
        currentRiddleIndex,
        totalRiddles,
        isAnswerRevealed,
        isComplete,
        revealAnswer,
        nextRiddle,
        resetGame
    } = useRiddles(selectedDeck);

    const handleBack = () => {
        setSelectedDeck(null);
    };

    const progress = totalRiddles > 0 ? ((currentRiddleIndex) / totalRiddles) * 100 : 0;

    return (
        <div className="min-h-screen bg-background pb-20">
            <div className="container max-w-6xl mx-auto px-4 py-8">

                {/* Header */}
                <div className="mb-8 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        {selectedDeck ? (
                            <Button variant="ghost" size="icon" onClick={handleBack}>
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

                    {selectedDeck && !isComplete && (
                        <div className="flex flex-col items-end gap-2 text-right">
                            <span className="text-sm font-bold text-primary">
                                Riddle {currentRiddleIndex + 1} of {totalRiddles}
                            </span>
                            <Progress value={progress} className="w-32 h-2" />
                        </div>
                    )}
                </div>

                {/* Tool Title & Description */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-foreground mb-2">
                        🤔 Riddles
                    </h1>
                    <p className="text-muted-foreground">
                        {selectedDeck ? selectedDeck.name : "Exercise your logic and wit with brain teasers"}
                    </p>
                </div>

                {!selectedDeck ? (
                    <div className="flex flex-col items-center gap-12 pt-12 animate-in fade-in slide-in-from-bottom-8 duration-500">
                        <DeckSelector decks={riddleDecks} onSelect={setSelectedDeck} />
                    </div>
                ) : isComplete ? (
                    <div className="flex flex-col items-center justify-center gap-8 py-20 animate-in fade-in zoom-in duration-500">
                        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                            <Trophy className="w-12 h-12 text-primary animate-bounce" />
                        </div>
                        <div className="text-center space-y-2">
                            <h2 className="text-4xl font-bold">Deck Completed!</h2>
                            <p className="text-xl text-muted-foreground">
                                You've mastered the <span className="text-primary font-bold">{selectedDeck.name}</span> deck.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <Button size="lg" onClick={resetGame} className="px-8 py-6 text-lg font-bold">
                                <RotateCcw className="w-5 h-5 mr-2" />
                                Try Again
                            </Button>
                            <Button variant="outline" size="lg" onClick={handleBack} className="px-8 py-6 text-lg font-bold">
                                Change Deck
                            </Button>
                        </div>
                    </div>
                ) : currentRiddle ? (
                    <div className="mt-12 animate-in fade-in slide-in-from-bottom-4 duration-500 overflow-hidden">
                        <RiddleCard
                            riddle={currentRiddle}
                            isAnswerRevealed={isAnswerRevealed}
                            onReveal={revealAnswer}
                            onNext={nextRiddle}
                            isLast={currentRiddleIndex === totalRiddles - 1}
                        />
                    </div>
                ) : null}
            </div>
        </div>
    );
}
