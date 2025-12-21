import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
    ArrowLeft,
    RotateCcw,
    Link as LinkIcon,
    AlertCircle,
    Heart
} from "lucide-react";
import { useWordChain } from "@/hooks/useWordChain";
import { wordChainCategories } from "@/data/wordchain/categories";
import { ChainList } from "@/components/wordchain/ChainList";
import { ChainInput } from "@/components/wordchain/ChainInput";
import { CategorySelector } from "@/components/wordchain/CategorySelector";
import { WordChainCategory } from "@/types/wordchain";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function WordChain() {
    const [category, setCategory] = useState<WordChainCategory | null>(null);
    const {
        chain,
        score,
        lives,
        isGameOver,
        message,
        requiredLetter,
        isBotTurn,
        submitWord,
        resetGame
    } = useWordChain(category);

    const handleBack = () => {
        setCategory(null);
    };

    return (
        <div className="min-h-screen bg-background pb-20">
            <div className="container max-w-4xl mx-auto px-4 py-8">

                {/* Header */}
                <div className="mb-8 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        {category ? (
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
                        <div>
                            <h1 className="text-2xl font-bold flex items-center gap-2">
                                <LinkIcon className="h-6 w-6 text-red-500" />
                                Word Chain
                            </h1>
                            <p className="text-sm text-muted-foreground">
                                {category ? `Category: ${category.name}` : "Connect words by their letters"}
                            </p>
                        </div>
                    </div>

                    {category && (
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1 bg-red-100 dark:bg-red-900/20 text-red-600 px-3 py-1 rounded-full font-bold">
                                <Heart className="w-4 h-4 fill-current" />
                                {lives}
                            </div>
                            <div className="text-xl font-bold text-primary">
                                Score: {score}
                            </div>
                        </div>
                    )}
                </div>

                {!category ? (
                    <div className="flex flex-col items-center gap-8 animate-in fade-in slide-in-from-bottom-4">
                        <div className="text-center max-w-lg space-y-2">
                            <h2 className="text-3xl font-bold">Choose a Category</h2>
                            <p className="text-muted-foreground">
                                Select a topic to start the chain. You'll play against the computer.
                            </p>
                        </div>
                        <CategorySelector categories={wordChainCategories} onSelect={setCategory} />
                    </div>
                ) : (
                    <div className="flex flex-col items-center gap-6 max-w-2xl mx-auto animate-in fade-in zoom-in-95 duration-300">
                        {/* Status Message */}
                        {message && (
                            <Alert variant={isGameOver ? "destructive" : "default"} className="border-l-4">
                                <AlertCircle className="h-4 w-4" />
                                <AlertTitle>{isGameOver ? "Game Over" : "Assistant says..."}</AlertTitle>
                                <AlertDescription>{message}</AlertDescription>
                            </Alert>
                        )}

                        <ChainList chain={chain} />

                        {isGameOver ? (
                            <Button size="lg" onClick={resetGame} className="gap-2 w-full max-w-xs">
                                <RotateCcw className="w-4 h-4" />
                                Play Again
                            </Button>
                        ) : (
                            <ChainInput
                                requiredLetter={requiredLetter}
                                disabled={isBotTurn || isGameOver}
                                onSubmit={submitWord}
                            />
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
