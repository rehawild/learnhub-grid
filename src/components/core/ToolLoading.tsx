import { Loader2 } from "lucide-react";

export const ToolLoading = () => {
    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
            <div className="relative">
                {/* Outer Glow */}
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full animate-pulse" />

                {/* Central Spinner */}
                <div className="relative bg-card p-8 rounded-[2.5rem] border-2 border-primary/10 shadow-2xl flex flex-col items-center gap-6">
                    <div className="p-4 bg-primary/10 rounded-2xl animate-spin">
                        <Loader2 className="w-10 h-10 text-primary" />
                    </div>

                    <div className="space-y-2 text-center">
                        <h3 className="text-xl font-bold text-foreground">Summoning Tool...</h3>
                        <p className="text-sm text-muted-foreground animate-pulse">Linguistic elements are aligning</p>
                    </div>

                    {/* Skeleton Blocks */}
                    <div className="w-64 space-y-4 pt-4">
                        <div className="h-4 bg-muted animate-pulse rounded-full w-3/4 mx-auto" />
                        <div className="h-4 bg-muted animate-pulse rounded-full w-1/2 mx-auto" />
                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="h-12 bg-muted animate-pulse rounded-2xl" />
                            <div className="h-12 bg-muted animate-pulse rounded-2xl" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Subtle Footer */}
            <div className="mt-12 text-[10px] font-bold uppercase tracking-[0.4em] text-primary/30 animate-pulse">
                LearnHub Grid • v0.1.0
            </div>
        </div>
    );
};
