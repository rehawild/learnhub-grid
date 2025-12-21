import { DailyPhrase } from "@/types/dailyPhrase";
import { BookOpen, MapPin, Quote, Sparkles } from "lucide-react";

interface LinguisticCodexProps {
    phrase: DailyPhrase;
}

export const LinguisticCodex = ({ phrase }: LinguisticCodexProps) => {
    return (
        <div className="w-full max-w-2xl mx-auto space-y-8 animate-in zoom-in duration-700">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden group">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-lime-500/10 blur-[80px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-lime-500/10 blur-[80px] translate-y-1/2 -translate-x-1/2" />

                <div className="relative space-y-8">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="p-3 bg-lime-500/10 rounded-2xl">
                                <BookOpen className="w-6 h-6 text-lime-400" />
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">
                                Linguistic Transmutation Successful
                            </span>
                        </div>
                        <div className="px-4 py-1.5 bg-lime-500/10 rounded-full border border-lime-500/20 flex items-center gap-2">
                            <Sparkles className="w-3 h-3 text-lime-400" />
                            <span className="text-[10px] font-bold text-lime-400 uppercase tracking-widest">{phrase.category}</span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-6xl font-bold bg-gradient-to-r from-lime-300 to-lime-500 bg-clip-text text-transparent">
                            {phrase.phrase}
                        </h2>
                        <p className="text-2xl font-medium text-lime-100/80 italic leading-snug">
                            / {phrase.meaning} /
                        </p>
                    </div>

                    <div className="pt-8 border-t border-white/5 space-y-6">
                        <div className="space-y-3 px-6 py-5 bg-black/20 rounded-3xl border border-white/5">
                            <div className="flex items-center gap-2 text-lime-400/60">
                                <Quote className="w-4 h-4" />
                                <span className="text-[10px] font-bold uppercase tracking-widest">Natural Context</span>
                            </div>
                            <p className="text-xl font-medium text-foreground italic leading-relaxed">
                                "{phrase.example}"
                            </p>
                        </div>

                        {phrase.origin && (
                            <div className="flex gap-4 items-start px-6">
                                <div className="mt-1">
                                    <MapPin className="w-4 h-4 text-lime-600" />
                                </div>
                                <div className="space-y-1">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Etymological Origin</span>
                                    <p className="text-sm text-muted-foreground/80 leading-relaxed italic">
                                        {phrase.origin}
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
