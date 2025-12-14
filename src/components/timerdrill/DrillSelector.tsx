import { DrillCategory } from "@/types/timerdrill";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Timer, Zap } from "lucide-react";

interface DrillSelectorProps {
    categories: DrillCategory[];
    onSelect: (cat: DrillCategory) => void;
}

export const DrillSelector = ({ categories, onSelect }: DrillSelectorProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((cat) => (
                <Card
                    key={cat.id}
                    className="cursor-pointer hover:border-yellow-500 hover:bg-yellow-50/10 transition-all group border-2 border-transparent hover:scale-105 duration-300"
                    onClick={() => onSelect(cat)}
                >
                    <CardHeader className="text-center space-y-4">
                        <div className="mx-auto w-16 h-16 bg-yellow-100 dark:bg-yellow-900/40 rounded-full flex items-center justify-center group-hover:animate-bounce">
                            <Zap className="w-8 h-8 text-yellow-500" />
                        </div>
                        <div>
                            <CardTitle className="text-2xl">{cat.title}</CardTitle>
                            <CardDescription>{cat.description}</CardDescription>
                        </div>
                        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground font-mono bg-muted py-1 px-3 rounded-full w-fit mx-auto">
                            <Timer className="w-4 h-4" /> {cat.defaultTimeSeconds}s
                        </div>
                    </CardHeader>
                </Card>
            ))}
        </div>
    );
};
