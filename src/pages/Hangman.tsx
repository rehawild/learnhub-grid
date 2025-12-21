import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Gamepad2, Trophy, Frown, RotateCcw } from "lucide-react";
import { HangmanDeck } from "@/types/hangman";
import { hangmanDecks } from "@/data/hangman/sample-decks";
import { useHangman } from "@/hooks/useHangman";
import { HangmanDrawing } from "@/components/hangman/HangmanDrawing";
import { WordDisplay } from "@/components/hangman/WordDisplay";
import { Keyboard } from "@/components/hangman/Keyboard";
import { DeckSelector } from "@/components/hangman/DeckSelector";

const HangmanGame = ({ deck, onBack }: { deck: HangmanDeck; onBack: () => void }) => {
    const {
        currentWord,
        guessedLetters,
        mistakes,
        maxLives,
        status,
        guessLetter,
        resetGame
    } = useHangman(deck);

    // Keyboard support
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (status !== 'playing') return;
            const char = e.key.toUpperCase();
            if (char.match(/^[A-Z]$/)) {
                guessLetter(char);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [status, guessLetter]);

    if (status === 'won' || status === 'lost') {
        const isWon = status === 'won';
        return (
            <div className="flex flex-col items-center justify-center py-12 space-y-8 animate-in fade-in zoom-in duration-500">
                <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto ${isWon ? 'bg-primary/10' : 'bg-destructive/10'}`}>
                    {isWon ? (
                        <Trophy className="w-12 h-12 text-primary" />
                    ) : (
                        <Frown className="w-12 h-12 text-destructive" />
                    )}
                </div>

                <div className="text-center space-y-2">
                    <h2 className="text-3xl font-bold text-foreground">
                        {isWon ? 'You Won!' : 'Game Over'}
                    </h2>
                    <p className="text-muted-foreground">
                        {isWon ? 'Great guessing!' : 'Better luck next time.'}
                    </p>
                </div>

                <div className="bg-card p-6 rounded-xl border flex flex-col items-center gap-2">
                    <span className="text-sm text-muted-foreground uppercase tracking-wider">The word was</span>
                    <span className="text-3xl font-bold tracking-widest text-primary">{currentWord}</span>
                </div>

                <div className="flex justify-center gap-4">
                    <Button onClick={resetGame} size="lg" className="gap-2">
                        <RotateCcw className="w-4 h-4" />
                        Play Again
                    </Button>
                    <Button variant="outline" size="lg" onClick={onBack}>
                        Choose Topic
                    </Button>
                </div>
            </div>
        );
    }

    // Identify which letters are correct vs wrong for keyboard styling
    const correctLetters = guessedLetters.filter(l => currentWord.includes(l));
    const wrongLetters = guessedLetters.filter(l => !currentWord.includes(l));

    return (
        <div className="flex flex-col items-center gap-8 w-full max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center justify-between w-full">
                <Button variant="ghost" size="sm" onClick={onBack} className="gap-2">
                    <ArrowLeft className="w-4 h-4" />
                    Back
                </Button>
                <h2 className="font-bold text-xl">{deck.name}</h2>
                <div className="text-sm font-medium">
                    Lives: <span className={mistakes > maxLives - 2 ? "text-destructive" : "text-primary"}>{maxLives - mistakes}</span>
                </div>
            </div>

            <HangmanDrawing mistakes={mistakes} />

            <WordDisplay
                word={currentWord}
                guessedLetters={guessedLetters}
            />

            <Keyboard
                activeLetters={correctLetters} // Green
                inactiveLetters={wrongLetters} // Dimmed
                onGuess={guessLetter}
            />
        </div>
    );
};

const Hangman = () => {
    const [selectedDeck, setSelectedDeck] = useState<HangmanDeck | null>(null);

    return (
        <div className="min-h-screen bg-background pb-20">
            <div className="container max-w-4xl mx-auto px-4 py-8">

                {/* Header */}
                <div className="mb-8">
                    {!selectedDeck && (
                        <Link to="/">
                            <Button variant="ghost" className="gap-2">
                                <ArrowLeft className="h-4 w-4" />
                                Back to Tools
                            </Button>
                        </Link>
                    )}
                </div>

                {!selectedDeck && (
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
                            <Gamepad2 className="w-10 h-10 text-primary" />
                            Hangman
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Guess the hidden word letter by letter before you run out of lives!
                        </p>
                    </div>
                )}

                <div className="flex justify-center w-full">
                    {selectedDeck ? (
                        <HangmanGame
                            deck={selectedDeck}
                            onBack={() => setSelectedDeck(null)}
                        />
                    ) : (
                        <DeckSelector
                            decks={hangmanDecks}
                            onSelectDeck={setSelectedDeck}
                        />
                    )}
                </div>

            </div>
        </div>
    );
};

export default Hangman;
