import React from 'react';
import { useIntl } from 'react-intl';
import ReactPlayer from 'react-player/youtube';
import Typography from '@material-ui/core/Typography';
import LogoSoup from '../../components/LogoSoup';
import ButtonLink from '../../components/ButtonLink';
import ResponsiveText from '../../components/ResponsiveText';
import { Page, Showcase, Line } from '../../components/Containers';
import {
  majorSupporters,
  softwareLogos,
  supporterLogos,
} from './supporterData';

export default function Supporters() {
  const intl = useIntl();
  return (
    <Page
      documentTitle={intl.formatMessage({ id: 'SUPPORTERS' })}
      title="Our supporters"
      subtitle="Conservation doesn't happen in a vacuum. Join us in celebrating our supporters, whose generosity and direction make it all possible."
    >
      <div
        style={{
          alignItems: 'center',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <ButtonLink
          href="/contact"
          display="primary"
          style={{ marginTop: 20, marginBottom: 32 }}
        >
          Become a sponsor
        </ButtonLink>
      </div>
      <Line />
      {majorSupporters.map(sponsor => (
        <React.Fragment key={sponsor.name}>
          <Showcase style={{ maxWidth: 800 }}>
            <div
              style={{
                marginBottom: 32,
                display: 'flex',
                flexWrap: 'wrap',
              }}
            >
              <a
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt={`${sponsor.name} logo`}
                  src={sponsor.logo}
                  style={{
                    padding: '12px 40px 12px 0',
                    width: 200,
                    height: 'auto',
                  }}
                />
              </a>
              <div style={{ maxWidth: 480 }}>
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
        </React.Fragment>
      ))}
      <div style={{ paddingTop: 40, margin: '0 auto' }}>
        <ResponsiveText
          variant="h3"
          style={{
            margin: '0 auto',
            width: 'fit-content',
            textAlign: 'center',
          }}
        >
          Operational support
        </ResponsiveText>
        <Typography
          style={{
            margin: '12px auto 0 auto',
            width: 'fit-content',
            textAlign: 'center',
            color: 'rgb(68, 68, 68)',
            fontStyle: 'italic',
          }}
        >
          These organizations generously donate products and services.
        </Typography>
        <LogoSoup
          style={{ maxWidth: 880, margin: '80px auto' }}
          height={120}
          logoDefinitions={softwareLogos}
          showSubtitles
        />
      </div>
      <Line />
      <div style={{ paddingTop: 40, margin: '0 auto' }}>
        <ResponsiveText
          variant="h3"
          style={{
            margin: '0 auto',
            width: 'fit-content',
            textAlign: 'center',
          }}
        >
          Past supporters
        </ResponsiveText>

        <LogoSoup
          style={{ maxWidth: 880, margin: '80px auto' }}
          height={60}
          logoDefinitions={supporterLogos}
        />
      </div>
    </Page>
  );
}
