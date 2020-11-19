import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import NewsIcon from '@material-ui/icons/ChromeReaderMode';
import CodeIcon from '@material-ui/icons/Code';
import PetsIcon from '@material-ui/icons/Pets';
import SearchIcon from '@material-ui/icons/Search';
import logo from '../../assets/WildMe-Logo-white.png';
import zebraTexture from '../../assets/zebra-texture.jpeg';
import multiFeature from '../../assets/multifeature.jpeg';
import GridContainer from '../../components/GridContainer';
import TransparentContainer from '../../components/TransparentContainer';
import ActionableMetric from './ActionableMetric';
import BlackBox from './BlackBox';

export default function Splash() {
  const theme = useTheme();

  return (
    <div style={{ textAlign: 'center', marginTop: 64 }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '90vh',
          justifyContent: 'center',
          alignItems: 'center',
          color: theme.palette.common.white,
        }}
      >
        <img style={{ width: '40%' }} src={logo} alt="Wild Me logo" />
        <Typography variant="h6" style={{ fontSize: 16 }}>
          <FormattedMessage id="SPLASH_TAGLINE" />
        </Typography>
      </div>
      <TransparentContainer>
        <BlackBox>
          <Typography variant="h5">
            Wild Me releases 2 zebra image datasets to spur research into Wildlife
            photo ID
          </Typography>
          <Typography variant="subtitle2" style={{ marginTop: 12 }}>October 14, 2020</Typography>
          <img src={zebraTexture} height="240" style={{ marginTop: 40 }} />
        </BlackBox>
        <BlackBox>
          <Typography variant="h5">
            Staff publishes research in the Journal of Cetacean Research and Management
          </Typography>
          <Typography variant="subtitle2" style={{ marginTop: 12 }}>October 14, 2020</Typography>
          <img src={multiFeature} height="240" style={{ marginTop: 40 }} />
        </BlackBox>
        <BlackBox>
          <Typography variant="h5">
            Staff publishes research in the Journal of Cetacean Research and Management
          </Typography>
          <Typography variant="subtitle2" style={{ marginTop: 12 }}>October 14, 2020</Typography>
          <img src={multiFeature} height="240" style={{ marginTop: 40 }} />
        </BlackBox>
        <BlackBox>
          <Typography variant="h5">
            Wild Me releases 2 zebra image datasets to spur research into Wildlife
            photo ID
          </Typography>
          <Typography variant="subtitle2" style={{ marginTop: 12 }}>October 14, 2020</Typography>
          <img src={zebraTexture} height="240" style={{ marginTop: 40 }} />
        </BlackBox>
      </TransparentContainer>
      <GridContainer>
        <ActionableMetric
          title="62 editorials"
          description="Including articles from respected institutions like the New York Times and Nature."
          ask="See press"
          href="/press"
          logo={NewsIcon}
        />
        <ActionableMetric
          title="190k lines of code"
          description="We are data scientists and engineers who take pride in our work. Every line of code is open source."
          ask="View repositories"
          href="https://github.com/WildbookOrg"
          external
          logo={CodeIcon}
        />
        <ActionableMetric
          title="53 species"
          description="Support automated identification, powered by state-of-the-art machine learning algorithms."
          ask="Explore projects"
          href="/projects"
          logo={PetsIcon}
        />
        <ActionableMetric
          title="81 publications"
          description="In peer-reviewed journals, coauthored by Wild Me staff and powered by Wild Me technologies."
          ask="See publications"
          href="/publications"
          logo={SearchIcon}
        />
      </GridContainer>
    </div>
  );
}
