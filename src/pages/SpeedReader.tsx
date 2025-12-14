import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useSpeedReader } from "@/hooks/useSpeedReader";
import { sampleReaderTexts } from "@/data/speedreader/sample-texts";
import { TextSelector } from "@/components/speedreader/TextSelector";
import { ReaderDisplay } from "@/components/speedreader/ReaderDisplay";
import { ReaderControls } from "@/components/speedreader/ReaderControls";
import { ReaderComplete } from "@/components/speedreader/ReaderComplete";

const SpeedReader = () => {
    const {
        state,
        selectText,
        togglePlay,
        updateSettings,
        resetReader,
        goBack,
    } = useSpeedReader();

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
                        ⚡ Speed Reader
                    </h1>
                    <p className="text-muted-foreground">
                        Train your eyes to read faster using RSVP
                    </p>
                </div>

                {!state.currentText ? (
                    <TextSelector texts={sampleReaderTexts} onSelectText={selectText} />
                ) : state.isComplete ? (
                    <ReaderComplete
                        wpm={state.settings.wpm}
                        onRestart={resetReader}
                        onBack={goBack}
                    />
                ) : (
                    <div className="space-y-8">
                        <div className="text-center">
                            <h2 className="text-lg font-medium text-foreground">{state.currentText.title}</h2>
                            <p className="text-xs text-muted-foreground">
                                Word {state.currentIndex} of {state.words.length}
                            </p>
                        </div>

                        <ReaderDisplay
                            words={state.words}
                            currentIndex={state.currentIndex}
                            chunkSize={state.settings.chunkSize}
                            isPlaying={state.isPlaying}
                        />

                        <ReaderControls
                            isPlaying={state.isPlaying}
                            settings={state.settings}
                            onTogglePlay={togglePlay}
                            onUpdateSettings={updateSettings}
                            onReset={resetReader}
                        />

                        <div className="flex justify-center mt-8">
                            <Button
                                variant="outline"
                                onClick={goBack}
                                className="text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                            >
                                Quit Reading
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SpeedReader;
