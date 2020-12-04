import React from 'react';
import Typography from '@material-ui/core/Typography';
import ButtonLink from '../../components/ButtonLink';
import { Page, Box, Row } from '../../components/Containers';

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
      <Typography variant="h6" style={{ marginTop: 8, marginLeft: 4, color: 'rgb(142 148 150)' }}>{languages}</Typography>
      <Typography style={{ marginTop: 20 }}>{description}</Typography>
      <div style={{ marginTop: 12 }}>
        {repositoryHref && <ButtonLink size="small" style={{ marginRight: 20, marginTop: 16 }} display="primary" href={repositoryHref} external>View on Github</ButtonLink>}
        {docsHref && <ButtonLink size="small" style={{ marginRight: 20, marginTop: 16 }} display="primary" href={docsHref} external>Documentation</ButtonLink>}
        {supportHref && <ButtonLink size="small" style={{ marginRight: 20, marginTop: 16 }} display="primary" href={supportHref} external>Support</ButtonLink>}
      </div>
    </Box>
  );
}

export default function Code() {
  return (
    <Page
      documentTitle="Code"
      title="Code"
      subtitle="We are a small team managing a lot of code. If you experience any issues with our documentation, please let us know."
    >
      <Row>
        <Entry
          title="Wildbook"
          languages="Java, JSP"
          description="A Java app which serves the frontend using a templating language called JSP. Wildbook-IA is required to run Wildbook."
          repositoryHref="https://github.com/WildbookOrg/wildbook"
          docsHref="http://wiki.wildbook.org/en/developers/overview/big-picture"
          supportHref="https://community.wildbook.org/"
        />
        <Entry
          title="Wildbook-IA"
          languages="Python"
          description="Wildbook-IA is short for Wildbook Intelligent Agent and is often abbreviated WBIA. Our machine learning and computer vision stack, including a small Flask interface."
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
          description="A middleware for simultaneously interfacing with the EDM and WBIA (Ecological Data Module and Wildbook Intelligent Agent)."
          repositoryHref="https://github.com/WildbookOrg/houston"
          docsHref="http://wiki.wildbook.org/en/developers/overview/houston"
        />
        <Entry
          title="Nexgen frontend"
          languages="Javascript, React"
          description="In the distant future, Wildbook's JSP frontend will be replaced by a more modern user interface powered by Houston's API."
          repositoryHref="https://github.com/WildbookOrg/wildbook-frontend"
        />
      </Row>
    </Page>
  );
}
