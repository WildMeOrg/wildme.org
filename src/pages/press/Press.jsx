import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import MainColumn from '../../components/MainColumn';
import Link from '../../components/Link';
import articles from './usedArticles';
import seattleTimesLogo from '../../assets/seattle-times-logo.svg';
import guardianLogo from '../../assets/guardian-logo.svg';
import natureLogo from '../../assets/nature-logo.svg';
import newYorkTimesLogo from '../../assets/new-york-times-logo.svg';

const logos = [
  seattleTimesLogo,
  guardianLogo,
  natureLogo,
  newYorkTimesLogo,
];

export default function Press() {
  return (
    <MainColumn>
      <Typography
        variant="h2"
        style={{ paddingTop: 30, textAlign: 'center' }}
      >
        Press
      </Typography>
      <Typography
        variant="subtitle1"
        style={{ paddingTop: 0, textAlign: 'center' }}
      >
        Wildbook in the news
      </Typography>
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
            style={{ margin: 20 }}
            src={logo}
            height="30"
            width="auto"
            alt="Press logo"
          />
        ))}
      </div>
      <Divider style={{ width: '100%', marginBottom: 40 }} />
      <Grid
        container
        direction="column"
        style={{ padding: '30px 0' }}
      >
        {articles.map((article, i) => (
          <Grid item key={article.name}>
            {i !== 0 && (
              <Divider style={{ width: '100%', margin: '40px 0' }} />
            )}
            <div
              style={{ display: 'flex', alignItems: 'flex-start' }}
            >
              <div
                style={{
                  width: 150,
                  maxWidth: '30%',
                  marginLeft: 8,
                  flexShrink: 0,
                }}
              >
                <Typography variant="subtitle2">
                  {article.date}
                </Typography>
              </div>
              <div style={{ padding: '0 20px' }}>
                <Link external href={article.href}>
                  <Typography>{article.name}</Typography>
                </Link>
                <Typography variant="subtitle2">
                  {article.citation}
                </Typography>
                <Typography style={{ marginTop: 12 }}>
                  {`"${article.excerpt}"`}
                </Typography>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </MainColumn>
  );
}
