import { Progress } from "@/components/ui/progress";
import { Plane } from "lucide-react";

interface DialectProgressProps {
    current: number;
    total: number;
}

export const DialectProgress = ({ current, total }: DialectProgressProps) => {
    const percentage = (current / total) * 100;

    return (
        <div className="w-full max-w-2xl mx-auto mb-10 animate-in fade-in duration-500">
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-500/10 rounded-xl">
                        <Plane className="w-5 h-5 text-purple-600" />
                    </div>
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                        Transatlantic Crossing
                    </span>
                </div>
                <span className="text-sm font-bold text-yellow-600 flex items-center gap-2">
                    {current} <span className="text-muted-foreground font-medium text-xs">/</span> {total} Miles
                </span>
            </div>
            <Progress
                value={percentage}
                className="h-2 bg-purple-500/10"
                indicatorClassName="bg-gradient-to-r from-purple-500 to-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.3)] transition-all duration-1000"
            />
        </div>
    );
};
