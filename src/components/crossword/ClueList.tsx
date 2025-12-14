import { CrosswordClue } from "@/types/crossword";
import { cn } from "@/lib/utils";

interface ClueListProps {
    clues: CrosswordClue[];
    activeClueId: string | null;
    direction: 'across' | 'down';
    onClueClick: (clueId: string) => void; // Optional: allow clicking clue to jump
}

export const ClueList = ({ clues, activeClueId, direction }: ClueListProps) => {
    const filteredClues = clues.filter(c => c.direction === direction).sort((a, b) => a.number - b.number);

    return (
        <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg capitalize mb-2">{direction}</h3>
            <div className="space-y-1">
                {filteredClues.map(clue => (
                    <div
                        key={clue.id}
                        className={cn(
                            "text-sm p-2 rounded-md transition-colors border border-transparent",
                            activeClueId === clue.id
                                ? "bg-accent text-accent-foreground border-primary/20 font-medium"
                                : "hover:bg-muted text-muted-foreground hover:text-foreground"
                        )}
                    >
                        <span className="font-bold mr-2">{clue.number}.</span>
                        {clue.text}
                    </div>
                ))}
            </div>
        </div>
    );
};
