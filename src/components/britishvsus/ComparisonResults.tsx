import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Home, RotateCcw, Globe } from "lucide-react";

interface ComparisonResultsProps {
    score: number;
    onReset: () => void;
}

export const ComparisonResults = ({ score, onReset }: ComparisonResultsProps) => {
    return (
        <div className="max-w-2xl mx-auto py-12 text-center space-y-8 animate-in zoom-in duration-700">
            <div className="relative inline-block">
                <div className="absolute inset-0 bg-yellow-500 blur-3xl opacity-20 rounded-full animate-pulse"></div>
                <div className="relative bg-yellow-50 p-8 rounded-full border-4 border-yellow-100 shadow-xl">
                    <Trophy className="w-20 h-20 text-yellow-600" />
                </div>
            </div>

            <div className="space-y-4">
                <h2 className="text-4xl font-bold text-foreground">Crossing Successful!</h2>
                <p className="text-muted-foreground text-lg max-w-md mx-auto italic font-medium">
                    You've traveled between dialects and mastered the regional nuances of English.
                </p>
            </div>

            <Card className="border-2 border-yellow-500/20 bg-card shadow-2xl rounded-[2.5rem] overflow-hidden">
                <CardContent className="p-12">
                    <div className="flex justify-around items-center gap-8">
                        <div className="text-center">
                            <div className="text-5xl font-bold text-yellow-600 mb-2">{score}</div>
                            <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Fluency Miles</div>
                        </div>
                        <div className="h-16 w-[2px] bg-yellow-100"></div>
                        <div className="text-center">
                            <div className="text-5xl font-bold text-yellow-600 mb-2">100%</div>
                            <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Accuracy</div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div className="flex gap-4 pt-4">
                <Button
                    variant="outline"
                    className="flex-1 py-8 rounded-2xl border-2 text-lg font-bold hover:bg-yellow-50"
                    onClick={onReset}
                >
                    <RotateCcw className="w-5 h-5 mr-2" />
                    Retake Flight
                </Button>
                <Button
                    className="flex-1 py-8 rounded-2xl bg-yellow-600 hover:bg-yellow-700 text-lg font-bold shadow-xl shadow-yellow-500/20"
                    onClick={() => window.location.href = '/'}
                >
                    <Home className="w-5 h-5 mr-2" />
                    Back to Hub
                </Button>
            </div>
        </div>
    );
};
