import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

interface ChainInputProps {
    requiredLetter: string;
    disabled: boolean;
    onSubmit: (word: string) => void;
}

export const ChainInput = ({ requiredLetter, disabled, onSubmit }: ChainInputProps) => {
    const [value, setValue] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    // Auto-focus on turn start
    useEffect(() => {
        if (!disabled && inputRef.current) {
            inputRef.current.focus();
        }
    }, [disabled]);

    const handleSubmit = (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!value || disabled) return;

        onSubmit(value);
        setValue("");
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 w-full max-w-xl">
            <div className="relative flex-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground font-bold px-1.5 py-0.5 rounded bg-muted">
                    {requiredLetter}
                </span>
                <Input
                    ref={inputRef}
                    value={value}
                    onChange={(e) => {
                        const val = e.target.value.toUpperCase();
                        // Enforce start letter visually if we wanted, but let user type freely for now
                        setValue(val);
                    }}
                    disabled={disabled}
                    className="pl-12 font-mono uppercase tracking-wider text-lg"
                    placeholder="..."
                />
            </div>
            <Button type="submit" disabled={disabled || !value}>
                <Send className="w-4 h-4" />
            </Button>
        </form>
    );
};
