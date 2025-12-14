import { CompPassage } from "@/types/comprehension";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen } from "lucide-react";

interface PassageSelectorProps {
    passages: CompPassage[];
    onSelectPassage: (passage: CompPassage) => void;
}

export const PassageSelector = ({ passages, onSelectPassage }: PassageSelectorProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {passages.map((passage) => (
                <Card key={passage.id} className="cursor-pointer hover:border-primary transition-all hover:shadow-md group" onClick={() => onSelectPassage(passage)}>
                    <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                            <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
                                {passage.topic}
                            </Badge>
                            <span className="text-xs font-semibold text-muted-foreground">{passage.difficulty}</span>
                        </div>
                        <CardTitle className="group-hover:text-primary transition-colors">{passage.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                            {passage.content[0]}
                        </p>
                        <Button variant="secondary" className="w-full gap-2 group-hover:bg-primary/10 group-hover:text-primary" onClick={(e) => {
                            e.stopPropagation();
                            onSelectPassage(passage);
                        }}>
                            <BookOpen className="w-4 h-4" /> Start Reading
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};
