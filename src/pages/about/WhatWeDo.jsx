import React from 'react';
import { useIntl } from 'react-intl';
import ReactPlayer from 'react-player/youtube';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { Page } from '../../components/Containers';
import ButtonLink from '../../components/ButtonLink';

function Item({ title, url }) {
  return (
    <Grid style={{ margin: '0 auto' }} item>
      <Typography variant="h5" style={{ margin: '48px 0 32px 0' }}>
        {title}
      </Typography>
      <ReactPlayer url={url} />
    </Grid>
  );
}

export default function WhatWeDo() {
  const intl = useIntl();
  const translatedTitle = intl.formatMessage({ id: 'WHAT_WE_DO' });

  return (
    <Page documentTitle={translatedTitle} title={translatedTitle}>
      <Grid
        container
        spacing={4}
        style={{ padding: '0 30px 80px 30px', margin: '0 auto' }}
        direction="column"
      >
        <Item
          title="The Problem"
          url="https://www.youtube.com/watch?v=Z1ex2jeNyTA"
        />
        <Item
          title="The Innovators"
          url="https://www.youtube.com/watch?v=KN4bWnILzG0"
        />
        <Item
          title="The Solution"
          url="https://www.youtube.com/watch?v=rTcuC2QY_0Q"
        />
        <Item
          title="The Impact"
          url="https://www.youtube.com/watch?v=Y_OcIYWeLco"
        />
        <Grid item style={{ margin: '60px auto 0 auto' }}>
          <ButtonLink display="primary" href="/wildbook">
            Learn more about Wildbook
          </ButtonLink>
        </Grid>
      </Grid>
    </Page>
  );
}
