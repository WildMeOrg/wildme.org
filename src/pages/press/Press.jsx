import React, { useState } from 'react';
import { uniq } from 'lodash-es';
import { format, parse } from 'date-fns';
import { useIntl, FormattedMessage } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';

import MainColumn from '../../components/MainColumn';
import Link from '../../components/Link';
import FilterBar, { searchMatch } from '../../components/FilterBar';
import LogoSoup from '../../components/LogoSoup';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import seattleTimesLogo from '../../assets/seattle-times-logo.svg';
import guardianLogo from '../../assets/guardian-logo.svg';
import natureLogo from '../../assets/nature-logo.svg';
import newYorkTimesLogo from '../../assets/new-york-times-logo.svg';
import articles from './usedArticles';

const articlesWithDates = articles.map(article => {
  const parsedDate = parse(article.date, 'yyyy-MM-dd', new Date());
  const formattedDate = format(parsedDate, 'MMMM d, yyyy');
  const year = format(parsedDate, 'yyyy');
  return {
    ...article,
    parsedDate,
    formattedDate,
    year,
  };
});

const articleYears = uniq(articlesWithDates.map(a => a.year));

const logos = [
  seattleTimesLogo,
  guardianLogo,
  natureLogo,
  newYorkTimesLogo,
];

export default function Press() {
  const intl = useIntl();
  useDocumentTitle(intl.formatMessage({ id: 'PRESS' }));

  const [selectedYear, setSelectedYear] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const searchFilteredArticles = articlesWithDates.filter(article =>
    searchMatch(
      article,
      ['formattedDate', 'excerpt', 'citation', 'name'],
      searchTerm,
    ),
  );

  const filteredArticles = searchFilteredArticles.filter(article => {
    if (article.year.includes(selectedYear)) return true;
    return false;
  });

  return (
    <MainColumn>
      <Typography
        variant="h2"
        style={{ paddingTop: 30, textAlign: 'center' }}
      >
        <FormattedMessage id="PRESS" />
      </Typography>
      <Alert
        style={{ marginTop: 32, marginBottom: 12 }}
        severity="info"
      >
        <AlertTitle>Media Inquiries</AlertTitle>
        Writing about Wild Me? Please email info@wildme.org with any
        questions and we will support you as best we can.
      </Alert>
      <Grid container justify="space-between">
        <Grid item>
          <FilterBar value={searchTerm} onChange={setSearchTerm} />
        </Grid>
        <Grid item>
          <FormControl>
            <InputLabel htmlFor="filter-input">
              <FormattedMessage id="YEAR" />
            </InputLabel>
            <Select
              style={{ width: 100 }}
              native
              value={selectedYear}
              onChange={e => {
                setSelectedYear(e.target.value);
              }}
              inputProps={{
                name: 'filter',
                id: 'filter-input',
              }}
            >
              <option aria-label="None" value="" />
              {articleYears.map(year => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <LogoSoup logos={logos} />
      <Grid
        container
        direction="column"
        style={{ padding: '30px 0' }}
      >
        {filteredArticles.map((article, i) => (
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
                  {article.formattedDate}
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
