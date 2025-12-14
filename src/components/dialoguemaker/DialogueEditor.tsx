import { useState } from "react";
import { DialogueScenario, DialogueCharacter } from "@/types/dialoguemaker";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

interface DialogueEditorProps {
    scenario: DialogueScenario;
    onAddLine: (characterId: string, text: string) => void;
}

export const DialogueEditor = ({ scenario, onAddLine }: DialogueEditorProps) => {
    const [currentCharacterId, setCurrentCharacterId] = useState<string>(scenario.characters[0].id);
    const [text, setText] = useState("");

    const handleSend = () => {
        if (!text.trim()) return;
        onAddLine(currentCharacterId, text);
        setText("");

        // Auto-switch character for convenience
        const currentIndex = scenario.characters.findIndex(c => c.id === currentCharacterId);
        const nextIndex = (currentIndex + 1) % scenario.characters.length;
        setCurrentCharacterId(scenario.characters[nextIndex].id);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const currentCharacter = scenario.characters.find(c => c.id === currentCharacterId);

    return (
        <Card className="border-t-0 rounded-t-none shadow-none border-x-0 border-b-0 bg-background">
            <CardContent className="p-4 space-y-4">

                {/* Character Toggles */}
                <div className="flex justify-center gap-4">
                    {scenario.characters.map((char) => (
                        <button
                            key={char.id}
                            onClick={() => setCurrentCharacterId(char.id)}
                            className={cn(
                                "flex flex-col items-center gap-1 p-2 rounded-lg transition-all border-2",
                                currentCharacterId === char.id
                                    ? "border-primary bg-primary/5 scale-105"
                                    : "border-transparent hover:bg-muted opacity-60 hover:opacity-100"
                            )}
                        >
                            <span className="text-3xl">{char.avatar}</span>
                            <span className="text-xs font-bold">{char.name}</span>
                        </button>
                    ))}
                </div>

                {/* Input Area */}
                <div className="flex gap-2 items-center">
                    <Input
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder={`What does ${currentCharacter?.name} say?`}
                        className="flex-1 text-lg h-12"
                        autoFocus
                    />
                    <Button onClick={handleSend} size="icon" className="h-12 w-12 rounded-full shadow-md transition-transform hover:scale-105 active:scale-95">
                        <Send className="w-5 h-5" />
                    </Button>
                </div>

                {/* Conversation Starters */}
                <div className="flex flex-wrap gap-2 justify-center">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mr-2">
                        <Lightbulb className="w-3 h-3" />
                        <span>Ideas:</span>
                    </div>
                    {scenario.starters.map((starter, i) => (
                        <button
                            key={i}
                            onClick={() => setText(starter)}
                            className="text-xs border rounded-full px-3 py-1 hover:bg-primary/10 hover:text-primary transition-colors text-muted-foreground"
                        >
                            "{starter}"
                        </button>
                    ))}
                </div>

            </CardContent>
        </Card>
    );
};
