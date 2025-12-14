import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, RotateCcw, Pencil, Star, ThumbsUp, ThumbsDown } from "lucide-react";
import { toast } from "sonner";
import { ReviewCategory } from "@/types/reviewwriter";
import { cn } from "@/lib/utils";

interface ReviewPreviewProps {
    category: ReviewCategory;
    title: string;
    rating: number;
    pros: string[];
    cons: string[];
    body: string;
    onBackToEdit: () => void;
    onReset: () => void;
}

export const ReviewPreview = ({
    category, title, rating, pros, cons, body,
    onBackToEdit, onReset
}: ReviewPreviewProps) => {

    const copyToClipboard = () => {
        const text = `Review: ${title}\nRating: ${rating}/5 stars\n\n${body}\n\nPros: ${pros.join(', ')}\nCons: ${cons.join(', ')}`;
        navigator.clipboard.writeText(text);
        toast.success("Review copied to clipboard!");
    };

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8">
            <Card className="border-2 border-primary/10 overflow-hidden">
                <div className="bg-primary/5 p-6 border-b border-primary/10">
                    <div className="flex justify-between items-start mb-2">
                        <div>
                            <div className="text-sm font-medium text-primary uppercase tracking-wider mb-1">
                                {category.label} Review
                            </div>
                            <h2 className="text-3xl font-bold text-foreground">
                                {title || "Untitled Review"}
                            </h2>
                        </div>
                        <div className="flex gap-1" title={`${rating} out of 5 stars`}>
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                    key={star}
                                    className={cn(
                                        "w-6 h-6",
                                        rating >= star ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                                    )}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <CardContent className="p-6 space-y-6">
                    {(pros.length > 0 || cons.length > 0) && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {pros.length > 0 && (
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 font-bold text-green-700">
                                        <ThumbsUp className="w-4 h-4" /> Pros
                                    </div>
                                    <ul className="text-sm space-y-1">
                                        {pros.map((p, i) => (
                                            <li key={i} className="text-foreground/80">• {p}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            {cons.length > 0 && (
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 font-bold text-red-700">
                                        <ThumbsDown className="w-4 h-4" /> Cons
                                    </div>
                                    <ul className="text-sm space-y-1">
                                        {cons.map((c, i) => (
                                            <li key={i} className="text-foreground/80">• {c}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    )}

                    <div className="prose prose-slate max-w-none">
                        <p className="whitespace-pre-wrap leading-relaxed text-lg text-foreground/90">
                            {body || <span className="italic text-muted-foreground">No review text written...</span>}
                        </p>
                    </div>

                </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 justify-between">
                <Button variant="outline" onClick={onBackToEdit} className="gap-2">
                    <Pencil className="w-4 h-4" /> Edit Review
                </Button>

                <div className="flex gap-2">
                    <Button variant="secondary" onClick={copyToClipboard} className="gap-2">
                        <Copy className="w-4 h-4" /> Copy Text
                    </Button>
                    <Button onClick={onReset} className="gap-2">
                        <RotateCcw className="w-4 h-4" /> New Review
                    </Button>
                </div>
            </div>
        </div>
    );
};
