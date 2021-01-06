import React from 'react';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import HelpIcon from '@material-ui/icons/Help';
import DocsIcon from '@material-ui/icons/Description';
import ButtonLink from '../../components/ButtonLink';
import LogoSoup from '../../components/LogoSoup';
import { Page, Box, Row } from '../../components/Containers';
import shoutoutLogos from './shoutoutData';

function Entry({
  title,
  description,
  languages,
  repositoryHref,
  docsHref,
  supportHref,
}) {
  return (
    <Box n={3} variant="black" style={{ padding: 40 }}>
      <Typography variant="h4">{title}</Typography>
      <Typography
        variant="h6"
        style={{
          marginTop: 8,
          marginLeft: 4,
          color: 'rgb(142 148 150)',
        }}
      >
        {languages}
      </Typography>
      <Typography style={{ marginTop: 20 }}>{description}</Typography>
      <div style={{ marginTop: 12 }}>
        {repositoryHref && (
          <ButtonLink
            size="small"
            style={{ marginRight: 20, marginTop: 16 }}
            display="primary"
            startIcon={<GitHubIcon />}
            href={repositoryHref}
            external
          >
            View code
          </ButtonLink>
        )}
        {docsHref && (
          <ButtonLink
            size="small"
            style={{ marginRight: 20, marginTop: 16 }}
            display="primary"
            href={docsHref}
            startIcon={<DocsIcon />}
            external
          >
            DOCUMENTATION
          </ButtonLink>
        )}
        {supportHref && (
          <ButtonLink
            size="small"
            style={{ marginRight: 20, marginTop: 16 }}
            display="primary"
            href={supportHref}
            startIcon={<HelpIcon />}
            external
          >
            Support
          </ButtonLink>
        )}
      </div>
    </Box>
  );
}

export default function Code() {
  return (
    <Page documentTitle="Repositories" title="Repositories">
      <Row>
        <Entry
          title="Wildbook"
          languages="Java, JSP"
          description="A Java app which serves the frontend using a templating language called JSP."
          repositoryHref="https://github.com/WildbookOrg/wildbook"
          docsHref="https://docs.wildme.org/docs/developers/wildbook_overview"
          supportHref="https://community.wildbook.org/"
        />
        <Entry
          title="Wildbook IA"
          languages="Python"
          description="Wildbook IA is short for Wildbook Image Analysis and is often abbreviated WBIA. Our machine learning and computer vision stack, including a small Flask interface."
          repositoryHref="https://github.com/WildbookOrg/wildbook-ia"
          supportHref="https://community.wildbook.org/"
        />
        <Entry
          title="wildme.org"
          languages="Javascript, React"
          description="The code for this website, written in React."
          repositoryHref="https://github.com/WildbookOrg/wildme.org"
        />
      </Row>
      <Row>
        <Entry
          title="Houston"
          languages="Python, Flask"
          description="A middleware for simultaneously interfacing with the EDM (Ecological Data Module) and WBIA (Wildbook Image Analysis)."
          repositoryHref="https://github.com/WildbookOrg/houston"
          docsHref="https://docs.wildme.org/docs/developers/houston"
        />
        <Entry
          title="Nexgen frontend"
          languages="Javascript, React"
          description="In the distant future, Wildbook's JSP frontend will be replaced by a more modern user interface powered by Houston's API."
          repositoryHref="https://github.com/WildbookOrg/wildbook-frontend"
        />
      </Row>
      <Row>
        <Typography variant="h5" style={{ margin: '40px auto' }}>
          Shout out to these wonderful open source projects!
        </Typography>
        <LogoSoup
          style={{ margin: '0 auto' }}
          height={100}
          logoDefinitions={shoutoutLogos}
        />
      </Row>
    </Page>
  );
}
