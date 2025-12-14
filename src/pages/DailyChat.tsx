import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useDailyChat } from "@/hooks/useDailyChat";
import { ChatInterface } from "@/components/dailychat/ChatInterface";
import { StreakDisplay } from "@/components/dailychat/StreakDisplay";

const DailyChat = () => {
    const {
        state,
        sendMessage,
        messagesEndRef,
        currentUserId
    } = useDailyChat();

    return (
        <div className="min-h-screen bg-background pb-20">
            <div className="container max-w-4xl mx-auto px-4 py-8">

                {/* 1. Navigation Header */}
                <div className="mb-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="w-full md:w-auto text-left">
                        <Link to="/">
                            <Button variant="ghost" className="gap-2 -ml-2">
                                <ArrowLeft className="h-4 w-4" />
                                Back to Tools
                            </Button>
                        </Link>
                    </div>

                    <StreakDisplay stats={state.stats} />
                </div>

                {/* 2. Tool Title & Description */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-foreground mb-2">
                        💭 Daily Chat
                    </h1>
                    <p className="text-muted-foreground">
                        Build a habit with a quick conversation about today's topic.
                    </p>
                </div>

                {/* 3. Main Content Area */}
                <div className="max-w-3xl mx-auto">
                    <ChatInterface
                        topic={state.currentTopic}
                        messages={state.messages}
                        isTyping={state.isTyping}
                        currentUserId={currentUserId}
                        onSendMessage={sendMessage}
                        messagesEndRef={messagesEndRef}
                    />
                </div>

            </div>
        </div>
    );
};

export default DailyChat;
