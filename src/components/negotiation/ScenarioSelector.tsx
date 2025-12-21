import { NegotiationScenario } from "@/types/negotiation";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ScenarioSelectorProps {
    scenarios: NegotiationScenario[];
    onSelect: (scenario: NegotiationScenario) => void;
}

export const ScenarioSelector = ({ scenarios, onSelect }: ScenarioSelectorProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {scenarios.map((scenario) => (
                <Card
                    key={scenario.id}
                    className="cursor-pointer hover:border-primary transition-all duration-300 group border-2 relative overflow-hidden"
                    onClick={() => onSelect(scenario)}
                >
                    <div className="absolute top-0 right-0 p-3">
                        <Badge variant="outline" className="capitalize text-[10px] font-bold border-primary/20 text-muted-foreground group-hover:text-primary group-hover:border-primary transition-colors">
                            {scenario.difficulty}
                        </Badge>
                    </div>
                    <CardHeader className="space-y-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                            {scenario.icon}
                        </div>
                        <div>
                            <CardTitle className="text-xl group-hover:text-primary transition-colors">
                                {scenario.title}
                            </CardTitle>
                            <CardDescription className="mt-2 line-clamp-2">
                                {scenario.description}
                            </CardDescription>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                            <span className="w-2 h-2 rounded-full bg-primary" />
                            {scenario.phrases.length} Key Strategies
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};
