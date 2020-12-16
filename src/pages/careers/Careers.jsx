import React from 'react';
import Typography from '@material-ui/core/Typography';

import { Page, Line } from '../../components/Containers';
import ButtonLink from '../../components/ButtonLink';

export default function Careers() {
  return (
    <Page
      documentTitle="Careers"
      title="Nice to meet you!"
      subtitle="We’re Wild Me, a non-profit organization sitting at the intersection of AI, open source software, and wildlife conservation. We’re a rare team of eight engineers and ML experts focused on combating extinction with good data and well supported science."
    >
      <Line />
      <div
        style={{
          margin: '0 auto 80px auto',
          padding: 40,
          maxWidth: 700,
        }}
      >
        <Typography variant="h5" style={{ marginBottom: 40 }}>
          We’re committed to inclusion and equal opportunity.
        </Typography>
        <Typography>
          Wild Me is an equal opportunity employer. Every qualified
          applicant will be considered for employment. We do not
          discriminate based on race, color, religion, gender, sexual
          orientation, age, national origin, marital status, sex,
          disability, political ideology, or veteran status, or other
          protected class.
        </Typography>
        <Typography variant="h5" style={{ margin: '40px 0' }}>
          Open positions
        </Typography>
        <Typography>
          There are no open positions at the moment, but we love to
          meet good people. Feel free to reach out about future
          employment opportunities.
        </Typography>
        <ButtonLink
          display="primary"
          style={{ marginTop: 40 }}
          href="/contact"
        >
          Contact Us
        </ButtonLink>
      </div>
    </Page>
  );
}
