import { RolePlayScenario } from "@/types/roleplay";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle } from "lucide-react";

interface ScenarioSelectorProps {
    scenarios: RolePlayScenario[];
    onSelect: (scenario: RolePlayScenario) => void;
}

export const ScenarioSelector = ({ scenarios, onSelect }: ScenarioSelectorProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {scenarios.map((scenario) => (
                <Card
                    key={scenario.id}
                    className="cursor-pointer hover:border-primary transition-all hover:shadow-md group flex flex-col h-full"
                    onClick={() => onSelect(scenario)}
                >
                    <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                            <Badge variant="outline">{scenario.location}</Badge>
                            <Badge className={
                                scenario.difficulty === 'Hard' ? 'bg-destructive' :
                                    scenario.difficulty === 'Medium' ? 'bg-yellow-500' : 'bg-green-500'
                            }>
                                {scenario.difficulty}
                            </Badge>
                        </div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">{scenario.title}</CardTitle>
                        <CardDescription>{scenario.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="mt-auto">
                        <div className="text-sm text-muted-foreground mb-4">
                            You: <strong className="text-foreground">{scenario.userRole}</strong> vs Partner: <strong className="text-foreground">{scenario.partnerRole}</strong>
                        </div>
                        <Button className="w-full gap-2 variant-secondary bg-secondary text-secondary-foreground hover:bg-secondary/80">
                            <MessageCircle className="w-4 h-4" /> Start Role Play
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};
