import { PhoneScenario } from "@/types/phoneenglish";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone } from "lucide-react";

interface ScenarioListProps {
    scenarios: PhoneScenario[];
    onSelect: (scenario: PhoneScenario) => void;
}

export const ScenarioList = ({ scenarios, onSelect }: ScenarioListProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scenarios.map((scenario) => (
                <Card
                    key={scenario.id}
                    className="cursor-pointer hover:border-primary transition-all hover:shadow-md h-full flex flex-col"
                    onClick={() => onSelect(scenario)}
                >
                    <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                            <Badge variant="secondary">{scenario.difficulty}</Badge>
                        </div>
                        <CardTitle className="text-xl">{scenario.title}</CardTitle>
                        <CardDescription className="line-clamp-2">{scenario.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="mt-auto">
                        <Button className="w-full gap-2 bg-green-600 hover:bg-green-700 text-white">
                            <Phone className="w-4 h-4" /> Start Call
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};
