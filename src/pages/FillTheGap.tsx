import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useFillTheGap } from "@/hooks/useFillTheGap";
import { sampleExercises } from "@/data/fillthegap/exercises";
import { ExerciseList } from "@/components/fillthegap/ExerciseList";
import { DialogueViewer } from "@/components/fillthegap/DialogueViewer";

const FillTheGap = () => {
    const {
        state,
        selectExercise,
        selectWord,
        checkAnswers,
        resetTool,
        retryExercise
    } = useFillTheGap();

    const handleBackToList = () => {
        resetTool();
    };

    return (
        <div className="min-h-screen bg-background pb-20">
            <div className="container max-w-2xl mx-auto px-4 py-8">

                {/* 1. Navigation Header */}
                <div className="mb-8">
                    <Link to="/">
                        <Button variant="ghost" className="gap-2">
                            <ArrowLeft className="h-4 w-4" />
                            Back to Tools
                        </Button>
                    </Link>
                </div>

                {/* 2. Tool Title & Description */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-foreground mb-2">
                        🕳️ Fill the Gap
                    </h1>
                    <p className="text-muted-foreground">
                        Complete the dialogue by choosing the contextually correct words.
                    </p>
                </div>

                {/* 3. Main Content Area */}
                {state.mode === "selection" ? (
                    <ExerciseList exercises={sampleExercises} onSelect={selectExercise} />
                ) : state.mode === "practice" && state.currentExercise ? (
                    <div className="space-y-6">
                        <div className="flex justify-start">
                            <Button variant="ghost" onClick={handleBackToList} className="gap-2 pl-0 hover:bg-transparent hover:text-primary">
                                <ArrowLeft className="h-4 w-4" /> Back to List
                            </Button>
                        </div>
                        <DialogueViewer
                            exercise={state.currentExercise}
                            userAnswers={state.userAnswers}
                            isComplete={state.isComplete}
                            score={state.score}
                            onSelectWord={selectWord}
                            onCheck={checkAnswers}
                            onRetry={retryExercise}
                        />
                    </div>
                ) : null}

            </div>
        </div>
    );
};

export default FillTheGap;
