import { Poem } from "@/types/poetry";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Quote } from "lucide-react";

interface PoetryReaderProps {
    poem: Poem;
    onFinished: () => void;
}

export const PoetryReader = ({ poem, onFinished }: PoetryReaderProps) => {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Card>
                <CardContent className="pt-8 pb-8 text-center">
                    <div className="space-y-2 mb-8">
                        <h1 className="text-3xl md:text-4xl font-bold text-foreground">{poem.title}</h1>
                        <p className="text-xl text-muted-foreground">by {poem.author}</p>
                    </div>

                    <Quote className="w-8 h-8 text-primary/20 mx-auto mb-6" />
                    <div className="space-y-4 text-xl leading-relaxed text-foreground font-medium">
                        {poem.lines.map((line, index) => (
                            <p key={index} className={line === "" ? "h-6" : ""}>
                                {line}
                            </p>
                        ))}
                    </div>
                    <Quote className="w-8 h-8 text-primary/20 mx-auto mt-6 rotate-180" />
                </CardContent>
            </Card>

            <div className="flex justify-center">
                <Button size="lg" onClick={onFinished} className="min-w-[200px] gap-2">
                    Analyze Poem <ArrowRight className="w-4 h-4" />
                </Button>
            </div>
        </div>
    );
};
