import React from 'react';
import { useTheme } from '@material-ui/core/styles';

const width = '90%';

export default function TransparentContainer({ children }) {
  const theme = useTheme();

  return (
    <div
      style={{
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
          width: '100%',
        }}
      >
        {children}
      </div>
    </div>
  );
}
