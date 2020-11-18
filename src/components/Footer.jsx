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
import ButtonLink from './ButtonLink';
// import SubscribeButton from './SubscribeButton';

const footerCategories = [
  {
    categoryId: 'about',
    categoryLabelId: 'ABOUT',
    entries: [
      {
        labelId: 'PRESS',
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
        path: '/projects/flukebook',
      },
      {
        labelId: 'WHALESHARK_DOT_ORG',
        path: '/projects/whaleshark',
      },
      {
        labelId: 'MANTAMATCHER',
        path: '/projects/mantamatcher',
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
        path: 'http://www.wildme.org/services/',
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
    <div style={{ width: '100%' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          padding: '24px 12px',
          textAlign: 'center',
        }}
      >
        <Typography>
          <FormattedMessage id="DONATION_ASK" />
        </Typography>
        <ButtonLink
          href="/contribute"
          display="primary"
          style={{ marginTop: 20 }}
        >
          <FormattedMessage id="CONTRIBUTE" />
        </ButtonLink>
        {/* <SubscribeButton /> */}
      </div>
      <div
        style={{
          width: '100%',
          margin: '0 auto',
          background: 'black',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingBottom: 40,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: smallScreen ? 'row' : 'column',
            justifyContent: 'space-between',
            margin: '0 4px 20px 4px',
            width: '80%',
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
        {/* <div
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
        </div> */}
      </div>
    </div>
  );
}
