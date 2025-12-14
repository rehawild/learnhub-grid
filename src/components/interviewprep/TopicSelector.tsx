import { InterviewTopic } from "@/types/interviewprep";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface TopicSelectorProps {
    topics: InterviewTopic[];
    onSelect: (topic: InterviewTopic) => void;
}

export const TopicSelector = ({ topics, onSelect }: TopicSelectorProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic) => (
                <Card
                    key={topic.id}
                    className="cursor-pointer hover:border-primary transition-all hover:shadow-md group flex flex-col h-full overflow-hidden"
                    onClick={() => onSelect(topic)}
                >
                    <div className="bg-primary/5 h-24 flex items-center justify-center text-5xl">
                        {topic.icon}
                    </div>
                    <CardHeader>
                        <CardTitle className="group-hover:text-primary transition-colors">{topic.title}</CardTitle>
                        <CardDescription>{topic.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="mt-auto">
                        <Button
                            className="w-full gap-2 group-hover:bg-primary/10 group-hover:text-primary"
                            variant="secondary"
                            onClick={(e) => {
                                e.stopPropagation();
                                onSelect(topic);
                            }}
                        >
                            Start Mock Interview <ArrowRight className="w-4 h-4" />
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};
