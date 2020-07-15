import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Chip from '@material-ui/core/Chip';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import InvitationIcon from '@material-ui/icons/EmailOutlined';
import AdoptionIcon from '@material-ui/icons/CardGiftcard';
import HostedIcon from '@material-ui/icons/CloudQueue';
import PublicIcon from '@material-ui/icons/Public';
import MainColumn from '../../components/MainColumn';
import ButtonLink from '../../components/ButtonLink';

export default function ProjectPage({ data }) {
  const {
    name,
    inviteOnly,
    href,
    adminContact,
    adminName,
    descriptionId,
    bannerLarge,
    sightings,
    individuals,
    partners,
    adoption,
    hosted,
  } = data;

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <MainColumn>
      <Dialog open={modalOpen} onClose={() => setModalOpen(false)}>
        <DialogTitle>
          <FormattedMessage id="REQUEST_AN_INVITATION" />
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <FormattedMessage
              id="REQUEST_INVITE_DESCRIPTION"
              values={{ siteName: name }}
            />
          </DialogContentText>
          <DialogContentText>
            <FormattedMessage
              id="REQUEST_INVITE_INSTRUCTIONS"
              values={{ name: adminName, email: adminContact }}
            />
          </DialogContentText>
        </DialogContent>
      </Dialog>
      <Typography variant="h2" style={{ paddingTop: 30 }}>
        {name}
      </Typography>
      <div>
        <ButtonLink display="primary" href={href} external>
          <FormattedMessage id="VISIT_SITE" />
        </ButtonLink>
      </div>
      <img src={bannerLarge} width="70%" alt={`Banner for ${name}`} />
      <Typography>
        <FormattedMessage id={descriptionId} />
      </Typography>
      <Chip
        icon={inviteOnly ? <InvitationIcon /> : <PublicIcon />}
        variant="outlined"
        onClick={inviteOnly ? () => setModalOpen(true) : undefined}
        label={
          <FormattedMessage
            id={inviteOnly ? 'INVITE_ONLY' : 'PUBLIC'}
          />
        }
      />
      {adoption && (
        <Chip
          icon={<AdoptionIcon />}
          variant="outlined"
          onClick={inviteOnly ? () => setModalOpen(true) : undefined}
          label={<FormattedMessage id="ADOPTIONS_WELCOME" />}
        />
      )}
      {hosted && (
        <Chip
          icon={<HostedIcon />}
          variant="outlined"
          onClick={inviteOnly ? () => setModalOpen(true) : undefined}
          label={<FormattedMessage id="HOSTED_BY_WILDBOOK" />}
        />
      )}
      <Typography>{`${sightings} sightings`}</Typography>
      <Typography>{`${individuals} individuals`}</Typography>
      {partners && (
        <div>
          <Typography variant="h5">Partners</Typography>
          <GridList
            cellHeight={100}
            cols={3}
            style={{ background: 'grey' }}
          >
            {partners.map(partner => (
              <GridListTile>
                <img
                  style={{ height: 100, width: 'auto' }}
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                />
              </GridListTile>
            ))}
          </GridList>
        </div>
      )}
    </MainColumn>
  );
}
