import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { usePrefixMaster } from "@/hooks/usePrefixMaster";
import { samplePrefixDecks } from "@/data/prefixmaster/sample-decks";
import { DeckSelector } from "@/components/prefixmaster/DeckSelector";
import { PrefixInput } from "@/components/prefixmaster/PrefixInput";
import { PrefixProgress } from "@/components/prefixmaster/PrefixProgress";
import { PrefixComplete } from "@/components/prefixmaster/PrefixComplete";

const PrefixMaster = () => {
  const navigate = useNavigate();
  const {
    currentDeck,
    currentWord,
    currentIndex,
    userAnswer,
    feedback,
    correctCount,
    showHint,
    isComplete,
    selectDeck,
    setUserAnswer,
    checkAnswer,
    nextWord,
    toggleHint,
    resetGame,
  } = usePrefixMaster();

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Tools
        </Button>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">🔤 Prefix Master</h1>
          <p className="text-muted-foreground">
            Learn how prefixes change word meanings
          </p>
        </div>

        <div className="flex flex-col items-center gap-6">
          {!currentDeck ? (
            <>
              <h2 className="text-xl font-semibold">Choose a Prefix Deck</h2>
              <DeckSelector
                decks={samplePrefixDecks}
                selectedDeckId={null}
                onSelectDeck={selectDeck}
              />
            </>
          ) : isComplete ? (
            <PrefixComplete
              correct={correctCount}
              total={currentDeck.words.length}
              onReset={resetGame}
            />
          ) : currentWord ? (
            <>
              <PrefixProgress
                current={currentIndex}
                total={currentDeck.words.length}
                correct={correctCount}
              />
              <PrefixInput
                word={currentWord}
                userAnswer={userAnswer}
                feedback={feedback}
                showHint={showHint}
                onAnswerChange={setUserAnswer}
                onCheck={checkAnswer}
                onNext={nextWord}
                onToggleHint={toggleHint}
              />
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default PrefixMaster;
