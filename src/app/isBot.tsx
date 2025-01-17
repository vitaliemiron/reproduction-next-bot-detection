'use client';
import { useState, useEffect } from 'react';
import { isBot } from 'next/dist/shared/lib/router/utils/is-bot';

const BOT_USER_AGENTS = {
  Googlebot:
    'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
  'Google-InspectionTool':
    'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/W.X.Y.Z Mobile Safari/537.36 (compatible; Google-InspectionTool/1.0;)',
  'Google-CloudVertexBot':
    'Mozilla/5.0 (compatible; Google-CloudVertexBot/1.0; +https://cloud.google.com/vertex-ai/docs/overview)',
  'Google-Other':
    'Mozilla/5.0 (compatible; Google-Other/1.0; +https://www.google.com/bot.html)',
};

export default function BotDetectionTester() {
  const defaultUserAgent = BOT_USER_AGENTS['Googlebot'];

  const [userAgent, setUserAgent] = useState(defaultUserAgent);
  const [isBotResult, setIsBotResult] = useState(false);
  const [copiedAgent, setCopiedAgent] = useState<string | null>(null);

  useEffect(() => {
    const result = isBot(userAgent);
    setIsBotResult(result);
    console.log('User Agent:', userAgent);
    console.log('Is Bot:', result);
  }, [userAgent]);

  const handleCopyUserAgent = (agent: string, name: string) => {
    navigator.clipboard.writeText(agent).then(() => {
      setCopiedAgent(name);
      setTimeout(() => setCopiedAgent(null), 2000);
    });
  };

  return (
    <div
      style={{
        padding: '24px',
        maxWidth: '800px',
        margin: '0 auto',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h1
        style={{
          fontSize: '24px',
          fontWeight: 'bold',
          marginBottom: '24px',
        }}
      >
        Bot Detection Tester
      </h1>

      <div
        style={{
          marginBottom: '24px',
        }}
      >
        <div
          style={{
            display: 'flex',
            marginBottom: '12px',
            gap: '10px',
            flexWrap: 'wrap',
          }}
        >
          {Object.entries(BOT_USER_AGENTS).map(([name, agent]) => (
            <button
              key={name}
              onClick={() => {
                handleCopyUserAgent(agent, name);
                setUserAgent(agent);
              }}
              style={{
                padding: '8px 12px',
                backgroundColor: copiedAgent === name ? '#4CAF50' : '#f0f0f0',
                color: copiedAgent === name ? 'white' : 'black',
                border: '1px solid #ddd',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
                marginBottom: '10px',
              }}
            >
              {copiedAgent === name ? 'Copied!' : `Copy ${name}`}
            </button>
          ))}
        </div>

        <label
          style={{
            display: 'block',
            marginBottom: '12px',
            fontWeight: 'bold',
          }}
        >
          User Agent
        </label>
        <textarea
          value={userAgent}
          onChange={(e) => setUserAgent(e.target.value)}
          style={{
            width: '100%',
            padding: '12px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            minHeight: '150px',
            resize: 'vertical',
          }}
        />
      </div>

      <div
        style={{
          padding: '16px',
          borderRadius: '4px',
          fontWeight: 'bold',
          backgroundColor: isBotResult ? '#e6f3e6' : '#f3e6e6',
          color: isBotResult ? '#2c542c' : '#542c2c',
        }}
      >
        Bot Detection Result: {isBotResult ? 'Bot Detected' : 'Not a Bot'}
      </div>
    </div>
  );
}
