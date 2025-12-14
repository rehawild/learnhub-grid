import { ReadingPassage } from "@/types/ieltsreading";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ReadingPassageDisplayProps {
    passage: ReadingPassage;
}

export const ReadingPassageDisplay = ({ passage }: ReadingPassageDisplayProps) => {
    return (
        <div className="h-full bg-card rounded-lg border shadow-sm flex flex-col">
            <div className="p-4 border-b bg-muted/40">
                <h2 className="text-xl font-bold text-card-foreground">{passage.title}</h2>
            </div>
            <ScrollArea className="flex-1 p-6">
                <div className="max-w-prose mx-auto space-y-4 text-lg leading-relaxed text-card-foreground/90 font-serif">
                    {passage.content.map((paragraph, idx) => (
                        <p key={idx} className="indent-6 text-justify">
                            {paragraph}
                        </p>
                    ))}
                </div>
            </ScrollArea>
        </div>
    );
};
