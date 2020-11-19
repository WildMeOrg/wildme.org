import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import NewsIcon from '@material-ui/icons/ChromeReaderMode';
import CodeIcon from '@material-ui/icons/Code';
import PetsIcon from '@material-ui/icons/Pets';
import SearchIcon from '@material-ui/icons/Search';

import {
  Row,
  Box,
  SpaceAroundCard,
} from '../../components/Containers';
import ButtonLink from '../../components/ButtonLink';
import logo from '../../assets/WildMe-Logo-white.png';
import zebraTexture from '../../assets/zebra-texture.jpeg';
import multiFeature from '../../assets/multifeature.jpeg';
import seadragons from '../../assets/seadragons.jpeg';
import ActionableMetric from './ActionableMetric';
import ImageCard from './ImageCard';

export default function Splash() {
  const theme = useTheme();

  return (
    <div style={{ marginTop: 64, color: theme.palette.common.white }}>
      <Row>
        <Box>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              style={{ width: '40%' }}
              src={logo}
              alt="Wild Me logo"
            />
            <Typography variant="h4">
              <FormattedMessage id="SPLASH_TAGLINE" />
            </Typography>
          </div>
        </Box>
      </Row>
      <Row>
        <ImageCard
          date="November 8, 2020"
          imgSrc={multiFeature}
          title="Staff publishes research in the Journal of Cetacean Research and Management"
        />
        <ImageCard
          date="October 14, 2020"
          imgSrc={zebraTexture}
          title="Wild Me releases two zebra image datasets to spur research into Wildlife photo ID"
        />
        <ImageCard
          date="August 27, 2020"
          imgSrc={seadragons}
          title="Seadragonsearch.org official launch"
        />
      </Row>
      <Row>
        <Box black>
          <SpaceAroundCard>
            <ActionableMetric
              title="62 editorials"
              description="Including articles from respected institutions like the New York Times and Nature."
              ask="See press"
              href="/press"
              logo={NewsIcon}
            />
            <ActionableMetric
              title="190k lines of code"
              description="We are programmers and data scientists who take pride in our work. Every line of code is open source."
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
          </SpaceAroundCard>
        </Box>
      </Row>
      <Row>
        <div style={{ margin: '40px auto', textAlign: 'center' }}>
          <Typography variant="h5" style={{ color: 'white' }}>
            <FormattedMessage id="DONATION_ASK" />
          </Typography>
          <ButtonLink
            href="/contribute"
            display="primary"
            style={{ marginTop: 40, background: 'black' }}
          >
            <FormattedMessage id="CONTRIBUTE" />
          </ButtonLink>
        </div>
      </Row>
    </div>
  );
}
