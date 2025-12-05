import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FlashcardDeck } from "@/types/flashcard";
import { sampleDecks } from "@/data/flashcards/sample-decks";
import { useFlashcards } from "@/hooks/useFlashcards";
import { DeckSelector } from "@/components/flashcards/DeckSelector";
import { FlashcardView } from "@/components/flashcards/FlashcardView";
import { FlashcardControls } from "@/components/flashcards/FlashcardControls";
import { FlashcardProgress } from "@/components/flashcards/FlashcardProgress";
import { FlashcardComplete } from "@/components/flashcards/FlashcardComplete";

const Flashcards = () => {
  const navigate = useNavigate();
  const [selectedDeck, setSelectedDeck] = useState<FlashcardDeck | null>(null);

  const {
    currentCard,
    currentIndex,
    isFlipped,
    isComplete,
    progress,
    flipCard,
    nextCard,
    prevCard,
    resetDeck,
  } = useFlashcards(selectedDeck);

  const handleSelectDeck = (deck: FlashcardDeck) => {
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
          <span className="text-4xl">🃏</span>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">
              Flashcards
            </h1>
            <p className="text-muted-foreground">
              Master vocabulary with spaced repetition
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
              decks={sampleDecks}
              selectedDeckId={null}
              onSelectDeck={handleSelectDeck}
            />
          </>
        ) : isComplete ? (
          <FlashcardComplete
            deckName={selectedDeck.name}
            totalCards={selectedDeck.cards.length}
            onRestart={resetDeck}
            onChangeDeck={handleChangeDeck}
          />
        ) : currentCard ? (
          <div className="flex flex-col items-center gap-8 w-full">
            <div className="flex items-center justify-between w-full max-w-md">
              <h2 className="text-lg font-medium text-foreground">
                {selectedDeck.name}
              </h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleChangeDeck}
              >
                Change Deck
              </Button>
            </div>

            <FlashcardProgress progress={progress} />

            <FlashcardView
              card={currentCard}
              isFlipped={isFlipped}
              onFlip={flipCard}
            />

            <FlashcardControls
              onPrev={prevCard}
              onNext={nextCard}
              onReset={resetDeck}
              canGoPrev={currentIndex > 0}
              canGoNext={currentIndex < selectedDeck.cards.length - 1}
              currentIndex={currentIndex}
              totalCards={selectedDeck.cards.length}
            />
          </div>
        ) : null}
      </div>
    </main>
  );
};

export default Flashcards;
