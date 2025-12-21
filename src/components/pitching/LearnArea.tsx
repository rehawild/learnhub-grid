import { PitchScenario } from "@/types/pitching";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Target, ArrowRight } from "lucide-react";

interface LearnAreaProps {
    scenario: PitchScenario;
    onStartPractice: () => void;
}

export const LearnArea = ({ scenario, onStartPractice }: LearnAreaProps) => {
    return (
        <div className="w-full max-w-3xl mx-auto space-y-8 animate-in fade-in duration-500">
            <div className="text-center space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
                    <Target className="w-3 h-3" />
                    Strategic Blueprint
                </div>
                <h2 className="text-3xl font-bold text-foreground">The {scenario.title} Structure</h2>
                <p className="text-muted-foreground italic">"A great pitch isn't about what you sell, it's about the narrative you build."</p>
            </div>

            <div className="space-y-4">
                {scenario.segments.map((segment, index) => (
                    <Card key={segment.id} className="border-l-4 border-l-primary group">
                        <CardHeader>
                            <div className="flex items-center gap-4">
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    {index + 1}
                                </div>
                                <CardTitle className="text-xl">{segment.title}</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                In this phase, the goal is to {segment.type === 'hook' ? 'grab attention' : segment.type === 'problem' ? 'demonstrate the pain' : segment.type === 'solution' ? 'show the cure' : 'invite partnership'}.
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <Button size="lg" className="w-full py-8 text-xl font-bold shadow-xl shadow-primary/20" onClick={onStartPractice}>
                Enter The Pitch Room <ArrowRight className="w-6 h-6 ml-2" />
            </Button>
        </div>
    );
};
