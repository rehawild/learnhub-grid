import { CompPassage } from "@/types/comprehension";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText } from "lucide-react";

interface PassageReaderProps {
    passage: CompPassage;
    onFinished: () => void;
}

export const PassageReader = ({ passage, onFinished }: PassageReaderProps) => {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Card>
                <CardHeader className="text-center border-b pb-6">
                    <div className="flex justify-center mb-4">
                        <div className="p-3 bg-primary/10 rounded-full">
                            <FileText className="w-8 h-8 text-primary" />
                        </div>
                    </div>
                    <CardTitle className="text-2xl md:text-3xl font-bold text-foreground">{passage.title}</CardTitle>
                    <p className="text-muted-foreground font-medium tracking-wide text-sm uppercase mt-2">{passage.topic}</p>
                </CardHeader>
                <CardContent className="p-6 md:p-8 space-y-6">
                    {passage.content.map((paragraph, index) => (
                        <p key={index} className="text-lg leading-relaxed text-foreground/90">
                            {paragraph}
                        </p>
                    ))}
                </CardContent>
            </Card>

            <div className="flex justify-center">
                <Button size="lg" onClick={onFinished} className="w-full sm:w-auto min-w-[200px] gap-2">
                    Start Questions <ArrowRight className="w-4 h-4" />
                </Button>
            </div>
        </div>
    );
};
