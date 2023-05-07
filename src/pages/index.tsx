import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import {
  AppBar,
  Box,
  Chip,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ToggleButton,
  ToggleButtonGroup,
  Toolbar,
  Typography,
} from '@mui/material';
import { Warning as WarningIcon } from '@mui/icons-material';

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
      <AppBar
        position="static"
        sx={{
          height: { xs: 80, md: 100 },
          backgroundColor: { xs: '#f4f6f8', md: '#ffffff' },
        }}
      >
        <Toolbar
          disableGutters
          sx={{ p: { xs: '24px 20px', md: '40px 80px 20px 80px' } }}
        >
          <Typography
            sx={{
              fontSize: 24,
              fontWeight: 900,
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
            sx={{ width: 108, height: 40 }}
          >
            <ToggleButton
              value="left"
              aria-label="left aligned"
              sx={{ width: 54, height: 40, borderRadius: 4 }}
              onClick={() => {
                router.push({ pathname, query }, asPath, { locale: 'ja' });
              }}
            >
              <Typography sx={{ fontSize: 24 }}>🇯🇵</Typography>
            </ToggleButton>
            <ToggleButton
              value="right"
              sx={{ width: 54, height: 40, borderRadius: 4 }}
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
        <Box sx={{ px: { xs: 2.5, md: 10 }, py: { xs: 4, md: 7.5 } }}>
          <Typography
            sx={{ fontWeight: 'bold', fontSize: 24, mb: { xs: 2, md: 5 } }}
          >
            {t('title1')}
            <br />
            {t('title2')}
          </Typography>
          <Box
            sx={{
              height: { xs: 24, md: 40 },
              p: { xs: '0 0 8px 0', md: '8px 16px' },
            }}
          >
            <Typography sx={{ fontSize: 16, lineHeight: 1.5 }}>
              운영시간표
            </Typography>
          </Box>
          <List sx={{ backgroundColor: '#ffffff', borderRadius: 5 }}>
            <ListItem sx={{ p: 2.5 }}>
              <ListItemAvatar>
                <Image src="/thumbnail/1.png" width={56} height={56} alt="" />
              </ListItemAvatar>
              <ListItemText
                disableTypography
                sx={{ ml: 1 }}
                primary={
                  <Typography sx={{ fontSize: 18, lineHeight: 1.44 }}>
                    제 1식당
                  </Typography>
                }
                secondary={
                  <Chip
                    size="small"
                    label="영업종료"
                    color="error"
                    icon={<WarningIcon fontSize="small" />}
                  />
                }
              />
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
