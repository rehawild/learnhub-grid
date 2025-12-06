import { MatchCard as MatchCardType } from "@/types/wordmatch";
import { cn } from "@/lib/utils";

interface MatchCardProps {
  card: MatchCardType;
  onClick: () => void;
}

export const MatchCard = ({ card, onClick }: MatchCardProps) => {
  const isWord = card.type === "word";

  return (
    <button
      onClick={onClick}
      disabled={card.isMatched || card.isFlipped}
      className={cn(
        "flip-card w-full aspect-[3/2] cursor-pointer",
        card.isMatched && "opacity-60 cursor-default"
      )}
    >
      <div
        className={cn(
          "flip-card-inner w-full h-full",
          card.isFlipped && "flipped"
        )}
      >
        {/* Back of card (question mark) */}
        <div className="flip-card-back absolute inset-0 rounded-xl bg-gradient-to-br from-primary/80 to-primary flex items-center justify-center shadow-lg border-2 border-primary/30">
          <span className="text-4xl sm:text-5xl text-primary-foreground font-bold">
            ?
          </span>
        </div>

        {/* Front of card (content) */}
        <div
          className={cn(
            "flip-card-front absolute inset-0 rounded-xl flex items-center justify-center p-3 shadow-lg border-2",
            isWord
              ? "bg-gradient-to-br from-tool-card-blue to-tool-card-blue/80 border-tool-card-blue/50"
              : "bg-gradient-to-br from-tool-card-green to-tool-card-green/80 border-tool-card-green/50",
            card.isMatched && "ring-2 ring-tool-card-yellow ring-offset-2"
          )}
        >
          <span
            className={cn(
              "text-center font-medium leading-tight",
              isWord ? "text-lg sm:text-xl" : "text-sm sm:text-base"
            )}
          >
            {card.content}
          </span>
        </div>
      </div>
    </button>
  );
};
