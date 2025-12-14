import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useDictation } from "@/hooks/useDictation";
import { dictationExercises } from "@/data/dictation/exercises";
import { ExerciseSelector } from "@/components/dictation/ExerciseSelector";
import { DictationWorkspace } from "@/components/dictation/DictationWorkspace";
import { DictationFeedback } from "@/components/dictation/DictationFeedback";

const Dictation = () => {
    const {
        state,
        startExercise,
        togglePlay,
        setPlaybackSpeed,
        updateUserText,
        checkWork,
        resetTool,
        tryAgain
    } = useDictation();

    const handleBackToExercises = () => {
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
                        🎤 Dictation
                    </h1>
                    <p className="text-muted-foreground">
                        Improve your listening accuracy by typing what you hear.
                    </p>
                </div>

                {/* 3. Main Content Area */}
                {state.mode === "selection" ? (
                    <ExerciseSelector exercises={dictationExercises} onSelect={startExercise} />
                ) : state.mode === "writing" && state.currentExercise ? (
                    <div className="space-y-6">
                        <div className="flex justify-start">
                            <Button variant="ghost" onClick={handleBackToExercises} className="gap-2 pl-0 hover:bg-transparent hover:text-primary">
                                <ArrowLeft className="h-4 w-4" /> Change Exercise
                            </Button>
                        </div>
                        <DictationWorkspace
                            exercise={state.currentExercise}
                            userText={state.userText}
                            isPlaying={state.isPlaying}
                            playbackSpeed={state.playbackSpeed}
                            onTogglePlay={togglePlay}
                            onUpdateText={updateUserText}
                            onSetSpeed={setPlaybackSpeed}
                            onCheck={checkWork}
                        />
                    </div>
                ) : state.mode === "feedback" && state.currentExercise ? (
                    <div className="space-y-6">
                        <DictationFeedback
                            exercise={state.currentExercise}
                            userText={state.userText}
                            onRetry={tryAgain}
                            onBack={handleBackToExercises}
                        />
                    </div>
                ) : null}

            </div>
        </div>
    );
};

export default Dictation;
