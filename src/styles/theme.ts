import { PaletteMode } from '@mui/material';

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: {
            light: '#3869fa',
            main: '#2559f4',
            dark: '#1a4de5',
          },
          text: {
            strong: '#000000',
            normal: '#171717',
            alternative: '#8a8a8a',
            assitive: '#c4c4c4',
            disabled: '#dcdcdc',
          },

          background: {
            default: '#f2f2f7',
            secondary: '#ffffff',
            tertiary: '#f2f2f7',
          },
          divider: '#f0f0f0',
        }
      : {
          primary: {
            light: '#3869fa',
            main: '#2559f4',
            dark: '#1a4de5',
          },
          text: {
            strong: '#000000',
            normal: '#171717',
            alternative: '#8a8a8a',
            assitive: '#c4c4c4',
            disabled: '#dcdcdc',
          },

          background: {
            default: '#f2f2f7',
            secondary: '#ffffff',
            tertiary: '#f2f2f7',
          },
          divider: '#21262d',
        }),
  },
  transparent: 'rgba(255, 255, 255, 0)',
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
