import { IELTSTest } from "@/types/ieltsprep";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

interface TestSelectorProps {
    tests: IELTSTest[];
    onSelect: (test: IELTSTest) => void;
}

export const TestSelector = ({ tests, onSelect }: TestSelectorProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tests.map((test) => (
                <Card key={test.id} className="cursor-pointer hover:border-primary transition-all hover:shadow-md">
                    <CardHeader>
                        <CardTitle className="text-xl flex items-center gap-2">
                            <BookOpen className="w-5 h-5 text-primary" />
                            {test.title}
                        </CardTitle>
                        <CardDescription>Full mock test covering Part 1, 2, and 3.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="text-sm text-muted-foreground space-y-1 mb-4">
                            <p>• Part 1: {test.parts.part1.topic}</p>
                            <p>• Part 2: Cue Card</p>
                            <p>• Part 3: {test.parts.part3.topic}</p>
                        </div>
                        <Button className="w-full" onClick={() => onSelect(test)}>
                            Start Mock Test
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};
