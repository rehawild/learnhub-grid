import { ScrabbleTile as TileType } from "@/types/scrabble";
import { cn } from "@/lib/utils";

interface ScrabbleTileProps {
    tile: TileType;
    isSelected?: boolean;
    isTemp?: boolean; // If placed on board but not committed
    onClick?: () => void;
    className?: string; // Allow overrides
}

export const ScrabbleTile = ({ tile, isSelected, isTemp, onClick, className }: ScrabbleTileProps) => {
    return (
        <div
            onClick={onClick}
            className={cn(
                "relative flex items-center justify-center bg-[#fdeebd] border-b-4 border-r-2 border-[#d6c08d] text-amber-950 rounded-sm shadow-sm cursor-pointer select-none transition-all active:translate-y-[2px] active:border-b-2",
                "w-8 h-8 sm:w-10 sm:h-10", // Responsive size
                isSelected && "ring-2 ring-primary ring-offset-2 z-10 -translate-y-1",
                isTemp && "opacity-90",
                className
            )}
        >
            <span className="text-lg sm:text-xl font-bold uppercase">{tile.letter}</span>
            <span className="absolute bottom-0.5 right-0.5 text-[0.5rem] sm:text-[0.6rem] font-medium leading-none">
                {tile.value}
            </span>
        </div>
    );
};
