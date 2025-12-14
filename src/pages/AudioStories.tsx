import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useAudioStories } from "@/hooks/useAudioStories";
import { sampleStories } from "@/data/audiostories/stories";
import { StoryLibrary } from "@/components/audiostories/StoryLibrary";
import { StoryPlayer } from "@/components/audiostories/StoryPlayer";
import { ComprehensionQuiz } from "@/components/audiostories/ComprehensionQuiz";

const AudioStories = () => {
    const {
        state,
        selectStory,
        togglePlay,
        startQuiz,
        selectAnswer,
        submitQuiz,
        resetTool,
        backToStory
    } = useAudioStories();

    const handleBackToLibrary = () => {
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
                        📻 Audio Stories
                    </h1>
                    <p className="text-muted-foreground">
                        Immerse yourself in engaging stories and test your comprehension.
                    </p>
                </div>

                {/* 3. Main Content Area */}
                {state.mode === "library" ? (
                    <StoryLibrary stories={sampleStories} onSelect={selectStory} />
                ) : state.mode === "reading" && state.currentStory ? (
                    <div className="space-y-6">
                        <div className="flex justify-start">
                            <Button variant="ghost" onClick={handleBackToLibrary} className="gap-2 pl-0 hover:bg-transparent hover:text-primary">
                                <ArrowLeft className="h-4 w-4" /> Back to Library
                            </Button>
                        </div>
                        <StoryPlayer
                            story={state.currentStory}
                            isPlaying={state.isPlaying}
                            onTogglePlay={togglePlay}
                            onStartQuiz={startQuiz}
                        />
                    </div>
                ) : state.mode === "quiz" && state.currentStory ? (
                    <div className="space-y-6">
                        <ComprehensionQuiz
                            story={state.currentStory}
                            answers={state.quizAnswers}
                            score={state.score}
                            onSelectAnswer={selectAnswer}
                            onSubmit={submitQuiz}
                            onBack={backToStory}
                        />
                    </div>
                ) : null}

            </div>
        </div>
    );
};

export default AudioStories;
