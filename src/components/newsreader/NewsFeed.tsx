import { NewsArticle } from "@/types/newsreader";
import { Card, CardContent, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Tag } from "lucide-react";

interface NewsFeedProps {
    articles: NewsArticle[];
    onSelectArticle: (article: NewsArticle) => void;
}

export const NewsFeed = ({ articles, onSelectArticle }: NewsFeedProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
                <Card key={article.id} className="flex flex-col h-full hover:shadow-lg transition-shadow cursor-pointer hover:border-primary" onClick={() => onSelectArticle(article)}>
                    <CardContent className="pt-6 flex-1">
                        <div className="flex justify-between items-start mb-4">
                            <Badge variant="outline" className="flex gap-1 items-center">
                                <Tag className="w-3 h-3" /> {article.category}
                            </Badge>
                            <span className="text-4xl">{article.imageEmoji}</span>
                        </div>
                        <CardTitle className="text-xl mb-2 line-clamp-2 leading-tight">
                            {article.headline}
                        </CardTitle>
                        <div className="flex items-center text-xs text-muted-foreground mb-4 gap-2">
                            <span className="font-semibold text-primary">{article.source}</span>
                            <span>•</span>
                            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {article.date}</span>
                        </div>
                        <CardDescription className="line-clamp-3">
                            {article.summary}
                        </CardDescription>
                    </CardContent>
                    <CardFooter className="pt-0">
                        <Button variant="secondary" className="w-full" onClick={(e) => {
                            e.stopPropagation();
                            onSelectArticle(article);
                        }}>Read Full Story</Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
};
