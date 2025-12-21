import { TriviaCategory } from "@/types/trivia";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface CategorySelectorProps {
    categories: TriviaCategory[];
    onSelect: (category: TriviaCategory) => void;
}

export const CategorySelector = ({ categories, onSelect }: CategorySelectorProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
            {categories.map((category) => (
                <Card
                    key={category.id}
                    className="cursor-pointer hover:border-primary transition-all hover:shadow-lg group flex flex-col items-center text-center py-6"
                    onClick={() => onSelect(category)}
                >
                    <div className="text-4xl mb-4 bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        {category.icon}
                    </div>
                    <CardHeader className="p-0 space-y-2">
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                            {category.name}
                        </CardTitle>
                        <CardDescription className="px-6">
                            {category.description}
                        </CardDescription>
                        <div className="text-xs text-muted-foreground font-medium pt-2">
                            {category.questions.length} Questions
                        </div>
                    </CardHeader>
                </Card>
            ))}
        </div>
    );
};
