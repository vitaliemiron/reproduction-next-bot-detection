'use client';
import { isBot } from 'next/dist/shared/lib/router/utils/is-bot';
import { useEffect } from 'react';

export const IsBotLog = () => {
  useEffect(() => {
    const testUserAgent =
      'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/W.X.Y.Z Mobile Safari/537.36 (compatible; Google-InspectionTool/1.0;)';

    console.log('User Agent:', testUserAgent);
    console.log('Is Bot:', isBot(testUserAgent));
  }, []);

  return <div />;
};
