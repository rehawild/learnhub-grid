import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, RotateCcw, BookOpen } from "lucide-react";

interface ReaderCompleteProps {
    wpm: number;
    onRestart: () => void;
    onBack: () => void;
}

export const ReaderComplete = ({ wpm, onRestart, onBack }: ReaderCompleteProps) => {
    return (
        <Card className="w-full max-w-md mx-auto text-center">
            <CardHeader>
                <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-full bg-indigo-100 text-indigo-600">
                        <CheckCircle2 className="w-8 h-8" />
                    </div>
                </div>
                <CardTitle className="text-2xl">Reading Completed!</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-2">
                    <p className="text-muted-foreground">You read at a speed of</p>
                    <p className="text-4xl font-bold text-primary">{wpm} WPM</p>
                </div>

                <div className="flex flex-col gap-3">
                    <Button onClick={onRestart} className="w-full gap-2">
                        <RotateCcw className="w-4 h-4" />
                        Read Again
                    </Button>
                    <Button variant="outline" onClick={onBack} className="w-full gap-2">
                        <BookOpen className="w-4 h-4" />
                        Choose Different Text
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};
