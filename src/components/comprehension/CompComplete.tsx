import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, RotateCcw, LayoutGrid } from "lucide-react";

interface CompCompleteProps {
    score: number;
    total: number;
    onRestart: () => void;
    onBack: () => void;
}

export const CompComplete = ({ score, total, onRestart, onBack }: CompCompleteProps) => {
    const percentage = Math.round((score / total) * 100);

    return (
        <Card className="w-full max-w-md mx-auto text-center animate-in fade-in slide-in-from-bottom-8">
            <CardHeader>
                <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-full bg-primary/10 text-primary">
                        <Brain className="w-12 h-12" />
                    </div>
                </div>
                <CardTitle className="text-3xl font-bold">
                    Analysis Complete
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
                <div>
                    <p className="text-muted-foreground mb-2">You scored</p>
                    <p className="text-6xl font-black text-primary">{percentage}%</p>
                    <p className="text-sm text-muted-foreground mt-2">({score} out of {total} correct)</p>
                </div>

                <div className="bg-muted rounded-lg p-4 text-muted-foreground text-sm">
                    {percentage === 100 ? "Use clear logical reasoning!" :
                        percentage >= 70 ? "Good understanding of the key concepts." :
                            "Review the text closely to catch more details."}
                </div>

                <div className="space-y-3">
                    <Button onClick={onRestart} className="w-full gap-2">
                        <RotateCcw className="w-4 h-4" />
                        Analyze Again
                    </Button>
                    <Button variant="outline" onClick={onBack} className="w-full gap-2">
                        <LayoutGrid className="w-4 h-4" />
                        More Passages
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};
