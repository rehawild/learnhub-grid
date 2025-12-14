import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, RotateCcw, BookOpen } from "lucide-react";

interface StoryCompleteProps {
    score: number;
    total: number;
    onRestart: () => void;
    onBack: () => void;
}

export const StoryComplete = ({ score, total, onRestart, onBack }: StoryCompleteProps) => {
    const isPerfect = score === total;

    return (
        <Card className="w-full max-w-md mx-auto text-center animate-in fade-in slide-in-from-bottom-8">
            <CardHeader>
                <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-full bg-yellow-100 text-yellow-600">
                        <Star className="w-12 h-12 fill-current" />
                    </div>
                </div>
                <CardTitle className="text-3xl font-bold">
                    {isPerfect ? "Perfect!" : "Good Job!"}
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
                <div>
                    <p className="text-muted-foreground mb-2">You scored</p>
                    <p className="text-5xl font-bold text-primary">{score} / {total}</p>
                </div>

                <div className="space-y-3">
                    <Button onClick={onRestart} className="w-full gap-2" variant="default">
                        <RotateCcw className="w-4 h-4" />
                        Read Again
                    </Button>
                    <Button variant="outline" onClick={onBack} className="w-full gap-2">
                        <BookOpen className="w-4 h-4" />
                        Back to Library
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};
