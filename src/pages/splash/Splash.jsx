import React from 'react';
import { take } from 'lodash-es';
import { useIntl, FormattedMessage } from 'react-intl';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import useDocumentTitle from '../../hooks/useDocumentTitle';
import { Row, Box } from '../../components/Containers';
import ButtonLink from '../../components/ButtonLink';
import ImageCard from '../../components/ImageCard';
import academiaIcon from '../../assets/academia-icon.svg';
import codeIcon from '../../assets/code-icon.svg';
import speciesIcon from '../../assets/species-icon.svg';
import algorithmsIcon from '../../assets/algorithms.svg';
import hero from '../../assets/hero2.jpg';
import newsData from '../news/newsData';
import ActionableMetric from './ActionableMetric';

const visibleNews = take(newsData, 3);

export default function Splash() {
  const intl = useIntl();
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down('xs'));
  const isMd = useMediaQuery(theme.breakpoints.down('sm'));

  const pageNotFound = intl.formatMessage({ id: 'HOME' });
  useDocumentTitle(pageNotFound);

  const w1 = isMd ? 500 : '80%';
  const fs1 = isMd ? 40 : 68;

  return (
    <div style={{ marginTop: 64 }}>
      <Row style={{ marginTop: 116, position: 'relative' }}>
        <Typography
          variant={isSm ? 'h6' : 'h1'}
          style={{
            margin: isSm ? '-34px auto 0px' : '0 auto',
            textAlign: 'center',
            position: 'absolute',
            left: 0,
            right: 0,
            width: isSm ? 240 : w1,
            background: 'rgba(255, 255, 255, 0.7)',
            padding: isSm ? '8px 0' : '20px 0',
            top: isSm ? '25%' : '15%',
            fontSize: isSm ? 18 : fs1,
          }}
        >
          <FormattedMessage id="SPLASH_TAGLINE" />
        </Typography>
        <img
          src={hero}
          alt="hero"
          style={{ width: '100%', height: 'intrinsic' }} // intrinsic is a safari fix
        />
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
                marginTop: 20,
                maxWidth: 880,
              }}
              variant="subtitle1"
            >
              <FormattedMessage id="SPLASH_SUBTITLE" />
            </Typography>
            <ButtonLink
              href="/platforms"
              display="primary"
              style={{
                marginTop: 40,
                marginBottom: 16,
              }}
            >
              <FormattedMessage id="EXPLORE_PLATFORMS" />
            </ButtonLink>
          </div>
        </Box>
      </Row>
      <Row>
        <Box variant="black" n={2}>
          <ActionableMetric
            title="53 species"
            description="Support automated identification, powered by state-of-the-art machine learning algorithms."
            ask="Explore platforms"
            href="/platforms"
            imgSrc={speciesIcon}
          />
        </Box>
        <Box variant="black" n={2}>
          <ActionableMetric
            title="81 publications"
            description="In peer-reviewed journals, coauthored by Wild Me staff and powered by Wild Me technologies."
            ask="See publications"
            href="/publications"
            imgSrc={academiaIcon}
          />
        </Box>
        <Box variant="black" n={2}>
          <ActionableMetric
            title="10 years of code"
            description="We love building software for the conservation research community. Every line of code is open source."
            ask="View code"
            href="/code"
            imgSrc={codeIcon}
          />
        </Box>
        <Box variant="black" n={2}>
          <ActionableMetric
            title="7 ID algorithms"
            description={
              'Allow us to tailor our matching techniques to the unique "fingerprint" of each species.'
            }
            ask="View services"
            href="/services"
            imgSrc={algorithmsIcon}
          />
        </Box>
      </Row>
      <Row>
        {visibleNews.map(articleData => (
          <ImageCard
            variant="black"
            date={articleData.dateString}
            imgSrc={articleData.image}
            title={articleData.title}
            url={`/news${articleData.path}`}
          />
        ))}
      </Row>
      <Row>
        <div style={{ margin: '60px auto', textAlign: 'center' }}>
          <Typography variant="h5">
            Updates from Wild Me, once a month.
          </Typography>
          <ButtonLink
            external
            href="http://eepurl.com/hllEeP"
            display="primary"
            style={{ marginTop: 40, marginBottom: 20 }}
          >
            Get the newsletter
          </ButtonLink>
        </div>
      </Row>
    </div>
  );
}
