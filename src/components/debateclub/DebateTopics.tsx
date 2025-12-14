import { DebateTopic, DebateSide } from "@/types/debateclub";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Scale, Check, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface DebateTopicsProps {
    topics: DebateTopic[];
    onSelect: (topic: DebateTopic, side: DebateSide) => void;
}

export const DebateTopics = ({ topics, onSelect }: DebateTopicsProps) => {
    const [selectedTopicId, setSelectedTopicId] = useState<string | null>(null);

    return (
        <div className="grid grid-cols-1 gap-6">
            {topics.map((topic) => (
                <Card
                    key={topic.id}
                    className={cn(
                        "transition-all border-2",
                        selectedTopicId === topic.id ? "border-primary shadow-md" : "border-transparent hover:border-border"
                    )}
                    onClick={() => setSelectedTopicId(topic.id)}
                >
                    <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                            <Badge variant="outline">{topic.category}</Badge>
                            <Badge className={
                                topic.difficulty === 'Hard' ? 'bg-destructive' :
                                    topic.difficulty === 'Medium' ? 'bg-yellow-500' : 'bg-green-500'
                            }>
                                {topic.difficulty}
                            </Badge>
                        </div>
                        <CardTitle className="text-xl">"{topic.motion}"</CardTitle>
                    </CardHeader>

                    {selectedTopicId === topic.id && (
                        <CardContent className="animate-in fade-in slide-in-from-top-2 duration-200">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                <Button
                                    className="h-auto py-4 flex flex-col gap-2 bg-green-600 hover:bg-green-700 text-white"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onSelect(topic, "Proposition");
                                    }}
                                >
                                    <div className="flex items-center gap-2 font-bold text-lg"><Check /> Proposition</div>
                                    <span className="text-sm font-normal opacity-90">Agree with the motion</span>
                                </Button>
                                <Button
                                    className="h-auto py-4 flex flex-col gap-2 bg-red-600 hover:bg-red-700 text-white"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onSelect(topic, "Opposition");
                                    }}
                                >
                                    <div className="flex items-center gap-2 font-bold text-lg"><X /> Opposition</div>
                                    <span className="text-sm font-normal opacity-90">Disagree with the motion</span>
                                </Button>
                            </div>
                        </CardContent>
                    )}
                </Card>
            ))}
        </div>
    );
};
