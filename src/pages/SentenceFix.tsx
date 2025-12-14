import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useSentenceFix } from "@/hooks/useSentenceFix";
import { sampleFixDecks } from "@/data/sentencefix/sample-decks";
import { DeckSelector } from "@/components/sentencefix/DeckSelector";
import { FixInput } from "@/components/sentencefix/FixInput";
import { FixProgress } from "@/components/sentencefix/FixProgress";
import { FixComplete } from "@/components/sentencefix/FixComplete";

const SentenceFix = () => {
    const {
        state,
        currentQuestion,
        selectDeck,
        checkAnswer,
        nextQuestion,
        resetGame,
        goBack,
    } = useSentenceFix();

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
                        🔧 Sentence Fix
                    </h1>
                    <p className="text-muted-foreground">
                        Find and correct the errors
                    </p>
                </div>

                {!state.currentDeck ? (
                    <DeckSelector decks={sampleFixDecks} onSelectDeck={selectDeck} />
                ) : state.isComplete ? (
                    <FixComplete
                        correct={state.correctCount}
                        total={state.currentDeck.questions.length}
                        onRestart={resetGame}
                        onBack={goBack}
                    />
                ) : currentQuestion ? (
                    <div className="space-y-6">
                        <FixProgress
                            current={state.currentIndex}
                            total={state.currentDeck.questions.length}
                            correct={state.correctCount}
                        />
                        <FixInput
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

export default SentenceFix;
