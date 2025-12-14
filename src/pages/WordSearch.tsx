import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Search, Trophy, RotateCcw } from "lucide-react";
import { WordSearchDeck } from "@/types/wordsearch";
import { wordSearchDecks } from "@/data/wordsearch/sample-decks";
import { useWordSearch } from "@/hooks/useWordSearch";
import { WordSearchGrid } from "@/components/wordsearch/WordSearchGrid";
import { WordList } from "@/components/wordsearch/WordList";
import { DeckSelector } from "@/components/wordsearch/DeckSelector";

const WordSearchGame = ({ deck, onBack }: { deck: WordSearchDeck; onBack: () => void }) => {
    const {
        grid,
        foundWords,
        selection,
        isComplete,
        startSelection,
        updateSelection,
        endSelection,
        resetGame
    } = useWordSearch(deck);

    if (isComplete) {
        return (
            <div className="flex flex-col items-center justify-center py-12 space-y-6 animate-in fade-in zoom-in duration-500">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Trophy className="w-12 h-12 text-primary" />
                </div>
                <div className="text-center space-y-2">
                    <h2 className="text-3xl font-bold text-foreground">Puzzle Solved!</h2>
                    <p className="text-muted-foreground">You found all {deck.words.length} words.</p>
                </div>
                <div className="flex justify-center gap-4">
                    <Button onClick={resetGame} size="lg" className="gap-2">
                        <RotateCcw className="w-4 h-4" />
                        Play Again
                    </Button>
                    <Button variant="outline" size="lg" onClick={onBack}>
                        Choose Another
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center gap-8 w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center justify-between w-full max-w-2xl px-4">
                <div className="space-y-1">
                    <h2 className="font-bold text-2xl">{deck.name}</h2>
                    <p className="text-muted-foreground text-sm">{foundWords.length} / {deck.words.length} words found</p>
                </div>
                <Button variant="ghost" size="icon" onClick={resetGame} title="Reset Puzzle">
                    <RotateCcw className="w-5 h-5" />
                </Button>
            </div>

            <WordSearchGrid
                grid={grid}
                selection={selection}
                onCellDown={startSelection}
                onCellOver={updateSelection}
                onCellUp={endSelection}
            />

            <WordList
                words={deck.words}
                foundWords={foundWords}
            />
        </div>
    );
};

const WordSearch = () => {
    const [selectedDeck, setSelectedDeck] = useState<WordSearchDeck | null>(null);

    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Standard Container */}
            <div className="container max-w-4xl mx-auto px-4 py-8">

                {/* 1. Navigation Header */}
                <div className="mb-8">
                    {selectedDeck ? (
                        <Button variant="ghost" className="gap-2" onClick={() => setSelectedDeck(null)}>
                            <ArrowLeft className="h-4 w-4" />
                            Back to Decks
                        </Button>
                    ) : (
                        <Link to="/">
                            <Button variant="ghost" className="gap-2">
                                <ArrowLeft className="h-4 w-4" />
                                Back to Tools
                            </Button>
                        </Link>
                    )}
                </div>

                {/* 2. Tool Title & Description - Only show on selection screen or if desired to persist */}
                {!selectedDeck && (
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
                            <Search className="w-10 h-10 text-primary" />
                            Word Search
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Find hidden words in the grid. Challenge your vocabulary and pattern recognition skills!
                        </p>
                    </div>
                )}

                {/* 3. Main Content Area */}
                <div className="flex justify-center">
                    {selectedDeck ? (
                        <WordSearchGame
                            deck={selectedDeck}
                            onBack={() => setSelectedDeck(null)}
                        />
                    ) : (
                        <DeckSelector
                            decks={wordSearchDecks}
                            onSelectDeck={setSelectedDeck}
                        />
                    )}
                </div>

            </div>
        </div>
    );
};

export default WordSearch;
