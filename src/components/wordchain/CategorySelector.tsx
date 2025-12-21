import { WordChainCategory } from "@/types/wordchain";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CategorySelectorProps {
    categories: WordChainCategory[];
    onSelect: (category: WordChainCategory) => void;
}

export const CategorySelector = ({ categories, onSelect }: CategorySelectorProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
            {categories.map(cat => (
                <Card
                    key={cat.id}
                    className="cursor-pointer hover:border-primary transition-all hover:shadow-md group"
                    onClick={() => onSelect(cat)}
                >
                    <CardHeader>
                        <CardTitle className="group-hover:text-primary transition-colors flex items-center justify-between">
                            {cat.name}
                            {cat.id === 'general' && <Badge variant="secondary" className="text-xs">Sandbox</Badge>}
                        </CardTitle>
                        <CardDescription>{cat.description}</CardDescription>
                    </CardHeader>
                </Card>
            ))}
        </div>
    );
};
