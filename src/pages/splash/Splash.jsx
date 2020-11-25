import React from 'react';
import { useIntl, FormattedMessage } from 'react-intl';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import useDocumentTitle from '../../hooks/useDocumentTitle';
import {
  Row,
  Box,
  SpaceAroundCard,
} from '../../components/Containers';
import ButtonLink from '../../components/ButtonLink';
import ResponsiveText from '../../components/ResponsiveText';
import zebraTexture from '../../assets/zebra-texture.jpeg';
import multiFeature from '../../assets/multifeature.jpeg';
import seadragons from '../../assets/seadragons.jpeg';
import academiaIcon from '../../assets/academia-icon.svg';
import codeIcon from '../../assets/code-icon.svg';
import newsIcon from '../../assets/news-icon.svg';
import speciesIcon from '../../assets/species-icon.svg';
import hero from '../../assets/hero2.jpg';
import ActionableMetric from './ActionableMetric';
import ImageCard from './ImageCard';

export default function Splash() {
  const intl = useIntl();
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));

  const pageNotFound = intl.formatMessage({ id: 'HOME' });
  useDocumentTitle(pageNotFound);

  return (
    <div style={{ marginTop: 64 }}>
      <Row style={{ marginTop: 120, position: 'relative' }}>
        <ResponsiveText
          style={{
            margin: '0 auto',
            textAlign: 'center',
            position: 'absolute',
            left: 0,
            right: 0,
            width: '80%',
            top: isSm ? '15%' : '28%',
          }}
          variant="h1"
        >
          <FormattedMessage id="SPLASH_TAGLINE" />
        </ResponsiveText>
        <img src={hero} alt="hero" style={{ width: '100%' }} />
      </Row>
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
            <Typography
              style={{
                marginTop: 60,
                maxWidth: 880,
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
                marginBottom: 40,
              }}
            >
              <FormattedMessage id="EXPLORE_PROJECTS" />
            </ButtonLink>
          </div>
        </Box>
      </Row>
      <Row>
        <ImageCard
          variant="black"
          date="November 8, 2020"
          imgSrc={multiFeature}
          title="Staff publishes research in the Journal of Cetacean Research and Management"
        />
        <ImageCard
          variant="black"
          date="October 14, 2020"
          imgSrc={zebraTexture}
          title="Wild Me releases two zebra image datasets to spur research into Wildlife photo ID"
        />
        <ImageCard
          variant="black"
          date="August 27, 2020"
          imgSrc={seadragons}
          title="Seadragon Wildbook official launch!"
        />
      </Row>
      <Row>
        <Box variant="black">
          <SpaceAroundCard>
            <ActionableMetric
              title="4 metrics"
              description="Including this one."
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
        <div style={{ margin: '60px auto', textAlign: 'center' }}>
          <Typography variant="h5">
            <FormattedMessage id="DONATION_ASK" />
          </Typography>
          <ButtonLink
            href="/contribute"
            display="primary"
            style={{ marginTop: 40, marginBottom: 20 }}
          >
            <FormattedMessage id="CONTRIBUTE" />
          </ButtonLink>
        </div>
      </Row>
    </div>
  );
}
