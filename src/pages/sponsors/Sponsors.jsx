import React from 'react';
import { useIntl, FormattedMessage } from 'react-intl';
import ReactPlayer from 'react-player/youtube';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import pineappleLogo from '../../assets/pineapple_fund_logo.png';
import pgnfLogo from '../../assets/pbnf_logo.png';
import sirenFleetLogo from '../../assets/siren_fleet.svg';
import georiaAquariumLogo from '../../assets/georgia-aquarium-logo.svg';
import britishEcologicalSocietyLogo from '../../assets/british_ecological_society_logo.png';
import adobeLogo from '../../assets/adobe_foundation_logo.png';
import nsfLogo from '../../assets/nsf_logo.png';
import waittLogo from '../../assets/waitt_logo.png';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import MainColumn from '../../components/MainColumn';
import LogoSoup from '../../components/LogoSoup';
import majorSponsors from './majorSponsors';

const logos = [
  {
    src: pineappleLogo,
    url: 'https://en.wikipedia.org/wiki/Pineapple_Fund',
    alt: 'The Pineapple Fund',
  },
  {
    src: nsfLogo,
    url: 'https://www.nsf.gov/',
    alt: 'National Science Foundation',
  },
  {
    src: pgnfLogo,
    url: 'https://www.pbnf.nl/',
    alt: 'The Prince Bernhard Nature Fund',
  },
  {
    src: adobeLogo,
    url: 'https://www.adobe.com/',
    alt: 'The Adobe Foundation',
  },
  {
    src: sirenFleetLogo,
    url: 'https://sirenfleet.com/',
    alt: 'Siren Fleet',
  },
  {
    src: georiaAquariumLogo,
    url: 'https://www.georgiaaquarium.org/',
    alt: 'Georgia Aquarium',
  },
  {
    src: britishEcologicalSocietyLogo,
    url: 'https://www.britishecologicalsociety.org/',
    alt: 'British Ecological Society',
  },
  {
    src: waittLogo,
    url: 'https://www.waittfoundation.org/',
    alt: 'The Waitt Foundation',
  },
];

export default function Sponsors() {
  const intl = useIntl();
  useDocumentTitle(intl.formatMessage({ id: 'SPONSORS' }));

  return (
    <MainColumn>
      <Grid container direction="column">
        <Grid item>
          <Typography variant="h3">
            <FormattedMessage id="PLATINUM_SPONSORS" />
          </Typography>
        </Grid>
        {majorSponsors.map(sponsor => (
          <Grid item key={sponsor.name} style={{ marginTop: 20 }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <img alt={`${sponsor.name} logo`} height="60" width="auto" src={sponsor.logo} />
              {sponsor.youtubeUrl && (
                <ReactPlayer
                  // style={{ maxWidth: '100vw' }}
                  // height="auto"
                  url={sponsor.youtubeUrl}
                />
              )}
              {sponsor.photoSrc && (
                <img alt={`${sponsor.name} banner`} src={sponsor.photoSrc} width={640} />
              )}
              <Typography>{sponsor.description}</Typography>
            </div>
          </Grid>
        ))}
      </Grid>
      <Grid style={{ marginTop: 60 }} item>
        <Typography variant="h3">
          <FormattedMessage id="ADDITIONAL_SPONSORS" />
        </Typography>
        <LogoSoup height={60} logos={logos.map(logo => logo.src)} />
      </Grid>
    </MainColumn>
  );
}
