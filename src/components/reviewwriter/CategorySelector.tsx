import { ReviewCategory } from "@/types/reviewwriter";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Film, ShoppingBag, Utensils, Gamepad2, Star } from "lucide-react";

interface CategorySelectorProps {
    categories: ReviewCategory[];
    onSelect: (category: ReviewCategory) => void;
}

const iconMap: Record<string, any> = {
    BookOpen,
    Film,
    ShoppingBag,
    Utensils,
    Gamepad2
};

export const CategorySelector = ({ categories, onSelect }: CategorySelectorProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => {
                const IconComponent = iconMap[category.icon] || Star;
                return (
                    <Card
                        key={category.id}
                        className="cursor-pointer hover:border-primary transition-all hover:shadow-md group flex flex-col h-full"
                        onClick={() => onSelect(category)}
                    >
                        <CardHeader>
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 rounded-full bg-primary/10 text-primary">
                                    <IconComponent className="w-6 h-6" />
                                </div>
                            </div>
                            <CardTitle className="group-hover:text-primary transition-colors">{category.label}</CardTitle>
                            <CardDescription>{category.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="mt-auto">
                            <Button
                                className="w-full gap-2 group-hover:bg-primary/10 group-hover:text-primary"
                                variant="secondary"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onSelect(category);
                                }}
                            >
                                <IconComponent className="w-4 h-4" /> Start Reviewing
                            </Button>
                        </CardContent>
                    </Card>
                );
            })}
        </div>
    );
};
