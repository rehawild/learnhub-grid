import { TongueTwister } from "@/types/tonguetwisters";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

interface TwisterListProps {
    twisters: TongueTwister[];
    selectedDifficulty: string;
    onSelectDifficulty: (difficulty: string) => void;
    onSelectTwister: (twister: TongueTwister) => void;
}

const DIFFICULTIES = ["All", "Easy", "Medium", "Hard", "Expert"];

export const TwisterList = ({ twisters, selectedDifficulty, onSelectDifficulty, onSelectTwister }: TwisterListProps) => {
    const filteredTwisters = selectedDifficulty === "All"
        ? twisters
        : twisters.filter(t => t.difficulty === selectedDifficulty);

    return (
        <div className="space-y-6">
            {/* Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
                {DIFFICULTIES.map(diff => (
                    <Button
                        key={diff}
                        variant={selectedDifficulty === diff ? "default" : "outline"}
                        onClick={() => onSelectDifficulty(diff)}
                        className="rounded-full"
                    >
                        {diff}
                    </Button>
                ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTwisters.map((twister) => (
                    <Card
                        key={twister.id}
                        className="cursor-pointer hover:border-primary transition-all hover:shadow-md group flex flex-col h-full"
                        onClick={() => onSelectTwister(twister)}
                    >
                        <CardHeader>
                            <div className="flex justify-between items-start mb-2">
                                <Badge variant="outline" className="font-mono">{twister.focusSound}</Badge>
                                <Badge className={
                                    twister.difficulty === 'Expert' ? 'bg-purple-600' :
                                        twister.difficulty === 'Hard' ? 'bg-destructive' :
                                            twister.difficulty === 'Medium' ? 'bg-yellow-500' : 'bg-green-500'
                                }>
                                    {twister.difficulty}
                                </Badge>
                            </div>
                            <CardTitle className="leading-snug group-hover:text-primary transition-colors text-lg">
                                "{twister.text}"
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="mt-auto pt-0">
                            <div className="flex items-center text-sm text-muted-foreground">
                                <Zap className="w-4 h-4 mr-1 text-yellow-500" /> Target: {twister.targetSpeed}s
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};
