import { SmallTalkTopic } from "@/types/smalltalk";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

interface TopicSelectorProps {
    topics: SmallTalkTopic[];
    onSelect: (topic: SmallTalkTopic) => void;
}

export const TopicSelector = ({ topics, onSelect }: TopicSelectorProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-500">
            {topics.map((topic) => (
                <Card
                    key={topic.id}
                    className="cursor-pointer hover:border-primary/50 hover:shadow-xl transition-all duration-300 group border-2"
                    onClick={() => onSelect(topic)}
                >
                    <CardHeader className="space-y-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                            {topic.icon}
                        </div>
                        <div>
                            <CardTitle className="text-xl group-hover:text-primary transition-colors">
                                {topic.title}
                            </CardTitle>
                            <CardDescription className="mt-2 text-sm leading-relaxed">
                                {topic.description}
                            </CardDescription>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                            <span className="w-2 h-2 rounded-full bg-primary" />
                            Interactive Dialogue
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};
