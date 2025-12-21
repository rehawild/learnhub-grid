import { Collocation } from "@/types/collocations";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BookOpen, Link2, Info } from "lucide-react";

interface CollocationCardProps {
    collocation: Collocation;
    onNext: () => void;
    onPrev: () => void;
    isFirst: boolean;
}

export const CollocationCard = ({
    collocation,
    onNext,
    onPrev,
    isFirst
}: CollocationCardProps) => {
    return (
        <div className="w-full max-w-2xl mx-auto space-y-8 animate-in zoom-in-95 duration-500">
            <Card className="overflow-hidden border-2 border-primary/20 bg-card shadow-2xl rounded-3xl">
                <div className="bg-primary/5 p-12 text-center border-b border-primary/10">
                    <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                            <Link2 className="w-8 h-8 text-primary" />
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <h2 className="text-4xl font-bold text-primary border-b-4 border-primary/20 pb-1">{collocation.collocate}</h2>
                        <h2 className="text-4xl font-bold text-foreground">{collocation.headword}</h2>
                    </div>
                    <p className="text-muted-foreground font-semibold uppercase tracking-widest text-[10px]">
                        {collocation.type} Partnership
                    </p>
                </div>

                <CardContent className="p-10 space-y-8">
                    <div className="space-y-3">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary block">Meaning</span>
                        <p className="text-2xl font-semibold leading-tight italic">
                            {collocation.meaning}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-border/50">
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <BookOpen className="w-4 h-4 text-primary" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Contextual Usage</span>
                            </div>
                            <p className="text-sm font-medium italic text-foreground leading-relaxed">
                                "{collocation.example}"
                            </p>
                        </div>

                        {collocation.usageNote && (
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <Info className="w-4 h-4 text-primary" />
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Usage Note</span>
                                </div>
                                <div className="p-4 bg-primary/[0.03] rounded-xl border border-primary/10">
                                    <p className="text-xs text-muted-foreground leading-relaxed">
                                        {collocation.usageNote}
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </CardContent>
            </Card>

            <div className="flex gap-4">
                <Button
                    variant="outline"
                    className="flex-1 py-6 font-bold"
                    onClick={onPrev}
                    disabled={isFirst}
                >
                    Previous
                </Button>
                <Button
                    className="flex-1 py-6 font-bold shadow-lg shadow-primary/20"
                    onClick={onNext}
                >
                    Master This Partnership
                    <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
            </div>
        </div>
    );
};
