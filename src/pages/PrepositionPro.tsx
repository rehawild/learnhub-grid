import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { usePrepositionPro } from "@/hooks/usePrepositionPro";
import { samplePrepositionDecks } from "@/data/prepositionpro/sample-decks";
import { DeckSelector } from "@/components/prepositionpro/DeckSelector";
import { PrepositionInput } from "@/components/prepositionpro/PrepositionInput";
import { PrepositionProgress } from "@/components/prepositionpro/PrepositionProgress";
import { PrepositionComplete } from "@/components/prepositionpro/PrepositionComplete";

const PrepositionPro = () => {
    const {
        state,
        currentQuestion,
        selectDeck,
        checkAnswer,
        nextQuestion,
        resetGame,
        goBack,
    } = usePrepositionPro();

    return (
        <div className="min-h-screen bg-background">
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
                        📍 Preposition Pro
                    </h1>
                    <p className="text-muted-foreground">
                        Master location, time, and movement prepositions
                    </p>
                </div>

                {!state.currentDeck ? (
                    <DeckSelector decks={samplePrepositionDecks} onSelectDeck={selectDeck} />
                ) : state.isComplete ? (
                    <PrepositionComplete
                        correct={state.correctCount}
                        total={state.currentDeck.questions.length}
                        onRestart={resetGame}
                        onBack={goBack}
                    />
                ) : currentQuestion ? (
                    <div className="space-y-6">
                        <PrepositionProgress
                            current={state.currentIndex}
                            total={state.currentDeck.questions.length}
                            correct={state.correctCount}
                        />
                        <PrepositionInput
                            question={currentQuestion}
                            selectedOption={state.selectedOption}
                            isCorrect={state.isCorrect}
                            showExplanation={state.showExplanation}
                            onSelectOption={checkAnswer}
                            onNext={nextQuestion}
                        />
                        <div className="text-center">
                            <Button variant="ghost" size="sm" onClick={goBack}>
                                Quit Game
                            </Button>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default PrepositionPro;
