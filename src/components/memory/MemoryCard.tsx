import { MemoryCard as MemoryCardType } from "@/types/memory";
import { cn } from "@/lib/utils";

interface MemoryCardProps {
    card: MemoryCardType;
    onClick: () => void;
}

export const MemoryCard = ({ card, onClick }: MemoryCardProps) => {
    return (
        <div
            className={cn(
                "aspect-[3/4] perspective-1000 cursor-pointer group",
                (card.isFlipped || card.isMatched) ? "" : "hover:-translate-y-1 transition-transform duration-300"
            )}
            onClick={onClick}
        >
            <div
                className={cn(
                    "relative w-full h-full text-center transition-all duration-500 transform-style-3d shadow-md rounded-xl border border-border",
                    (card.isFlipped || card.isMatched) && "rotate-y-180"
                )}
            >
                {/* Front (Face Down) */}
                <div className="absolute w-full h-full backface-hidden bg-primary/10 flex items-center justify-center rounded-xl overflow-hidden pattern-dots">
                    <span className="text-4xl opacity-50">🧩</span>
                </div>

                {/* Back (Face Up) */}
                <div
                    className={cn(
                        "absolute w-full h-full backface-hidden rotate-y-180 flex items-center justify-center rounded-xl border-2 overflow-hidden px-2 text-center",
                        // Base style
                        "bg-card text-card-foreground",
                        // Matched style overrides
                        card.isMatched
                            ? "bg-primary border-primary text-primary-foreground"
                            : "border-primary"
                    )}
                >
                    {card.type === 'icon' ? (
                        <span className="text-5xl">{card.content}</span>
                    ) : (
                        <span className="text-sm sm:text-lg font-bold select-none">{card.content}</span>
                    )}
                </div>
            </div>
        </div>
    );
};
