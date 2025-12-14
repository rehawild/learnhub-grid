import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { usePoetryCorner } from "@/hooks/usePoetryCorner";
import { samplePoems } from "@/data/poetry/sample-poems";
import { PoetryLibrary } from "@/components/poetry/PoetryLibrary";
import { PoetryReader } from "@/components/poetry/PoetryReader";
import { PoetryAnalysis } from "@/components/poetry/PoetryAnalysis";
import { PoetryComplete } from "@/components/poetry/PoetryComplete";

const PoetryCorner = () => {
    const {
        state,
        currentQuestion,
        selectPoem,
        startAnalysis,
        answerQuestion,
        nextQuestion,
        goBack,
        resetPoem
    } = usePoetryCorner();

    return (
        <div className="min-h-screen bg-background pb-20">
            <div className="container max-w-2xl mx-auto px-4 py-8">
                <div className="mb-8">
                    <Link to="/">
                        <Button variant="ghost" className="gap-2">
                            <ArrowLeft className="h-4 w-4" />
                            Back to Tools
                        </Button>
                    </Link>
                </div>

                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-foreground mb-2">
                        🎭 Poetry Corner
                    </h1>
                    <p className="text-muted-foreground">
                        Explore classic poems and literary devices
                    </p>
                </div>

                {state.mode === "library" ? (
                    <PoetryLibrary poems={samplePoems} onSelectPoem={selectPoem} />
                ) : state.mode === "reading" && state.currentPoem ? (
                    <div className="space-y-6">
                        <div className="flex justify-start">
                            <Button variant="ghost" onClick={goBack} className="gap-2 pl-0 hover:bg-transparent hover:text-primary">
                                <ArrowLeft className="h-4 w-4" /> Back to Library
                            </Button>
                        </div>
                        <PoetryReader poem={state.currentPoem} onFinished={startAnalysis} />
                    </div>
                ) : state.mode === "analysis" && currentQuestion ? (
                    <div className="space-y-6">
                        <PoetryAnalysis
                            question={currentQuestion}
                            currentNumber={state.currentQuestionIndex + 1}
                            totalNumber={state.currentPoem!.questions.length}
                            showExplanation={state.showExplanation}
                            selectedAnswer={state.answers[currentQuestion.id]}
                            onAnswer={answerQuestion}
                            onNext={nextQuestion}
                        />
                        <div className="flex justify-center mt-8">
                            <Button
                                variant="outline"
                                onClick={goBack}
                                className="text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                            >
                                Quit Analysis
                            </Button>
                        </div>
                    </div>
                ) : state.mode === "complete" ? (
                    <PoetryComplete
                        score={state.score}
                        total={state.currentPoem!.questions.length}
                        onRestart={resetPoem}
                        onBack={goBack}
                    />
                ) : null}
            </div>
        </div>
    );
};

export default PoetryCorner;
