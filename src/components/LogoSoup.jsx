import React from 'react';
import Divider from '@material-ui/core/Divider';

export default function LogoSoup({ logos, height = 30 }) {
  return (
    <div>
      <Divider style={{ width: '100%', marginTop: 40 }} />
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
      <Divider style={{ width: '100%', marginBottom: 40 }} />
    </div>
  );
}
