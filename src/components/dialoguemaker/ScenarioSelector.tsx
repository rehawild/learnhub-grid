import { DialogueScenario } from "@/types/dialoguemaker";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Utensils, Calendar, MapPin, MessageCircle } from "lucide-react";

interface ScenarioSelectorProps {
    scenarios: DialogueScenario[];
    onSelect: (scenario: DialogueScenario) => void;
}

const iconMap: Record<string, any> = {
    Utensils,
    Calendar,
    MapPin,
    MessageCircle
};

export const ScenarioSelector = ({ scenarios, onSelect }: ScenarioSelectorProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scenarios.map((scenario) => {
                const IconComponent = iconMap[scenario.icon] || MessageCircle;
                return (
                    <Card
                        key={scenario.id}
                        className="cursor-pointer hover:border-primary transition-all hover:shadow-md group flex flex-col h-full"
                        onClick={() => onSelect(scenario)}
                    >
                        <CardHeader>
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 rounded-full bg-primary/10 text-primary">
                                    <IconComponent className="w-6 h-6" />
                                </div>
                            </div>
                            <CardTitle className="group-hover:text-primary transition-colors">{scenario.title}</CardTitle>
                            <CardDescription>{scenario.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="mt-auto">
                            <div className="flex gap-2 mb-4">
                                {scenario.characters.map(char => (
                                    <span key={char.id} className="text-2xl" title={char.name}>{char.avatar}</span>
                                ))}
                            </div>
                            <Button
                                className="w-full gap-2 group-hover:bg-primary/10 group-hover:text-primary"
                                variant="secondary"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onSelect(scenario);
                                }}
                            >
                                <IconComponent className="w-4 h-4" /> Start Chat
                            </Button>
                        </CardContent>
                    </Card>
                );
            })}
        </div>
    );
};
