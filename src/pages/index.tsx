import { useState } from 'react';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import {
  AppBar,
  Box,
  List,
  ListItem,
  ListItemText,
  ToggleButton,
  ToggleButtonGroup,
  Toolbar,
  Typography,
} from '@mui/material';

const Home = () => {
  const router = useRouter();
  const { pathname, asPath, query } = router;
  const { t, lang } = useTranslation('common');

  const [alignment, setAlignment] = useState<string | null>(
    lang === 'ja' ? 'left' : 'right',
  );

  const handleAlignment = (
    _: React.MouseEvent<HTMLElement>,
    newAlignment: string | null,
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <>
      <AppBar sx={{ height: 100 }}>
        <Toolbar disableGutters sx={{ p: '40px 80px 20px 80px' }}>
          <Typography
            sx={{
              fontSize: 24,
              fontWeight: 900,
              lineHeight: 32,
              flexGrow: 1,
            }}
          >
            MyMAU
          </Typography>
          <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="language"
          >
            <ToggleButton
              value="left"
              aria-label="left aligned"
              onClick={() => {
                router.push({ pathname, query }, asPath, { locale: 'ja' });
              }}
            >
              <Typography sx={{ fontSize: 24 }}>🇯🇵</Typography>
            </ToggleButton>
            <ToggleButton
              value="right"
              aria-label="right aligned"
              onClick={() => {
                router.push({ pathname, query }, asPath, { locale: 'ko' });
              }}
            >
              <Typography sx={{ fontSize: 24 }}>🇰🇷</Typography>
            </ToggleButton>
          </ToggleButtonGroup>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ backgroundColor: '#f4f6f8', height: '100%' }}>
        <Toolbar sx={{ height: 100 }} />
        <Box sx={{ p: 5 }}>
          <Typography sx={{ fontWeight: 'bold', fontSize: 24, mb: 4 }}>
            {t('title')}
          </Typography>
          <Typography sx={{ fontSize: 16 }}>운영시간표</Typography>
          <List sx={{ backgroundColor: '#ffffff', borderRadius: 5 }}>
            <ListItem>
              <ListItemText primary="제 1식당" />
            </ListItem>
            <ListItem>
              <ListItemText primary="제 2식당" />
            </ListItem>
            <ListItem>
              <ListItemText primary="베이커리" />
            </ListItem>
            <ListItem>
              <ListItemText primary="세븐일레븐" />
            </ListItem>
            <ListItem>
              <ListItemText primary="세카이도" />
            </ListItem>
          </List>
        </Box>
      </Box>
    </>
  );
};

export default Home;
