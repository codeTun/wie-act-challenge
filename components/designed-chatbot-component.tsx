"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Send, X, MessageCircle } from "lucide-react";

type Message = {
  id: number;
  text: string;
  sender: "user" | "bot";
};

export default function () {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleMessageClick = () => {
    setIsChatOpen(true);
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() === "") return;

    const newMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: "user",
    };

    setMessages([...messages, newMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: "Thank you for your message. I'm a demo chatbot, so I can't provide a real response. But in a full implementation, I would process your message and respond accordingly.",
        sender: "bot",
      };
      setMessages((prevMessages) => [...prevMessages, botResponse]);
      setIsTyping(false);
    }, 2000);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isChatOpen && (
        <Button
          className="rounded-full w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
          onClick={handleMessageClick}
        >
          <MessageCircle className="w-8 h-8" />
          <span className="sr-only">Open Chat</span>
        </Button>
      )}
      {isChatOpen && (
        <div className="w-96 bg-white rounded-lg shadow-2xl overflow-hidden transition-all duration-300 animate-in slide-in-from-bottom-2">
          <div className="bg-gradient-to-r from-pink-500 to-indigo-500 p-4 text-white flex justify-between items-center">
            <h2 className="text-xl font-bold">Chat Assistant</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleCloseChat}
              className="text-white hover:bg-white/20"
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close Chat</span>
            </Button>
          </div>
          <ScrollArea className="h-96 p-4" ref={scrollAreaRef}>
            {messages.length === 0 ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-gray-500 text-center mt-8 space-y-2 text-xl font-bold">
                  <p>Hi there 👋</p>
                  <p>how can I help you?</p>
                </div>
              </div>
            ) : (
              messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  } mb-4 animate-in slide-in-from-bottom-1`}
                >
                  {message.sender === "bot" && (
                    <Avatar className="w-8 h-8 mr-2">
                      <AvatarImage
                        src="/touta2.jpg?height=32&width=32"
                        alt="Bot Avatar"
                      />
                      <AvatarFallback>Bot</AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={`rounded-lg p-3 max-w-[70%] ${
                      message.sender === "user"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))
            )}
            {isTyping && (
              <div className="flex justify-start mb-4">
                <Avatar className="w-8 h-8 mr-2">
                  <AvatarImage src="/touta2.jpg?height=32&width=32" alt="Bot" />
                  <AvatarFallback>Bot</AvatarFallback>
                </Avatar>
                <div className="bg-gray-200 text-gray-800 rounded-lg p-3 animate-pulse">
                  Typing...
                </div>
              </div>
            )}
          </ScrollArea>
          <div className="p-4 border-t border-gray-200">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex space-x-2"
            >
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-grow focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
              <Button
                type="submit"
                className="bg-purple-500 hover:bg-purple-800 text-white"
              >
                <Send className="w-4 h-4" />
                <span className="sr-only">Send</span>
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
