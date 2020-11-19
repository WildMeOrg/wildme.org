import React from 'react';
import { FormattedMessage } from 'react-intl';
import Typography from '@material-ui/core/Typography';
import Link from './Link';
import ButtonLink from './ButtonLink';
import GridContainer from './GridContainer';

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
        labelId: 'SPONSORS',
        path: '/sponsors',
      },
      {
        labelId: 'OUR_TEAM',
        path: '/people',
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
        labelId: 'CONTRIBUTE',
        path: '/contribute',
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
      {
        labelId: 'WORK_WITH_US',
        path: '/careers',
      },
    ],
  },
];

export default function Footer() {
  return (
    <div style={{ width: '100%' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          padding: '60px 12px',
          textAlign: 'center',
        }}
      >
        <Typography variant="h5" style={{ color: 'white' }}>
          <FormattedMessage id="DONATION_ASK" />
        </Typography>
        <ButtonLink
          href="/contribute"
          display="primary"
          style={{ marginTop: 40, background: 'black' }}
        >
          <FormattedMessage id="CONTRIBUTE" />
        </ButtonLink>
      </div>
      <GridContainer>
        {footerCategories.map(category => {
          return (
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
      </GridContainer>
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
  );
}
