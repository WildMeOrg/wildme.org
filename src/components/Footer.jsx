import React from 'react';
import { FormattedMessage } from 'react-intl';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import Button from './Button';
import Link from './Link';

const dotSpacing = 8;

const footerLinks = [
  {
    labelId: 'HOME',
    path: '/',
  },
  {
    labelId: 'ABOUT',
    path: '/about',
  },
  {
    labelId: 'PROJECTS',
    path: '/projects',
  },
  {
    labelId: 'RESOURCES',
    path: '/resources',
  },
  {
    labelId: 'SPONSORS',
    path: '/sponsors',
  },
  {
    labelId: 'LEGAL',
    path: '/legal',
  },
];

export default function Footer() {
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
          textAlign: 'center'
        }}
      >
        <Typography>
          Wildbook
          <FormattedMessage id="OPEN_SOURCE_SOFTWARE_CREATED_BY" />
          <Link href="http://wildme.org/">Wild Me</Link>
          <FormattedMessage id="END_OF_SENTENCE" />
        </Typography>
        <Button display="primary" style={{ marginTop: 20 }}><FormattedMessage id="CONTRIBUTE" /></Button>
      </div>
      <div style={{ width: '80%', margin: '0 auto' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            padding: '24px 0',
          }}
        >
          <Typography component="span" style={{ margin: '12px 0' }}>
            {footerLinks.map((footerLink, i) => (
              <React.Fragment key={footerLink.labelId}>
                {i !== 0 && ' '}
                <Link
                  style={{
                    marginRight: dotSpacing,
                    marginLeft: dotSpacing,
                  }}
                  href={footerLink.path}
                >
                  <FormattedMessage id={footerLink.labelId} />
                </Link>
              </React.Fragment>
            ))}
          </Typography>
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
