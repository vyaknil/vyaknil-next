'use client';

import { CacheProvider } from '@emotion/react';
import { emotionCache } from './emotion-cache';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider value={emotionCache}>
      {children}
    </CacheProvider>
  );
}
