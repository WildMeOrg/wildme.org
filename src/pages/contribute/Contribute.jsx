import React from 'react';
import { useIntl, FormattedMessage } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import MainColumn from '../../components/MainColumn';

export default function Contribute() {
  const intl = useIntl();
  useDocumentTitle(intl.formatMessage({ id: 'CONTRIBUTE' }));

  return (
    <MainColumn>
      <Grid container spacing={3} direction="column">
        <Grid item>
          <Typography
            variant="h2"
            style={{ paddingTop: 30, textAlign: 'center' }}
          >
            <FormattedMessage id="CONTRIBUTE" />
          </Typography>
        </Grid>
        <Grid item>Donate via paypal</Grid>
        <Grid item>
          Donate etherium (wallet ID:
          0x5d41f2e86FeCD1205717B099a8546c5cF6F97e57)
        </Grid>
        <Grid item>
          Donate bitcoin (wallet ID:
          15KCE1xCGjhcDojjEpMhUA8L6JMdiNGTHy)
        </Grid>
        <Grid item>Corporate donations and grants</Grid>
        <Grid item>Programmers</Grid>
        <Grid item>Volunteers</Grid>
      </Grid>
    </MainColumn>
  );
}
