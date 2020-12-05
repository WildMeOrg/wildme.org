import React from 'react';

export default function LogoSoup({
  logoDefinitions,
  logos,
  height = 30,
  ...rest
}) {
  const iterable =
    logoDefinitions || logos.map(logo => ({ imageSrc: logo }));

  return (
    <div {...rest}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
        }}
      >
        {iterable.map(logo => (
          <img
            key={logo.imageSrc}
            style={{
              margin: 20,
              maxWidth: '80vw',
              filter: logo.invertLogo ? 'invert(1)' : 'unset',
            }}
            src={logo.imageSrc}
            height={height}
            width="auto"
            alt={logo.name || 'Organization logo'}
          />
        ))}
      </div>
    </div>
  );
}
