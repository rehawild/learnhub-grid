import { Button } from "@/components/ui/button";
import { ArrowLeft, Flame } from "lucide-react";
import { Link } from "react-router-dom";
import { usePracticePlus } from "@/hooks/usePracticePlus";
import { DaySelector } from "@/components/practiceplus/DaySelector";
import { SessionRunner } from "@/components/practiceplus/SessionRunner";

const PracticePlus = () => {
    const {
        state,
        challenges,
        startChallenge,
        submitAnswer,
        nextQuestion,
        exitSession,
        currentChallenge,
        score
    } = usePracticePlus();

    const { activeSession, completedDays, streak } = state;

    return (
        <div className="min-h-screen bg-background pb-20">
            <div className="container max-w-5xl mx-auto px-4 py-8">

                {/* 1. Navigation Header - Only show if not in session OR if we want persistent back button */}
                {!activeSession && (
                    <div className="mb-6 flex justify-between items-center">
                        <Link to="/">
                            <Button variant="ghost" className="gap-2 -ml-2">
                                <ArrowLeft className="h-4 w-4" />
                                Back to Tools
                            </Button>
                        </Link>
                        <div className="flex items-center gap-2 text-orange-500 font-bold bg-orange-50 dark:bg-orange-950/30 px-3 py-1 rounded-full border border-orange-200 dark:border-orange-800">
                            <Flame className="w-5 h-5 fill-orange-500" />
                            <span>{streak} Day Streak!</span>
                        </div>
                    </div>
                )}

                {/* 2. Tool Title */}
                {!activeSession && (
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-foreground mb-4">
                            Practice Plus
                        </h1>
                        <p className="text-muted-foreground text-lg">
                            Your daily dose of mixed-skill language challenges.
                        </p>
                    </div>
                )}

                {/* 3. Main Content Area */}
                {!activeSession ? (
                    <DaySelector
                        challenges={challenges}
                        completedDays={completedDays}
                        onStart={startChallenge}
                    />
                ) : (
                    currentChallenge && (
                        <SessionRunner
                            challenge={currentChallenge}
                            currentQuestionIndex={state.currentQuestionIndex}
                            answers={state.answers}
                            showResult={state.showResult}
                            score={score}
                            onAnswer={submitAnswer}
                            onNext={nextQuestion}
                            onExit={exitSession}
                        />
                    )
                )}

            </div>
        </div>
    );
};

export default PracticePlus;
