import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useTenseTrainer } from "@/hooks/useTenseTrainer";
import { tenseTrainerDecks } from "@/data/tensetrainer/sample-decks";
import { DeckSelector } from "@/components/tensetrainer/DeckSelector";
import { TenseInput } from "@/components/tensetrainer/TenseInput";
import { TenseProgress } from "@/components/tensetrainer/TenseProgress";
import { TenseComplete } from "@/components/tensetrainer/TenseComplete";

const TenseTrainer = () => {
  const {
    state,
    currentWord,
    selectDeck,
    setUserAnswer,
    checkAnswer,
    nextWord,
    toggleHint,
    resetGame,
    goBack,
  } = useTenseTrainer();

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
            ⏰ Tense Trainer
          </h1>
          <p className="text-muted-foreground">
            Master verb tenses through practice
          </p>
        </div>

        {!state.currentDeck ? (
          <DeckSelector decks={tenseTrainerDecks} onSelectDeck={selectDeck} />
        ) : state.isComplete ? (
          <TenseComplete
            correctAnswers={state.correctAnswers}
            totalWords={state.currentDeck.words.length}
            onRestart={resetGame}
            onBack={goBack}
          />
        ) : currentWord ? (
          <div className="space-y-6">
            <TenseProgress
              current={state.currentWordIndex}
              total={state.currentDeck.words.length}
              correctAnswers={state.correctAnswers}
            />
            <TenseInput
              word={currentWord}
              userAnswer={state.userAnswer}
              isCorrect={state.isCorrect}
              showHint={state.showHint}
              onAnswerChange={setUserAnswer}
              onCheck={checkAnswer}
              onNext={nextWord}
              onToggleHint={toggleHint}
            />
            <div className="text-center">
              <Button variant="ghost" onClick={goBack}>
                Choose Different Deck
              </Button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default TenseTrainer;
