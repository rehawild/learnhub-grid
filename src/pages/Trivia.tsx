import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
    ArrowLeft,
    BrainCircuit,
    HelpCircle
} from "lucide-react";
import { useTrivia } from "@/hooks/useTrivia";
import { triviaCategories } from "@/data/trivia/categories";
import { TriviaCategory } from "@/types/trivia";
import { CategorySelector } from "@/components/trivia/CategorySelector";
import { QuestionCard } from "@/components/trivia/QuestionCard";
import { ResultScreen } from "@/components/trivia/ResultScreen";
import { Progress } from "@/components/ui/progress";

export default function Trivia() {
    const [category, setCategory] = useState<TriviaCategory | null>(null);
    const {
        currentQuestionIndex,
        score,
        status,
        currentQuestion,
        totalQuestions,
        selectedOptionId,
        isAnswered,
        startGame,
        selectOption,
        submitAnswer,
        nextQuestion,
    } = useTrivia(category);

    const handleSelectCategory = (cat: TriviaCategory) => {
        setCategory(cat);
        // We need a way to trigger init in hook, but hook depends on 'category' prop.
        // The hook auto-reinits if dependency changes? 
        // Hook has 'startGame' but 'category' is dependency of hook.
        // Actually hook logic: if category changes, does generic state reset?
        // My hook implementation relies on manual 'startGame' or initial state.
        // Best to wrap hook usage or force reset.
        // In current hook implementation, changing category prop doesn't auto-reset state deep enough 
        // unless I added useEffect there. 
        // But since I mount component and pass category, let's just trigger startGame manually
        // OR rely on a useEffect in the page to call startGame when category changes.
        // For simplicity, I'll rely on the user clicking "Start" or just auto-start.
        // Let's modify: When category is set, we render Game View, which uses the hook.
        // Wait, hook is top level.
    };

    // Better pattern: Split components? 
    // Or just putting a useEffect in this component to start game when category set.
    // Actually the hook is bound to `category` state here.
    // If I select category, hook re-runs with new category.
    // But internal state (index=0) remains unless reset.
    // I should call startGame() in a useEffect when category changes.

    // Quick fix: key the hook or the game container to force reset.

    return (
        <div className="min-h-screen bg-background pb-20">
            <div className="container max-w-5xl mx-auto px-4 py-8">

                {/* Header */}
                <div className="mb-8 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        {category ? (
                            <Button variant="ghost" size="icon" onClick={() => setCategory(null)}>
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

                    {category && status === 'playing' && (
                        <div className="text-xl font-bold text-primary">
                            Score: {score}
                        </div>
                    )}
                </div>

                {/* Tool Title & Description */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-foreground mb-2">
                        ❓ Trivia Quiz
                    </h1>
                    <p className="text-muted-foreground">
                        {category ? category.name : "Test your knowledge and learn new facts"}
                    </p>
                </div>

                {!category ? (
                    <div className="flex flex-col items-center gap-12 animate-in fade-in slide-in-from-bottom-4">
                        <CategorySelector categories={triviaCategories} onSelect={(c) => {
                            setCategory(c);
                            // logic to ensure fresh start handled by key-ing the Game view
                        }} />
                    </div>
                ) : (
                    // Game View Container
                    <GameView
                        key={category.id} // Forces remount/reset of hook when category changes
                        category={category}
                        onBack={() => setCategory(null)}
                    />
                )}
            </div>
        </div>
    );
}

// Sub-component to isolate hook lifecycle per game/category
const GameView = ({ category, onBack }: { category: TriviaCategory, onBack: () => void }) => {
    const {
        currentQuestionIndex,
        score,
        status,
        currentQuestion,
        totalQuestions,
        selectedOptionId,
        isAnswered,
        startGame,
        selectOption,
        submitAnswer,
        nextQuestion,
        resetGame // exposed
    } = useTrivia(category);

    // Initial start
    useState(() => {
        startGame();
    });

    if (status === 'completed') {
        return (
            <ResultScreen
                score={score}
                totalQuestions={totalQuestions}
                onRetry={resetGame}
                onBack={onBack}
            />
        );
    }

    if (!currentQuestion) return null;

    const progress = ((currentQuestionIndex) / totalQuestions) * 100;

    return (
        <div className="flex flex-col gap-8 max-w-3xl mx-auto">
            <div className="w-full space-y-2">
                <div className="flex justify-between text-sm text-muted-foreground font-medium">
                    <span>Question {currentQuestionIndex + 1} of {totalQuestions}</span>
                    <span>{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="h-2" />
            </div>

            <QuestionCard
                question={currentQuestion}
                selectedOptionId={selectedOptionId}
                isAnswered={isAnswered}
                onSelectOption={selectOption}
                onSubmit={submitAnswer}
                onNext={nextQuestion}
            />
        </div>
    );
};
