import React from 'react';
import { useTheme } from '@material-ui/core/styles';

const width = '90%';

export default function GridContainer({ children }) {
  const theme = useTheme();

  return (
    <div
      style={{
        background: theme.palette.common.black,
        width,
        margin: '0 auto',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          color: theme.palette.common.white,
          maxWidth: 1200,
          width,
          margin: '0 auto',
        }}
      >
        {children}
      </div>
    </div>
  );
}
