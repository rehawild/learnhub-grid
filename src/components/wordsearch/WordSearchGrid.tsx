import { GridCell, CellPosition } from "@/types/wordsearch";
import { cn } from "@/lib/utils";

interface WordSearchGridProps {
    grid: GridCell[][];
    selection: CellPosition[];
    onCellDown: (row: number, col: number) => void;
    onCellOver: (row: number, col: number) => void;
    onCellUp: () => void;
}

export const WordSearchGrid = ({
    grid,
    selection,
    onCellDown,
    onCellOver,
    onCellUp
}: WordSearchGridProps) => {
    const isSelected = (row: number, col: number) => {
        return selection.some(s => s.row === row && s.col === col);
    };

    return (
        <div
            className="select-none p-4 rounded-xl bg-card border shadow-sm touch-none"
            onMouseUp={onCellUp}
            onMouseLeave={onCellUp}
        >
            <div
                className="grid gap-1"
                style={{
                    gridTemplateColumns: `repeat(${grid.length}, minmax(1.8rem, 1fr))`
                }}
            >
                {grid.map((row, rIdx) => (
                    row.map((cell, cIdx) => {
                        const selected = isSelected(rIdx, cIdx);
                        return (
                            <div
                                key={`${rIdx}-${cIdx}`}
                                onMouseDown={() => onCellDown(rIdx, cIdx)}
                                onMouseEnter={() => onCellOver(rIdx, cIdx)}
                                className={cn(
                                    "aspect-square flex items-center justify-center text-lg font-bold rounded-md cursor-pointer transition-colors duration-150",
                                    "hover:bg-accent hover:text-accent-foreground",
                                    // Found state (Success)
                                    cell.isFound && "bg-green-500 text-white hover:bg-green-600",
                                    // Currently selecting
                                    selected && !cell.isFound && "bg-primary text-primary-foreground scale-95",
                                    // Base state
                                    !selected && !cell.isFound && "bg-background border border-border"
                                )}
                            >
                                {cell.letter}
                            </div>
                        );
                    })
                ))}
            </div>
        </div>
    );
};
