import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useMockTests } from "@/hooks/useMockTests";
import { mockExams } from "@/data/mocktests/exams";
import { ExamList } from "@/components/mocktests/ExamList";
import { ExamRunner } from "@/components/mocktests/ExamRunner";

const MockTests = () => {
    const { state, startExam, submitAnswer, finishExam, reset } = useMockTests();
    const { currentExam } = state;

    return (
        <div className="min-h-screen bg-background pb-20">
            <div className="container max-w-5xl mx-auto px-4 py-8">

                {/* 1. Navigation Header */}
                <div className="mb-6 flex justify-between items-center">
                    <Link to="/">
                        <Button variant="ghost" className="gap-2 -ml-2">
                            <ArrowLeft className="h-4 w-4" />
                            Back to Tools
                        </Button>
                    </Link>
                    {currentExam && (
                        <Button variant="outline" onClick={reset}>Quit Exam</Button>
                    )}
                </div>

                {/* 2. Tool Title */}
                {!currentExam && (
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-foreground mb-4">
                            Mock Tests
                        </h1>
                        <p className="text-muted-foreground text-lg">
                            Full-length practice exams to simulate test day conditions.
                        </p>
                    </div>
                )}

                {/* 3. Main Content Area */}
                {!currentExam ? (
                    <ExamList exams={mockExams} onStart={startExam} />
                ) : (
                    <ExamRunner
                        state={state}
                        onAnswer={submitAnswer}
                        onFinish={finishExam}
                        onExit={reset}
                    />
                )}

            </div>
        </div>
    );
};

export default MockTests;
