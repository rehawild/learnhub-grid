import { AccentRegion } from "@/types/accenttrainer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, ArrowRight } from "lucide-react";

interface AccentSelectorProps {
    regions: AccentRegion[];
    onSelect: (region: AccentRegion) => void;
}

export const AccentSelector = ({ regions, onSelect }: AccentSelectorProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {regions.map((region) => (
                <Card
                    key={region.id}
                    className="cursor-pointer hover:border-primary transition-all hover:shadow-md group flex flex-col h-full overflow-hidden"
                    onClick={() => onSelect(region)}
                >
                    <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                            <div className="text-4xl">{region.flag}</div>
                        </div>
                        <CardTitle className="text-2xl group-hover:text-primary transition-colors">{region.name}</CardTitle>
                        <CardDescription className="line-clamp-2">{region.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="mt-auto">
                        <ul className="list-disc list-inside text-sm text-muted-foreground mb-4">
                            {region.characteristics.slice(0, 2).map((char, i) => (
                                <li key={i}>{char}</li>
                            ))}
                        </ul>
                        <Button
                            className="w-full gap-2 group-hover:bg-primary/10 group-hover:text-primary"
                            variant="secondary"
                            onClick={(e) => {
                                e.stopPropagation();
                                onSelect(region);
                            }}
                        >
                            Start Training <ArrowRight className="w-4 h-4" />
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};
