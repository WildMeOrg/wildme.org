import React, { useState } from 'react';

import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import Link from './Link';
import ButtonLink from './ButtonLink';
import HeaderDrawer from './HeaderDrawer';
import AppHeaderMenu from './AppHeaderMenu';
import navigation from '../constants/navigation';
import logo from '../assets/WildMe-Logo-Gradient.png';

const linkMargin = 32;

export default function AppHeader() {
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const isSm = useMediaQuery(theme.breakpoints.down('sm'));

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <AppBar
      position="fixed"
      style={{
        background: theme.palette.common.black,
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      }}
    >
      {drawerOpen && (
        <HeaderDrawer
          open={drawerOpen}
          onClose={closeDrawer}
          handleClick={closeDrawer}
        />
      )}
      <Toolbar
        style={{
          paddingRight: 24,
          width: '90%',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Link
          style={{ display: 'flex', alignItems: 'center' }}
          noUnderline
          href="/"
        >
          <img
            style={{ height: 40 }}
            src={logo}
            alt="Wild Me gradient logo"
          />
          <Typography
            component="h5"
            variant="h5"
            noWrap
            style={{
              marginLeft: 12,
              fontSize: 20,
              flexGrow: 1,
              color: theme.palette.common.white,
              width: 100, // safari fix
            }}
          >
            <span style={{ fontWeight: 500 }}>WILD</span>
            <span style={{ fontWeight: 200 }}>ME</span>
          </Typography>
        </Link>
        {isSm && (
          <IconButton
            edge="start"
            aria-label="menu"
            onClick={() => setDrawerOpen(true)}
            style={{ color: theme.palette.common.white }}
          >
            <MenuIcon />
          </IconButton>
        )}
        {!isSm && (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {navigation.map(navItem => (
              <AppHeaderMenu
                key={navItem.categoryLabelId}
                titleId={navItem.categoryLabelId}
                items={navItem.entries}
              />
            ))}
            <ButtonLink
              href="/donate"
              style={{ marginLeft: linkMargin }}
              display="primary"
              size="small"
            >
              Donate
            </ButtonLink>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
