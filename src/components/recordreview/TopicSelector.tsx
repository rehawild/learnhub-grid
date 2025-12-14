import { ReviewTopic } from "@/types/recordreview";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mic } from "lucide-react";

interface TopicSelectorProps {
    topics: ReviewTopic[];
    onSelect: (topic: ReviewTopic) => void;
}

export const TopicSelector = ({ topics, onSelect }: TopicSelectorProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topics.map((topic) => (
                <Card
                    key={topic.id}
                    className="cursor-pointer hover:border-primary transition-all hover:shadow-md h-full flex flex-col"
                    onClick={() => onSelect(topic)}
                >
                    <CardHeader>
                        <CardTitle className="text-xl">{topic.title}</CardTitle>
                        <CardDescription>{topic.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="mt-auto">
                        <Button
                            variant="secondary"
                            className="w-full gap-2 group-hover:bg-primary/10 group-hover:text-primary"
                        >
                            <Mic className="w-4 h-4" /> Start Recording
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};
