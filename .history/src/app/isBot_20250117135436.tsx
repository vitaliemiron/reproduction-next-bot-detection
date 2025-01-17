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
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Bot Detection Tester</h1>

      <div className="mb-4">
        <label htmlFor="userAgent" className="block mb-2 font-semibold">
          User Agent
        </label>
        <textarea
          id="userAgent"
          value={userAgent}
          onChange={(e) => setUserAgent(e.target.value)}
          className="w-full p-2 border rounded"
          rows={3}
        />
      </div>

      <div
        className={`p-3 rounded font-bold ${
          isBotResult
            ? 'bg-green-100 text-green-800'
            : 'bg-red-100 text-red-800'
        }`}
      >
        Bot Detection Result: {isBotResult ? 'Bot Detected' : 'Not a Bot'}
      </div>
    </div>
  );
}
