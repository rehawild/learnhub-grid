import { TedTalk } from "@/types/tedtalks";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

interface TalkLibraryProps {
    talks: TedTalk[];
    onSelect: (talk: TedTalk) => void;
}

export const TalkLibrary = ({ talks, onSelect }: TalkLibraryProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {talks.map((talk) => (
                <Card
                    key={talk.id}
                    className="cursor-pointer hover:border-primary transition-all hover:shadow-md group flex flex-col h-full overflow-hidden"
                    onClick={() => onSelect(talk)}
                >
                    <div className="relative aspect-video">
                        <img src={talk.thumbnail} alt={talk.title} className="object-cover w-full h-full" />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <Play className="w-12 h-12 text-white fill-white" />
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                            {talk.duration}
                        </div>
                    </div>
                    <CardHeader>
                        <CardTitle className="group-hover:text-primary transition-colors line-clamp-2 leading-tight">{talk.title}</CardTitle>
                        <CardDescription>{talk.speaker}</CardDescription>
                    </CardHeader>
                    <CardContent className="mt-auto">
                        <Button
                            className="w-full gap-2 group-hover:bg-primary/10 group-hover:text-primary"
                            variant="secondary"
                            onClick={(e) => {
                                e.stopPropagation();
                                onSelect(talk);
                            }}
                        >
                            Watch Talk
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};
