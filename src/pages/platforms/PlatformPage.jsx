import React from 'react';
import { FormattedMessage } from 'react-intl';
import Typography from '@material-ui/core/Typography';
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
    descriptionId,
    bannerLarge,
    sightings,
    partners,
    algorithms,
    species,
  } = data;

  return (
    <div>
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
          <ButtonLink
            display="primary"
            style={{ marginTop: 20 }}
            size="small"
            external
            href="https://us7.list-manage.com/contact-form?u=c5af097df0ca8712f52ea1768&form_id=335cfeba915bbb2a6058d6ba705598ce"
          >
            <FormattedMessage id="REQUEST_AN_ACCOUNT" />
          </ButtonLink>
        </Box>
      </Row>
      {/* {adoption && (
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
          <Box n={5}>
            <Typography variant="h5">{`${name} partners`}</Typography>
          </Box>
          <Box n={2}>
            <LogoSoup height={120} logoDefinitions={partners} />
          </Box>
        </Row>
      )}
      <Row style={{ marginTop: 100 }}>
        <Box n={5}>
          <Typography variant="h5">
            <FormattedMessage id="ALGORITHMS" />
          </Typography>
        </Box>
        <Box n={2}>
          <Grid container spacing={8}>
            {algorithms.map(algorithm => (
              <Grid key={algorithm.url} item>
                <Typography
                  variant="h6"
                  style={{ textDecoration: 'underline' }}
                >
                  {algorithm.name}
                </Typography>
                <Typography style={{ margin: '20px 0' }}>
                  {algorithm.description ||
                    'Brief description of this algorithm coming soon.'}
                  {algorithm.url && (
                    <Link
                      style={{ marginLeft: 4 }}
                      href={algorithm.url}
                      external
                    >
                      {`Learn more about ${algorithm.name}.`}
                    </Link>
                  )}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Row>
      <Row style={{ marginTop: 100, marginBottom: 100 }}>
        <Box n={5}>
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
