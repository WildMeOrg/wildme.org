import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import OpenIcon from '@material-ui/icons/ChevronRight';

import navigation from '../constants/navigation';
import Link from './Link';
import ButtonLink from './ButtonLink';
import logo from '../assets/WildMe-Logo-Gradient.png';

function Entry({ messageId, message, ...rest }) {
  return (
    <ListItem style={{ padding: '4px 0 4px 8px' }}>
      <Link noUnderline {...rest}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <ListItemText>
            <Typography>
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
  const [expandedCategory, setExpandedCategory] = useState(null);

  return (
    <Drawer open={open} onClose={onClose}>
      <div
        style={{
          width: 280,
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
              onClick={handleClick}
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
        <div style={{ maxHeight: '100%', overflow: 'scroll' }}>
          {navigation.map(category => (
            <MuiAccordion
              expanded={expandedCategory === category.categoryId}
              onChange={() => {
                if (expandedCategory === category.categoryId) {
                  setExpandedCategory(null);
                } else {
                  setExpandedCategory(category.categoryId);
                }
              }}
              style={{ boxShadow: 'unset' }}
              key={category.categoryId}
            >
              <MuiAccordionSummary
                style={{ margin: 0, minHeight: 0 }}
                expandIcon={<OpenIcon />}
              >
                <Typography variant="h6">
                  <FormattedMessage id={category.categoryLabelId} />
                </Typography>
              </MuiAccordionSummary>
              <MuiAccordionDetails style={{ padding: '0 16px' }}>
                <List style={{ padding: 0 }}>
                  {category.entries.map(entry => (
                    <Entry
                      key={entry.path}
                      messageId={entry.labelId}
                      href={entry.path}
                      onClick={handleClick}
                      external={entry.external}
                    />
                  ))}
                </List>
              </MuiAccordionDetails>
            </MuiAccordion>
          ))}
        </div>
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
