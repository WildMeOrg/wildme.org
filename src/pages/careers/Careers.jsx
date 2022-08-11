import React from 'react';
import Typography from '@material-ui/core/Typography';

import { Page, Line } from '../../components/Containers';
import ButtonLink from '../../components/ButtonLink';
import Link from '../../components/Link';

export default function Careers() {
  return (
    <Page
      documentTitle="Careers"
      title="Nice to meet you!"
      subtitle="We’re Wild Me, a non-profit organization sitting at the intersection of AI, open source software, and wildlife conservation. We’re a rare team of nine engineers and ML experts focused on combating extinction with good data and well supported science."
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
          We are committed to inclusion and equal opportunity.
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
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Link to="/careers/ml-engineer">
            <Typography
              style={{ fontSize: '1.3em', marginBottom: 36 }}
            >
              Machine learning engineer
            </Typography>
          </Link>
        </div>
        <Typography>
          If none of our open positions look like a match for you,
          that is ok. We still love to meet good people. Feel free to
          reach out about future employment opportunities.
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
