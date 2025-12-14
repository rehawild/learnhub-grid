import { CellData } from "@/types/crossword";
import { cn } from "@/lib/utils";

interface CrosswordGridProps {
    grid: CellData[][];
    onCellClick: (row: number, col: number) => void;
}

export const CrosswordGrid = ({ grid, onCellClick }: CrosswordGridProps) => {
    if (!grid.length) return null;

    return (
        <div
            className="bg-card border-4 border-foreground shadow-xl inline-block"
            style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${grid[0].length}, 1fr)`,
                gap: '1px',
                backgroundColor: 'black' // Gap creates grid lines
            }}
        >
            {grid.map((row) => (
                row.map((cell) => {
                    if (cell.isBlack) {
                        return (
                            <div
                                key={`${cell.row}-${cell.col}`}
                                className="bg-black aspect-square w-8 sm:w-10 md:w-12"
                            />
                        );
                    }

                    return (
                        <div
                            key={`${cell.row}-${cell.col}`}
                            onClick={() => onCellClick(cell.row, cell.col)}
                            className={cn(
                                "relative aspect-square w-8 sm:w-10 md:w-12 bg-background flex items-center justify-center cursor-pointer font-bold text-lg sm:text-xl select-none",
                                cell.isActive && "bg-primary text-primary-foreground", // Highlight active
                                !cell.isActive && cell.isRelated && "bg-primary/20 text-foreground", // Highlight related
                                // Verify correctness visually? Or keep it hidden until end? 
                                // Let's keep it classic: no immediate error feedback unless requested.
                            )}
                        >
                            {cell.number && (
                                <span className={cn(
                                    "absolute top-0.5 left-0.5 text-[0.6rem] leading-none font-normal",
                                    cell.isActive ? "text-primary-foreground/70" : "text-muted-foreground"
                                )}>
                                    {cell.number}
                                </span>
                            )}
                            {cell.value}
                        </div>
                    );
                })
            ))}
        </div>
    );
};
