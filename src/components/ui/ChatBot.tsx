import React, { useState, useEffect } from 'react';
import { X, Send } from 'lucide-react';
import daisyImage from '../../assets/images/dAisy_master_solo_web (1).png';

// Custom animation CSS
const customStyles = `
  @keyframes subtle-bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }
  .animate-bounce-subtle {
    animation: subtle-bounce 2s ease-in-out infinite;
  }
`;

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{text: string, sender: 'user' | 'bot'}[]>([
    { text: "Hi there! I'm DAIsy, your AI assistant. How can I help you today?", sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isHovering, setIsHovering] = useState(false);
  const [showInitialPulse, setShowInitialPulse] = useState(true);

  // Format DAIsy text with proper colors
  const ColoredDaisy = () => (
    <>
      <span className="text-[#2a8735]">D</span>
      <span className="text-[#f59d40]">AI</span>
      <span className="text-[#2a8735]">sy</span>
    </>
  );

  useEffect(() => {
    // Hide the pulse animation after 5 seconds
    const timer = setTimeout(() => {
      setShowInitialPulse(false);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, []);

  // Add the custom styles to the document head
  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = customStyles;
    document.head.appendChild(styleElement);
    
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setShowInitialPulse(false); // Hide pulse once clicked
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    // Add user message
    setMessages([...messages, { text: inputValue, sender: 'user' }]);
    
    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: "Thanks for your message! I'm a demo chatbot, but in the real version I'd provide helpful information about Marigold's AI solutions.", 
        sender: 'bot' 
      }]);
    }, 1000);
    
    setInputValue('');
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Chat label - show on hover or during initial pulse */}
      {(isHovering || (showInitialPulse && !isOpen)) && (
        <div className="absolute -top-16 right-1 bg-gradient-to-r from-[#f59d40] to-[#ea5830] text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg transition-all duration-300 z-20 animate-bounce-subtle">
          Chat with <ColoredDaisy />
          <div className="absolute bottom-[-6px] right-6 w-3 h-3 bg-[#ea5830] transform rotate-45"></div>
        </div>
      )}
      
      {/* Pulse animation ring */}
      {showInitialPulse && !isOpen && (
        <div className="absolute inset-0 rounded-full bg-[#f59d40] opacity-70 animate-ping"></div>
      )}
      
      {/* Chat button */}
      <button 
        onClick={toggleChat}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="bg-gradient-to-br from-[#f59d40] to-[#ea5830] w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden p-0 relative z-10"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <div className="h-full w-full flex items-center justify-center">
            <img src={daisyImage} alt="DAIsy" className="h-full w-full object-cover scale-[1.5] transform translate-y-2" />
          </div>
        )}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 sm:w-96 bg-white rounded-lg shadow-xl border border-gray-200 flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#f59d40] to-[#ea5830] p-4 rounded-t-lg">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center mr-3 overflow-hidden">
                <img src={daisyImage} alt="DAIsy" className="h-full w-full object-cover scale-[1.5] transform translate-y-2" />
              </div>
              <div>
                <h3 className="text-white font-bold"><ColoredDaisy /> Assistant</h3>
                <p className="text-white text-sm opacity-80">AI-powered help</p>
              </div>
            </div>
          </div>
          
          {/* Messages */}
          <div className="flex-1 p-4 max-h-96 overflow-y-auto">
            <div className="space-y-4">
              {messages.map((msg, index) => (
                <div 
                  key={index} 
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.sender === 'bot' && (
                    <div className="h-8 w-8 rounded-full overflow-hidden flex-shrink-0 mr-2">
                      <img src={daisyImage} alt="DAIsy" className="h-full w-full object-cover scale-[1.5] transform translate-y-2" />
                    </div>
                  )}
                  <div 
                    className={`max-w-[80%] p-3 rounded-lg ${
                      msg.sender === 'user' 
                        ? 'bg-[#f0f0f0] text-[#2a2b2a]' 
                        : 'bg-[#f59d40] bg-opacity-10 text-[#2a2b2a]'
                    }`}
                  >
                    {msg.text.includes("DAIsy") 
                      ? (
                        <>
                          {msg.text.split("DAIsy")[0]}
                          <ColoredDaisy />
                          {msg.text.split("DAIsy")[1]}
                        </>
                      ) 
                      : msg.text
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Input */}
          <form onSubmit={handleSubmit} className="border-t border-gray-200 p-4">
            <div className="flex">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 border border-gray-300 rounded-l-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#f59d40]"
              />
              <button 
                type="submit"
                className="bg-[#f59d40] text-white p-2 rounded-r-lg"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBot; 