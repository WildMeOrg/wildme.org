import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import logo from '../../assets/WildMe-Logo-white.png';

export default function Splash() {
  const theme = useTheme();

  return (
    <div style={{ textAlign: 'center', marginTop: 64 }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '90vh',
          justifyContent: 'center',
          alignItems: 'center',
          color: theme.palette.common.white,
          background: 'linear-gradient(90deg, #21BDC1, #41D06A)',
          backgroundSize: '400% 400%',
          animation: 'gradient 8s ease infinite',
        }}
      >
        <img style={{ width: '40%' }} src={logo} alt="Wild Me logo" />
        <Typography variant="h6" style={{ fontSize: 16 }}>
          <FormattedMessage id="SPLASH_TAGLINE" />
        </Typography>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '90vh',
          justifyContent: 'center',
          alignItems: 'center',
          color: theme.palette.common.white,
          background: 'black',
        }}
      >
        <Typography variant="h3">
          <span>Wild Me </span>
          <span style={{ fontStyle: 'italic' }}>Sage</span>
        </Typography>
        <Typography variant="subtitle1">
          Cataloguing and matching for the research community.
        </Typography>
      </div>
    </div>
  );
}
