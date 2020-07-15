import React, { useState } from 'react';
import { useIntl, FormattedMessage } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import MainColumn from '../../components/MainColumn';
import Button from '../../components/Button';
import InlineButton from '../../components/InlineButton';

const tabDefinitions = {
  donate: {
    id: 'donate',
    labelId: 'DONATE',
  },
  volunteer: {
    id: 'volunteer',
    labelId: 'VOLUNTEER',
  },
  report: {
    id: 'report',
    labelId: 'REPORT_SIGHTING',
  },
};

export default function Contribute() {
  const intl = useIntl();
  useDocumentTitle(intl.formatMessage({ id: 'CONTRIBUTE' }));

  const [tab, setTab] = useState(tabDefinitions.donate.id);
  const [cryptoDialogOpen, setCryptoDialogOpen] = useState(false);
  const [orgDialogOpen, setOrgDialogOpen] = useState(false);

  return (
    <MainColumn>
      <Dialog
        open={cryptoDialogOpen}
        onClose={() => setCryptoDialogOpen(false)}
      >
        <DialogTitle>
          <FormattedMessage id="CRYPTOCURRENCY_DONATIONS" />
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <FormattedMessage id="ETHERIUM_WALLET_ID" />
            0x5d41f2e86FeCD1205717B099a8546c5cF6F97e57
          </DialogContentText>
          <DialogContentText>
            <FormattedMessage id="BITCOIN_WALLET_ID" />
            15KCE1xCGjhcDojjEpMhUA8L6JMdiNGTHy
          </DialogContentText>
        </DialogContent>
      </Dialog>
      <Dialog
        open={orgDialogOpen}
        onClose={() => setOrgDialogOpen(false)}
      >
        <DialogTitle>
          <FormattedMessage id="CUSTOM_DONATIONS" />
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <FormattedMessage id="CUSTOM_DONATIONS_INSTRUCTIONS" />
          </DialogContentText>
        </DialogContent>
      </Dialog>
      <Grid style={{ width: '70%' }} container spacing={3} direction="column">
        <Grid item>
          <Typography
            variant="h2"
            style={{ paddingTop: 30, textAlign: 'center' }}
          >
            <FormattedMessage id="CONTRIBUTE" />
          </Typography>
        </Grid>
        <Tabs
          value={tab}
          onChange={(e, newTab) => setTab(newTab)}
          aria-label="Ways to contribute selector"
        >
          {Object.values(tabDefinitions).map(t => (
            <Tab
              label={<FormattedMessage id={t.labelId} />}
              value={t.id}
            />
          ))}
        </Tabs>
        <Grid item>
          <Typography>
            <FormattedMessage id="DONATION_UMBRELLA_DESCRIPTION_1" />
            <InlineButton onClick={() => setCryptoDialogOpen(true)}>
              <FormattedMessage id="CRYPTOCURRENCY" />
            </InlineButton>
            <FormattedMessage id="DONATION_UMBRELLA_DESCRIPTION_2" />
            <InlineButton onClick={() => setOrgDialogOpen(true)}>
              <FormattedMessage id="LARGE_DONATIONS_LINK" />
            </InlineButton>
            <FormattedMessage id="DONATION_UMBRELLA_DESCRIPTION_3" />
          </Typography>
        </Grid>
        <Grid item>
          <form
            action="https://www.paypal.com/cgi-bin/webscr"
            method="post"
            target="_top"
          >
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input
              type="hidden"
              name="hosted_button_id"
              value="6M475H9KWPSBW"
            />
            <input
              type="image"
              src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
              border="0"
              name="submit"
              title="PayPal - The safer, easier way to pay online!"
              alt="Donate with PayPal button"
            />
            <img
              alt=""
              border="0"
              src="https://www.paypal.com/en_US/i/scr/pixel.gif"
              width="1"
              height="1"
            />
          </form>
        </Grid>
        <Grid item>
          <Typography variant="body2">
            <FormattedMessage id="DONATION_LEGAL_1" />
          </Typography>
          <Typography variant="body2">
            <FormattedMessage id="DONATION_LEGAL_2" />
          </Typography>
        </Grid>
      </Grid>
    </MainColumn>
  );
}
