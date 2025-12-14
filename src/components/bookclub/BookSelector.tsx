import { Book } from "@/types/bookclub";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen } from "lucide-react";

interface BookSelectorProps {
    books: Book[];
    onSelectBook: (book: Book) => void;
}

export const BookSelector = ({ books, onSelectBook }: BookSelectorProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {books.map((book) => (
                <Card
                    key={book.id}
                    className="cursor-pointer hover:border-primary transition-all hover:shadow-md group flex flex-col h-full"
                    onClick={() => onSelectBook(book)}
                >
                    <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-4xl">{book.coverEmoji}</span>
                            <Badge variant="secondary">{book.difficulty}</Badge>
                        </div>
                        <CardTitle className="group-hover:text-primary transition-colors text-xl">
                            {book.title}
                        </CardTitle>
                        <CardDescription>by {book.author}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col justify-between">
                        <div className="flex flex-wrap gap-2 mb-4">
                            {book.themes.map(theme => (
                                <Badge key={theme} variant="outline" className="text-xs">
                                    {theme}
                                </Badge>
                            ))}
                        </div>
                        <Button
                            className="w-full gap-2 group-hover:bg-primary/10 group-hover:text-primary"
                            variant="secondary"
                            onClick={(e) => {
                                e.stopPropagation();
                                onSelectBook(book);
                            }}
                        >
                            <BookOpen className="w-4 h-4" /> Start Reading
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};
