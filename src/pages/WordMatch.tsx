import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, RotateCcw } from "lucide-react";
import { WordMatchDeck } from "@/types/wordmatch";
import { wordMatchDecks } from "@/data/wordmatch/sample-decks";
import { useWordMatch } from "@/hooks/useWordMatch";
import { DeckSelector } from "@/components/wordmatch/DeckSelector";
import { MatchGrid } from "@/components/wordmatch/MatchGrid";
import { MatchStats } from "@/components/wordmatch/MatchStats";
import { MatchComplete } from "@/components/wordmatch/MatchComplete";

const WordMatchGame = ({ deck, onBack }: { deck: WordMatchDeck; onBack: () => void }) => {
  const { cards, matches, attempts, isComplete, selectCard, resetGame } = 
    useWordMatch(deck);

  if (isComplete) {
    return (
      <MatchComplete
        matches={matches}
        attempts={attempts}
        onPlayAgain={resetGame}
      />
    );
  }

  return (
    <div className="flex flex-col items-center gap-6 p-4 sm:p-6 w-full">
      <div className="flex items-center justify-between w-full max-w-2xl">
        <Button variant="ghost" size="sm" onClick={onBack} className="gap-2">
          <ArrowLeft className="w-4 h-4" />
          Back
        </Button>
        
        <h2 className="font-semibold text-lg">{deck.name}</h2>
        
        <Button variant="ghost" size="sm" onClick={resetGame} className="gap-2">
          <RotateCcw className="w-4 h-4" />
          Reset
        </Button>
      </div>

      <MatchStats
        matches={matches}
        totalPairs={deck.pairs.length}
        attempts={attempts}
      />

      <MatchGrid cards={cards} onCardClick={selectCard} />
    </div>
  );
};

const WordMatch = () => {
  const navigate = useNavigate();
  const [selectedDeck, setSelectedDeck] = useState<WordMatchDeck | null>(null);

  return (
    <main className="min-h-screen bg-background flex flex-col items-center">
      <header className="w-full p-4 border-b">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate("/")}
          className="gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Home
        </Button>
      </header>

      <div className="flex-1 flex items-center justify-center w-full">
        {selectedDeck ? (
          <WordMatchGame
            deck={selectedDeck}
            onBack={() => setSelectedDeck(null)}
          />
        ) : (
          <DeckSelector
            decks={wordMatchDecks}
            onSelectDeck={setSelectedDeck}
          />
        )}
      </div>
    </main>
  );
};

export default WordMatch;
