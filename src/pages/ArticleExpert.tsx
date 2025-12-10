import { useArticleExpert } from "@/hooks/useArticleExpert";
import { articleDecks } from "@/data/articleexpert/sample-decks";
import { DeckSelector } from "@/components/articleexpert/DeckSelector";
import { ArticleInput } from "@/components/articleexpert/ArticleInput";
import { ArticleProgress } from "@/components/articleexpert/ArticleProgress";
import { ArticleComplete } from "@/components/articleexpert/ArticleComplete";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ArticleExpert = () => {
  const navigate = useNavigate();
  const {
    state,
    selectDeck,
    selectArticle,
    checkAnswer,
    nextSentence,
    resetGame,
    goBack,
  } = useArticleExpert();

  const currentSentence = state.currentDeck?.sentences[state.currentIndex];

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate("/")}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-3xl font-bold text-foreground">📰 Article Expert</h1>
        </div>

        {!state.currentDeck ? (
          <DeckSelector decks={articleDecks} onSelectDeck={selectDeck} />
        ) : state.isComplete ? (
          <ArticleComplete
            correct={state.correctCount}
            total={state.currentDeck.sentences.length}
            onRestart={resetGame}
            onBack={goBack}
          />
        ) : currentSentence ? (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <Button variant="ghost" size="sm" onClick={goBack}>
                ← Back to Decks
              </Button>
              <span className="text-sm text-muted-foreground">
                {state.currentDeck.name}
              </span>
            </div>

            <ArticleProgress
              current={state.currentIndex}
              total={state.currentDeck.sentences.length}
              correct={state.correctCount}
            />

            <ArticleInput
              sentence={currentSentence}
              selectedArticle={state.selectedArticle}
              isCorrect={state.isCorrect}
              showExplanation={state.showExplanation}
              onSelectArticle={selectArticle}
              onCheck={checkAnswer}
              onNext={nextSentence}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ArticleExpert;
