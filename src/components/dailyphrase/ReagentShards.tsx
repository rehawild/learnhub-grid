import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ReagentShardsProps {
    shards: string[];
    onSelect: (shard: string, index: number) => void;
    active: boolean;
}

export const ReagentShards = ({ shards, onSelect, active }: ReagentShardsProps) => {
    return (
        <div className="flex flex-wrap justify-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {shards.map((shard, idx) => (
                <Button
                    key={`${shard}-${idx}`}
                    variant="outline"
                    disabled={!active}
                    onClick={() => onSelect(shard, idx)}
                    className={cn(
                        "h-auto py-3 px-6 text-xl font-bold bg-background/40 border-lime-500/20 text-lime-600 rounded-2xl hover:bg-lime-500/10 hover:border-lime-500/40 transition-all duration-300 group relative overflow-hidden",
                        "animate-float shadow-lg"
                    )}
                    style={{ animationDelay: `${idx * 0.1}s` }}
                >
                    <span className="relative z-10">{shard}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-lime-500/0 via-lime-500/5 to-lime-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </Button>
            ))}
        </div>
    );
};

interface CompositionSlotsProps {
    selected: string[];
    isCorrect: boolean | null;
}

export const CompositionSlots = ({ selected, isCorrect }: CompositionSlotsProps) => {
    return (
        <div className="flex flex-wrap justify-center gap-2 mb-8 min-h-[4rem] items-center">
            {selected.length === 0 ? (
                <div className="text-muted-foreground/40 italic font-medium border-2 border-dashed border-muted-foreground/20 rounded-2xl py-4 px-12 animate-pulse">
                    Select reagents to transmute...
                </div>
            ) : (
                selected.map((word, idx) => (
                    <div
                        key={`${word}-${idx}`}
                        className={cn(
                            "px-4 py-2 bg-lime-500/10 border-2 border-lime-500/30 rounded-xl text-xl font-bold text-lime-500 animate-in zoom-in duration-300",
                            isCorrect === true && "bg-lime-500/20 border-lime-400 text-lime-400 shadow-[0_0_15px_rgba(163,230,53,0.3)]",
                            isCorrect === false && "border-red-500 text-red-500 opacity-60"
                        )}
                    >
                        {word}
                    </div>
                ))
            )}
        </div>
    );
};
