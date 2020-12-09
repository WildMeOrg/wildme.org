import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import ResponsiveText from '../../components/ResponsiveText';
import LogoSoup from '../../components/LogoSoup';
import ButtonLink from '../../components/ButtonLink';
import Link from '../../components/Link';
import { Row, Box } from '../../components/Containers';

export default function PlatformPage({ data }) {
  const {
    name,
    tagline,
    href,
    adminContact,
    adminName,
    descriptionId,
    bannerLarge,
    sightings,
    partners,
    algorithms,
    species,
  } = data;

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
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
      <img
        style={{
          width: '100%',
          position: 'relative',
          filter: 'brightness(0.6)',
          objectFit: 'cover',
          minHeight: 600,
        }}
        src={bannerLarge}
        width="100%"
        alt={`Banner for ${name}`}
      />
      <div
        style={{
          position: 'absolute',
          height: 'fit-content',
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
        }}
      >
        <div
          style={{
            paddingTop: '30vmax',
            textAlign: 'center',
            color: 'white',
          }}
        >
          <ResponsiveText variant="h1">{name}</ResponsiveText>
          <ResponsiveText
            variant="h5"
            style={{ marginTop: '2vmax', padding: '0 24px' }}
          >
            {tagline}
          </ResponsiveText>
          <ButtonLink
            style={{ marginTop: 'max(2vmax, 16px)' }}
            display="primary"
            href={href}
            external
          >
            <FormattedMessage id="VISIT_SITE" />
          </ButtonLink>
        </div>
      </div>
      <Row>
        <Breadcrumbs style={{ marginLeft: 12 }}>
          <Link href="/">
            <FormattedMessage id="HOME" />
          </Link>
          <Link href="/platforms">
            <FormattedMessage id="PLATFORMS" />
          </Link>
          <Typography>{name}</Typography>
        </Breadcrumbs>
      </Row>

      <Row>
        <Box n={2} style={{ position: 'relative' }}>
          <img
            style={{
              width: '85%',
              position: 'relative',
            }}
            src={bannerLarge}
            width="100%"
            alt={`Banner for ${name}`}
          />
          <div
            style={{
              position: 'absolute',
              left: '55%',
              top: '20%',
              backgroundColor: 'white',
            }}
          >
            <Typography variant="h5" style={{ padding: 4 }}>
              {`${sightings.toLocaleString()} sightings`}
            </Typography>
          </div>
        </Box>
        <Box n={2}>
          <Typography>
            <FormattedMessage id={descriptionId} />
          </Typography>
        </Box>
      </Row>
      {/* <Chip
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
      )} */}
      {partners && partners.length > 0 && (
        <Row style={{ marginTop: 100 }}>
          <Box n={2}>
            <Typography variant="h5">{`${name} partners`}</Typography>
          </Box>
          <Box n={2}>
            <LogoSoup height={90} logoDefinitions={partners} />
          </Box>
        </Row>
      )}
      <Row style={{ marginTop: 100 }}>
        <Box n={2}>
          <Typography variant="h5">
            <FormattedMessage id="ALGORITHMS" />
          </Typography>
        </Box>
        <Box n={2}>
          <Grid container spacing={8}>
            {algorithms.map(algorithm => (
              <Grid key={algorithm.url} item style={{ width: 240 }}>
                <Link href={algorithm.url} external>
                  <Typography variant="h6">
                    {algorithm.name}
                  </Typography>
                </Link>
                <Typography variant="body2" style={{ marginTop: 20 }}>
                  {algorithm.description ||
                    'Here is a brief description of the algorithm.'}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Row>
      <Row style={{ marginTop: 100, marginBottom: 100 }}>
        <Box n={2}>
          <Typography variant="h5">
            <FormattedMessage id="SPECIES_TITLE" />
          </Typography>
        </Box>
        <Box n={2}>
          <Grid container spacing={8}>
            {species.map(currentSpecies => (
              <Grid
                key={currentSpecies.name}
                item
                style={{ width: 240 }}
              >
                <Link href={currentSpecies.url} external>
                  <Typography variant="h6">
                    {currentSpecies.name}
                  </Typography>
                </Link>
                <Typography style={{ fontStyle: 'italic' }}>
                  {currentSpecies.alias}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Row>
    </div>
  );
}
