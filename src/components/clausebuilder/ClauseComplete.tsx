import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, RotateCcw, LayoutGrid } from "lucide-react";

interface ClauseCompleteProps {
    correct: number;
    total: number;
    onRestart: () => void;
    onBack: () => void;
}

export const ClauseComplete = ({ correct, total, onRestart, onBack }: ClauseCompleteProps) => {
    const percentage = Math.round((correct / total) * 100);

    return (
        <Card className="w-full max-w-md mx-auto text-center">
            <CardHeader>
                <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-full bg-blue-100 text-blue-600">
                        <Trophy className="w-8 h-8" />
                    </div>
                </div>
                <CardTitle className="text-2xl">Session Complete!</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-2">
                    <p className="text-4xl font-bold text-primary">{percentage}%</p>
                    <p className="text-muted-foreground">
                        You built {correct} out of {total} sentences correctly
                    </p>
                </div>

                <div className="flex flex-col gap-3">
                    <Button onClick={onRestart} className="w-full gap-2">
                        <RotateCcw className="w-4 h-4" />
                        Play Again
                    </Button>
                    <Button variant="outline" onClick={onBack} className="w-full gap-2">
                        <LayoutGrid className="w-4 h-4" />
                        Choose Different Deck
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};
