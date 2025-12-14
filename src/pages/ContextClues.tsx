import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useContextClues } from "@/hooks/useContextClues";
import { sampleClues } from "@/data/contextclues/sample-clues";
import { LevelSelector } from "@/components/contextclues/LevelSelector";
import { ClueGame } from "@/components/contextclues/ClueGame";
import { ClueComplete } from "@/components/contextclues/ClueComplete";

const ContextClues = () => {
    const {
        state,
        currentQuestion,
        selectLevel,
        answerQuestion,
        nextQuestion,
        resetGame,
        goBack
    } = useContextClues();

    return (
        <div className="min-h-screen bg-background pb-20">
            <div className="container max-w-2xl mx-auto px-4 py-8">

                {/* 1. Navigation Header */}
                <div className="mb-8">
                    <Link to="/">
                        <Button variant="ghost" className="gap-2">
                            <ArrowLeft className="h-4 w-4" />
                            Back to Tools
                        </Button>
                    </Link>
                </div>

                {/* 2. Tool Title & Description */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-foreground mb-2">
                        🔍 Context Clues
                    </h1>
                    <p className="text-muted-foreground">
                        Use sentence context to deduce the meaning of challenging words.
                    </p>
                </div>

                {/* 3. Main Content Area */}
                {state.mode === "selection" ? (
                    <LevelSelector levels={sampleClues} onSelect={selectLevel} />
                ) : state.mode === "game" && currentQuestion && state.currentLevel ? (
                    <div className="space-y-6">
                        <div className="flex justify-start">
                            <Button variant="ghost" onClick={goBack} className="gap-2 pl-0 hover:bg-transparent hover:text-primary">
                                <ArrowLeft className="h-4 w-4" /> Change Level
                            </Button>
                        </div>
                        <ClueGame
                            question={currentQuestion}
                            currentNumber={state.currentIndex + 1}
                            totalNumber={state.currentLevel.questions.length}
                            selectedAnswer={state.answers[currentQuestion.id]}
                            isCorrect={state.isCorrect}
                            onAnswer={answerQuestion}
                            onNext={nextQuestion}
                        />
                    </div>
                ) : state.mode === "complete" && state.currentLevel ? (
                    <ClueComplete
                        score={state.score}
                        total={state.currentLevel.questions.length}
                        onRestart={resetGame}
                        onBack={goBack}
                    />
                ) : null}

            </div>
        </div>
    );
};

export default ContextClues;
