import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useNewsReader } from "@/hooks/useNewsReader";
import { sampleNewsArticles } from "@/data/newsreader/sample-news";
import { NewsFeed } from "@/components/newsreader/NewsFeed";
import { ArticleReader } from "@/components/newsreader/ArticleReader";
import { NewsQuiz } from "@/components/newsreader/NewsQuiz";
import { NewsComplete } from "@/components/newsreader/NewsComplete";

const NewsReader = () => {
    const {
        state,
        currentQuestion,
        selectArticle,
        startQuiz,
        answerQuestion,
        goBack,
        resetArticle
    } = useNewsReader();

    return (
        <div className="min-h-screen bg-background pb-20">
            <div className="container max-w-2xl mx-auto px-4 py-8">
                <div className="mb-8">
                    <Link to="/">
                        <Button variant="ghost" className="gap-2">
                            <ArrowLeft className="h-4 w-4" />
                            Back to Tools
                        </Button>
                    </Link>
                </div>

                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-foreground mb-2">
                        🗞️ News Reader
                    </h1>
                    <p className="text-muted-foreground">
                        Read articles and build your vocabulary
                    </p>
                </div>

                {state.mode === "feed" ? (
                    <NewsFeed articles={sampleNewsArticles} onSelectArticle={selectArticle} />
                ) : state.mode === "reading" && state.currentArticle ? (
                    <div className="space-y-6">
                        <div className="flex justify-start">
                            <Button variant="ghost" onClick={goBack} className="gap-2 pl-0 hover:bg-transparent hover:text-primary">
                                <ArrowLeft className="h-4 w-4" /> Back to Feed
                            </Button>
                        </div>
                        <ArticleReader article={state.currentArticle} onFinished={startQuiz} />
                    </div>
                ) : state.mode === "quiz" && currentQuestion ? (
                    <div className="space-y-6">
                        <NewsQuiz
                            question={currentQuestion}
                            currentNumber={state.currentQuestionIndex + 1}
                            totalNumber={state.currentArticle!.questions.length}
                            onAnswer={answerQuestion}
                        />
                        <div className="flex justify-center mt-8">
                            <Button
                                variant="outline"
                                onClick={goBack}
                                className="text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                            >
                                Quit Quiz
                            </Button>
                        </div>
                    </div>
                ) : state.mode === "complete" ? (
                    <NewsComplete
                        score={state.score}
                        total={state.currentArticle!.questions.length}
                        onRestart={resetArticle}
                        onBack={goBack}
                    />
                ) : null}
            </div>
        </div>
    );
};

export default NewsReader;
