import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const KEYS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

interface KeyboardProps {
    activeLetters: string[];
    inactiveLetters: string[]; // Wrong guesses? Or just "used"?
    disabled?: boolean;
    onGuess: (letter: string) => void;
}

export const Keyboard = ({ activeLetters, inactiveLetters, disabled = false, onGuess }: KeyboardProps) => {
    return (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(40px,1fr))] gap-2 w-full max-w-2xl mx-auto">
            {KEYS.map((key) => {
                const isActive = activeLetters.includes(key);
                const isInactive = inactiveLetters.includes(key); // Already used
                // Actually simpler: if it's in "guessedLetters", it's disabled.
                // We can visualy distinguish correct (active?) vs incorrect (inactive?) if we pass that info.
                // Let's passed "guessedLetters" and maybe "correctLetters" separately if we want green/red.
                // But the prompt above implies "activeLetters" might mean correct ones? 
                // Let's assume parent passes `guessedLetters` as `inactiveLetters` (disabled),
                // and maybe `activeLetters` (correct ones) for green styling.

                return (
                    <Button
                        key={key}
                        onClick={() => onGuess(key)}
                        disabled={isInactive || isActive || disabled}
                        variant="outline"
                        className={cn(
                            "h-12 text-lg font-bold transition-all",
                            isActive && "bg-primary text-primary-foreground border-primary", // Correct guess
                            isInactive && "opacity-50", // Just used (could be wrong)
                        )}
                    >
                        {key}
                    </Button>
                );
            })}
        </div>
    );
};
