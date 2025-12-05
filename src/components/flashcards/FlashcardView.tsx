import { Flashcard } from "@/types/flashcard";
import { cn } from "@/lib/utils";

interface FlashcardViewProps {
  card: Flashcard;
  isFlipped: boolean;
  onFlip: () => void;
}

export const FlashcardView = ({ card, isFlipped, onFlip }: FlashcardViewProps) => {
  return (
    <div
      className="perspective-1000 w-full max-w-md aspect-[3/2] cursor-pointer"
      onClick={onFlip}
    >
      <div
        className={cn(
          "relative w-full h-full transition-transform duration-500 transform-style-3d",
          isFlipped && "rotate-y-180"
        )}
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden rounded-2xl bg-gradient-to-br from-primary/90 to-primary shadow-xl flex items-center justify-center p-6 border border-primary-foreground/10">
          <p className="text-2xl md:text-3xl font-bold text-primary-foreground text-center">
            {card.front}
          </p>
        </div>

        {/* Back */}
        <div className="absolute inset-0 backface-hidden rounded-2xl bg-gradient-to-br from-secondary to-secondary/80 shadow-xl flex items-center justify-center p-6 rotate-y-180 border border-secondary-foreground/10">
          <p className="text-lg md:text-xl text-secondary-foreground text-center leading-relaxed">
            {card.back}
          </p>
        </div>
      </div>
    </div>
  );
};
