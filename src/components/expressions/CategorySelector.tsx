import { ExpressionCategory } from "@/types/expressions";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface CategorySelectorProps {
    categories: ExpressionCategory[];
    onSelect: (category: ExpressionCategory) => void;
}

export const CategorySelector = ({ categories, onSelect }: CategorySelectorProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category) => (
                <Card
                    key={category.id}
                    className="group relative overflow-hidden border-2 border-purple-500/10 hover:border-yellow-500/30 transition-all duration-500 cursor-pointer bg-card hover:shadow-2xl hover:shadow-yellow-500/10 rounded-[2rem]"
                    onClick={() => onSelect(category)}
                >
                    <CardContent className="p-8">
                        <div className="mb-6 relative">
                            <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-500 shadow-inner">
                                {category.icon}
                            </div>
                            <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-yellow-600 transition-colors">
                            {category.title}
                        </h3>

                        <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">
                            {category.description}
                        </p>

                        <div className="flex items-center text-[10px] font-bold uppercase tracking-widest text-yellow-600 opacity-60 group-hover:opacity-100 transition-opacity">
                            {category.expressions.length} Social Patterns • Start Mastery
                        </div>
                    </CardContent>

                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                </Card>
            ))}
        </div>
    );
};
