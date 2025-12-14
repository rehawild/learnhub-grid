import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useBookClub } from "@/hooks/useBookClub";
import { sampleBooks } from "@/data/bookclub/sample-books";
import { BookSelector } from "@/components/bookclub/BookSelector";
import { BookDiscussion } from "@/components/bookclub/BookDiscussion";
import { BookComplete } from "@/components/bookclub/BookComplete";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

const BookClub = () => {
    const {
        state,
        currentQuestion,
        selectBook,
        startDiscussion,
        answerQuestion,
        nextQuestion,
        goBack,
        resetBook
    } = useBookClub();

    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Standard Container: max-w-2xl for focus */}
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
                        📚 Book Club
                    </h1>
                    <p className="text-muted-foreground">
                        Discuss classic literature, analyze themes, and characters
                    </p>
                </div>

                {/* 3. Main Content Area */}
                {state.mode === "selection" ? (
                    <BookSelector books={sampleBooks} onSelectBook={selectBook} />
                ) : state.mode === "reading" && state.currentBook ? (
                    <div className="space-y-6">
                        <div className="flex justify-start">
                            <Button variant="ghost" onClick={goBack} className="gap-2 pl-0 hover:bg-transparent hover:text-primary">
                                <ArrowLeft className="h-4 w-4" /> Back to Library
                            </Button>
                        </div>
                        <Card>
                            <CardContent className="pt-6 space-y-4">
                                <div className="text-center border-b pb-4">
                                    <span className="text-6xl block mb-2">{state.currentBook.coverEmoji}</span>
                                    <CardTitle className="text-2xl">{state.currentBook.title}</CardTitle>
                                    <p className="text-muted-foreground">by {state.currentBook.author}</p>
                                </div>
                                <div className="prose dark:prose-invert prose-lg">
                                    {state.currentBook.summary.map((para, i) => (
                                        <p key={i}>{para}</p>
                                    ))}
                                </div>
                                <Button onClick={startDiscussion} className="w-full mt-4" size="lg">Join Discussion</Button>
                            </CardContent>
                        </Card>
                    </div>
                ) : state.mode === "discussion" && currentQuestion ? (
                    <div className="space-y-6">
                        <BookDiscussion
                            question={currentQuestion}
                            currentNumber={state.currentQuestionIndex + 1}
                            totalNumber={state.currentBook!.questions.length}
                            showExplanation={state.showExplanation}
                            selectedAnswer={state.answers[currentQuestion.id]}
                            onAnswer={answerQuestion}
                            onNext={nextQuestion}
                        />
                        <div className="flex justify-center mt-8">
                            <Button
                                variant="outline"
                                onClick={goBack}
                                className="text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                            >
                                Leave Meeting
                            </Button>
                        </div>
                    </div>
                ) : state.mode === "complete" ? (
                    <BookComplete
                        score={state.score}
                        total={state.currentBook!.questions.length}
                        onRestart={resetBook}
                        onBack={goBack}
                    />
                ) : null}

            </div>
        </div>
    );
};

export default BookClub;
