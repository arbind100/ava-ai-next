'use client';
import React, { useState } from 'react';

export default function Page() {
  const [tier, setTier] = useState('starter');
  const [topic, setTopic] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

  const mockOutput = `📌 Strategy for your topic:

🎙️ *10 Podcast Questions:*
1. What inspired you to start?
2. What was your biggest failure?
...

📢 *3 Viral Hooks:*
- \"What if everything you know about X is wrong?\"
- \"In just 30 seconds, this changed my mindset.\"

🧠 *Content Calendar (Week 1):*
- Monday: Micro clip
- Tuesday: Behind the scenes
...`;

  const generateStrategy = () => {
    if (!topic) return alert('Enter a topic or guest name.');
    setLoading(true);
    setTimeout(() => {
      setOutput(mockOutput);
      setLoading(false);
    }, 1500);
  };

  return (
    <main style={{ padding: 24, maxWidth: 600, margin: '0 auto', color: 'white', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: 28, textAlign: 'center', marginBottom: 20 }}>AVA: Your AI Strategist</h1>

      <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 16 }}>
        {['starter', 'pro', 'ava+'].map((t) => (
          <button
            key={t}
            onClick={() => setTier(t)}
            style={{
              padding: '8px 12px',
              borderRadius: 8,
              backgroundColor: tier === t ? '#ED2647' : 'transparent',
              color: 'white',
              border: '1px solid white'
            }}
          >
            {t.toUpperCase()}
          </button>
        ))}
      </div>

      <textarea
        placeholder='Enter podcast topic or guest name'
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        style={{ width: '100%', minHeight: 100, padding: 12, borderRadius: 8, backgroundColor: '#111', color: 'white', border: '1px solid white' }}
      />

      <button
        onClick={generateStrategy}
        disabled={loading}
        style={{ width: '100%', marginTop: 12, padding: 12, backgroundColor: '#ED2647', color: 'white', borderRadius: 8, fontWeight: 'bold' }}
      >
        {loading ? 'Generating...' : 'Generate Strategy'}
      </button>

      {output && (
        <div style={{ marginTop: 20, backgroundColor: '#222', padding: 16, borderRadius: 8, whiteSpace: 'pre-wrap' }}>
          {output}
        </div>
      )}
    </main>
  );
}
