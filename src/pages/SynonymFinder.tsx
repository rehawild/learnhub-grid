import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SynonymDeck } from "@/types/synonymfinder";
import { synonymDecks } from "@/data/synonymfinder/sample-decks";
import { useSynonymFinder } from "@/hooks/useSynonymFinder";
import { DeckSelector } from "@/components/synonymfinder/DeckSelector";
import { SynonymInput } from "@/components/synonymfinder/SynonymInput";
import { SynonymProgress } from "@/components/synonymfinder/SynonymProgress";
import { SynonymComplete } from "@/components/synonymfinder/SynonymComplete";

const SynonymFinder = () => {
  const navigate = useNavigate();
  const [selectedDeck, setSelectedDeck] = useState<SynonymDeck | null>(null);

  const {
    currentWord,
    isComplete,
    progress,
    userAnswer,
    feedback,
    showHint,
    setUserAnswer,
    checkAnswer,
    nextWord,
    toggleHint,
    resetGame,
  } = useSynonymFinder(selectedDeck);

  const handleSelectDeck = (deck: SynonymDeck) => {
    setSelectedDeck(deck);
  };

  const handleChangeDeck = () => {
    setSelectedDeck(null);
  };

  return (
    <main className="min-h-screen bg-background p-4 md:p-8">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-8">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate("/")}
          className="mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Tools
        </Button>

        <div className="flex items-center gap-3">
          <span className="text-4xl">📚</span>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">
              Synonym Finder
            </h1>
            <p className="text-muted-foreground">
              Expand your vocabulary by learning synonyms
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {!selectedDeck ? (
          <>
            <h2 className="text-xl font-semibold mb-6 text-foreground">
              Choose a Deck
            </h2>
            <DeckSelector
              decks={synonymDecks}
              selectedDeckId={null}
              onSelectDeck={handleSelectDeck}
            />
          </>
        ) : isComplete ? (
          <SynonymComplete
            deckName={selectedDeck.name}
            totalWords={selectedDeck.words.length}
            correctCount={progress.correct}
            onRestart={resetGame}
            onChangeDeck={handleChangeDeck}
          />
        ) : currentWord ? (
          <div className="flex flex-col items-center gap-8 w-full">
            <div className="flex items-center justify-between w-full max-w-md">
              <h2 className="text-lg font-medium text-foreground">
                {selectedDeck.name}
              </h2>
              <Button variant="ghost" size="sm" onClick={handleChangeDeck}>
                Change Deck
              </Button>
            </div>

            <SynonymProgress progress={progress} />

            <SynonymInput
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
        ) : null}
      </div>
    </main>
  );
};

export default SynonymFinder;
