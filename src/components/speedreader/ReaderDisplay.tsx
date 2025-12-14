import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";

interface ReaderDisplayProps {
    words: string[];
    currentIndex: number;
    chunkSize: number;
    isPlaying: boolean;
}

export const ReaderDisplay = ({ words, currentIndex, chunkSize, isPlaying }: ReaderDisplayProps) => {
    // Get the current chunk of words to display
    // E.g., if chunkSize is 1, just words[index]
    // if chunkSize is 2, words[index] + " " + words[index+1]

    const currentChunk = words.slice(currentIndex, currentIndex + chunkSize).join(" ");

    // Logic to highlight the "Optimal Recognition Point" (ORP) - usually slightly left of center
    // For simplicity, we'll just display the text centered for now. RSVP apps often red-highlight the middle letter.

    return (
        <Card className="h-64 flex items-center justify-center p-8 bg-card relative overflow-hidden">
            {isPlaying && (
                <div className="absolute top-2 right-4 flex space-x-1">
                    <span className="animate-pulse h-2 w-2 rounded-full bg-green-500"></span>
                </div>
            )}
            <div className="text-5xl md:text-6xl font-bold text-center leading-tight tracking-wide">
                {currentChunk || "Done"}
            </div>

            {/* Progress Bar Indicator */}
            <div className="absolute bottom-0 left-0 h-1 bg-muted w-full">
                <div
                    className="h-full bg-primary transition-all duration-300 ease-linear"
                    style={{ width: `${Math.min(100, (currentIndex / words.length) * 100)}%` }}
                />
            </div>
        </Card>
    );
};
