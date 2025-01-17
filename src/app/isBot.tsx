'use client';
import { useState, useEffect } from 'react';
import { isBot } from 'next/dist/shared/lib/router/utils/is-bot';

export default function BotDetectionTester() {
  const defaultUserAgent =
    'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/W.X.Y.Z Mobile Safari/537.36 (compatible; Google-InspectionTool/1.0;)';

  const [userAgent, setUserAgent] = useState(defaultUserAgent);
  const [isBotResult, setIsBotResult] = useState(false);

  useEffect(() => {
    const result = isBot(userAgent);
    setIsBotResult(result);
    console.log('User Agent:', userAgent);
    console.log('Is Bot:', result);
  }, [userAgent]);

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
