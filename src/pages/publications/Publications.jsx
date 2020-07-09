import React, { useState } from 'react';
import { useIntl, FormattedMessage } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import MainColumn from '../../components/MainColumn';
import Link from '../../components/Link';
import publicationList, { tags } from './publicationList';

export default function Publications() {
  const intl = useIntl();
  useDocumentTitle(intl.formatMessage({ id: 'PUBLICATIONS' }));

  const [selectedTag, setSelectedTag] = useState('');

  const filteredPublications = publicationList.filter(publication => {
    let matched = false;
    publication.tags.forEach(tag => {
      if (tag.id.includes(selectedTag)) matched = true;
    });
    return matched;
  });

  return (
    <MainColumn>
      <Grid container spacing={3} direction="column">
        <Grid item>
          <Typography
            variant="h2"
            style={{ paddingTop: 30, textAlign: 'center' }}
          >
            <FormattedMessage id="PUBLICATIONS" />
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" style={{ paddingTop: 30 }}>
            <FormattedMessage id="PUBLICATIONS_DESCRIPTION" />
          </Typography>
        </Grid>
        <Grid item>
          <FormControl>
            <InputLabel htmlFor="filter-input">Filter</InputLabel>
            <Select
              native
              value={selectedTag}
              onChange={(e) => {
                setSelectedTag(e.target.value);
              }}
              inputProps={{
                name: 'filter',
                id: 'filter-input',
              }}
            >
              <option aria-label="None" value="" />
              {Object.values(tags).map(tag => <option key={tag.id} value={tag.id}>{intl.formatMessage({ id: tag.labelId })}</option>)}
            </Select>
          </FormControl>
        </Grid>
        {filteredPublications.map(publication => (
          <Grid item key={publication.citation}>
            <Typography style={{ lineHeight: 2 }}>
              {publication.citation}
              {publication.href && (
                <Link
                  external
                  href={publication.href}
                  target="_blank"
                >
                  <IconButton style={{ marginLeft: 4 }} size="small">
                    <OpenInNewIcon />
                  </IconButton>
                </Link>
              )}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </MainColumn>
  );
}
