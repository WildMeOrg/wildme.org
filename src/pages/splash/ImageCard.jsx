import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Box } from '../../components/Containers';

export default function ImageCard({ title, date, imgSrc, variant }) {
  return (
    <Box
      n={3}
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
      variant={variant}
    >
      <img src={imgSrc} width="100%" alt={title} />
      <div style={{ padding: 30 }}>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="subtitle2" style={{ marginTop: 12 }}>
          {date}
        </Typography>
      </div>
    </Box>
  );
}
