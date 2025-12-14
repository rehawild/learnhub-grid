import { IELTSTest, IELTSSessionState } from "@/types/ieltsprep";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Timer, Mic, CheckCircle, ChevronRight, AlertCircle, Play } from "lucide-react";

interface TestInterfaceProps {
    test: IELTSTest;
    state: IELTSSessionState;
    onNextQuestion: () => void;
    onStartPart2Prep: () => void;
    onStartPart2Speaking: () => void;
    onFinishPart2: () => void;
    onFinishTest: () => void;
}

export const TestInterface = ({
    test,
    state,
    onNextQuestion,
    onStartPart2Prep,
    onStartPart2Speaking,
    onFinishPart2,
    onFinishTest
}: TestInterfaceProps) => {

    const formatTime = (secs: number) => {
        const mins = Math.floor(secs / 60);
        const scs = secs % 60;
        return `${mins}:${scs.toString().padStart(2, '0')}`;
    };

    if (state.status === 'completed') {
        return (
            <Card className="text-center py-12 animate-in bg-card border shadow-sm">
                <CardContent className="space-y-6">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle className="w-10 h-10" />
                    </div>
                    <h2 className="text-3xl font-bold">Test Completed!</h2>
                    <p className="text-muted-foreground">Great job practicing. Review your recordings below.</p>

                    <div className="grid gap-4 max-w-md mx-auto mt-8">
                        {state.recordings.part1 && (
                            <Button variant="outline" className="justify-between" onClick={() => { }}>
                                Part 1 Recording (Coming Soon) <Play className="w-4 h-4" />
                            </Button>
                        )}
                        {state.recordings.part2 && (
                            <Button variant="outline" className="justify-between" onClick={() => { }}>
                                Part 2 Recording (Coming Soon) <Play className="w-4 h-4" />
                            </Button>
                        )}
                        {state.recordings.part3 && (
                            <Button variant="outline" className="justify-between" onClick={() => { }}>
                                Part 3 Recording (Coming Soon) <Play className="w-4 h-4" />
                            </Button>
                        )}
                    </div>
                </CardContent>
            </Card>
        );
    }

    return (
        <div className="max-w-3xl mx-auto space-y-6">

            {/* Status Bar */}
            <div className="flex justify-between items-center bg-card border rounded-lg p-4 shadow-sm">
                <div className="flex gap-4 items-center">
                    <Badge variant={state.currentPart === 'Part 1' ? 'default' : 'outline'}>Part 1</Badge>
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                    <Badge variant={state.currentPart === 'Part 2' ? 'default' : 'outline'}>Part 2</Badge>
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                    <Badge variant={state.currentPart === 'Part 3' ? 'default' : 'outline'}>Part 3</Badge>
                </div>
                <div className="flex items-center gap-2 font-mono text-lg font-medium text-destructive animate-pulse">
                    <Timer className="w-5 h-5" />
                    {formatTime(state.elapsedTime)}
                </div>
            </div>

            {/* Main Content Area */}
            <Card className="min-h-[400px] flex flex-col justify-between shadow-lg">
                <CardHeader className="text-center border-b bg-muted/20">
                    <CardTitle className="text-2xl text-primary">
                        {state.currentPart === 'Part 1' && "Interview"}
                        {state.currentPart === 'Part 2' && "Individual Long Turn"}
                        {state.currentPart === 'Part 3' && "Discussion"}
                    </CardTitle>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col items-center justify-center p-8 space-y-8 text-center">

                    {/* Part 1 Logic */}
                    {state.currentPart === 'Part 1' && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
                            <h3 className="text-xl font-medium text-muted-foreground">Topic: {test.parts.part1.topic}</h3>
                            <p className="text-3xl font-semibold leading-relaxed">
                                {test.parts.part1.questions[state.currentQuestionIndex]}
                            </p>
                            <Button size="lg" onClick={onNextQuestion} className="gap-2 mt-8">
                                Next Question <ChevronRight className="w-4 h-4" />
                            </Button>
                        </div>
                    )}

                    {/* Part 2 Logic */}
                    {state.currentPart === 'Part 2' && (
                        <div className="text-left w-full max-w-lg space-y-6 animate-in fade-in">
                            {!state.isPrepTime && state.elapsedTime === 0 ? (
                                <div className="text-center">
                                    <h3 className="text-xl font-bold mb-4">Topic Card</h3>
                                    <div className="bg-card border p-6 rounded-lg shadow-sm mb-6 text-left">
                                        <p className="font-semibold text-lg mb-4">{test.parts.part2.topic}</p>
                                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                            {test.parts.part2.cueCardPoints.map((p, i) => <li key={i}>{p}</li>)}
                                        </ul>
                                    </div>
                                    <Button onClick={onStartPart2Prep} className="w-full">Start 1 Minute Preparation</Button>
                                </div>
                            ) : state.isPrepTime ? (
                                <div className="text-center space-y-4">
                                    <h3 className="text-2xl font-bold text-orange-500">Preparation Time</h3>
                                    <div className="text-6xl font-mono font-bold">
                                        {Math.max(0, 60 - state.elapsedTime)}s
                                    </div>
                                    <p className="text-muted-foreground">Take notes. You have 1 minute.</p>
                                    <Button variant="outline" onClick={onStartPart2Speaking}>Skip Prep & Start Speaking</Button>
                                </div>
                            ) : (
                                <div className="text-center space-y-4">
                                    <div className="flex items-center justify-center gap-2 text-red-500 mb-4">
                                        <Mic className="w-6 h-6 animate-pulse" />
                                        <span className="font-bold uppercase tracking-wider">Recording Answer</span>
                                    </div>
                                    <div className="bg-card border p-6 rounded-lg shadow-sm mb-6 text-left opacity-75">
                                        <p className="font-semibold mb-2">{test.parts.part2.topic}</p>
                                        <ul className="list-disc list-inside text-sm text-muted-foreground">
                                            {test.parts.part2.cueCardPoints.map((p, i) => <li key={i}>{p}</li>)}
                                        </ul>
                                    </div>
                                    <Button size="lg" onClick={onFinishPart2} className="w-full">Finish Speaking Part 2</Button>
                                    <p className="text-xs text-muted-foreground mt-2">Speak for 1-2 minutes.</p>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Part 3 Logic */}
                    {state.currentPart === 'Part 3' && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
                            <h3 className="text-xl font-medium text-muted-foreground">Topic: {test.parts.part3.topic}</h3>
                            <p className="text-3xl font-semibold leading-relaxed">
                                {test.parts.part3.questions[state.currentQuestionIndex]}
                            </p>
                            <Button size="lg" onClick={onNextQuestion} className="gap-2 mt-8">
                                Next Question <ChevronRight className="w-4 h-4" />
                            </Button>
                        </div>
                    )}

                </CardContent>
            </Card>
        </div>
    );
};
