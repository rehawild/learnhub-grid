import { NetworkingScenario } from "@/types/networking";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

interface ScenarioSelectorProps {
    scenarios: NetworkingScenario[];
    onSelect: (scenario: NetworkingScenario) => void;
}

export const ScenarioSelector = ({ scenarios, onSelect }: ScenarioSelectorProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mx-auto">
            {scenarios.map((scenario) => (
                <Card
                    key={scenario.id}
                    className="cursor-pointer hover:border-primary/50 hover:shadow-xl transition-all duration-300 group border-2"
                    onClick={() => onSelect(scenario)}
                >
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
                        <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                            <span className="w-2 h-2 rounded-full bg-primary" />
                            {scenario.phrases.length} Networking Phrases
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};
