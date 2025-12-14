import { Button } from "@/components/ui/button";
import { ArrowLeft, Timer, HelpCircle, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useIELTSReading } from "@/hooks/useIELTSReading";
import { ReadingPassageDisplay } from "@/components/ieltsreading/ReadingPassageDisplay";
import { QuestionPanel } from "@/components/ieltsreading/QuestionPanel";

const IELTSReading = () => {
    const {
        test,
        state,
        startTest,
        submitAnswer,
        finishTest,
        reset
    } = useIELTSReading();

    const formatTime = (secs: number) => {
        const mins = Math.floor(secs / 60);
        const scs = secs % 60;
        return `${mins}:${scs.toString().padStart(2, '0')}`;
    };

    const currentPassage = test.passages[state.currentSectionIndex];

    return (
        <div className="h-screen flex flex-col bg-background overflow-hidden relative">

            {/* Header */}
            <header className="h-16 border-b flex items-center justify-between px-6 bg-card shrink-0">
                <div className="flex items-center gap-4">
                    <Link to="/">
                        <Button variant="ghost" size="icon">
                            <ArrowLeft className="h-5 w-5" />
                        </Button>
                    </Link>
                    <div>
                        <h1 className="font-bold text-lg leading-none">IELTS Reading</h1>
                        <p className="text-xs text-muted-foreground">{test.title}</p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    {state.status === 'running' && (
                        <div className="flex items-center gap-2 font-mono text-xl font-medium text-primary bg-primary/10 px-3 py-1 rounded">
                            <Timer className="w-5 h-5" />
                            {formatTime(state.elapsedTime)}
                        </div>
                    )}

                    {state.status === 'idle' ? (
                        <Button onClick={startTest} className="gap-2">
                            Start Test
                        </Button>
                    ) : state.status === 'running' ? (
                        <div className="flex gap-2">
                            <Button variant="outline" onClick={reset}>Quit</Button>
                            <Button onClick={finishTest} variant="default">Finish Review</Button>
                        </div>
                    ) : (
                        <Button onClick={reset}>Try Again</Button>
                    )}
                </div>
            </header>

            {/* Split Screen Content */}
            {state.status !== 'idle' ? (
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 p-4 overflow-hidden">
                    {/* Left: Reading Passage */}
                    <div className="h-full overflow-hidden">
                        <ReadingPassageDisplay passage={currentPassage} />
                    </div>

                    {/* Right: Questions */}
                    <div className="h-full overflow-hidden">
                        <QuestionPanel
                            questionSets={currentPassage.questionSets}
                            answers={state.answers}
                            onAnswer={submitAnswer}
                            showResults={state.showResults}
                        />
                    </div>
                </div>
            ) : (
                <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-6">
                    <div className="w-24 h-24 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-primary mb-4">
                        <HelpCircle className="w-12 h-12" />
                    </div>
                    <h2 className="text-3xl font-bold">Academic Reading Practice</h2>
                    <p className="text-muted-foreground max-w-md">
                        Practice with realistic IELTS Academic reading passages.
                        Split-screen view allows you to read and answer simultaneously, just like the real computer-delivered test.
                    </p>
                    <Button size="lg" onClick={startTest} className="px-8 text-lg h-12">
                        Begin Mock Test
                    </Button>
                </div>
            )}

            {/* Results Overlay */}
            {state.status === 'completed' && (
                <div className="absolute inset-x-0 bottom-0 top-16 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50 animate-in fade-in">
                    <div className="bg-card border p-8 rounded-2xl shadow-2xl max-w-sm w-full text-center space-y-6">
                        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                            <CheckCircle className="w-10 h-10" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold">Test Completed</h3>
                            <p className="text-muted-foreground">Here is your result</p>
                        </div>

                        <div className="py-6 border-y">
                            <div className="text-5xl font-mono font-bold text-primary mb-2">
                                {state.score}
                            </div>
                            <p className="text-sm font-medium uppercase tracking-wide opacity-70">Correct Answers</p>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <Button variant="outline" onClick={() => {
                                const s = { ...state, status: 'running' } as any; // hack to just close overlay
                                // Ideally we use a separate state for overlay
                                // For now let's just reset
                                reset();
                            }}>Close</Button>
                            <Button onClick={reset}>Try Another</Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default IELTSReading;
