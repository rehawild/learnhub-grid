import { DescriptionExercise } from "@/types/descriptionlab";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, Mountain, User, Zap } from "lucide-react";

interface ExerciseSelectorProps {
    exercises: DescriptionExercise[];
    onSelect: (exercise: DescriptionExercise) => void;
}

const iconMap: Record<string, any> = {
    Object: Palette,
    Place: Mountain,
    Character: User,
    Event: Zap
};

export const ExerciseSelector = ({ exercises, onSelect }: ExerciseSelectorProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exercises.map((exercise) => {
                const IconComponent = iconMap[exercise.category] || Palette;
                return (
                    <Card
                        key={exercise.id}
                        className="cursor-pointer hover:border-primary transition-all hover:shadow-md group flex flex-col h-full"
                        onClick={() => onSelect(exercise)}
                    >
                        <CardHeader>
                            <div className="flex items-center justify-between mb-2">
                                <div className="text-4xl">{exercise.imagePrompt}</div>
                                <div className="p-2 rounded-full bg-primary/10 text-primary">
                                    <IconComponent className="w-4 h-4" />
                                </div>
                            </div>
                            <CardTitle className="group-hover:text-primary transition-colors">{exercise.title}</CardTitle>
                            <CardDescription>{exercise.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="mt-auto">
                            <Button
                                className="w-full gap-2 group-hover:bg-primary/10 group-hover:text-primary"
                                variant="secondary"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onSelect(exercise);
                                }}
                            >
                                <Palette className="w-4 h-4" /> Start Describing
                            </Button>
                        </CardContent>
                    </Card>
                );
            })}
        </div>
    );
};
