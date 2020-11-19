import React from 'react';
import Typography from '@material-ui/core/Typography';
import GoIcon from '@material-ui/icons/NavigateNext';
import Link from '../../components/Link';

export default function ActionableMetric({
  title,
  description,
  logo,
  ask,
  href,
  external,
}) {
  const Logo = logo;
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        textAlign: 'left',
        width: 240,
        flexShrink: '0',
        margin: '32px 0',
      }}
    >
      <Logo style={{ height: 88, width: 88 }} />
      <Typography variant="h5" style={{ marginTop: 12 }}>
        {title}
      </Typography>
      <Typography variant="subtitle2" style={{ marginTop: 24 }}>
        {description}
      </Typography>
      <Link
        noUnderline
        href={href}
        external={external}
        style={{
          marginTop: 24,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {ask}
        <GoIcon />
      </Link>
    </div>
  );
}
