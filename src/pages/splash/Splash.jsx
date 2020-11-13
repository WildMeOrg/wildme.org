import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

export default function Splash() {
  const theme = useTheme();

  console.log(theme);

  return (
    <div style={{ textAlign: 'center', marginTop: 64 }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '90vh',
          justifyContent: 'center',
          color: theme.palette.common.white,
          background: 'linear-gradient(90deg, #21BDC1, #41D06A)',
          backgroundSize: '400% 400%',
          animation: 'gradient 10s ease infinite',
        }}
      >
        <Typography variant="h1">Wild Me</Typography>
        <Typography variant="h4" style={{ padding: '0 8px' }}>
          <FormattedMessage id="SPLASH_TAGLINE" />
        </Typography>
      </div>
    </div>
  );
}
