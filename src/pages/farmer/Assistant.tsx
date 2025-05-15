
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AiAssistant from "@/components/farmer/AiAssistant";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const questions = [
  "What organic methods can I use to control aphids on my tomato plants?",
  "When is the best time to plant carrots for fall harvest?",
  "How can I improve soil fertility naturally for organic farming?",
  "What crop rotation strategy works best for vegetable gardens?",
  "How much water do strawberry plants need during fruiting season?"
];

const AssistantPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar userType="farmer" />
      <main className="flex-grow py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-market-dark-green mb-2">AI Farming Assistant</h1>
                <p className="text-gray-600">
                  Get expert advice on organic farming techniques, pest management, crop planning, and more.
                </p>
              </div>

              <AiAssistant />
            </div>
            
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Suggested Questions</CardTitle>
                  <CardDescription>
                    Not sure what to ask? Try one of these questions to get started.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {questions.map((question, index) => (
                      <li key={index}>
                        <button className="text-left text-market-primary hover:text-market-dark-green hover:underline">
                          {question}
                        </button>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle>How It Works</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-2">
                      <div className="bg-market-light-green rounded-full p-2 mt-1">
                        <span className="text-market-primary font-bold">1</span>
                      </div>
                      <div>
                        <h3 className="font-medium">Ask a question</h3>
                        <p className="text-sm text-gray-600">Type your farming-related question in the chat.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <div className="bg-market-light-green rounded-full p-2 mt-1">
                        <span className="text-market-primary font-bold">2</span>
                      </div>
                      <div>
                        <h3 className="font-medium">Get AI-powered answers</h3>
                        <p className="text-sm text-gray-600">Our assistant will provide helpful organic farming advice.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <div className="bg-market-light-green rounded-full p-2 mt-1">
                        <span className="text-market-primary font-bold">3</span>
                      </div>
                      <div>
                        <h3 className="font-medium">Follow up for details</h3>
                        <p className="text-sm text-gray-600">Ask additional questions to get more specific guidance.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AssistantPage;
