import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const FloatingHelp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const quickActions = [
    "How to book a worker?",
    "Payment issues",
    "Cancel booking",
    "Worker not available",
    "Speak to support"
  ];

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 z-50 animate-scale-in">
          <Card className="w-80 sm:w-96 bg-background shadow-hover border">
            <CardHeader className="bg-gradient-hero text-primary-foreground rounded-t-lg">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Need Help?</CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-primary-foreground hover:bg-primary-foreground/20 h-8 w-8 p-0"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-sm text-primary-foreground/90">
                We're here to help! Choose a quick action or send us a message.
              </p>
            </CardHeader>
            
            <CardContent className="p-4 space-y-4">
              {/* Quick Actions */}
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Quick Actions:</p>
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    className="w-full text-left p-2 text-sm rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors text-foreground"
                    onClick={() => {
                      // Handle quick action
                      setMessage(action);
                    }}
                  >
                    {action}
                  </button>
                ))}
              </div>

              {/* Message Input */}
              <div className="space-y-3">
                <Textarea
                  placeholder="Type your message here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  className="resize-none"
                />
                <Button 
                  className="w-full bg-gradient-accent hover:bg-accent-hover border-0"
                  disabled={!message.trim()}
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </div>

              {/* Alternative Contact */}
              <div className="text-center pt-3 border-t border-border">
                <p className="text-xs text-muted-foreground mb-2">
                  Need immediate help?
                </p>
                <Button variant="outline" size="sm" className="text-xs">
                  Call Support: +91 9876543210
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-4 right-4 z-50 w-14 h-14 rounded-full bg-gradient-accent shadow-hover transition-all duration-300 hover:scale-110 flex items-center justify-center ${
          isOpen ? 'rotate-180' : 'hover:shadow-xl'
        }`}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-accent-foreground" />
        ) : (
          <MessageCircle className="w-6 h-6 text-accent-foreground" />
        )}
      </button>
    </>
  );
};

export default FloatingHelp;