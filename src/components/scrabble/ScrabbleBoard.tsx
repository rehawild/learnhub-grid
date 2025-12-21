import { BoardCell } from "@/types/scrabble";
import { ScrabbleTile } from "./ScrabbleTile";
import { cn } from "@/lib/utils";

interface ScrabbleBoardProps {
    board: BoardCell[][];
    onCellClick: (row: number, col: number) => void;
}

const BONUS_COLORS: Record<string, string> = {
    TW: "bg-red-200 dark:bg-red-900/40 text-red-700 dark:text-red-300",
    DW: "bg-pink-200 dark:bg-pink-900/40 text-pink-700 dark:text-pink-300",
    TL: "bg-blue-200 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300",
    DL: "bg-sky-200 dark:bg-sky-900/40 text-sky-700 dark:text-sky-300",
    START: "bg-rose-300 dark:bg-rose-900/50 text-white"
};

const BONUS_LABELS: Record<string, string> = {
    TW: "TRIPLE WORD SCORE",
    DW: "DOUBLE WORD SCORE",
    TL: "TRIPLE LETTER SCORE",
    DL: "DOUBLE LETTER SCORE",
    START: "★"
};

export const ScrabbleBoard = ({ board, onCellClick }: ScrabbleBoardProps) => {
    return (
        <div
            className="grid gap-[1px] bg-border p-[1px] rounded-sm overflow-auto mx-auto shadow-lg"
            style={{
                gridTemplateColumns: `repeat(15, minmax(28px, 40px))`
            }}
        >
            {board.map((row) => (
                row.map((cell) => {
                    const bonusClass = cell.bonus ? BONUS_COLORS[cell.bonus] : "bg-[#e8dcb5] dark:bg-[#3d382e]";

                    return (
                        <div
                            key={`${cell.row}-${cell.col}`}
                            onClick={() => onCellClick(cell.row, cell.col)}
                            className={cn(
                                "aspect-square flex items-center justify-center relative cursor-pointer hover:brightness-105 transition-all",
                                bonusClass,
                                cell.tile && "bg-[#d6c08d] dark:bg-[#2d2922]" // Background under tile
                            )}
                        >
                            {/* Bonus Label (Only if no tile) */}
                            {!cell.tile && cell.bonus && (
                                <span className="text-[0.4rem] sm:text-[0.5rem] font-bold text-center leading-tight sm:px-1 select-none opacity-80 uppercase">
                                    {BONUS_LABELS[cell.bonus]}
                                </span>
                            )}

                            {/* Tile */}
                            {cell.tile && (
                                <div className="absolute inset-[1px]">
                                    <ScrabbleTile
                                        tile={cell.tile}
                                        isTemp={cell.isTemp}
                                        className="w-full h-full"
                                    />
                                </div>
                            )}
                        </div>
                    );
                })
            ))}
        </div>
    );
};
