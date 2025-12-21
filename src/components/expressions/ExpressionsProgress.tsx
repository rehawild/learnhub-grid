import { Progress } from "@/components/ui/progress";
import { MessageSquare } from "lucide-react";

interface ExpressionsProgressProps {
    current: number;
    total: number;
    categoryTitle: string;
}

export const ExpressionsProgress = ({ current, total, categoryTitle }: ExpressionsProgressProps) => {
    const percentage = (current / total) * 100;

    return (
        <div className="w-full max-w-2xl mx-auto mb-8 animate-in fade-in duration-500">
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-purple-500/10 rounded-lg">
                        <MessageSquare className="w-4 h-4 text-purple-600" />
                    </div>
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                        {categoryTitle}
                    </span>
                </div>
                <span className="text-xs font-bold text-yellow-600">
                    {Math.round(current)} / {total} Phrases
                </span>
            </div>
            <Progress
                value={percentage}
                className="h-1.5 bg-purple-100/50"
                indicatorClassName="bg-gradient-to-r from-purple-500 to-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.2)] transition-all duration-1000"
            />
        </div>
    );
};
