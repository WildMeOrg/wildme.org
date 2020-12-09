import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import GoIcon from '@material-ui/icons/NavigateNext';
import Link from '../../components/Link';

export default function ActionableMetric({
  title,
  description,
  logo,
  imgSrc,
  ask,
  href,
  external,
}) {
  const theme = useTheme();
  const Logo = logo;
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        margin: '60px 44px',
      }}
    >
      {imgSrc ? (
        <img
          src={imgSrc}
          alt={title}
          style={{ height: 120, width: 120, marginLeft: 20 }}
        />
      ) : (
        <Logo style={{ height: 92, width: 92 }} />
      )}
      <Typography variant="h5" style={{ marginTop: 12 }}>
        {title}
      </Typography>
      <Typography variant="body1" style={{ marginTop: 24 }}>
        {description}
      </Typography>
      <Link
        // noUnderline
        href={href}
        external={external}
        style={{
          marginTop: 24,
          display: 'flex',
          alignItems: 'center',
          fontSize: 18,
          color: theme.palette.primary.main,
        }}
      >
        {ask}
        <GoIcon />
      </Link>
    </div>
  );
}
