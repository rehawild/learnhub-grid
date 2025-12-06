import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SpellingBeeDeck } from "@/types/spellingbee";
import { spellingBeeDecks } from "@/data/spellingbee/sample-decks";
import { useSpellingBee } from "@/hooks/useSpellingBee";
import { DeckSelector } from "@/components/spellingbee/DeckSelector";
import { SpellingInput } from "@/components/spellingbee/SpellingInput";
import { SpellingProgress } from "@/components/spellingbee/SpellingProgress";
import { SpellingComplete } from "@/components/spellingbee/SpellingComplete";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const SpellingBeeGame = ({ deck, onBack }: { deck: SpellingBeeDeck; onBack: () => void }) => {
  const {
    currentWord,
    currentIndex,
    totalWords,
    input,
    setInput,
    isCorrect,
    showHint,
    toggleHint,
    checkAnswer,
    nextWord,
    correctCount,
    isComplete,
    speak,
    resetGame,
  } = useSpellingBee(deck);

  // Auto-speak the word when it changes
  useEffect(() => {
    if (currentWord && !isComplete) {
      const timer = setTimeout(() => speak(), 500);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, isComplete]);

  if (isComplete) {
    return (
      <SpellingComplete correct={correctCount} total={totalWords} onReset={resetGame} />
    );
  }

  return (
    <div className="flex flex-col items-center gap-8 p-6 h-full">
      <div className="w-full flex items-center justify-between max-w-md">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        <h2 className="font-semibold text-foreground">{deck.name}</h2>
        <div className="w-16" />
      </div>

      <SpellingProgress
        current={currentIndex}
        total={totalWords}
        correct={correctCount}
      />

      <SpellingInput
        input={input}
        setInput={setInput}
        isCorrect={isCorrect}
        correctWord={currentWord?.word || ""}
        hint={currentWord?.hint}
        showHint={showHint}
        onSpeak={speak}
        onCheck={checkAnswer}
        onNext={nextWord}
        onToggleHint={toggleHint}
      />
    </div>
  );
};

const SpellingBee = () => {
  const navigate = useNavigate();
  const [selectedDeck, setSelectedDeck] = useState<SpellingBeeDeck | null>(null);

  if (!selectedDeck) {
    return (
      <div className="min-h-full flex flex-col">
        <div className="p-4">
          <Button variant="ghost" size="sm" onClick={() => navigate("/")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Tools
          </Button>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <DeckSelector decks={spellingBeeDecks} onSelect={setSelectedDeck} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-full flex items-center justify-center">
      <SpellingBeeGame deck={selectedDeck} onBack={() => setSelectedDeck(null)} />
    </div>
  );
};

export default SpellingBee;
