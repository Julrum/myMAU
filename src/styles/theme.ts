import { PaletteMode } from '@mui/material';

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          text: {
            bold: '#000000',
            headbar: '#f0f6fb',
            placeholder: '#999999',
            secondary: '#666666',
            logoText: '#0f0f0f',
          },

          background: {
            default: '#ffffff',
            headbar: '#24292f',
            menubar: '#fafafa',
            sidebar: '#fafafa',
            landing: '#F9F9FF',
            box: '#f0f6fb',
            select: '#f0f6fc',
          },
          divider: '#f0f0f0',
        }
      : {
          text: {
            bold: '#f0f0f0',
            headbar: '#ffffff',
            placeholder: '#c2c3c4',
            secondary: '#b7b7b7',
            logoText: '#ffffff',
          },

          background: {
            default: '#0d1116',
            headbar: '#161b22',
            menubar: '#0d1116',
            sidebar: '#0d1116',
            landing: '#2C2C2D',
            box: '#2C2C2D',
            select: '#2C2C2A',
          },
          divider: '#21262d',
        }),
  },
  transparent: 'rgba(255, 255, 255, 0)',
  typography: {
    fontFamily: [
      '"Pretendard Variable"',
      'Pretendard',
      '-apple-system',
      'BlinkMacSystemFont',
      'system-ui',
      'Roboto',
      '"Helvetica Neue"',
      '"Segoe UI"',
      '"Apple SD Gothic Neo"',
      '"Noto Sans KR"',
      '"Malgun Gothic"',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      'sans-serif',
    ].join(','),
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          background: mode === 'light' ? '#ffffff' : '#0d1116',
          color: 'black',
        },
        root: {
          borderRadius: 0,
          boxShadow: 'none',
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          padding: '20px',
        },
      },
    },
  },
});
