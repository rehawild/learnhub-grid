import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useStoryTime } from "@/hooks/useStoryTime";
import { sampleStories } from "@/data/storytime/sample-stories";
import { StoryLibrary } from "@/components/storytime/StoryLibrary";
import { StoryReader } from "@/components/storytime/StoryReader";
import { StoryQuiz } from "@/components/storytime/StoryQuiz";
import { StoryComplete } from "@/components/storytime/StoryComplete";

const StoryTime = () => {
    const {
        state,
        currentQuestion,
        selectStory,
        startQuiz,
        answerQuestion,
        goBack,
        resetStory
    } = useStoryTime();

    return (
        <div className="min-h-screen bg-background pb-20">
            <div className="container max-w-4xl mx-auto px-4 py-8">
                <div className="mb-8">
                    {state.mode === "library" ? (
                        <Link to="/">
                            <Button variant="ghost" className="gap-2">
                                <ArrowLeft className="h-4 w-4" />
                                Back to Tools
                            </Button>
                        </Link>
                    ) : (
                        <Button variant="ghost" className="gap-2" onClick={goBack}>
                            <ArrowLeft className="h-4 w-4" />
                            Back to Library
                        </Button>
                    )}
                </div>

                {state.mode === "library" && (
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-foreground mb-2">
                            📖 Story Time
                        </h1>
                        <p className="text-muted-foreground">
                            Read classic fables and test your understanding
                        </p>
                    </div>
                )}

                {state.mode === "library" ? (
                    <StoryLibrary stories={sampleStories} onSelectStory={selectStory} />
                ) : state.mode === "reading" && state.currentStory ? (
                    <StoryReader story={state.currentStory} onFinished={startQuiz} />
                ) : state.mode === "quiz" && currentQuestion ? (
                    <StoryQuiz
                        question={currentQuestion}
                        currentNumber={state.currentQuestionIndex + 1}
                        totalNumber={state.currentStory!.questions.length}
                        onAnswer={answerQuestion}
                    />
                ) : state.mode === "complete" ? (
                    <StoryComplete
                        score={state.score}
                        total={state.currentStory!.questions.length}
                        onRestart={resetStory}
                        onBack={goBack}
                    />
                ) : null}
            </div>
        </div>
    );
};

export default StoryTime;
