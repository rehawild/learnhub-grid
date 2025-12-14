import { DescriptionExercise } from "@/types/descriptionlab";
import { sensoryInputs } from "@/data/descriptionlab/sample-descriptions";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Eye, BadgeCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface DescriptionEditorProps {
    exercise: DescriptionExercise;
    inputs: Record<string, string>;
    onUpdateInput: (id: string, value: string) => void;
    onSubmit: () => void;
}

export const DescriptionEditor = ({
    exercise,
    inputs,
    onUpdateInput,
    onSubmit
}: DescriptionEditorProps) => {
    return (
        <div className="space-y-6 animate-in fade-in zoom-in-95 duration-300">
            {/* Visual Prompt */}
            <Card className="bg-muted/30 border-dashed text-center py-6">
                <div className="text-6xl mb-4">{exercise.imagePrompt}</div>
                <h2 className="text-2xl font-bold mb-2">{exercise.title}</h2>
                <div className="flex flex-wrap justify-center gap-2">
                    {exercise.keyElements.map((el, i) => (
                        <Badge key={i} variant="outline" className="bg-background"><BadgeCheck className="w-3 h-3 mr-1" /> {el}</Badge>
                    ))}
                </div>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {sensoryInputs.map((sensory) => (
                    <Card key={sensory.id}>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-lg flex items-center gap-2">
                                <span>{sensory.icon}</span> {sensory.label}
                            </CardTitle>
                            <CardDescription>
                                {sensory.prompt}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Textarea
                                placeholder={sensory.placeholder}
                                value={inputs[sensory.id] || ""}
                                onChange={(e) => onUpdateInput(sensory.id, e.target.value)}
                                className="min-h-[80px] resize-none"
                            />
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="flex justify-end pt-4">
                <Button size="lg" onClick={onSubmit} className="gap-2">
                    <Eye className="w-4 h-4" /> View Description
                </Button>
            </div>
        </div>
    );
};
