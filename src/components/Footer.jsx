import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import Link from './Link';
import { Box, SpaceAroundCard } from './Containers';
import logo from '../assets/WildMe-Logo-Gradient.png';
import navigation from '../constants/navigation';

const iconMap = {
  facebook: FacebookIcon,
  github: GitHubIcon,
  twitter: TwitterIcon,
};

function SocialLink({ variant, href }) {
  const theme = useTheme();
  const IconComponent = iconMap[variant];

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <IconButton>
        <IconComponent
          fontSize="large"
          style={{ color: theme.palette.common.white }}
        />
      </IconButton>
    </a>
  );
}

export default function Footer() {
  const theme = useTheme();

  return (
    <Box variant="black" style={{ margin: 0 }}>
      <div
        style={{
          paddingTop: 30,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <SocialLink
          variant="github"
          href="https://github.com/WildMeOrg"
        />
        <SocialLink
          variant="facebook"
          href="https://www.facebook.com/wildmeorg/"
        />
        <SocialLink
          variant="twitter"
          href="https://twitter.com/WildMeOrg"
        />
      </div>
      <SpaceAroundCard
        reverse
        style={{ padding: '0 30px 20px 30px' }}
      >
        {navigation.map(category => (
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
                  nav
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
      <Link
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: 12,
        }}
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
            color: theme.palette.common.white,
            width: 100, // safari fix
          }}
        >
          <span style={{ fontWeight: 500 }}>WILD</span>
          <span style={{ fontWeight: 200 }}>ME</span>
        </Typography>
      </Link>
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
            <IconButton href="https://twitter.com/WildMeOrg">
              <TwitterIcon />
            </IconButton>
            <IconButton href="https://www.facebook.com/wildmeorg/">
              <FacebookIcon />
            </IconButton>
          </div>
        </div> */
  );
}
