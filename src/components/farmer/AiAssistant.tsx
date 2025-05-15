
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const AiAssistant = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm your AI farming assistant. How can I help you with your organic farming today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      role: "user",
      content: input,
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    // Simulate AI response (in a real app, this would call an API)
    setTimeout(() => {
      const responses = [
        "Based on the description, it sounds like your tomato plants might be experiencing early blight. This is a common fungal disease in organic farming. Try applying a neem oil solution and ensure better air circulation around plants.",
        "For best results with organic lettuce, plant them in partial shade during summer months and ensure consistent watering. A good companion planting strategy would be to grow them near tall sun-loving plants.",
        "Ladybugs are excellent natural predators for aphids. You can attract them to your farm by planting dill, fennel, and yarrow nearby. They'll help control the aphid population naturally without pesticides.",
        "Crop rotation is essential for organic farming. I'd recommend dividing your fields into 4 sections and rotating through these families: legumes, brassicas, alliums, and solanaceous crops.",
        "For improving soil health naturally, consider planting cover crops like clover or buckwheat during off-seasons. They'll add nitrogen back to the soil and prevent erosion."
      ];

      const assistantMessage: Message = {
        role: "assistant",
        content: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
      setLoading(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="flex flex-col h-[calc(100vh-200px)]">
      <Card className="flex-1 flex flex-col">
        <CardHeader className="pb-3">
          <CardTitle>AI Farming Assistant</CardTitle>
          <CardDescription>
            Get expert advice on organic farming practices, pest management, crop selection, and more.
          </CardDescription>
        </CardHeader>
        <Separator />
        <CardContent className="flex flex-col flex-1 pt-4 pb-0">
          <div className="flex-1 overflow-y-auto mb-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.role === "user"
                      ? "bg-market-primary text-white rounded-tr-none"
                      : "bg-gray-100 rounded-tl-none"
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                  <p className={`text-xs mt-1 ${message.role === "user" ? "text-white/70" : "text-gray-500"}`}>
                    {formatTime(message.timestamp)}
                  </p>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 p-3 rounded-lg rounded-tl-none">
                  <div className="flex space-x-1 items-center">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="flex items-center gap-2 pt-4 pb-4">
            <Input
              placeholder="Ask about organic farming techniques, pest control, crop rotation..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={loading}
              className="flex-1"
            />
            <Button onClick={handleSendMessage} disabled={loading || !input.trim()}>
              Send
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AiAssistant;
