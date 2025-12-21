import { Progress } from "@/components/ui/progress";

interface ProverbsProgressProps {
    current: number;
    total: number;
    categoryTitle: string;
}

export const ProverbsProgress = ({ current, total, categoryTitle }: ProverbsProgressProps) => {
    const percentage = ((current) / total) * 100;

    return (
        <div className="w-full max-w-md mx-auto mb-8 space-y-4 animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="flex justify-between items-end">
                <div className="space-y-1">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/70">Category</p>
                    <h3 className="text-xl font-semibold text-foreground leading-none">{categoryTitle}</h3>
                </div>
                <div className="text-right">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/70">Mastery</p>
                    <p className="text-xl font-semibold text-foreground leading-none">
                        {current} <span className="text-muted-foreground font-medium text-sm">/ {total}</span>
                    </p>
                </div>
            </div>
            <Progress value={percentage} className="h-1.5 bg-primary/10" />
        </div>
    );
};
