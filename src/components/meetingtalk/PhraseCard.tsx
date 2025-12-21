import { MeetingPhrase } from "@/types/meetingtalk";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Volume2, Info, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

interface PhraseCardProps {
    phrase: MeetingPhrase;
    onNext: () => void;
    onPrev: () => void;
    isFirst: boolean;
    isLast: boolean;
}

export const PhraseCard = ({
    phrase,
    onNext,
    onPrev,
    isFirst,
    isLast
}: PhraseCardProps) => {
    return (
        <Card className="w-full max-w-2xl mx-auto border-2 border-primary/20 shadow-lg overflow-hidden animate-in zoom-in-95 duration-500">
            <CardHeader className="bg-primary/5 border-b border-primary/10">
                <div className="flex items-center justify-between">
                    <CardTitle className="text-primary flex items-center gap-2">
                        <BookOpen className="w-5 h-5" />
                        Learn Phrase
                    </CardTitle>
                    <Button variant="ghost" size="icon" className="text-primary hover:bg-primary/10" title="Listen (Coming Soon)">
                        <Volume2 className="w-5 h-5" />
                    </Button>
                </div>
            </CardHeader>

            <CardContent className="p-8 space-y-8">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-bold text-foreground leading-tight tracking-tight">
                        "{phrase.text}"
                    </h2>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                        <Info className="w-4 h-4" />
                        Key Phrase
                    </div>
                </div>

                <div className="grid gap-4 mt-8">
                    <div className="bg-muted/50 p-4 rounded-xl border border-border/50">
                        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1">Meaning</span>
                        <p className="text-foreground">{phrase.meaning}</p>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-xl border border-border/50">
                        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1">Context</span>
                        <p className="text-foreground">{phrase.context}</p>
                    </div>
                </div>
            </CardContent>

            <div className="flex bg-muted/30 p-4 gap-4 border-t border-primary/10">
                <Button
                    variant="outline"
                    className="flex-1 py-6 font-bold"
                    onClick={onPrev}
                    disabled={isFirst}
                >
                    Previous
                </Button>
                <Button
                    className="flex-1 py-6 font-bold"
                    onClick={onNext}
                >
                    {isLast ? "Start Practice" : "Next Phrase"}
                </Button>
            </div>
        </Card>
    );
};
