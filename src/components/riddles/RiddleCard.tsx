import { Riddle } from "@/types/riddles";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle, Eye, ArrowRight, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

interface RiddleCardProps {
    riddle: Riddle;
    isAnswerRevealed: boolean;
    onReveal: () => void;
    onNext: () => void;
    isLast: boolean;
}

export const RiddleCard = ({
    riddle,
    isAnswerRevealed,
    onReveal,
    onNext,
    isLast
}: RiddleCardProps) => {
    return (
        <Card className="w-full max-w-2xl mx-auto shadow-lg border-2 border-primary/20 overflow-hidden animate-in fade-in zoom-in duration-300">
            <CardHeader className="bg-primary/5 border-b border-primary/10 py-4">
                <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-bold flex items-center gap-2 text-primary">
                        <HelpCircle className="w-6 h-6" />
                        Riddle
                    </CardTitle>
                    <div className={cn(
                        "px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider",
                        riddle.difficulty === 'easy' ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300" :
                            riddle.difficulty === 'medium' ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300" :
                                "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300"
                    )}>
                        {riddle.difficulty}
                    </div>
                </div>
            </CardHeader>

            <CardContent className="p-8 space-y-8">
                <p className="text-2xl font-medium text-center leading-relaxed text-foreground italic">
                    "{riddle.question}"
                </p>

                {isAnswerRevealed && (
                    <div className="bg-primary/10 p-6 rounded-2xl border-2 border-primary/20 animate-in slide-in-from-bottom-4 duration-500">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-primary/70 mb-2">The Answer</h4>
                        <p className="text-3xl font-bold text-center text-primary">
                            {riddle.answer}
                        </p>
                    </div>
                )}
            </CardContent>

            <CardFooter className="bg-muted/30 p-4 border-t border-primary/10">
                {!isAnswerRevealed ? (
                    <Button
                        className="w-full py-6 text-xl font-bold rounded-xl shadow-md hover:scale-[1.02] transition-transform"
                        onClick={onReveal}
                    >
                        <Eye className="w-6 h-6 mr-2" />
                        Reveal Answer
                    </Button>
                ) : (
                    <Button
                        className="w-full py-6 text-xl font-bold rounded-xl shadow-md hover:scale-[1.02] transition-transform"
                        onClick={onNext}
                    >
                        {isLast ? (
                            <>
                                <RotateCcw className="w-6 h-6 mr-2" />
                                Finish Deck
                            </>
                        ) : (
                            <>
                                Next Riddle
                                <ArrowRight className="w-6 h-6 ml-2" />
                            </>
                        )}
                    </Button>
                )}
            </CardFooter>
        </Card>
    );
};
