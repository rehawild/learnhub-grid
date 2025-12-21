import { JargonCategory } from "@/types/jargonbuster";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

interface CategorySelectorProps {
    categories: JargonCategory[];
    onSelect: (category: JargonCategory) => void;
}

export const CategorySelector = ({ categories, onSelect }: CategorySelectorProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl mx-auto">
            {categories.map((category) => (
                <Card
                    key={category.id}
                    className="cursor-pointer hover:border-primary/50 hover:shadow-xl transition-all duration-300 group border-2"
                    onClick={() => onSelect(category)}
                >
                    <CardHeader className="space-y-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                            {category.icon}
                        </div>
                        <div>
                            <CardTitle className="text-xl group-hover:text-primary transition-colors">
                                {category.title}
                            </CardTitle>
                            <CardDescription className="mt-2 line-clamp-2">
                                {category.description}
                            </CardDescription>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                            <span className="w-2 h-2 rounded-full bg-primary" />
                            {category.terms.length} Terms to Decode
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};
