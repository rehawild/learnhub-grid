import { FillGapExercise } from "@/types/fillthegap";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, BadgeHelp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ExerciseListProps {
    exercises: FillGapExercise[];
    onSelect: (exercise: FillGapExercise) => void;
}

export const ExerciseList = ({ exercises, onSelect }: ExerciseListProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exercises.map((ex) => (
                <Card
                    key={ex.id}
                    className="cursor-pointer hover:border-primary transition-all hover:shadow-md group flex flex-col h-full overflow-hidden"
                    onClick={() => onSelect(ex)}
                >
                    <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                            <Badge variant="outline">{ex.category}</Badge>
                            <Badge className={
                                ex.level === 'Advanced' ? 'bg-destructive' :
                                    ex.level === 'Intermediate' ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-green-500 hover:bg-green-600'
                            }>
                                {ex.level}
                            </Badge>
                        </div>
                        <CardTitle className="group-hover:text-primary transition-colors">{ex.title}</CardTitle>
                        <CardDescription>{ex.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="mt-auto">
                        <Button
                            className="w-full gap-2 group-hover:bg-primary/10 group-hover:text-primary"
                            variant="secondary"
                            onClick={(e) => {
                                e.stopPropagation();
                                onSelect(ex);
                            }}
                        >
                            Start Practice <MessageCircle className="w-4 h-4" />
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};
