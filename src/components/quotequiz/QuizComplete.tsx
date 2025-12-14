import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquareQuote, RotateCcw, LayoutGrid } from "lucide-react";

interface QuizCompleteProps {
    score: number;
    total: number;
    onRestart: () => void;
    onBack: () => void;
}

export const QuizComplete = ({ score, total, onRestart, onBack }: QuizCompleteProps) => {
    const percentage = Math.round((score / total) * 100);

    return (
        <Card className="w-full max-w-md mx-auto text-center animate-in fade-in slide-in-from-bottom-8">
            <CardHeader>
                <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-full bg-primary/10 text-primary">
                        <MessageSquareQuote className="w-12 h-12" />
                    </div>
                </div>
                <CardTitle className="text-3xl font-bold">
                    Quiz Complete!
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
                <div>
                    <p className="text-muted-foreground mb-2">Your Score</p>
                    <p className="text-6xl font-black text-primary">{score} / {total}</p>
                    <p className="text-sm text-muted-foreground mt-2">{percentage}% Correct</p>
                </div>

                <div className="space-y-3">
                    <Button onClick={onRestart} className="w-full gap-2">
                        <RotateCcw className="w-4 h-4" />
                        Try Another Category
                    </Button>
                    <Button variant="outline" onClick={onBack} className="w-full gap-2">
                        <LayoutGrid className="w-4 h-4" />
                        Return to Library
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};
