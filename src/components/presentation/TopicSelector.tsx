import { PresentationTopic } from "@/types/presentation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlayCircle, Clock, Presentation } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface TopicSelectorProps {
    topics: PresentationTopic[];
    onSelect: (topic: PresentationTopic, mode: string) => void;
}

export const TopicSelector = ({ topics, onSelect }: TopicSelectorProps) => {
    const [selectedTopic, setSelectedTopic] = useState<PresentationTopic | null>(null);

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center mb-6">Choose a Topic</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {topics.map((topic) => (
                    <Card
                        key={topic.id}
                        className={cn(
                            "cursor-pointer transition-all border-2",
                            selectedTopic?.id === topic.id ? "border-primary shadow-lg" : "border-transparent hover:border-gray-200"
                        )}
                        onClick={() => setSelectedTopic(topic)}
                    >
                        <CardHeader>
                            <Badge className="w-fit mb-2">{topic.category}</Badge>
                            <CardTitle>{topic.title}</CardTitle>
                            <CardDescription>{topic.description}</CardDescription>
                        </CardHeader>
                    </Card>
                ))}
            </div>

            {selectedTopic && (
                <div className="mt-8 animate-in fade-in slide-in-from-bottom-4">
                    <h3 className="text-xl font-semibold text-center mb-4">Select Mode</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Button
                            variant="outline"
                            className="h-24 flex flex-col gap-2 hover:bg-primary hover:text-primary-foreground border-2"
                            onClick={() => onSelect(selectedTopic, "Standard")}
                        >
                            <Presentation className="w-6 h-6" />
                            <span className="font-bold">Standard</span>
                            <span className="text-xs font-normal">Manual slides, 5 min limit</span>
                        </Button>
                        <Button
                            variant="outline"
                            className="h-24 flex flex-col gap-2 hover:bg-primary hover:text-primary-foreground border-2"
                            onClick={() => onSelect(selectedTopic, "PechaKucha")}
                        >
                            <Clock className="w-6 h-6" />
                            <span className="font-bold">PechaKucha Style</span>
                            <span className="text-xs font-normal">Auto-advance every 20s</span>
                        </Button>
                        <Button
                            variant="outline"
                            className="h-24 flex flex-col gap-2 hover:bg-primary hover:text-primary-foreground border-2"
                            onClick={() => onSelect(selectedTopic, "Impromptu")}
                        >
                            <PlayCircle className="w-6 h-6" />
                            <span className="font-bold">Impromptu</span>
                            <span className="text-xs font-normal">Quickfire, 2 mins</span>
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
};
