import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Box } from '../../components/Containers';
import Link from '../../components/Link';

export default function ImageCard({
  title,
  date,
  imgSrc,
  url,
  variant,
}) {
  return (
    <Box
      n={3}
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
      variant={variant}
    >
      <img
        src={imgSrc}
        style={{
          width: '100%',
          minHeight: 280,
          objectFit: 'cover',
        }}
        alt={title}
      />
      <div style={{ padding: '32px 32px 0 32px' }}>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="subtitle2" style={{ marginTop: 12 }}>
          {date}
        </Typography>
      </div>
      <div style={{ padding: '12px 32px 40px 32px' }}>
        <Link href={url}>Read more</Link>
      </div>
    </Box>
  );
}
