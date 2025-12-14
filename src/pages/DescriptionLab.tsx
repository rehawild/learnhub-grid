import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useDescriptionLab } from "@/hooks/useDescriptionLab";
import { descriptionExercises } from "@/data/descriptionlab/sample-descriptions";
import { ExerciseSelector } from "@/components/descriptionlab/ExerciseSelector";
import { DescriptionEditor } from "@/components/descriptionlab/DescriptionEditor";
import { FeedbackDisplay } from "@/components/descriptionlab/FeedbackDisplay";

const DescriptionLab = () => {
    const {
        state,
        selectExercise,
        updateInput,
        submitDescription,
        resetTool,
        goBack
    } = useDescriptionLab();

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
                        🎨 Description Lab
                    </h1>
                    <p className="text-muted-foreground">
                        Enhance your writing with vivid sensory details.
                    </p>
                </div>

                {/* 3. Main Content Area */}
                {state.mode === "selection" ? (
                    <ExerciseSelector exercises={descriptionExercises} onSelect={selectExercise} />
                ) : state.mode === "writing" && state.currentExercise ? (
                    <div className="space-y-6">
                        <div className="flex justify-start">
                            <Button variant="ghost" onClick={goBack} className="gap-2 pl-0 hover:bg-transparent hover:text-primary">
                                <ArrowLeft className="h-4 w-4" /> Change Exercise
                            </Button>
                        </div>
                        <DescriptionEditor
                            exercise={state.currentExercise}
                            inputs={state.inputs}
                            onUpdateInput={updateInput}
                            onSubmit={submitDescription}
                        />
                    </div>
                ) : state.mode === "feedback" && state.currentExercise ? (
                    <div className="space-y-6">
                        <div className="flex justify-start">
                            <Button variant="ghost" onClick={goBack} className="gap-2 pl-0 hover:bg-transparent hover:text-primary">
                                <ArrowLeft className="h-4 w-4" /> Back to Editor
                            </Button>
                        </div>
                        <FeedbackDisplay
                            exercise={state.currentExercise}
                            inputs={state.inputs}
                            onBackToEdit={goBack}
                            onReset={resetTool}
                        />
                    </div>
                ) : null}

            </div>
        </div>
    );
};

export default DescriptionLab;
