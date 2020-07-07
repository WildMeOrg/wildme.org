import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import MainColumn from '../../components/MainColumn';
import Link from '../../components/Link';
import articles from './usedArticles';

export default function Press() {
  return (
    <MainColumn>
      <Typography variant="h2" style={{ paddingTop: 30, textAlign: 'center' }}>Wildbook in the Wild</Typography>
      <Grid container direction="column" style={{ padding: '30px 0' }}>
        {articles.map((article, i) => (
          <Grid item>
            {i !== 0 && <Divider style={{ width: '75%', margin: '40px auto'}} />}
            <div style={{ display: 'flex', alignItems: 'flex-start' }}>
              <img style={{ padding: 12, border: '1px solid black' }} src={article.logo} alt={`${article.organization} logo`} width={160} height="auto" />
              <div style={{ padding: '0 20px' }}>
                <Link external href={article.href}><Typography>{article.name}</Typography></Link>
                <Typography variant="subtitle2">{article.date}</Typography>
                <Typography variant="body1">{article.excerpt}</Typography>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </MainColumn>
  );
}
