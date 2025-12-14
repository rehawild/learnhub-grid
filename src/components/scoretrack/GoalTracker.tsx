import { Goal } from "@/types/scoretrack";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Target } from "lucide-react";

interface GoalTrackerProps {
    goals: Goal[];
}

export const GoalTracker = ({ goals }: GoalTrackerProps) => {
    return (
        <Card className="shadow-md">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-red-500" /> Targets
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {goals.map(goal => (
                        <div key={goal.id} className="border p-4 rounded-lg bg-gradient-to-r from-red-50 to-transparent dark:from-red-950/20">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-bold text-sm">{goal.testType} Target</h3>
                                <span className="font-mono font-bold text-lg text-primary">{goal.targetScore}</span>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">{goal.description}</p>
                            {goal.deadline && (
                                <div className="text-xs text-red-600 dark:text-red-400 font-medium">
                                    Deadline: {new Date(goal.deadline).toLocaleDateString()}
                                </div>
                            )}
                        </div>
                    ))}
                    {goals.length === 0 && (
                        <p className="text-muted-foreground text-sm">No goals set.</p>
                    )}
                </div>
            </CardContent>
        </Card>
    );
};
