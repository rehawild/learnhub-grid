import { Poem } from "@/types/poetry";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Feather } from "lucide-react";

interface PoetryLibraryProps {
    poems: Poem[];
    onSelectPoem: (poem: Poem) => void;
}

export const PoetryLibrary = ({ poems, onSelectPoem }: PoetryLibraryProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {poems.map((poem) => (
                <Card key={poem.id} className="cursor-pointer hover:border-primary transition-all hover:shadow-md hover:-translate-y-1 group" onClick={() => onSelectPoem(poem)}>
                    <CardHeader>
                        <div className="flex flex-wrap gap-2 mb-2">
                            {poem.tags.map(tag => (
                                <Badge key={tag} variant="secondary" className="bg-secondary text-secondary-foreground border-transparent">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                        <CardTitle className="font-serif italic text-2xl group-hover:text-primary transition-colors">
                            "{poem.title}"
                        </CardTitle>
                        <CardDescription className="text-base">by {poem.author}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground italic mb-6 border-l-2 pl-4 border-primary/20">
                            "{poem.lines[0]}..."
                        </p>
                        <Button variant="outline" className="w-full gap-2 group-hover:bg-primary/5 group-hover:text-primary group-hover:border-primary/20" onClick={(e) => {
                            e.stopPropagation();
                            onSelectPoem(poem);
                        }}>
                            <Feather className="w-4 h-4" /> Read Poem
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};
