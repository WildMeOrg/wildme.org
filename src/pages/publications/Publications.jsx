import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import { Page, Row } from '../../components/Containers';

import FilterBar, { searchMatch } from '../../components/FilterBar';
import Link from '../../components/Link';
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
      publication.tags.forEach(tag => {
        if (tag.id.includes(selectedTag)) matched = true;
      });
      return matched;
    },
  );

  return (
    <Page
      documentTitle={translatedPublications}
      title={translatedPublications}
      description={intl.formatMessage({
        id: 'PUBLICATIONS_DESCRIPTION',
      })}
    >
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
