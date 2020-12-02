import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from './Link';
import { Box, SpaceAroundCard } from './Containers';
import logo from '../assets/WildMe-Logo-Gradient.png';

const footerCategories = [
  {
    categoryId: 'work',
    categoryLabelId: 'WORK',
    entries: [
      {
        labelId: 'PROJECTS',
        path: '/projects',
      },
      {
        labelId: 'PRODUCTS',
        path: '/products',
      },
      {
        labelId: 'SERVICES',
        path: '/services',
      },
      {
        labelId: 'CODE',
        path: '/code',
      },
    ],
  },
  {
    categoryId: 'about',
    categoryLabelId: 'ABOUT',
    entries: [
      {
        labelId: 'OUR_TEAM',
        path: '/team',
      },
      {
        labelId: 'SUPPORTERS',
        path: '/supporters',
      },
      {
        labelId: 'PRESS',
        path: '/press',
      },
      {
        labelId: 'PUBLICATIONS',
        path: '/publications',
      },
    ],
  },
  {
    categoryId: 'resources',
    categoryLabelId: 'RESOURCES',
    entries: [
      {
        labelId: 'START_A_WILDBOOK',
        path: 'http://wiki.wildbook.org/en/researchers/overview',
        external: true,
      },
      {
        labelId: 'SUPPORT_&_FEEDBACK',
        path: 'https://community.wildbook.org/',
        external: true,
      },
      {
        labelId: 'DOCUMENTATION',
        path: 'http://wiki.wildbook.org/',
        external: true,
      },
      {
        labelId: 'LEGAL',
        path: '/legal',
      },
    ],
  },
  {
    categoryId: 'connect',
    categoryLabelId: 'CONNECT',
    entries: [
      {
        labelId: 'CONTACT_US',
        path: '/contact',
      },
      {
        labelId: 'VOLUNTEER',
        path: '/volunteer',
      },
      {
        labelId: 'DONATE',
        path: '/donate',
      },
      {
        labelId: 'CAREERS',
        path: '/careers',
      },
    ],
  },
];

export default function Footer() {
  const theme = useTheme();

  return (
    <Box variant="black" style={{ margin: 0 }}>
      <SpaceAroundCard
        reverse
        style={{ padding: '30px 30px 20px 30px' }}
      >
        {footerCategories.map(category => (
          <div
            key={category.categoryId}
            style={{
              display: 'flex',
              flexDirection: 'column',
              margin: '32px 0',
              width: 240,
            }}
          >
            <Typography
              variant="subtitle1"
              style={{ marginBottom: 20 }}
            >
              {category.categoryLabelId}
            </Typography>
            {category.entries.map(entry => (
              <Typography
                key={entry.labelId}
                style={{ marginTop: 4 }}
              >
                <Link
                  // noUnderline
                  href={entry.path}
                  external={Boolean(entry.external)}
                >
                  <FormattedMessage id={entry.labelId} />
                </Link>
              </Typography>
            ))}
          </div>
        ))}
      </SpaceAroundCard>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: 12,
        }}
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
            color: theme.palette.common.white,
            width: 100, // safari fix
          }}
        >
          <span style={{ fontWeight: 500 }}>WILD</span>
          <span style={{ fontWeight: 200 }}>ME</span>
        </Typography>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: 32,
        }}
      >
        <Typography variant="body2" style={{ marginRight: 12 }}>
          Copyright © 2020 Wild Me. All rights reserved.
        </Typography>
      </div>
    </Box>
    /* <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '80%',
          }}
        >
          <div>
            <Button
              style={{ textTransform: 'unset', color: 'white' }}
              display="basic"
            >
              English
            </Button>
            <Button
              style={{ textTransform: 'unset', color: 'white' }}
              display="basic"
            >
              Español
            </Button>
          </div>
          <div>
            <IconButton href="https://twitter.com/wildbookORG">
              <TwitterIcon />
            </IconButton>
            <IconButton href="https://www.facebook.com/wildmeorg/">
              <FacebookIcon />
            </IconButton>
          </div>
        </div> */
  );
}
