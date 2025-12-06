import { MatchCard as MatchCardType } from "@/types/wordmatch";
import { MatchCard } from "./MatchCard";

interface MatchGridProps {
  cards: MatchCardType[];
  onCardClick: (card: MatchCardType) => void;
}

export const MatchGrid = ({ cards, onCardClick }: MatchGridProps) => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 sm:gap-4 w-full max-w-2xl">
      {cards.map((card) => (
        <MatchCard
          key={card.id}
          card={card}
          onClick={() => onCardClick(card)}
        />
      ))}
    </div>
  );
};
