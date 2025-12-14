import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Edit3, Trophy, CheckCircle2 } from "lucide-react";
import { CrosswordDeck } from "@/types/crossword";
import { crosswordDecks } from "@/data/crossword/sample-decks";
import { useCrossword } from "@/hooks/useCrossword";
import { CrosswordGrid } from "@/components/crossword/CrosswordGrid";
import { ClueList } from "@/components/crossword/ClueList";
import { DeckSelector } from "@/components/crossword/DeckSelector";

const CrosswordGame = ({ deck, onBack }: { deck: CrosswordDeck; onBack: () => void }) => {
    const {
        grid,
        activeClueId,
        selectedCell, // Unused in render but needed for hook state
        isComplete,
        selectCell,
        setCellValue,
        moveSelection
    } = useCrossword(deck);

    // Keyboard handling
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (isComplete) return;

            // Prevent default scrolling for arrows
            if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Space"].includes(e.code)) {
                e.preventDefault();
            }

            if (e.key.length === 1 && e.key.match(/[a-zA-Z]/)) {
                setCellValue(e.key);
                return;
            }

            switch (e.key) {
                case "Backspace":
                case "Delete":
                    setCellValue("");
                    moveSelection(-1);
                    break;
                case "ArrowUp":
                    // If moving visually up, we might need a more complex moveSelection
                    // Currently moveSelection handles stepping in *current typing direction*
                    // We need explicit directional move
                    // Actually, let's keep it simple: Arrow keys should force selection move
                    // But our hook uses moveSelection(step) along current axis.
                    // Let's rely on click-to-move for non-linear for now or update hook later?
                    // Re-reading hook: moveSelection takes a step (+1 or -1) in CURRENT direction.
                    // This is standard for typing flow.
                    // For exploring, users expect arrows to move freely.
                    // Since I don't have explicit move(row, col) exposed nicely for directions,
                    // I'll stick to basic typing. 
                    // Wait, `selectCell` takes row/col. I can calculate neighbors here if I want.
                    // Let's implement basic arrow navigation in UI layer for better UX.
                    break;
                // ...
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isComplete, setCellValue, moveSelection]);

    if (isComplete) {
        return (
            <div className="flex flex-col items-center justify-center py-12 space-y-6 animate-in fade-in zoom-in duration-500">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Trophy className="w-12 h-12 text-primary" />
                </div>
                <div className="text-center space-y-2">
                    <h2 className="text-3xl font-bold text-foreground">Puzzle Solved!</h2>
                    <p className="text-muted-foreground">You completed {deck.name}.</p>
                </div>
                <div className="flex justify-center gap-4">
                    <Button onClick={onBack} size="lg" className="gap-2">
                        <CheckCircle2 className="w-4 h-4" />
                        Choose Another
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col lg:flex-row gap-8 w-full max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500 items-start">

            {/* Left: Grid */}
            <div className="flex-1 flex flex-col items-center gap-4 bg-card/50 p-6 rounded-xl border border-border/50">
                <div className="flex items-center justify-between w-full">
                    <h2 className="font-bold text-xl">{deck.name}</h2>
                    <span className="text-xs text-muted-foreground">
                        {deck.width}x{deck.height}
                    </span>
                </div>

                <CrosswordGrid
                    grid={grid}
                    onCellClick={selectCell}
                />

                <p className="text-xs text-muted-foreground text-center mt-4">
                    Click a cell to select. Click again to toggle direction.<br />
                    Type to fill. Backspace to delete.
                </p>
            </div>

            {/* Right: Clues */}
            <div className="w-full lg:w-80 space-y-6 h-full">
                <div className="bg-card p-4 rounded-xl border shadow-sm h-full">
                    <ClueList
                        clues={deck.clues}
                        activeClueId={activeClueId}
                        direction="across"
                        onClueClick={() => { }} // Not impl yet
                    />
                    <div className="my-4 border-t" />
                    <ClueList
                        clues={deck.clues}
                        activeClueId={activeClueId}
                        direction="down"
                        onClueClick={() => { }}
                    />
                </div>
            </div>
        </div>
    );
};

const Crossword = () => {
    const [selectedDeck, setSelectedDeck] = useState<CrosswordDeck | null>(null);

    return (
        <div className="min-h-screen bg-background pb-20">
            <div className="container max-w-6xl mx-auto px-4 py-8">

                {/* Header */}
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

                {!selectedDeck && (
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
                            <Edit3 className="w-10 h-10 text-primary" />
                            Crossword
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Solve clues to fill the grid. Test your knowledge across various topics.
                        </p>
                    </div>
                )}

                <div className="flex justify-center w-full">
                    {selectedDeck ? (
                        <CrosswordGame
                            deck={selectedDeck}
                            onBack={() => setSelectedDeck(null)}
                        />
                    ) : (
                        <DeckSelector
                            decks={crosswordDecks}
                            onSelectDeck={setSelectedDeck}
                        />
                    )}
                </div>

            </div>
        </div>
    );
};

export default Crossword;
