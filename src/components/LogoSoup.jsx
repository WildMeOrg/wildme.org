import React from 'react';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

export default function LogoSoup({
  logoDefinitions,
  logos,
  height = 30,
  showSubtitles,
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
        {iterable.map(logo => {
          const Container = logo.url ? 'a' : 'div';
          return (
            <Tooltip
              key={logo.imageSrc}
              title={
                <Typography variant="body2">
                  {logo.tooltip || logo.name}
                </Typography>
              }
            >
              <Container
                href={logo.url || undefined}
                target={logo.url ? '_blank' : undefined}
                rel={logo.url ? 'noopener noreferrer' : undefined}
                style={
                  logo.url ? { textDecoration: 'none' } : undefined
                }
              >
                <img
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
                {showSubtitles && (
                  <Typography
                    variant="h6"
                    style={{ textAlign: 'center', color: 'black' }}
                  >
                    {logo.name}
                  </Typography>
                )}
              </Container>
            </Tooltip>
          );
        })}
      </div>
    </div>
  );
}
