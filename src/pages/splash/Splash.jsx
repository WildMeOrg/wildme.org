import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import banner from '../../assets/banner.png';
import howItWorks from '../../assets/how_wildbook_works.png';

export default function Splash() {
  const theme = useTheme();

  return (
    <div style={{ textAlign: 'center', marginTop: 40 }}>
      <img
        width="100%"
        height="auto"
        style={{ maxWidth: 800 }}
        src={banner}
      />
      <Typography variant="h3" style={{ padding: '0 8px' }}>
        <span>
          <FormattedMessage id="CONSERVATION_MEETS" />
        </span>
        <span
          style={{
            marginLeft: 12,
            color: theme.palette.secondary.main,
          }}
        >
          <FormattedMessage id="MACHINE_LEARNING" />
        </span>
      </Typography>
      <div style={{ width: '100%', backgroundColor: '#e5e0ff' }}>
        <Typography
          style={{ marginTop: 80, padding: 80 }}
          variant="h6"
        >
          Wildbook is an open source web app that accelerates research
          for conservation biologists.
        </Typography>
      </div>
      <div>
        <Typography variant="h4">HOW WILDBOOK WORKS</Typography>
        <img src={howItWorks} />
      </div>
    </div>
  );
}
