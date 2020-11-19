import React from 'react';
import { useIntl, FormattedMessage } from 'react-intl';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import useDocumentTitle from '../../hooks/useDocumentTitle';
import {
  Row,
  Box,
  SpaceAroundCard,
} from '../../components/Containers';
import ButtonLink from '../../components/ButtonLink';
import ResponsiveText from '../../components/ResponsiveText';
import logo from '../../assets/WildMe-Logo-Gradient.png';
import zebraTexture from '../../assets/zebra-texture.jpeg';
import multiFeature from '../../assets/multifeature.jpeg';
import seadragons from '../../assets/seadragons.jpeg';
import academiaIcon from '../../assets/academia-icon.svg';
import codeIcon from '../../assets/code-icon.svg';
import newsIcon from '../../assets/news-icon.svg';
import speciesIcon from '../../assets/species-icon.svg';
import ActionableMetric from './ActionableMetric';
import ImageCard from './ImageCard';

export default function Splash() {
  const intl = useIntl();
  const theme = useTheme();

  const pageNotFound = intl.formatMessage({ id: 'HOME' });
  useDocumentTitle(pageNotFound);

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
              textAlign: 'center',
            }}
          >
            <img
              style={{
                width: '30%',
                filter: 'brightness(0) invert(1)',
              }}
              src={logo}
              alt="Wild Me logo"
            />
            <ResponsiveText style={{ marginTop: 20 }} variant="h2">
              <FormattedMessage id="SPLASH_TAGLINE" />
            </ResponsiveText>
            <Typography
              style={{
                marginTop: 30,
                maxWidth: 880,
                fontStyle: 'italic',
              }}
              variant="subtitle1"
            >
              <FormattedMessage id="SPLASH_SUBTITLE" />
            </Typography>
            <ButtonLink
              href="/projects"
              display="primary"
              style={{
                marginTop: 40,
                background: 'black',
                marginBottom: '15vh',
              }}
            >
              <FormattedMessage id="EXPLORE_PROJECTS" />
            </ButtonLink>
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
          title="Seadragon Wildbook official launch!"
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
              imgSrc={newsIcon}
            />
            <ActionableMetric
              title="53 species"
              description="Support automated identification, powered by state-of-the-art machine learning algorithms."
              ask="Explore projects"
              href="/projects"
              imgSrc={speciesIcon}
            />
            <ActionableMetric
              title="190k lines of code"
              description="We love sharing our work with the research community. Every line of code is open source."
              ask="View repositories"
              href="https://github.com/WildbookOrg"
              external
              imgSrc={codeIcon}
            />
            <ActionableMetric
              title="81 publications"
              description="In peer-reviewed journals, coauthored by Wild Me staff and powered by Wild Me technologies."
              ask="See publications"
              href="/publications"
              imgSrc={academiaIcon}
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
