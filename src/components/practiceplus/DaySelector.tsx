import { DailyChallenge } from "@/types/practiceplus";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Lock, PlayCircle, Clock, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface DaySelectorProps {
    challenges: DailyChallenge[];
    completedDays: string[];
    onStart: (id: string) => void;
}

export const DaySelector = ({ challenges, completedDays, onStart }: DaySelectorProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((day, index) => {
                const isCompleted = completedDays.includes(day.id);
                // Simple logic: Can only access if previous day completed? Or open access?
                // Let's make it open access for "Practice Plus" flexibility.
                const isLocked = false;

                return (
                    <Card
                        key={day.id}
                        className={cn("transition-all hover:shadow-lg border-2",
                            isCompleted ? "border-green-200 bg-green-50/30 dark:border-green-900/50" : "hover:border-blue-400"
                        )}
                    >
                        <CardHeader>
                            <div className="flex justify-between items-start mb-2">
                                <Badge variant={isCompleted ? "default" : "outline"} className={isCompleted ? "bg-green-600" : ""}>
                                    {isCompleted ? "Completed" : `Day ${index + 1}`}
                                </Badge>
                                {isCompleted && <CheckCircle className="w-5 h-5 text-green-600" />}
                            </div>
                            <CardTitle>{day.title}</CardTitle>
                            <CardDescription>{day.description}</CardDescription>
                        </CardHeader>
                        <CardFooter className="flex justify-between pt-4 border-t">
                            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1"><Clock className="w-3 h-3" /> {day.estimatedMinutes}m</div>
                                <div className="flex items-center gap-1"><Star className="w-3 h-3 text-yellow-500" /> {day.rewards}</div>
                            </div>
                            <Button
                                onClick={() => onStart(day.id)}
                                disabled={isLocked}
                                variant={isCompleted ? "outline" : "default"}
                                className="gap-2"
                            >
                                {isCompleted ? "Redo" : "Start"} <PlayCircle className="w-4 h-4" />
                            </Button>
                        </CardFooter>
                    </Card>
                );
            })}
        </div>
    );
};
