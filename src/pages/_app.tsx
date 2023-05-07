import Head from 'next/head';
import { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { GlobalStyles } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import createEmotionCache from '@/styles/createEmotionCache';
import { getDesignTokens } from '@/styles/theme';
import { typography } from '@/styles/typography';

const clientSideEmotionCache = createEmotionCache();

const globalStyle = (
  <GlobalStyles
    styles={(theme) => ({
      'html, body, #root': {
        height: '100%',
        padding: 0,
        margin: 0,
        boxSizing: 'border-box',
        fontFamily: theme.typography.fontFamily,
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        background: theme.palette.background.default,
        color: theme.palette.text.primary,
        fontSize: theme.typography.fontSize,
        lineHeight: '1.8rem',
        wordBreak: 'keep-all',
        WebkitTextSizeAdjust: 'none',
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
      },
      '#__next': {
        height: '100%',
      },
      a: {
        color: 'inherit',
        textDecoration: 'none',
      },
      '*': {
        boxSizing: 'border-box',
      },
      html: {
        overflowY: 'scroll',
      },
    })}
  />
);
export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: MyAppProps) => {
  const theme = createTheme({
    ...getDesignTokens('light'),
    ...typography,
  });

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>My MAU</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {globalStyle}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
