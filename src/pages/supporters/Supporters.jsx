import React from 'react';
import { useIntl } from 'react-intl';
import ReactPlayer from 'react-player/youtube';
import Typography from '@material-ui/core/Typography';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import LogoSoup from '../../components/LogoSoup';
import ButtonLink from '../../components/ButtonLink';
import ResponsiveText from '../../components/ResponsiveText';
import { Showcase, Line } from '../../components/Containers';
import { majorSupporters, supporterLogos } from './supporterData';

export default function Sponsors() {
  const intl = useIntl();
  useDocumentTitle(intl.formatMessage({ id: 'SPONSORS' }));

  return (
    <div style={{ marginTop: 64 }}>
      <div style={{ paddingTop: 40 }}>
        <ResponsiveText
          variant="h1"
          style={{ margin: '0 auto', width: 'fit-content' }}
        >
          Our supporters.
        </ResponsiveText>
        <Typography
          variant="subtitle1"
          style={{
            margin: '0 auto',
            paddingTop: 40,
            paddingBottom: 60,
            maxWidth: 880,
            textAlign: 'center',
            width: 'fit-content',
          }}
        >
          Conservation doesn&apos;t happen in a vacuum. Join us in
          celebrating our supporters, whose generosity and direction
          make it all possible.
        </Typography>
      </div>
      <Line />
      {majorSupporters.map(sponsor => (
        <>
          <Showcase style={{ maxWidth: 800 }}>
            <div style={{ marginBottom: 32 }}>
              <img
                alt={`${sponsor.name} logo`}
                height="auto"
                width="200"
                src={sponsor.logo}
                style={{ padding: '12px 40px 12px 0', float: 'left' }}
              />
              <div>
                <Typography variant="h5">{sponsor.name}</Typography>
                <Typography
                  variant="subtitle1"
                  style={{ fontStyle: 'italic', color: '#444' }}
                >
                  {sponsor.role}
                </Typography>
                <Typography style={{ marginTop: 8 }}>
                  {sponsor.description}
                </Typography>
              </div>
            </div>
            {sponsor.youtubeUrl && (
              <ReactPlayer
                style={{
                  maxWidth: '90%',
                  maxHeight: '50%',
                }}
                url={sponsor.youtubeUrl}
              />
            )}
            {sponsor.photoSrc && (
              <img
                alt={`${sponsor.name} banner`}
                src={sponsor.photoSrc}
                style={{ width: '90%', maxHeight: '50%' }}
              />
            )}
          </Showcase>
          <Line />
        </>
      ))}
      <div style={{ paddingTop: 40, margin: '0 auto' }}>
        <ResponsiveText
          variant="h3"
          style={{ margin: '0 auto', width: 'fit-content' }}
        >
          Additional supporters.
        </ResponsiveText>

        <LogoSoup
          style={{ maxWidth: 880, margin: '80px auto' }}
          height={60}
          logos={supporterLogos.map(logo => logo.src)}
        />
      </div>
      <Line />
      <div
        style={{
          alignItems: 'center',
          paddingTop: 40,
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <ResponsiveText variant="h3">
          Become a sponsor.
        </ResponsiveText>
        <ButtonLink
          href="/contact"
          display="primary"
          style={{ marginTop: 40, marginBottom: 80 }}
        >
          Contact us
        </ButtonLink>
      </div>
    </div>
  );
}
