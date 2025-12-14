import { ReaderText } from "@/types/speedreader";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface TextSelectorProps {
    texts: ReaderText[];
    onSelectText: (text: ReaderText) => void;
}

export const TextSelector = ({ texts, onSelectText }: TextSelectorProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {texts.map((text) => (
                <Card key={text.id} className="cursor-pointer hover:border-primary transition-colors" onClick={() => onSelectText(text)}>
                    <CardHeader>
                        <div className="flex justify-between items-start">
                            <CardTitle className="text-xl">{text.title}</CardTitle>
                            <Badge variant={text.difficulty === "Easy" ? "secondary" : text.difficulty === "Medium" ? "default" : "destructive"}>
                                {text.difficulty}
                            </Badge>
                        </div>
                        <CardDescription>{text.category}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                            {text.content}
                        </p>
                        <Button onClick={(e) => {
                            e.stopPropagation();
                            onSelectText(text);
                        }} className="w-full">
                            Start Reading
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};
