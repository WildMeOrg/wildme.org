import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import { Alert, AlertTitle } from '@material-ui/lab';
import MissingIcon from '@material-ui/icons/FeedbackOutlined';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import { Page, Row } from '../../components/Containers';
import Link from '../../components/Link';
import FilterBar, { searchMatch } from '../../components/FilterBar';
import publicationList, { tags } from './publicationList';

export default function Publications() {
  const intl = useIntl();
  const translatedPublications = intl.formatMessage({
    id: 'PUBLICATIONS',
  });
  const [selectedTag, setSelectedTag] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const searchFilteredPublications = publicationList.filter(
    publication =>
      searchMatch(publication, ['citation', 'href'], searchTerm),
  );

  const filteredPublications = searchFilteredPublications.filter(
    publication => {
      let matched = false;
      if (publication.tags) {
        publication.tags.forEach(tag => {
          if (tag.id.includes(selectedTag)) matched = true;
        });
      }
      return matched;
    },
  );

  return (
    <Page
      documentTitle={translatedPublications}
      title={translatedPublications}
      subtitle={intl.formatMessage({
        id: 'PUBLICATIONS_DESCRIPTION',
      })}
    >
      <Row style={{ marginTop: 16, marginBottom: 16 }}>
        <Alert
          style={{ paddingRight: 20 }}
          icon={<MissingIcon fontSize="large" />}
          severity="warning"
        >
          <AlertTitle>
            Don&apos;t see your Wildbook-related paper listed here?
          </AlertTitle>
          {'Send us an email and we will get it on the list. '}
          <Link href="/contact">Contact us</Link>
        </Alert>
      </Row>
      <Row>
        <Grid container justify="space-between">
          <Grid item style={{ flexGrow: 1, marginRight: 60 }}>
            <FilterBar
              instructions="Search publications"
              width="100%"
              value={searchTerm}
              onChange={setSearchTerm}
            />
          </Grid>
          <Grid item>
            <FormControl>
              <InputLabel htmlFor="filter-input">Filter</InputLabel>
              <Select
                native
                value={selectedTag}
                onChange={e => {
                  setSelectedTag(e.target.value);
                }}
                inputProps={{
                  name: 'filter',
                  id: 'filter-input',
                }}
              >
                <option aria-label="None" value="" />
                {Object.values(tags).map(tag => (
                  <option key={tag.id} value={tag.id}>
                    {intl.formatMessage({ id: tag.labelId })}
                  </option>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Row>
      {filteredPublications.map(publication => (
        <Row
          key={publication.citation}
          style={{ margin: '32px auto' }}
        >
          <Typography style={{ lineHeight: 2 }}>
            {publication.citation}
            {publication.href && (
              <Link external href={publication.href} target="_blank">
                <IconButton style={{ marginLeft: 4 }} size="small">
                  <OpenInNewIcon />
                </IconButton>
              </Link>
            )}
          </Typography>
        </Row>
      ))}
    </Page>
  );
}
