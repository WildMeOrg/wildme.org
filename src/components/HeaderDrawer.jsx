import React from 'react';
import { FormattedMessage } from 'react-intl';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import Link from './Link';
import ButtonLink from './ButtonLink';
import logo from '../assets/WildMe-Logo-Gradient.png';

function Entry({ messageId, message, Icon, ...rest }) {
  return (
    <ListItem style={{ marginLeft: 8 }}>
      <Link noUnderline {...rest}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <ListItemText>
            <Typography variant="h5">
              {messageId ? (
                <FormattedMessage id={messageId} />
              ) : (
                message
              )}
            </Typography>
          </ListItemText>
        </div>
      </Link>
    </ListItem>
  );
}

export default function AppDrawer({ open, onClose, handleClick }) {
  return (
    <Drawer open={open} onClose={onClose}>
      <div
        style={{
          width: 300,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
        }}
      >
        <div>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            style={{
              margin: 20,
            }}
          >
            <Link
              style={{ display: 'flex', alignItems: 'center' }}
              noUnderline
              href="/"
            >
              <img
                style={{ height: 60 }}
                src={logo}
                alt="Wild Me gradient logo"
              />
              <Typography
                component="h5"
                variant="h5"
                noWrap
                style={{
                  marginLeft: 12,
                  fontSize: 28,
                  flexGrow: 1,
                  width: 100, // safari fix
                }}
              >
                <span style={{ fontWeight: 500 }}>WILD</span>
                <span style={{ fontWeight: 200 }}>ME</span>
              </Typography>
            </Link>
          </Typography>
          <Divider
            style={{
              marginTop: 12,
              marginBottom: 12,
              backgroundColor: '#bbb',
            }}
          />
        </div>
        <List>
          <Entry
            message="Projects"
            href="/projects"
            onClick={handleClick}
          />
          <Entry
            message="Products"
            href="/products"
            onClick={handleClick}
          />
          <Entry
            message="Services"
            href="/services"
            onClick={handleClick}
          />
          <Entry message="Code" href="/code" onClick={handleClick} />
          <Entry
            message="About Us"
            href="/about"
            onClick={handleClick}
          />
          <Entry
            message="Resources"
            href="/resources"
            onClick={handleClick}
          />
          <Entry
            message="Connect"
            href="/connect"
            onClick={handleClick}
          />
        </List>
        <div style={{ backgroundColor: 'rgb(241 241 241)' }}>
          <ButtonLink
            style={{ margin: '32px 0 32px 32px' }}
            href="/donate"
            display="primary"
            size="small"
          >
            Donate
          </ButtonLink>
        </div>
      </div>
    </Drawer>
  );
}
