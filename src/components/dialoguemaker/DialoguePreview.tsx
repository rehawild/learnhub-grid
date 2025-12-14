import { useEffect, useRef } from "react";
import { DialogueScenario, DialogueLine } from "@/types/dialoguemaker";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface DialoguePreviewProps {
    scenario: DialogueScenario;
    lines: DialogueLine[];
    onDeleteLine: (id: string) => void;
}

export const DialoguePreview = ({ scenario, lines, onDeleteLine }: DialoguePreviewProps) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [lines]);

    const getCharacter = (id: string) => scenario.characters.find(c => c.id === id);

    return (
        <Card className="flex-1 overflow-hidden flex flex-col min-h-[400px] border-b-0 rounded-b-none bg-muted/20">
            <CardContent
                ref={scrollRef}
                className="flex-1 overflow-y-auto p-4 space-y-4"
            >
                {lines.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-muted-foreground opacity-50 space-y-2">
                        <span className="text-4xl">💭</span>
                        <p>Start the conversation below...</p>
                    </div>
                ) : (
                    lines.map((line) => {
                        const char = getCharacter(line.characterId);
                        const isMain = line.characterId === scenario.characters[0].id; // "You" is usually first

                        return (
                            <div
                                key={line.id}
                                className={cn(
                                    "flex items-end gap-2 group",
                                    isMain ? "flex-row-reverse" : "flex-row"
                                )}
                            >
                                {/* Avatar */}
                                <div className="text-2xl select-none" title={char?.name}>
                                    {char?.avatar}
                                </div>

                                {/* Bubble */}
                                <div className="relative max-w-[80%]">
                                    <div className="text-xs mb-1 opacity-70 px-1 font-medium select-none" style={{ textAlign: isMain ? 'right' : 'left' }}>
                                        {char?.name}
                                    </div>
                                    <div
                                        className={cn(
                                            "p-3 rounded-2xl shadow-sm text-base relative",
                                            isMain
                                                ? "bg-primary text-primary-foreground rounded-br-none"
                                                : "bg-background border rounded-bl-none"
                                        )}
                                    >
                                        {line.text}
                                    </div>
                                    {/* Delete Button (visible on hover) */}
                                    <Button
                                        size="icon"
                                        variant="ghost"
                                        className="h-6 w-6 absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-destructive text-destructive-foreground rounded-full hover:bg-destructive/90"
                                        onClick={() => onDeleteLine(line.id)}
                                    >
                                        <Trash2 className="w-3 h-3" />
                                    </Button>
                                </div>
                            </div>
                        );
                    })
                )}
            </CardContent>
        </Card>
    );
};
