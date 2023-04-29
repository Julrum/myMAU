import * as React from 'react';
import {
  AppBar,
  Box,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';

const Home = () => {
  return (
    <>
      <AppBar sx={{ height: 100 }}>
        <Toolbar disableGutters>
          <Typography
            sx={{
              fontSize: 24,
              fontWeight: 900,
              lineHeight: 32,
              p: '40px 80px 20px 80px',
            }}
          >
            MyMAU
          </Typography>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ backgroundColor: '#f4f6f8', height: '100%' }}>
        <Toolbar sx={{ height: 100 }} />
        <Box sx={{ p: 5 }}>
          <Typography sx={{ fontWeight: 'bold', fontSize: 24, mb: 4 }}>
            오늘은
            <br />
            전기수업개시일 입니다.
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
