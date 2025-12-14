import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useIELTSPrep } from "@/hooks/useIELTSPrep";
import { mockTests } from "@/data/ieltsprep/mocktests";
import { TestSelector } from "@/components/ieltsprep/TestSelector";
import { TestInterface } from "@/components/ieltsprep/TestInterface";

const IELTSPrep = () => {
    const {
        state,
        startTest,
        nextQuestion,
        startPart2Prep,
        startPart2Speaking,
        finishPart2,
        finishTest,
        reset
    } = useIELTSPrep();

    return (
        <div className="min-h-screen bg-background pb-20">
            <div className="container max-w-4xl mx-auto px-4 py-8">

                {/* 1. Navigation Header */}
                <div className="mb-6">
                    <Link to="/">
                        <Button variant="ghost" className="gap-2 -ml-2">
                            <ArrowLeft className="h-4 w-4" />
                            Back to Tools
                        </Button>
                    </Link>
                </div>

                {/* 2. Tool Title & Description */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-foreground mb-2">
                        IELTS Speaking
                    </h1>
                    <p className="text-muted-foreground">
                        Simulate the full IELTS Speaking exam environment.
                    </p>
                </div>

                {/* 3. Main Content Area */}
                {state.status === 'idle' ? (
                    <TestSelector
                        tests={mockTests}
                        onSelect={startTest}
                    />
                ) : (
                    <div className="space-y-4">
                        <div className="flex justify-start">
                            <Button variant="ghost" onClick={reset} className="gap-2 pl-0 hover:bg-transparent hover:text-primary">
                                <ArrowLeft className="h-4 w-4" /> Quit Test
                            </Button>
                        </div>
                        <TestInterface
                            test={state.selectedTest!}
                            state={state}
                            onNextQuestion={nextQuestion}
                            onStartPart2Prep={startPart2Prep}
                            onStartPart2Speaking={startPart2Speaking}
                            onFinishPart2={finishPart2}
                            onFinishTest={finishTest}
                        />
                    </div>
                )}

            </div>
        </div>
    );
};

export default IELTSPrep;
