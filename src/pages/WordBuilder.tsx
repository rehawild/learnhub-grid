import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useWordBuilder } from "@/hooks/useWordBuilder";
import { wordBuilderDecks } from "@/data/wordbuilder/sample-decks";
import { DeckSelector } from "@/components/wordbuilder/DeckSelector";
import { WordBuilderInput } from "@/components/wordbuilder/WordBuilderInput";
import { WordBuilderProgress } from "@/components/wordbuilder/WordBuilderProgress";
import { WordBuilderComplete } from "@/components/wordbuilder/WordBuilderComplete";

const WordBuilder = () => {
  const navigate = useNavigate();
  const {
    state,
    selectDeck,
    togglePart,
    checkAnswer,
    nextWord,
    toggleHint,
    resetGame,
    goBack,
  } = useWordBuilder();

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-2xl mx-auto py-8 px-4">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => (state.currentDeck ? goBack() : navigate("/"))}
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-foreground">🧱 Word Builder</h1>
            <p className="text-muted-foreground">
              Build words with prefixes and suffixes
            </p>
          </div>
        </div>

        {/* Content */}
        {!state.currentDeck ? (
          <DeckSelector decks={wordBuilderDecks} onSelectDeck={selectDeck} />
        ) : state.isComplete ? (
          <WordBuilderComplete
            correct={state.correctCount}
            total={state.currentDeck.words.length}
            onReset={resetGame}
            onGoBack={goBack}
          />
        ) : (
          <Card>
            <CardContent className="pt-6 space-y-6">
              <WordBuilderProgress
                current={state.currentWordIndex}
                total={state.currentDeck.words.length}
                correct={state.correctCount}
              />
              <WordBuilderInput
                deck={state.currentDeck}
                currentWordIndex={state.currentWordIndex}
                selectedParts={state.selectedParts}
                isCorrect={state.isCorrect}
                showHint={state.showHint}
                onTogglePart={togglePart}
                onCheck={checkAnswer}
                onNext={nextWord}
                onToggleHint={toggleHint}
              />
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default WordBuilder;
