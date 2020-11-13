import React, { useState } from 'react';

import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import DropDownIcon from '@material-ui/icons/ArrowDropDown';
import Link from './Link';
import HeaderMenu from './HeaderMenu';
import InlineButton from './InlineButton';
import logo from '../assets/WildMe-Logo-Gradient.png';

const products = ['Catalog', 'Intelligent Agent', 'Wow'];

export default function AppHeader() {
  const theme = useTheme();
  const [productMenuOpen, setProductMenuOpen] = useState(false);

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
      <Toolbar
        style={{
          paddingRight: 24,
          width: '90%',
          margin: '0 auto',
        }}
      >
        <Link style={{ display: 'flex', alignItems: 'center' }} noUnderline href="/">
          <img style={{ height: 40 }} src={logo} alt="Wild Me gradient logo" />
          <Typography
            component="h5"
            variant="h5"
            noWrap
            style={{ marginLeft: 12, fontSize: 20, flexGrow: 1, color: theme.palette.common.white }}
          >
            Wild Me
          </Typography>
        </Link>
        <div
          style={{ color: theme.palette.common.white, flexShrink: 0 }}
        >
          <InlineButton
            noUnderline
            style={{
              textTransform: 'unset',
              fontSize: 16,
              letterSpacing: '0.04em',
              display: 'flex',
              alignItems: 'center',
              color: theme.palette.common.white,
            }}
            onClick={() => setProductMenuOpen(!productMenuOpen)}
          >
            Products
            <DropDownIcon />
          </InlineButton>
          <HeaderMenu
            open={productMenuOpen}
            itemCount={3}
            style={{ right: 12 }}
          >
            <MenuList onClick={() => setProductMenuOpen(false)}>
              {products.map(product => (
                <Link
                  key={product}
                  noUnderline
                  href="/"
                  style={{ width: '100%' }}
                >
                  <MenuItem className="dark-menu-item">
                    <Typography>{product}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </MenuList>
          </HeaderMenu>
        </div>
      </Toolbar>
    </AppBar>
  );
}
