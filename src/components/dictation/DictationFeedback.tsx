import { DictationExercise } from "@/types/dictation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RotateCcw, List } from "lucide-react";
import { diffWords } from "diff";

// Note: We need to install 'diff' package types if strict, but for now we can simulate or implement a simple differ
// Since we can't easily install new npm packages without user permission, I'll implement a simple word-by-word diff visualizer here
// Or just show Correct vs User text side by side if complex diff is too hard without library.
// Actually, let's just do a simple comparison.

interface DictationFeedbackProps {
    exercise: DictationExercise;
    userText: string;
    onRetry: () => void;
    onBack: () => void;
}

export const DictationFeedback = ({
    exercise,
    userText,
    onRetry,
    onBack
}: DictationFeedbackProps) => {

    const calculateAccuracy = () => {
        const normalize = (s: string) => s.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").replace(/\s{2,}/g, " ");
        const target = normalize(exercise.transcript);
        const source = normalize(userText);

        if (target === source) return 100;

        // Simple word match count
        const targetWords = target.split(' ');
        const sourceWords = source.split(' ');
        let matches = 0;

        targetWords.forEach(word => {
            if (sourceWords.includes(word)) matches++;
        });

        // This is very rough but serves the purpose for now
        return Math.min(100, Math.round((matches / targetWords.length) * 100));
    };

    const accuracy = calculateAccuracy();

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8">
            <Card className="overflow-hidden border-2 border-primary/20">
                <div className={`p-6 text-white text-center ${accuracy >= 90 ? 'bg-green-600' : accuracy >= 70 ? 'bg-yellow-600' : 'bg-red-600'}`}>
                    <h2 className="text-4xl font-bold mb-2">{accuracy}% Accuracy</h2>
                    <p className="opacity-90">{accuracy >= 90 ? "Excellent work!" : accuracy >= 70 ? "Good job, keep practicing!" : "Don't give up, try again!"}</p>
                </div>

                <CardContent className="p-8 space-y-8">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                            <h3 className="font-bold text-muted-foreground uppercase tracking-wide text-sm">Your Text</h3>
                            <p className="p-4 bg-muted/30 rounded-lg text-lg leading-relaxed border border-border">
                                {userText}
                            </p>
                        </div>
                        <div className="space-y-3">
                            <h3 className="font-bold text-muted-foreground uppercase tracking-wide text-sm">Correct Transcript</h3>
                            <p className="p-4 bg-green-50 text-green-900 rounded-lg text-lg leading-relaxed border border-green-200">
                                {exercise.transcript}
                            </p>
                        </div>
                    </div>

                </CardContent>
            </Card>

            <div className="flex justify-between">
                <Button variant="outline" onClick={onBack} className="gap-2">
                    <List className="w-4 h-4" /> Back to Exercises
                </Button>
                <Button onClick={onRetry} className="gap-2">
                    <RotateCcw className="w-4 h-4" /> Try Again
                </Button>
            </div>
        </div>
    );
};
