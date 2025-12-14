import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useCambridge } from "@/hooks/useCambridge";
import { cambridgeTests } from "@/data/cambridge/tests";
import { MultipleChoiceCloze } from "@/components/cambridge/MultipleChoiceCloze";
import { WordFormation } from "@/components/cambridge/WordFormation";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const Cambridge = () => {
    const { state, startTest, setAnswer, nextPart, reset } = useCambridge();
    const { currentTest, currentPartIndex, showResults } = state;

    return (
        <div className="min-h-screen bg-background pb-20">
            <div className="container max-w-5xl mx-auto px-4 py-8">

                {/* 1. Navigation Header */}
                <div className="mb-6 flex justify-between items-center">
                    <Link to="/">
                        <Button variant="ghost" className="gap-2 -ml-2">
                            <ArrowLeft className="h-4 w-4" />
                            Back to Tools
                        </Button>
                    </Link>
                    {currentTest && (
                        <Button variant="outline" onClick={reset}>Quit Test</Button>
                    )}
                </div>

                {/* 2. Tool Title */}
                {!currentTest && (
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-foreground mb-4">
                            Cambridge English
                        </h1>
                        <p className="text-muted-foreground text-lg">
                            Practice for B2 First (FCE) and C1 Advanced (CAE) Use of English.
                        </p>
                    </div>
                )}

                {/* 3. Main Content Area */}
                {!currentTest ? (
                    // Test Selector
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {cambridgeTests.map(test => (
                            <Card key={test.id} className="cursor-pointer hover:border-primary transition-all group" onClick={() => startTest(test)}>
                                <CardHeader>
                                    <div className="bg-red-100 text-red-600 w-fit px-2 py-1 rounded text-xs font-bold mb-2">
                                        {test.level}
                                    </div>
                                    <CardTitle className="group-hover:text-primary transition-colors">{test.title}</CardTitle>
                                    <CardDescription>{test.parts.length} Parts</CardDescription>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                ) : (
                    // Test Interface
                    <div className="space-y-6">
                        {/* Progress Header */}
                        <div className="flex items-center justify-between bg-card p-4 rounded-lg border shadow-sm">
                            <div>
                                <h2 className="font-bold text-lg">{currentTest.parts[currentPartIndex].title}</h2>
                                <p className="text-sm text-muted-foreground">{currentTest.parts[currentPartIndex].description}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm font-medium text-muted-foreground">Part {currentPartIndex + 1} of {currentTest.parts.length}</p>
                                {showResults && (
                                    <p className="text-xl font-bold text-primary">Score: {state.score}</p>
                                )}
                            </div>
                        </div>

                        {/* Part Render */}
                        {currentTest.parts[currentPartIndex].type === 'multiple_choice_cloze' && (
                            <MultipleChoiceCloze
                                part={currentTest.parts[currentPartIndex]}
                                answers={state.answers}
                                onAnswer={setAnswer}
                                showResults={showResults}
                            />
                        )}

                        {currentTest.parts[currentPartIndex].type === 'word_formation' && (
                            <WordFormation
                                part={currentTest.parts[currentPartIndex]}
                                answers={state.answers}
                                onAnswer={setAnswer}
                                showResults={showResults}
                            />
                        )}

                        {/* Footer Controls */}
                        <div className="flex justify-end pt-4">
                            {showResults ? (
                                <Button size="lg" onClick={reset} className="gap-2">
                                    Take Another Test
                                </Button>
                            ) : (
                                <Button size="lg" onClick={nextPart} className="gap-2">
                                    {currentPartIndex < currentTest.parts.length - 1 ? (
                                        <>Next Part <ChevronRight className="w-4 h-4" /></>
                                    ) : (
                                        <>Finish & Check <CheckCircle className="w-4 h-4" /></>
                                    )}
                                </Button>
                            )}
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default Cambridge;
