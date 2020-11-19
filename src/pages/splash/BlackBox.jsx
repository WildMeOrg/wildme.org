import React from 'react';
import { useTheme } from '@material-ui/core/styles';

export default function BlackBox({ children }) {
  const theme = useTheme();

  return (
    <div
      style={{
        margin: 20,
        width: 400,
        background: theme.palette.common.black,
        color: 'white',
        padding: '40px 60px 0 60px',
        textAlign: 'left',
      }}
    >
      {children}
    </div>
  );
}
