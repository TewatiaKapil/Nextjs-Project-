'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Grid } from '@mui/material';
import { Assessment, AssuredWorkload, BarChart, Bloodtype, BugReport, CalendarMonth, Face, Help, Home, InsertChart, KeyboardArrowLeft, KeyboardArrowRight, MenuBookOutlined, PowerSettingsNew, Settings, Shuffle } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { Showhidesidebar } from '@/app/store/Siderbar/action';
import { useRouter } from 'next/navigation';
const drawerWidth = 240;

interface Props {

  window?: () => Window;
}

export default function MySidebar(props: Props) {
  const { window } = props;
  const router = useRouter();
  const isSidebarVisible = useSelector((state: any) => state?.Sidebar?.isVisible);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(Showhidesidebar());
  };

  const onCalendarClick = () => {
    router.push("/calendar");
  };
  const onEmployee = () => {
    router.push("/employeetable")

  }
  const drawer = (
    <div>
      <button onClick={handleClick}>{!isSidebarVisible ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </button>
      <Grid container spacing={1}>
        <Grid item xs={2} className='side-border'>
          <List className='content'><Home /></List>
          <List className='content'><Settings /></List>
          <List className='content'><Help /></List>
          <List className='content'><Shuffle /></List>
          <List className='content'><BarChart /></List>
          <List className='content'><PowerSettingsNew /></List>
          <List className='content'><Shuffle /></List>
          <List className='content'><InsertChart /></List>

        </Grid>


        {isSidebarVisible &&
          <Grid item xs={10}>
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <Face />
                  <ListItemText primary={'face Recognition'} />
                  <ArrowForwardIosIcon />
                </ListItemButton>
              </ListItem>
            </List>

            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <MenuBookOutlined />
                  <ListItemText primary={'Daily Visit'} />
                  <ArrowForwardIosIcon />
                </ListItemButton>
              </ListItem>
            </List>

            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <Bloodtype />
                  <ListItemText primary={'Donate'} />
                  <ArrowForwardIosIcon />
                </ListItemButton>
              </ListItem>
            </List>
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <AssuredWorkload />
                  <ListItemText primary={'Work Orders'} />
                  <ArrowForwardIosIcon />
                </ListItemButton>
              </ListItem>
            </List>
            <List>
              <ListItem disablePadding onClick={() => onEmployee()}>
                <ListItemButton>
                  <Assessment />
                  <ListItemText primary={'Employee'} />
                  <ArrowForwardIosIcon />
                </ListItemButton>
              </ListItem>
            </List>
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <Assessment />
                  <ListItemText primary={'Reports History'} />
                  <ArrowForwardIosIcon />
                </ListItemButton>
              </ListItem>
            </List>

            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <BugReport />
                  <ListItemText primary={'Test History'} />
                  <ArrowForwardIosIcon />
                </ListItemButton>
              </ListItem>
            </List>

            <List>
              <ListItem disablePadding onClick={() => onCalendarClick()}>
                <ListItemButton>
                  <CalendarMonth />
                  <ListItemText primary={'Calender Type'} />
                  <ArrowForwardIosIcon />
                </ListItemButton>
              </ListItem>
            </List>
          </Grid>
        }
      </Grid>


    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"

          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}