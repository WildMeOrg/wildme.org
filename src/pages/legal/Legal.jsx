import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import MainColumn from '../../components/MainColumn';

export default function Legal() {
  return (
    <MainColumn>
      <Typography
        variant="h2"
        style={{ paddingTop: 30, textAlign: 'center' }}
      >
        Legal
      </Typography>
      <Grid
        container
        direction="column"
        style={{ padding: '30px 0' }}
      >
        <Grid item>
          <Typography>
            Wildbook is a registered trademark of Wild Me.
          </Typography>
        </Grid>
        <Grid item>
          <Typography>
            Wildbook is distributed under the GPL v2 open source
            license.
          </Typography>
        </Grid>
        <Grid item>
          <Typography>
            All content copyright Wild Me 2016 and may not be used
            without express permission.
          </Typography>
        </Grid>
      </Grid>
    </MainColumn>
  );
}
