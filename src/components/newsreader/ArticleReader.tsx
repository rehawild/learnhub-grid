import { NewsArticle } from "@/types/newsreader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Book } from "lucide-react";

interface ArticleReaderProps {
    article: NewsArticle;
    onFinished: () => void;
}

export const ArticleReader = ({ article, onFinished }: ArticleReaderProps) => {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Card>
                <CardContent className="pt-8 pb-8 space-y-6">
                    <div className="space-y-2 text-center border-b pb-6">
                        <Badge variant="outline" className="mb-2">{article.category}</Badge>
                        <h1 className="text-2xl md:text-3xl font-bold text-foreground">{article.headline}</h1>
                        <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                            <span className="font-medium text-foreground">{article.source}</span>
                            <span>{article.date}</span>
                        </div>
                    </div>

                    <div className="prose prose-stone dark:prose-invert max-w-none">
                        {article.content.map((paragraph, index) => (
                            <p key={index} className="leading-relaxed text-foreground/90">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="pt-6">
                    <div className="flex items-center gap-2 mb-4 text-primary font-semibold">
                        <Book className="w-5 h-5" />
                        <h3>Key Vocabulary</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {article.vocabulary.map((vocab, index) => (
                            <div key={index} className="text-sm p-3 bg-muted/50 rounded-lg">
                                <p className="font-bold text-foreground mb-1">{vocab.word}</p>
                                <p className="text-muted-foreground leading-snug">{vocab.definition}</p>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            <div className="flex justify-center pt-4">
                <Button size="lg" onClick={onFinished} className="gap-2 w-full sm:w-auto">
                    Test Comprehension <ArrowRight className="w-4 h-4" />
                </Button>
            </div>
        </div>
    );
};
