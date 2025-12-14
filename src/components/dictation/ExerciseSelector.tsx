import { DictationExercise } from "@/types/dictation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Mic, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ExerciseSelectorProps {
    exercises: DictationExercise[];
    onSelect: (exercise: DictationExercise) => void;
}

export const ExerciseSelector = ({ exercises, onSelect }: ExerciseSelectorProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {exercises.map((exercise) => (
                <Card
                    key={exercise.id}
                    className="cursor-pointer hover:border-primary transition-all hover:shadow-md group flex flex-col h-full"
                    onClick={() => onSelect(exercise)}
                >
                    <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                            <div className="p-2 rounded-full bg-primary/10 text-primary">
                                <Mic className="w-6 h-6" />
                            </div>
                            <Badge variant={exercise.level === 'Advanced' ? 'destructive' : exercise.level === 'Intermediate' ? 'default' : 'secondary'}>
                                {exercise.level}
                            </Badge>
                        </div>
                        <CardTitle className="group-hover:text-primary transition-colors">{exercise.title}</CardTitle>
                        <CardDescription>{exercise.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="mt-auto pt-4">
                        <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
                            <span>{exercise.category}</span>
                        </div>
                        <Button
                            className="w-full gap-2 group-hover:bg-primary/10 group-hover:text-primary"
                            variant="secondary"
                            onClick={(e) => {
                                e.stopPropagation();
                                onSelect(exercise);
                            }}
                        >
                            <Play className="w-4 h-4" /> Start Dictation
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};
