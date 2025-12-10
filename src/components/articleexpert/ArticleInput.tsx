import { ArticleSentence } from "@/types/articleexpert";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ArticleInputProps {
  sentence: ArticleSentence;
  selectedArticle: string;
  isCorrect: boolean | null;
  showExplanation: boolean;
  onSelectArticle: (article: string) => void;
  onCheck: () => void;
  onNext: () => void;
}

const articleOptions = ["a", "an", "the", "no article"];

export const ArticleInput = ({
  sentence,
  selectedArticle,
  isCorrect,
  showExplanation,
  onSelectArticle,
  onCheck,
  onNext,
}: ArticleInputProps) => {
  const displaySentence = sentence.sentence.replace("___", selectedArticle ? `[${selectedArticle}]` : "___");

  return (
    <div className="space-y-6">
      <Card className="bg-card border-border">
        <CardContent className="pt-6">
          <p className="text-xl text-center font-medium text-foreground">
            {displaySentence}
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 gap-3">
        {articleOptions.map((article) => (
          <Button
            key={article}
            variant={selectedArticle === article ? "default" : "outline"}
            className={cn(
              "h-12 text-lg capitalize",
              showExplanation && article === sentence.correctArticle && "bg-green-500 hover:bg-green-600 text-white",
              showExplanation && selectedArticle === article && article !== sentence.correctArticle && "bg-red-500 hover:bg-red-600 text-white"
            )}
            onClick={() => !showExplanation && onSelectArticle(article)}
            disabled={showExplanation}
          >
            {article === "no article" ? "Ø (no article)" : article}
          </Button>
        ))}
      </div>

      {showExplanation && (
        <Card className={cn(
          "border-2",
          isCorrect ? "border-green-500 bg-green-500/10" : "border-red-500 bg-red-500/10"
        )}>
          <CardContent className="pt-4">
            <p className={cn(
              "font-semibold mb-2",
              isCorrect ? "text-green-600" : "text-red-600"
            )}>
              {isCorrect ? "Correct!" : "Incorrect"}
            </p>
            <p className="text-muted-foreground">{sentence.explanation}</p>
          </CardContent>
        </Card>
      )}

      <div className="flex gap-3">
        {!showExplanation ? (
          <Button
            className="flex-1"
            onClick={onCheck}
            disabled={!selectedArticle}
          >
            Check Answer
          </Button>
        ) : (
          <Button
            className="flex-1"
            onClick={onNext}
          >
            Next Sentence
          </Button>
        )}
      </div>
    </div>
  );
};
