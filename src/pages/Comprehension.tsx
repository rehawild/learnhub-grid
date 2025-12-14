import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useComprehension } from "@/hooks/useComprehension";
import { samplePassages } from "@/data/comprehension/sample-passages";
import { PassageSelector } from "@/components/comprehension/PassageSelector";
import { PassageReader } from "@/components/comprehension/PassageReader";
import { CompQuiz } from "@/components/comprehension/CompQuiz";
import { CompComplete } from "@/components/comprehension/CompComplete";

const Comprehension = () => {
    const {
        state,
        currentQuestion,
        selectPassage,
        startQuiz,
        answerQuestion,
        nextQuestion,
        goBack,
        resetPassage
    } = useComprehension();

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
                        🧠 Comprehension
                    </h1>
                    <p className="text-muted-foreground">
                        Practice deep reading and analysis
                    </p>
                </div>

                {state.mode === "selection" ? (
                    <PassageSelector passages={samplePassages} onSelectPassage={selectPassage} />
                ) : state.mode === "reading" && state.currentPassage ? (
                    <div className="space-y-6">
                        <div className="flex justify-start">
                            <Button variant="ghost" onClick={goBack} className="gap-2 pl-0 hover:bg-transparent hover:text-primary">
                                <ArrowLeft className="h-4 w-4" /> Back to Passages
                            </Button>
                        </div>
                        <PassageReader passage={state.currentPassage} onFinished={startQuiz} />
                    </div>
                ) : state.mode === "quiz" && currentQuestion ? (
                    <div className="space-y-6">
                        <CompQuiz
                            question={currentQuestion}
                            currentNumber={state.currentQuestionIndex + 1}
                            totalNumber={state.currentPassage!.questions.length}
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
                                Quit Quiz
                            </Button>
                        </div>
                    </div>
                ) : state.mode === "complete" ? (
                    <CompComplete
                        score={state.score}
                        total={state.currentPassage!.questions.length}
                        onRestart={resetPassage}
                        onBack={goBack}
                    />
                ) : null}
            </div>
        </div>
    );
};

export default Comprehension;
