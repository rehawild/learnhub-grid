import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, RotateCcw, Pencil } from "lucide-react";
import { toast } from "sonner";
import { DescriptionExercise } from "@/types/descriptionlab";
import { sensoryInputs } from "@/data/descriptionlab/sample-descriptions";

interface FeedbackDisplayProps {
    exercise: DescriptionExercise;
    inputs: Record<string, string>;
    onBackToEdit: () => void;
    onReset: () => void;
}

export const FeedbackDisplay = ({ exercise, inputs, onBackToEdit, onReset }: FeedbackDisplayProps) => {

    // Compile a simple paragraph
    const paragraph = sensoryInputs
        .map(s => inputs[s.id])
        .filter(Boolean)
        .join(" ");

    const copyToClipboard = () => {
        navigator.clipboard.writeText(paragraph);
        toast.success("Description copied to clipboard!");
    };

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8">
            <Card className="border-2 border-primary/10">
                <CardHeader className="flex flex-col items-center text-center pb-2 border-b">
                    <div className="text-4xl mb-2">{exercise.imagePrompt}</div>
                    <CardTitle className="text-2xl font-serif">
                        {exercise.title}
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                    <div className="whitespace-pre-wrap font-serif text-lg leading-relaxed italic text-foreground/90">
                        {paragraph || <span className="text-muted-foreground not-italic">You didn't add any details yet!</span>}
                    </div>
                </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 justify-between">
                <Button variant="outline" onClick={onBackToEdit} className="gap-2">
                    <Pencil className="w-4 h-4" /> Add More Detail
                </Button>

                <div className="flex gap-2">
                    <Button variant="secondary" onClick={copyToClipboard} className="gap-2" disabled={!paragraph}>
                        <Copy className="w-4 h-4" /> Copy Text
                    </Button>
                    <Button onClick={onReset} className="gap-2">
                        <RotateCcw className="w-4 h-4" /> New Exercise
                    </Button>
                </div>
            </div>
        </div>
    );
};
