import { ClueLevel } from "@/types/contextclues";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface LevelSelectorProps {
    levels: ClueLevel[];
    onSelect: (level: ClueLevel) => void;
}

export const LevelSelector = ({ levels, onSelect }: LevelSelectorProps) => {
    return (
        <div className="grid grid-cols-1 gap-6">
            {levels.map((level) => (
                <Card
                    key={level.id}
                    className="cursor-pointer hover:border-primary transition-all hover:shadow-md group flex flex-col md:flex-row items-center"
                    onClick={() => onSelect(level)}
                >
                    <div className="flex-1 p-6">
                        <CardHeader className="p-0 mb-2">
                            <div className="flex justify-between items-center mb-2">
                                <CardTitle className="group-hover:text-primary transition-colors text-xl">
                                    {level.name}
                                </CardTitle>
                                <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                                    {level.difficulty}
                                </span>
                            </div>
                            <CardDescription className="text-base">{level.description}</CardDescription>
                        </CardHeader>
                    </div>
                    <div className="p-6 pt-0 md:pt-6 md:pl-0">
                        <Button
                            className="w-full md:w-auto gap-2 group-hover:bg-primary/10 group-hover:text-primary"
                            variant="secondary"
                            onClick={(e) => {
                                e.stopPropagation();
                                onSelect(level);
                            }}
                        >
                            <Search className="w-4 h-4" /> Start Challenge
                        </Button>
                    </div>
                </Card>
            ))}
        </div>
    );
};
