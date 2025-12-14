import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { usePresentation } from "@/hooks/usePresentation";
import { presentationTopics } from "@/data/presentation/topics";
import { TopicSelector } from "@/components/presentation/TopicSelector";
import { PresentationStage } from "@/components/presentation/PresentationStage";

const Presentation = () => {
    const {
        state,
        selectTopic,
        startPresentation,
        nextSlide,
        prevSlide,
        finishPresentation,
        playRecording,
        resetTool
    } = usePresentation();

    return (
        <div className="min-h-screen bg-background pb-20">
            <div className="container max-w-5xl mx-auto px-4 py-8">

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
                        📊 Presentation
                    </h1>
                    <p className="text-muted-foreground">
                        Practice structured speaking with timing constraints.
                    </p>
                </div>

                {/* 3. Main Content Area */}
                {state.step === "selection" ? (
                    <div className="max-w-4xl mx-auto">
                        <TopicSelector
                            topics={presentationTopics}
                            onSelect={selectTopic}
                        />
                    </div>
                ) : state.step !== "selection" && state.currentTopic && state.settings ? (
                    <div className="space-y-6">
                        {state.step !== "presenting" && (
                            <div className="flex justify-start">
                                <Button variant="ghost" onClick={resetTool} className="gap-2 pl-0 hover:bg-transparent hover:text-primary">
                                    <ArrowLeft className="h-4 w-4" /> Back to Selection
                                </Button>
                            </div>
                        )}
                        <PresentationStage
                            topic={state.currentTopic!}
                            settings={state.settings!}
                            step={state.step}
                            elapsedTime={state.elapsedTime}
                            currentSlideIndex={state.currentSlideIndex}
                            recordings={state.recordings}
                            onStart={startPresentation}
                            onNext={nextSlide}
                            onPrev={prevSlide}
                            onFinish={finishPresentation}
                            onPlayRecording={playRecording}
                        />
                    </div>
                ) : null}

            </div>
        </div>
    );
};

export default Presentation;
