import { QuoteCategory } from "@/types/quotequiz";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface CategorySelectorProps {
    categories: QuoteCategory[];
    onSelect: (category: QuoteCategory) => void;
}

export const CategorySelector = ({ categories, onSelect }: CategorySelectorProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((category) => (
                <Card
                    key={category.id}
                    className="cursor-pointer hover:border-primary transition-all hover:shadow-md group flex flex-col h-full"
                    onClick={() => onSelect(category)}
                >
                    <CardHeader>
                        <div className="text-4xl mb-4">{category.icon}</div>
                        <CardTitle className="group-hover:text-primary transition-colors">{category.title}</CardTitle>
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
                            <MessageCircle className="w-4 h-4" /> Start Quiz
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};
