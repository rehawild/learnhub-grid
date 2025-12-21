import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
    ArrowLeft,
    RotateCcw,
    Check,
    Trophy,
    AlertCircle,
    ShoppingBag
} from "lucide-react";
import { useScrabble } from "@/hooks/useScrabble";
import { ScrabbleBoard } from "@/components/scrabble/ScrabbleBoard";
import { ScrabbleRack } from "@/components/scrabble/ScrabbleRack";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ScrollArea } from "@/components/ui/scroll-area";

const Scrabble = () => {
    const {
        board,
        rack,
        score,
        bagCount,
        history,
        selectedTileId,
        message,
        selectTile,
        placeTile,
        recallTile,
        submitMove,
        shuffleRack,
        resetGame
    } = useScrabble();

    return (
        <div className="min-h-screen bg-background pb-20">
            <div className="container max-w-7xl mx-auto px-2 sm:px-4 py-8">

                {/* Header */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
                    <div className="flex items-center gap-4 w-full md:w-auto">
                        <Link to="/">
                            <Button variant="ghost" size="icon">
                                <ArrowLeft className="h-5 w-5" />
                            </Button>
                        </Link>
                        <div>
                            <h1 className="text-2xl font-bold flex items-center gap-2">
                                <Trophy className="h-6 w-6 text-yellow-500" />
                                Scrabble Solitaire
                            </h1>
                            <p className="text-sm text-muted-foreground">
                                Sandbox Mode • Place valid words to score
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-6 bg-card px-6 py-3 rounded-xl border shadow-sm">
                        <div className="text-center">
                            <span className="text-xs text-muted-foreground uppercase font-bold">Score</span>
                            <div className="text-2xl font-bold text-primary">{score}</div>
                        </div>
                        <div className="w-px h-8 bg-border" />
                        <div className="text-center">
                            <span className="text-xs text-muted-foreground uppercase font-bold">Bag</span>
                            <div className="text-2xl font-bold flex items-center gap-1">
                                {bagCount} <ShoppingBag className="w-4 h-4 text-muted-foreground" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col xl:flex-row gap-8 items-start">

                    {/* Left Panel: Game Board */}
                    <div className="flex-1 w-full flex flex-col items-center gap-6">

                        {/* Message / Alert */}
                        {message && (
                            <Alert variant="default" className="max-w-md bg-accent/20 border-accent/50 animate-in fade-in slide-in-from-top-2">
                                <AlertCircle className="h-4 w-4" />
                                <AlertTitle>Game Update</AlertTitle>
                                <AlertDescription>{message}</AlertDescription>
                            </Alert>
                        )}

                        <ScrabbleBoard
                            board={board}
                            onCellClick={(r, c) => {
                                const cell = board[r][c];
                                if (cell.tile && cell.isTemp) {
                                    recallTile(r, c);
                                } else {
                                    placeTile(r, c);
                                }
                            }}
                        />

                        {/* Controls */}
                        <div className="flex flex-col items-center w-full max-w-2xl gap-4">
                            <ScrabbleRack
                                tiles={rack}
                                selectedTileId={selectedTileId}
                                onSelectTile={selectTile}
                                onShuffle={shuffleRack}
                            />

                            <div className="flex gap-4">
                                <Button size="lg" onClick={submitMove} className="gap-2 min-w-[120px]">
                                    <Check className="w-5 h-5" />
                                    Play Word
                                </Button>
                                <Button variant="outline" size="lg" onClick={resetGame} className="gap-2">
                                    <RotateCcw className="w-4 h-4" />
                                    Restart
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Right Panel: History */}
                    <div className="w-full xl:w-80 h-[500px] bg-card rounded-xl border flex flex-col overflow-hidden">
                        <div className="p-4 border-b bg-muted/30">
                            <h3 className="font-bold">Word History</h3>
                        </div>
                        <ScrollArea className="flex-1 p-4">
                            <div className="space-y-4">
                                {history.length === 0 && (
                                    <p className="text-sm text-muted-foreground text-center py-8">
                                        No words played yet.
                                    </p>
                                )}
                                {[...history].reverse().map((entry, i) => (
                                    <div key={i} className="flex justify-between items-center text-sm p-2 rounded-md hover:bg-muted/50 transition-colors border-b border-border/50 last:border-0">
                                        <span className="font-mono font-bold tracking-wider">{entry.word}</span>
                                        <span className="text-primary font-bold">+{entry.score}</span>
                                    </div>
                                ))}
                            </div>
                        </ScrollArea>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Scrabble;
