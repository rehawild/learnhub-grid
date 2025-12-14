import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { usePronunciation } from "@/hooks/usePronunciation";
import { pronunciationWords, categories } from "@/data/pronunciation/words";
import { WordList } from "@/components/pronunciation/WordList";
import { AudioRecorder } from "@/components/pronunciation/AudioRecorder";

const Pronunciation = () => {
    const {
        state,
        selectCategory,
        selectWord,
        startRecording,
        stopRecording,
        playReference,
        playAttempt,
        goBack
    } = usePronunciation();

    return (
        <div className="min-h-screen bg-background pb-20">
            <div className="container max-w-4xl mx-auto px-4 py-8">

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
                        👄 Pronunciation
                    </h1>
                    <p className="text-muted-foreground">
                        Master difficult sounds with instant AI feedback.
                    </p>
                </div>

                {/* 3. Main Content Area */}
                {state.mode === "list" ? (
                    <WordList
                        words={pronunciationWords}
                        categories={categories}
                        selectedCategory={state.selectedCategory}
                        onSelectCategory={selectCategory}
                        onSelectWord={selectWord}
                    />
                ) : state.mode === "practice" && state.currentWord ? (
                    <div className="space-y-6">
                        <div className="flex justify-start">
                            <Button variant="ghost" onClick={goBack} className="gap-2 pl-0 hover:bg-transparent hover:text-primary">
                                <ArrowLeft className="h-4 w-4" /> Back to Word List
                            </Button>
                        </div>
                        <AudioRecorder
                            word={state.currentWord}
                            isRecording={state.isRecording}
                            attempts={state.attempts}
                            onStartRecording={startRecording}
                            onStopRecording={stopRecording}
                            onPlayReference={playReference}
                            onPlayAttempt={playAttempt}
                        />
                    </div>
                ) : null}

            </div>
        </div>
    );
};

export default Pronunciation;
