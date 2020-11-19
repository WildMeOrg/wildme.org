import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Box } from '../../components/Containers';

export default function ImageCard({ title, date, imgSrc }) {
  return (
    <Box
      n={3}
      black
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div style={{ padding: 30 }}>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="subtitle2" style={{ marginTop: 12 }}>
          {date}
        </Typography>
      </div>
      <img src={imgSrc} width="100%" alt={title} />
    </Box>
  );
}
