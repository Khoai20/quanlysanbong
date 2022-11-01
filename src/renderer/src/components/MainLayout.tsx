import * as React from 'react';
import {
  Box,
  CssBaseline,
  Paper,
  BottomNavigation,
  BottomNavigationAction,
} from '@mui/material';
import ListIcon from '@mui/icons-material/List';
import SettingsIcon from '@mui/icons-material/Settings';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import Pitch from './Tabs/Pitch';
import Reservation from './Tabs/Reservation';
import Service from './Tabs/Service';
import Setting from './Tabs/Setting';

export default function MainLayout() {
  const [value, setValue] = React.useState(0);
  const RenderTab = () => {
    switch (value) {
      case 0:
        return <Pitch />;
        break;
      case 1:
        return <Reservation />;
        break;
      case 2:
        return <Setting />;
        break;
      case 3:
        return <Service />;
        break;
      default:
        return <Pitch />;
        break;
    }
  };

  return (
    <>
      {RenderTab()}
      <Box sx={{ pb: 7, mt: 20 }}>
        <CssBaseline />

        <Paper
          sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
          elevation={2}
        >
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction label="Pitch" icon={<ListIcon />} />
            <BottomNavigationAction
              label="Reservation"
              icon={<BookOnlineIcon />}
            />
            <BottomNavigationAction label="Setting" icon={<SettingsIcon />} />
            <BottomNavigationAction
              label="Service"
              icon={<RoomServiceIcon />}
            />
          </BottomNavigation>
        </Paper>
      </Box>
    </>
  );
}
