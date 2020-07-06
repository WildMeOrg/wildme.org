import React from 'react';

import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default function AppHeader() {
  const theme = useTheme();

  return (
    <AppBar
      position="fixed"
      style={{
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      }}
    >
      <Toolbar
        style={{
          paddingRight: 24,
          width: '90%',
          margin: '0 auto',
        }}
      >
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          style={{ fontSize: 20, flexGrow: 1 }}
        >
          Wildbook
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
