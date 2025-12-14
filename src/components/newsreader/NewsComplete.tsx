import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Newspaper, RotateCcw, LayoutGrid } from "lucide-react";

interface NewsCompleteProps {
    score: number;
    total: number;
    onRestart: () => void;
    onBack: () => void;
}

export const NewsComplete = ({ score, total, onRestart, onBack }: NewsCompleteProps) => {
    const percentage = Math.round((score / total) * 100);

    return (
        <Card className="w-full max-w-md mx-auto text-center animate-in fade-in slide-in-from-bottom-8">
            <CardHeader>
                <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-full bg-primary/10 text-primary">
                        <Newspaper className="w-12 h-12" />
                    </div>
                </div>
                <CardTitle className="text-3xl font-bold">
                    All Caught Up!
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
                <div>
                    <p className="text-muted-foreground mb-2">Comprehension Score</p>
                    <p className="text-5xl font-bold text-primary">{percentage}%</p>
                    <p className="text-sm text-muted-foreground mt-2">({score} out of {total} correct)</p>
                </div>

                <div className="space-y-3">
                    <Button onClick={onRestart} className="w-full gap-2" variant="default">
                        <RotateCcw className="w-4 h-4" />
                        Reread Article
                    </Button>
                    <Button variant="outline" onClick={onBack} className="w-full gap-2">
                        <LayoutGrid className="w-4 h-4" />
                        Read More News
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};
