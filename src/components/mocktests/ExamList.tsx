import { MockExam } from "@/types/mocktests";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, BarChart } from "lucide-react";

interface ExamListProps {
    exams: MockExam[];
    onStart: (exam: MockExam) => void;
}

export const ExamList = ({ exams, onStart }: ExamListProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exams.map((exam) => (
                <Card key={exam.id} className="flex flex-col hover:border-primary transition-all">
                    <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                            <Badge variant="outline">{exam.difficulty}</Badge>
                        </div>
                        <CardTitle className="mb-2">{exam.title}</CardTitle>
                        <CardDescription>{exam.description}</CardDescription>
                    </CardHeader>
                    <div className="flex-1" />
                    <CardFooter className="flex justify-between border-t pt-4">
                        <div className="flex items-center text-sm text-muted-foreground gap-1">
                            <Clock className="w-4 h-4" /> {exam.durationMinutes} min
                        </div>
                        <Button onClick={() => onStart(exam)}>Start Exam</Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
};
