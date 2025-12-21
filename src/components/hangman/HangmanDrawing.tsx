import { cn } from "@/lib/utils";

interface HangmanDrawingProps {
    mistakes: number;
}

export const HangmanDrawing = ({ mistakes }: HangmanDrawingProps) => {
    // Gallows parts
    const BASE = (
        <div className="h-[10px] w-[250px] bg-foreground absolute bottom-0 left-0" key="base" />
    );
    const POLE = (
        <div className="h-[250px] w-[10px] bg-foreground absolute bottom-0 left-[120px]" key="pole" />
    );
    const BEAM = (
        <div className="h-[10px] w-[150px] bg-foreground absolute top-0 left-[120px]" key="beam" />
    );
    const ROPE = (
        <div className="h-[50px] w-[10px] bg-foreground absolute top-0 right-0" key="rope" />
    );

    // Body parts
    const HEAD = (
        <div className="w-[50px] h-[50px] rounded-full border-[10px] border-foreground absolute top-[50px] -right-[20px]" key="head" />
    );
    const BODY = (
        <div className="w-[10px] h-[100px] bg-foreground absolute top-[100px] right-0" key="body" />
    );
    const RIGHT_ARM = (
        <div className="w-[100px] h-[10px] bg-foreground absolute top-[150px] -right-[100px] rotate-[-30deg] origin-bottom-left" key="r-arm" />
    );
    const LEFT_ARM = (
        <div className="w-[100px] h-[10px] bg-foreground absolute top-[150px] right-[10px] rotate-[30deg] origin-bottom-right" key="l-arm" />
    );
    const RIGHT_LEG = (
        <div className="w-[100px] h-[10px] bg-foreground absolute top-[190px] -right-[90px] rotate-[60deg] origin-bottom-left" key="r-leg" />
    );
    const LEFT_LEG = (
        <div className="w-[100px] h-[10px] bg-foreground absolute top-[190px] right-0 rotate-[-60deg] origin-bottom-right" key="l-leg" />
    );

    const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

    return (
        <div className="relative h-[260px] w-[300px] mx-auto scale-75 sm:scale-100">
            {/* Structural always visible? Or build them too? Classic: structure exists. */}
            {BASE}
            {POLE}
            {BEAM}
            {ROPE}
            {/* Render mistakes */}
            {BODY_PARTS.slice(0, mistakes)}
        </div>
    );
};
