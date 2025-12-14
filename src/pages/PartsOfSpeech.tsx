import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { usePartsOfSpeech } from "@/hooks/usePartsOfSpeech";
import { samplePOSDecks } from "@/data/partsofspeech/sample-decks";
import { DeckSelector } from "@/components/partsofspeech/DeckSelector";
import { POSInput } from "@/components/partsofspeech/POSInput";
import { POSProgress } from "@/components/partsofspeech/POSProgress";
import { POSComplete } from "@/components/partsofspeech/POSComplete";

const PartsOfSpeech = () => {
    const {
        state,
        currentQuestion,
        selectDeck,
        checkAnswer,
        nextQuestion,
        resetGame,
        goBack,
    } = usePartsOfSpeech();

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
                        🏷️ Parts of Speech
                    </h1>
                    <p className="text-muted-foreground">
                        Identify nouns, verbs, adjectives, and more
                    </p>
                </div>

                {!state.currentDeck ? (
                    <DeckSelector decks={samplePOSDecks} onSelectDeck={selectDeck} />
                ) : state.isComplete ? (
                    <POSComplete
                        correct={state.correctCount}
                        total={state.currentDeck.questions.length}
                        onRestart={resetGame}
                        onBack={goBack}
                    />
                ) : currentQuestion ? (
                    <div className="space-y-6">
                        <POSProgress
                            current={state.currentIndex}
                            total={state.currentDeck.questions.length}
                            correct={state.correctCount}
                        />
                        <POSInput
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

export default PartsOfSpeech;
