import React from 'react';

import { CacheProvider, EmotionCache } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { AppProps } from 'next/app';
import Head from 'next/head';

import usePrefersTheme from '@/hooks/usePrefersTheme';
import createEmotionCache from '@/utils/createEmotionCache';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface WebsiteProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function Website(props: WebsiteProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const theme = usePrefersTheme();

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>kentunc.org</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
