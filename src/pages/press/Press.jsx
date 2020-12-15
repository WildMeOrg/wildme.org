import React, { useState } from 'react';
import { uniq } from 'lodash-es';
import { format, parse } from 'date-fns';
import { useIntl, FormattedMessage } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { Page, Row, Box } from '../../components/Containers';
import Link from '../../components/Link';
import FilterBar, { searchMatch } from '../../components/FilterBar';
import LogoSoup from '../../components/LogoSoup';
import seattleTimesLogo from '../../assets/seattle-times-logo.svg';
import guardianLogo from '../../assets/guardian-logo.svg';
import natureLogo from '../../assets/nature-logo.svg';
import newYorkTimesLogo from '../../assets/new-york-times-logo.svg';
import oceonographicLogo from '../../assets/oceanographic-logo.svg';
import natgeoLogo from '../../assets/natgeo-logo.svg';
import bbcLogo from '../../assets/bbc-logo.png';
import nasaLogo from '../../assets/nasa-logo.png';
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
  natgeoLogo,
  oceonographicLogo,
  natureLogo,
  guardianLogo,
  newYorkTimesLogo,
  nasaLogo,
  bbcLogo,
  seattleTimesLogo,
];

export default function Press() {
  const intl = useIntl();
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));

  const translatedPress = intl.formatMessage({ id: 'PRESS' });

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
    <Page
      documentTitle={translatedPress}
      title="Wild Me in the press."
    >
      {/* <Row style={{ flexDirection: 'column', marginTop: 32 }}>
        <Typography variant="h5">Media inquiries</Typography>
        <Typography style={{ marginTop: 32 }}>
          Writing about Wild Me? Our press pack is currently under
          development. In the meantime, please email info@wildme.org
          with questions and we will get back to you as soon as
          possible.
        </Typography>
      </Row> */}

      <LogoSoup
        style={{
          width: 800,
          maxWidth: '100%',
          margin: '0 auto',
          paddingBottom: 40,
          marginTop: 52,
        }}
        logos={logos}
      />

      <Row>
        <Grid
          container
          style={{ marginTop: 32 }}
          justify="space-between"
        >
          <Grid item style={{ flexGrow: 1, marginRight: 60 }}>
            <FilterBar
              instructions="Search articles"
              width="100%"
              value={searchTerm}
              onChange={setSearchTerm}
            />
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
      </Row>
      {filteredArticles.map(article => (
        <Row key={article.name}>
          <Box>
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                padding: 28,
              }}
            >
              {!isSm && (
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
              )}
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
          </Box>
        </Row>
      ))}
    </Page>
  );
}
