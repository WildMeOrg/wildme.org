import React from 'react';
import { FormattedMessage } from 'react-intl';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import Button from './Button';
import Link from './Link';

const footerCategories = [
  {
    categoryId: 'about',
    categoryLabelId: 'ABOUT',
    entries: [
      {
        labelId: 'HOW_IT_WORKS',
        path: '/how-it-works',
      },
      {
        labelId: 'PRESS_&_TESTIMONIALS',
        path: '/press',
      },
      {
        labelId: 'PUBLICATIONS',
        path: '/publications',
      },
      {
        labelId: 'SPONSORS',
        path: '/sponsors',
      },
      {
        labelId: 'LEGAL',
        path: '/legal',
      },
    ],
  },
  {
    categoryId: 'projects',
    categoryLabelId: 'PROJECTS',
    entries: [
      {
        labelId: 'FLUKEBOOK',
        path: '/flukebook',
      },
      {
        labelId: 'WHALESHARK_DOT_ORG',
        path: '/whaleshark.org',
      },
      {
        labelId: 'MANTAMATCHER',
        path: '/mantamatcher',
      },
      {
        labelId: 'ALL_PROJECTS',
        path: '/projects',
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
        labelId: 'DOCUMENTATION',
        path: 'http://wiki.wildbook.org/',
        external: true,
      },
      {
        labelId: 'WILD_ME_SERVICES',
        path: '/http://www.wildme.org/services/',
        external: true,
      },
    ],
  },
  {
    categoryId: 'connect',
    categoryLabelId: 'CONNECT',
    entries: [
      {
        labelId: 'CONTRIBUTE',
        path: '/contribute',
      },
      {
        labelId: 'SUPPORT_&_FEEDBACK',
        path: 'https://community.wildbook.org/',
        external: true,
      },
      {
        labelId: 'TWITTER',
        path: 'https://twitter.com/WildbookORG',
        external: true,
      },
      {
        labelId: 'FACEBOOK',
        path: 'https://www.facebook.com/wildmeorg/',
        external: true,
      },
    ],
  },
];

export default function Footer() {
  const smallScreen = useMediaQuery('(min-width:600px)');

  return (
    <div style={{ width: '100%', paddingBottom: 16 }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          padding: '24px 12px',
          background: '#97ceff91',
          textAlign: 'center',
        }}
      >
        <Typography>
          Wildbook
          <FormattedMessage id="OPEN_SOURCE_SOFTWARE_CREATED_BY" />
          <Link href="http://wildme.org/">Wild Me</Link>
          <FormattedMessage id="END_OF_SENTENCE" />
        </Typography>
        <Button display="primary" style={{ marginTop: 20 }}>
          <FormattedMessage id="CONTRIBUTE" />
        </Button>
      </div>
      <div style={{ width: '80%', margin: '0 auto' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: smallScreen ? 'row' : 'column',
            justifyContent: 'space-between',
            margin: '0 4px 20px 4px',
          }}
        >
          {footerCategories.map(category => {
            return (
              <div
                key={category.categoryId}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  marginTop: 20,
                }}
              >
                <Typography variant="subtitle1">
                  {category.categoryLabelId}
                </Typography>
                {category.entries.map(entry => (
                  <Typography key={entry.labelId}>
                    <Link
                      noUnderline
                      href={entry.path}
                      external={Boolean(entry.external)}
                    >
                      <FormattedMessage id={entry.labelId} />
                    </Link>
                  </Typography>
                ))}
              </div>
            );
          })}
        </div>
        <Divider />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div>
            <Button
              style={{ textTransform: 'unset' }}
              display="basic"
            >
              English
            </Button>
            <Button
              style={{ textTransform: 'unset' }}
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
        </div>
      </div>
    </div>
  );
}
