import React, { useState, useRef, useEffect } from 'react';
import './ChatWidget.css';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Selamat datang di Tata Warga, ada yang bisa kami bantu? Silakan Tanya apapun tentang tatawarga.net: cara penggunaan, harga, dokumentasi dan lainnya.'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    const newMessages = [...messages, { role: 'user', content: userMsg }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      // Mengarah langsung ke server utama Tata Warga
      const apiUrl = 'https://tatawarga.net/api/chat-docs';

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // We exclude the first welcome message to save tokens if we want, or send it all
        body: JSON.stringify({ messages: newMessages.slice(1) }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setMessages([...newMessages, { role: 'assistant', content: data.message }]);
      } else {
        setMessages([...newMessages, { role: 'assistant', content: 'Maaf, terjadi kesalahan saat menghubungi server.' }]);
      }
    } catch (error) {
      console.error(error);
      setMessages([...newMessages, { role: 'assistant', content: 'Maaf, gagal terhubung ke server.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chat-widget-container">
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <h3>Tata AI</h3>
            <button onClick={() => setIsOpen(false)} className="close-btn">×</button>
          </div>
          <div className="chat-body">
            {messages.map((msg, idx) => (
              <div key={idx} className={`chat-bubble ${msg.role}`}>
                <div className="chat-bubble-content">
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="chat-bubble assistant">
                <div className="chat-bubble-content typing">
                  Mengetik...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="chat-footer">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Ketik pesan..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isLoading}
              />
              <button type="submit" disabled={isLoading || !input.trim()}>
                Kirim
              </button>
            </form>
          </div>
        </div>
      )}
      
      {!isOpen && (
        <button className="chat-fab" onClick={() => setIsOpen(true)}>
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </button>
      )}
    </div>
  );
}
