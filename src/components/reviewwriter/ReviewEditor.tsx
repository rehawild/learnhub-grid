import { ReviewCategory } from "@/types/reviewwriter";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Star, Plus, X, Eye } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface ReviewEditorProps {
    category: ReviewCategory;
    title: string;
    rating: number; // 1-5
    pros: string[];
    cons: string[];
    body: string;
    onUpdateTitle: (val: string) => void;
    onUpdateRating: (val: number) => void;
    onAddPro: (val: string) => void;
    onRemovePro: (idx: number) => void;
    onAddCon: (val: string) => void;
    onRemoveCon: (idx: number) => void;
    onUpdateBody: (val: string) => void;
    onPreview: () => void;
}

export const ReviewEditor = ({
    category,
    title,
    rating,
    pros,
    cons,
    body,
    onUpdateTitle,
    onUpdateRating,
    onAddPro,
    onRemovePro,
    onAddCon,
    onRemoveCon,
    onUpdateBody,
    onPreview
}: ReviewEditorProps) => {
    const [proInput, setProInput] = useState("");
    const [conInput, setConInput] = useState("");

    const handleAddPro = () => {
        if (proInput.trim()) {
            onAddPro(proInput);
            setProInput("");
        }
    };
    const handleAddCon = () => {
        if (conInput.trim()) {
            onAddCon(conInput);
            setConInput("");
        }
    };

    return (
        <div className="space-y-6 animate-in fade-in zoom-in-95 duration-300">
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl flex items-center gap-2">
                        Drafting: <span className="text-primary">{category.label} Review</span>
                    </CardTitle>
                    <CardDescription>
                        Share your honest opinion.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">

                    {/* Title & Rating */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="title">Title of {category.label}</Label>
                            <Input
                                id="title"
                                placeholder={category.placeholderTitle}
                                value={title}
                                onChange={(e) => onUpdateTitle(e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Rating</Label>
                            <div className="flex gap-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        key={star}
                                        onClick={() => onUpdateRating(star)}
                                        className={cn(
                                            "p-1 transition-all hover:scale-110 focus:outline-none",
                                            rating >= star ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                                        )}
                                    >
                                        <Star className={cn("w-8 h-8", rating >= star && "fill-current")} />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Pros & Cons */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label className="text-green-600 font-bold">Pros (Examples of what you liked)</Label>
                            <div className="flex gap-2">
                                <Input
                                    placeholder="e.g. Great visuals"
                                    value={proInput}
                                    onChange={(e) => setProInput(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleAddPro()}
                                />
                                <Button size="icon" onClick={handleAddPro} variant="outline" className="shrink-0">
                                    <Plus className="w-4 h-4" />
                                </Button>
                            </div>
                            <ul className="space-y-1 mt-2">
                                {pros.map((pro, i) => (
                                    <li key={i} className="flex justify-between items-center text-sm bg-green-50 text-green-700 px-3 py-1 rounded-md border border-green-100">
                                        <span>+ {pro}</span>
                                        <button onClick={() => onRemovePro(i)} className="text-green-900/50 hover:text-green-900">
                                            <X className="w-3 h-3" />
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="space-y-2">
                            <Label className="text-red-600 font-bold">Cons (Examples of what you didn't like)</Label>
                            <div className="flex gap-2">
                                <Input
                                    placeholder="e.g. Short story"
                                    value={conInput}
                                    onChange={(e) => setConInput(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleAddCon()}
                                />
                                <Button size="icon" onClick={handleAddCon} variant="outline" className="shrink-0">
                                    <Plus className="w-4 h-4" />
                                </Button>
                            </div>
                            <ul className="space-y-1 mt-2">
                                {cons.map((con, i) => (
                                    <li key={i} className="flex justify-between items-center text-sm bg-red-50 text-red-700 px-3 py-1 rounded-md border border-red-100">
                                        <span>- {con}</span>
                                        <button onClick={() => onRemoveCon(i)} className="text-red-900/50 hover:text-red-900">
                                            <X className="w-3 h-3" />
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Body */}
                    <div className="space-y-2">
                        <Label htmlFor="body">Full Review</Label>
                        <Textarea
                            id="body"
                            placeholder="Write your detailed review here..."
                            className="min-h-[150px]"
                            value={body}
                            onChange={(e) => onUpdateBody(e.target.value)}
                        />
                        <div className="flex gap-2 flex-wrap text-xs text-muted-foreground">
                            <span className="font-semibold">Tips:</span>
                            {category.tips.map((tip, i) => (
                                <span key={i} className="bg-muted px-2 py-0.5 rounded-full">{tip}</span>
                            ))}
                        </div>
                    </div>

                </CardContent>
            </Card>

            <div className="flex justify-end pt-2">
                <Button size="lg" onClick={onPreview} className="gap-2">
                    <Eye className="w-4 h-4" /> Preview Review
                </Button>
            </div>
        </div>
    );
};
