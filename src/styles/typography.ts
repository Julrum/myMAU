const calcRem = (size: number) => `${size / 16}rem`;

export const typography = {
  typography: {
    fontFamily: [
      '"Pretendard JP Variable"',
      '"Pretendard JP"',
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
    fontSize: 16,
    h1: {
      fontSize: calcRem(36),
      lineHeight: 1.33,
      letterSpacing: 'normal',
    },
    h2: {
      fontSize: calcRem(28),
      lineHeight: 1.36,
      letterSpacing: 'normal',
    },
    h3: {
      fontSize: calcRem(24),
      lineHeight: 1.33,
      letterSpacing: 'normal',
    },
    h4: {
      fontSize: calcRem(20),
      lineHeight: 1.3,
      letterSpacing: 'normal',
    },
    h5: {
      fontSize: calcRem(17),
      lineHeight: 1.41,
      letterSpacing: 'normal',
    },
    h6: {
      fontSize: calcRem(16),
      lineHeight: 1.63,
      letterSpacing: 'normal',
    },
    body1: {
      fontSize: calcRem(15),
      lineHeight: 1.6,
      letterSpacing: 'normal',
    },
    label1: {
      fontSize: calcRem(16),
      lineHeight: 1.5,
      letterSpacing: 'normal',
    },
    label2: {
      fontSize: calcRem(14),
      lineHeight: 1.43,
      letterSpacing: 'normal',
    },
    caption1: {
      fontSize: calcRem(12),
      lineHeight: 1.33,
      letterSpacing: 'normal',
    },
    caption2: {
      fontSize: calcRem(11),
      lineHeight: 1.27,
      letterSpacing: 'normal',
    },
  },
};
