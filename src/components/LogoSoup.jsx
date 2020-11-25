import React from 'react';

export default function LogoSoup({ logos, height = 30, ...rest }) {
  return (
    <div {...rest}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
        }}
      >
        {logos.map(logo => (
          <img
            key={logo}
            style={{ margin: 20, maxWidth: '80vw' }}
            src={logo}
            height={height}
            width="auto"
            alt="Logo"
          />
        ))}
      </div>
    </div>
  );
}
