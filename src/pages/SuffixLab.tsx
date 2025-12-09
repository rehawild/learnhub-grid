import { useSuffixLab } from "@/hooks/useSuffixLab";
import { suffixLabDecks } from "@/data/suffixlab/sample-decks";
import { DeckSelector } from "@/components/suffixlab/DeckSelector";
import { SuffixInput } from "@/components/suffixlab/SuffixInput";
import { SuffixProgress } from "@/components/suffixlab/SuffixProgress";
import { SuffixComplete } from "@/components/suffixlab/SuffixComplete";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const SuffixLab = () => {
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
  } = useSuffixLab();

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <Link to="/">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold">Suffix Lab</h1>
            <p className="text-muted-foreground">
              Learn how suffixes transform words
            </p>
          </div>
        </div>

        {!currentDeck && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Choose a Deck</h2>
            <DeckSelector decks={suffixLabDecks} onSelectDeck={selectDeck} />
          </div>
        )}

        {currentDeck && !isComplete && currentWord && (
          <div className="space-y-6">
            <SuffixProgress
              current={currentIndex}
              total={currentDeck.words.length}
              correct={correctCount}
            />
            <SuffixInput
              word={currentWord}
              userAnswer={userAnswer}
              feedback={feedback}
              showHint={showHint}
              onAnswerChange={setUserAnswer}
              onCheck={checkAnswer}
              onNext={nextWord}
              onToggleHint={toggleHint}
            />
          </div>
        )}

        {isComplete && currentDeck && (
          <SuffixComplete
            correct={correctCount}
            total={currentDeck.words.length}
            onReset={resetGame}
          />
        )}
      </div>
    </div>
  );
};

export default SuffixLab;
