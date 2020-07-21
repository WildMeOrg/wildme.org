import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import InvitationIcon from '@material-ui/icons/EmailOutlined';
import AdoptionIcon from '@material-ui/icons/CardGiftcard';
import HostedIcon from '@material-ui/icons/CloudQueue';
import PublicIcon from '@material-ui/icons/Public';
import MainColumn from '../../components/MainColumn';
import ButtonLink from '../../components/ButtonLink';
import Link from '../../components/Link';

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
    algorithms,
    species,
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
      <Breadcrumbs>
        <Link href="/">
          <FormattedMessage id="HOME" />
        </Link>
        <Link href="/projects">
          <FormattedMessage id="PROJECTS" />
        </Link>
        <Typography>{name}</Typography>
      </Breadcrumbs>
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
          label={<FormattedMessage id="ADOPTIONS_WELCOME" />}
        />
      )}
      {hosted && (
        <Chip
          icon={<HostedIcon />}
          variant="outlined"
          label={<FormattedMessage id="HOSTED_BY_WILD_ME" />}
        />
      )}
      <Typography>{`${sightings} sightings`}</Typography>
      <Typography>{`${individuals} individuals`}</Typography>
      {(partners && partners.length > 0) && (
        <div>
          <Typography variant="h5"><FormattedMessage id="OFFICIAL_PARTNERS" /></Typography>
          <GridList
            cellHeight={100}
            cols={3}
            style={{ background: 'grey' }}
          >
            {partners.map(partner => (
              <GridListTile key={partner.name}>
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
      <div>
        <Typography variant="h5" style={{ margin: '20px 0' }}><FormattedMessage id="ALGORITHMS" /></Typography>
        <Grid container spacing={2}>
          {algorithms.map(algorithm => (
            <Grid item>
              <Card style={{ maxWidth: 220, backgroundColor: 'rgb(210, 176, 255)' }}>
                <CardContent>
                  <Link href={algorithm.url} external><Typography variant="subtitle2">{algorithm.name}</Typography></Link>
                  <Typography>Here is a brief description of the algorithm.</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
      <div>
        <Typography variant="h5" style={{ margin: '20px 0' }}><FormattedMessage id="SPECIES" /></Typography>
        <Grid container spacing={2}>
          {species.map(currentSpecies => (
            <Grid item>
              <Card style={{ maxWidth: 220, backgroundColor: '#b0c5ff' }}>
                <CardContent>
                  <Link external href={currentSpecies.url}><Typography variant="subtitle2">{currentSpecies.name}</Typography></Link>
                  <Typography>{currentSpecies.alias}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </MainColumn>
  );
}
