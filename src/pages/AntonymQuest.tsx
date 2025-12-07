import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { sampleAntonymDecks } from "@/data/antonymquest/sample-decks";
import { AntonymDeck } from "@/types/antonymquest";
import { useAntonymQuest } from "@/hooks/useAntonymQuest";
import { DeckSelector } from "@/components/antonymquest/DeckSelector";
import { AntonymInput } from "@/components/antonymquest/AntonymInput";
import { AntonymProgress } from "@/components/antonymquest/AntonymProgress";
import { AntonymComplete } from "@/components/antonymquest/AntonymComplete";

const AntonymQuest = () => {
  const navigate = useNavigate();
  const [selectedDeck, setSelectedDeck] = useState<AntonymDeck | null>(null);

  const {
    currentWord,
    currentIndex,
    totalWords,
    correctAnswers,
    isComplete,
    showHint,
    userInput,
    feedback,
    setUserInput,
    toggleHint,
    checkAnswer,
    nextWord,
    reset,
  } = useAntonymQuest(selectedDeck);

  const handleSelectDeck = (deck: AntonymDeck) => {
    setSelectedDeck(deck);
    reset();
  };

  const handleBack = () => {
    if (selectedDeck) {
      setSelectedDeck(null);
      reset();
    } else {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center p-4">
      <div className="w-full max-w-4xl">
        <Button variant="ghost" onClick={handleBack} className="mb-4">
          <ArrowLeft className="h-4 w-4 mr-2" />
          {selectedDeck ? "Back to Decks" : "Back to Home"}
        </Button>

        <h1 className="text-3xl font-bold text-center mb-8">↔️ Antonym Quest</h1>

        <div className="flex flex-col items-center gap-6">
          {!selectedDeck && (
            <>
              <p className="text-muted-foreground text-center">
                Select a deck to start finding antonyms!
              </p>
              <DeckSelector
                decks={sampleAntonymDecks}
                selectedDeckId={null}
                onSelectDeck={handleSelectDeck}
              />
            </>
          )}

          {selectedDeck && !isComplete && currentWord && (
            <>
              <AntonymProgress
                currentIndex={currentIndex}
                totalWords={totalWords}
                correctAnswers={correctAnswers}
              />
              <AntonymInput
                word={currentWord}
                userInput={userInput}
                feedback={feedback}
                showHint={showHint}
                onInputChange={setUserInput}
                onCheck={checkAnswer}
                onNext={nextWord}
                onToggleHint={toggleHint}
              />
            </>
          )}

          {isComplete && (
            <AntonymComplete
              correctAnswers={correctAnswers}
              totalWords={totalWords}
              onReset={() => handleSelectDeck(selectedDeck!)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AntonymQuest;
