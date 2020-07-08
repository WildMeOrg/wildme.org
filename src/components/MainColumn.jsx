import React from 'react';

export default function({ children, style, ...rest }) {
  return (
    <div
      style={{
        margin: '64px auto 200px auto',
        width: '100%',
        position: 'relative',
        maxWidth: 1000,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
