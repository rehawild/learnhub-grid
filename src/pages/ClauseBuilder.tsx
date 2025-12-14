import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useClauseBuilder } from "@/hooks/useClauseBuilder";
import { sampleClauseDecks } from "@/data/clausebuilder/sample-decks";
import { DeckSelector } from "@/components/clausebuilder/DeckSelector";
import { ClauseInput } from "@/components/clausebuilder/ClauseInput";
import { ClauseProgress } from "@/components/clausebuilder/ClauseProgress";
import { ClauseComplete } from "@/components/clausebuilder/ClauseComplete";

const ClauseBuilder = () => {
    const {
        state,
        currentQuestion,
        selectDeck,
        checkAnswer,
        nextQuestion,
        resetGame,
        goBack,
    } = useClauseBuilder();

    return (
        <div className="min-h-screen bg-background pb-20">
            <div className="container max-w-2xl mx-auto px-4 py-8">
                <div className="mb-8">
                    <Link to="/">
                        <Button variant="ghost" className="gap-2">
                            <ArrowLeft className="h-4 w-4" />
                            Back to Tools
                        </Button>
                    </Link>
                </div>

                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-foreground mb-2">
                        🔨 Clause Builder
                    </h1>
                    <p className="text-muted-foreground">
                        Construct complex sentences clause by clause
                    </p>
                </div>

                {!state.currentDeck ? (
                    <DeckSelector decks={sampleClauseDecks} onSelectDeck={selectDeck} />
                ) : state.isComplete ? (
                    <ClauseComplete
                        correct={state.correctCount}
                        total={state.currentDeck.questions.length}
                        onRestart={resetGame}
                        onBack={goBack}
                    />
                ) : currentQuestion ? (
                    <div className="space-y-6">
                        <ClauseProgress
                            current={state.currentIndex}
                            total={state.currentDeck.questions.length}
                            correct={state.correctCount}
                        />
                        <ClauseInput
                            question={currentQuestion}
                            selectedOption={state.selectedOption}
                            isCorrect={state.isCorrect}
                            showExplanation={state.showExplanation}
                            onSelectOption={checkAnswer}
                            onNext={nextQuestion}
                        />
                        <div className="flex justify-center mt-8">
                            <Button
                                variant="outline"
                                onClick={goBack}
                                className="text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                            >
                                Quit Game
                            </Button>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default ClauseBuilder;
