import React, { useState, useRef, useEffect } from 'react';
import { Icon } from '../atoms/Icon';
import { CHATBOT_OPTIONS, CHATBOT_DATA, FALLBACK_RESPONSE } from '../../data/chatbotInfo';

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: '¡Hola! Soy el asistente virtual de Bee Mendoza 🐝. ¿En qué te puedo ayudar hoy? Podés escribirme o elegir una opción rápida:',
      options: CHATBOT_OPTIONS
    }
  ]);
  
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const getBotResponse = (input) => {
    const textNormalizado = input.toLowerCase();
    for (const item of CHATBOT_DATA) {
      if (item.keywords.some(keyword => textNormalizado.includes(keyword))) {
        return item.response;
      }
    }
    return FALLBACK_RESPONSE;
  };

  const handleSend = (text) => {
    if (!text.trim()) return;

    const newMessages = [...messages, { sender: 'user', text }];
    setMessages(newMessages);
    setInputValue('');

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: getBotResponse(text) }
      ]);
    }, 500);
  };

  // FIX: Salvavidas por si el texto viene vacío o roto
  const formatMessage = (text) => {
    if (!text) return null;
    
    return text.split('\n').map((line, i) => (
      <span key={i} className="block mb-1">
        {line.split(/(\*\*.*?\*\*)/).map((chunk, j) => {
          if (chunk.startsWith('**') && chunk.endsWith('**')) {
            return <strong key={j} className="font-black">{chunk.slice(2, -2)}</strong>;
          }
          return chunk;
        })}
      </span>
    ));
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 w-16 h-16 bg-bee-yellow text-bee-dark rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform z-[100] ${isOpen ? 'rotate-90 opacity-0 pointer-events-none' : 'rotate-0 opacity-100'}`}
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
        </svg>
      </button>

      <div 
        className={`fixed bottom-6 right-6 w-[92vw] md:w-[400px] h-[550px] bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] border-0 flex flex-col overflow-hidden transition-all duration-300 z-[100] origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-50 opacity-0 pointer-events-none'}`}
      >
        <div className="bg-[#101010] p-4 flex justify-between items-center text-white shadow-md z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden shrink-0 border-2 border-bee-yellow p-0.5">
              <img src="/logo.webp" alt="Bee Mendoza" className="w-full h-full object-cover rounded-full" />
            </div>
            <div>
              <h3 className="font-bold text-sm tracking-widest text-bee-yellow">BEE ASISTENTE</h3>
              <p className="text-[10px] text-gray-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 block animate-pulse"></span> En línea
              </p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition bg-gray-800 p-1.5 rounded-full">
            <Icon name="x" size={16} />
          </button>
        </div>

        {/* Agregado scrollbar-width: none para móviles */}
        <div className="flex-1 overflow-y-auto p-4 bg-[#f8f9fa] flex flex-col gap-5" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {messages.map((msg, index) => (
            <div key={index} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
              
              <div 
                className={`w-fit max-w-[85%] p-4 text-sm leading-relaxed shadow-sm break-words ${
                  msg.sender === 'user' 
                    ? 'bg-bee-dark text-white rounded-t-2xl rounded-bl-2xl ml-auto' 
                    : 'bg-white text-gray-800 rounded-t-2xl rounded-br-2xl mr-auto'
                }`}
              >
                {formatMessage(msg.text)}

                {msg.sender === 'bot' && (
                  <div className="mt-3 pt-2 border-t border-gray-100 text-[9px] text-gray-400 font-bold tracking-wider flex items-center gap-1 uppercase">
                    <Icon name="zap" size={10} className="text-bee-yellow" />
                    Asistente Automático
                  </div>
                )}
              </div>

              {msg.options && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {msg.options.map((opt, i) => (
                    <button 
                      key={i}
                      onClick={() => handleSend(opt)}
                      className="bg-white border border-gray-200 text-bee-dark text-xs font-bold py-2 px-4 rounded-full hover:border-bee-yellow hover:bg-bee-yellow transition shadow-sm"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-3 bg-white border-t border-gray-100 shadow-[0_-5px_15px_rgba(0,0,0,0.02)]">
          <form 
            onSubmit={(e) => { e.preventDefault(); handleSend(inputValue); }}
            className="flex items-center gap-2"
          >
            <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Escribí tu consulta..." 
              className="flex-1 bg-gray-100 rounded-full py-3 px-5 text-sm focus:outline-none focus:ring-2 focus:ring-black/5"
            />
            <button 
              type="submit" 
              disabled={!inputValue.trim()}
              className="w-12 h-12 bg-bee-dark text-white rounded-full flex items-center justify-center hover:bg-bee-yellow hover:text-bee-dark transition disabled:opacity-50 disabled:hover:bg-bee-dark disabled:hover:text-white shrink-0"
            >
              <Icon name="arrow-right" size={20} />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};