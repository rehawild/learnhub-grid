import { useState, useMemo } from "react";
import { PhrasalVerb } from "@/types/phrasalverbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle2, XCircle, ArrowRight, Trophy, Zap, PenTool } from "lucide-react";
import { cn } from "@/lib/utils";

interface SentenceSculptorProps {
    verb: PhrasalVerb;
    onComplete: () => void;
    onBack: () => void;
    onScore: (points: number) => void;
}

export const SentenceSculptor = ({ verb: currentVerb, onComplete, onBack, onScore }: SentenceSculptorProps) => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const options = useMemo(() => {
        if (!currentVerb) return [];
        return [currentVerb.particle, ...currentVerb.distractors].sort(() => Math.random() - 0.5);
    }, [currentVerb]);

    const sentenceParts = useMemo(() => {
        if (!currentVerb) return { before: "", after: "" };
        // Find the phrasal verb in the example and replace the particle with a blank
        const regex = new RegExp(`(${currentVerb.verb})\\s+(${currentVerb.particle})`, 'i');
        const match = currentVerb.example.match(regex);

        if (match) {
            const [before, after] = currentVerb.example.split(match[0]);
            return {
                before: before + match[1],
                after
            };
        }
        // Fallback if regex fails (e.g. separated verb)
        return { before: "The team will carry ", after: " the research." };
    }, [currentVerb]);

    const handleSelect = (option: string) => {
        if (selectedOption) return;
        const isCorrect = option === currentVerb.particle;
        setSelectedOption(option);
        if (isCorrect) {
            onScore(10);
        }
    };

    const handleNext = () => {
        setSelectedOption(null);
        onComplete();
    };

    return (
        <div className="w-full max-w-3xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-2">
                    <PenTool className="w-3 h-3" />
                    Sentence Sculptor
                </div>

                <div className="p-10 bg-muted/40 rounded-3xl border-2 border-border shadow-sm flex flex-wrap items-center justify-center gap-x-2 gap-y-4">
                    <span className="text-3xl font-medium text-foreground/80 leading-relaxed">
                        {sentenceParts.before}
                    </span>
                    <div className={cn(
                        "min-w-[120px] h-14 border-b-4 flex items-center justify-center transition-all duration-300 px-4",
                        selectedOption
                            ? (selectedOption === currentVerb.particle ? "border-green-500 text-green-500" : "border-red-500 text-red-500")
                            : "border-primary/30"
                    )}>
                        <span className="text-4xl font-bold italic uppercase tracking-tighter">
                            {selectedOption || "?"}
                        </span>
                    </div>
                    <span className="text-3xl font-medium text-foreground/80 leading-relaxed">
                        {sentenceParts.after}
                    </span>
                </div>

                <p className="text-muted-foreground italic font-medium">
                    Select the correct particle to complete the phrasal verb.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {options.map((option) => (
                    <Button
                        key={option}
                        variant="outline"
                        className={cn(
                            "h-20 text-xl font-bold italic uppercase tracking-widest transition-all duration-300 border-2",
                            !selectedOption && "hover:border-primary/50 hover:bg-primary/5",
                            selectedOption === option && (
                                option === currentVerb.particle
                                    ? "border-green-500 bg-green-500/10 text-green-500"
                                    : "border-red-500 bg-red-500/10 text-red-500"
                            ),
                            selectedOption && option === currentVerb.particle && "border-green-500 bg-green-500/10 text-green-500",
                            selectedOption && selectedOption !== option && option !== currentVerb.particle && "opacity-30 pointer-events-none"
                        )}
                        onClick={() => handleSelect(option)}
                    >
                        {option}
                    </Button>
                ))}
            </div>

            {selectedOption && (
                <div className="flex flex-col items-center gap-6 pt-4">
                    <div className="w-full p-6 bg-primary/5 rounded-2xl border border-primary/10 animate-in slide-in-from-top-2 text-center">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-primary block mb-2">Meaning Refresher</span>
                        <p className="text-xl font-bold italic text-foreground leading-relaxed">
                            "{currentVerb.phrase}" means "{currentVerb.meaning}"
                        </p>
                    </div>
                    <Button size="lg" className="w-64 py-6 font-bold shadow-xl shadow-primary/20" onClick={handleNext}>
                        Master Next Verb
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </div>
            )}
        </div>
    );
};
