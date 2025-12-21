import { cn } from "@/lib/utils";

interface AthanorProps {
    mode: 'discovery' | 'composition' | 'unlocked';
    isCorrect: boolean | null;
    children?: React.ReactNode;
}

export const Athanor = ({ mode, isCorrect, children }: AthanorProps) => {
    return (
        <div className="relative w-full max-w-lg mx-auto aspect-square flex items-center justify-center">
            {/* The Outer Glass Vessel */}
            <div className={cn(
                "absolute inset-0 rounded-[3rem] border-2 transition-all duration-1000 overflow-hidden shadow-2xl backdrop-blur-sm",
                mode === 'discovery' && "border-lime-500/20 bg-lime-500/5",
                mode === 'composition' && "border-lime-500/40 bg-lime-500/10",
                mode === 'unlocked' && "border-lime-400 bg-lime-500/20 scale-105 shadow-lime-500/30",
                isCorrect === false && "border-red-500/40 bg-red-500/10 animate-shake"
            )}>
                {/* Glowing Liquid Effect */}
                <div className={cn(
                    "absolute bottom-0 left-0 w-full transition-all duration-1000 ease-in-out",
                    mode === 'discovery' ? "h-1/3 bg-lime-500/20 blur-3xl opacity-40" :
                        mode === 'composition' ? "h-1/2 bg-lime-400/30 blur-2xl opacity-60" :
                            "h-full bg-lime-300/40 blur-xl opacity-80"
                )} />

                {/* Bubbles / Shards container */}
                <div className="relative z-10 w-full h-full p-8 flex flex-col items-center justify-center text-center">
                    {children}
                </div>

                {/* Glass Glare */}
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-white/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl pointer-events-none" />
            </div>

            {/* Pedestal Shadow */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-48 h-8 bg-black/40 blur-2xl rounded-full" />
        </div>
    );
};
