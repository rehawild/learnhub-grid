import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useQuoteQuiz } from "@/hooks/useQuoteQuiz";
import { sampleQuotes } from "@/data/quotequiz/sample-quotes";
import { CategorySelector } from "@/components/quotequiz/CategorySelector";
import { QuoteCard } from "@/components/quotequiz/QuoteCard";
import { QuizComplete } from "@/components/quotequiz/QuizComplete";

const QuoteQuiz = () => {
    const {
        state,
        currentQuote,
        selectCategory,
        answerQuote,
        nextQuote,
        resetQuiz,
        goBack
    } = useQuoteQuiz();

    return (
        <div className="min-h-screen bg-background pb-20">
            <div className="container max-w-2xl mx-auto px-4 py-8">

                {/* 1. Navigation Header */}
                <div className="mb-8">
                    <Link to="/">
                        <Button variant="ghost" className="gap-2">
                            <ArrowLeft className="h-4 w-4" />
                            Back to Tools
                        </Button>
                    </Link>
                </div>

                {/* 2. Tool Title & Description */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-foreground mb-2">
                        💬 Quote Quiz
                    </h1>
                    <p className="text-muted-foreground">
                        Test your knowledge of famous lines from literature, history, and film.
                    </p>
                </div>

                {/* 3. Main Content Area */}
                {state.mode === "selection" ? (
                    <CategorySelector categories={sampleQuotes} onSelect={selectCategory} />
                ) : state.mode === "quiz" && currentQuote && state.currentCategory ? (
                    <div className="space-y-6">
                        <div className="flex justify-start">
                            <Button variant="ghost" onClick={goBack} className="gap-2 pl-0 hover:bg-transparent hover:text-primary">
                                <ArrowLeft className="h-4 w-4" /> Change Category
                            </Button>
                        </div>
                        <QuoteCard
                            quote={currentQuote}
                            currentNumber={state.currentQuoteIndex + 1}
                            totalNumber={state.currentCategory.quotes.length}
                            selectedAnswer={state.answers[currentQuote.id]}
                            isCorrect={state.isCorrect}
                            onAnswer={answerQuote}
                            onNext={nextQuote}
                        />
                    </div>
                ) : state.mode === "complete" && state.currentCategory ? (
                    <QuizComplete
                        score={state.score}
                        total={state.currentCategory.quotes.length}
                        onRestart={resetQuiz}
                        onBack={goBack}
                    />
                ) : null}

            </div>
        </div>
    );
};

export default QuoteQuiz;
