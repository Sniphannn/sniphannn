'use client';
import { useState } from 'react';

export default function ChatBot() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: string, text: string}[]>([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    
    const userMsg = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: 'ai', text: data.reply }]);
    } catch (err) {
      console.error("Chat error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={chatContainerStyle}>
      <div style={chatBoxStyle}>
        {messages.map((m, i) => (
          <div key={i} style={{ textAlign: m.role === 'user' ? 'right' : 'left', margin: '10px 0' }}>
            <p style={{ display: 'inline-block', padding: '8px 12px', borderRadius: '10px', backgroundColor: m.role === 'user' ? '#0070f3' : '#eee', color: m.role === 'user' ? '#fff' : '#000' }}>
              {m.text}
            </p>
          </div>
        ))}
        {loading && <p>Thinking...</p>}
      </div>
      <div style={{ display: 'flex', gap: '5px' }}>
        <input 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Ask about Rohan..." 
          style={{ flex: 1, padding: '10px' }}
        />
        <button onClick={sendMessage} style={{ padding: '10px' }}>Send</button>
      </div>
    </div>
  );
}

const chatContainerStyle: React.CSSProperties = { position: 'fixed', bottom: '100px', right: '20px', width: '300px', background: '#fff', border: '1px solid #ccc', borderRadius: '10px', padding: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' };
const chatBoxStyle: React.CSSProperties = { height: '300px', overflowY: 'auto', marginBottom: '10px', borderBottom: '1px solid #eee' };