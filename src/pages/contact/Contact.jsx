import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';

import { Page, Box } from '../../components/Containers';
import ButtonLink from '../../components/ButtonLink';

const helpCardSize = 260;
const helpCardPadding = 40;
function HelpCard({ title, instructions, action, href }) {
  const [anchorEl, setAnchorEl] = useState(null);
  return (
    <>
      <Box
        onClick={e => setAnchorEl(e.currentTarget)}
        style={{
          padding: helpCardPadding,
          height: helpCardSize,
          width: helpCardSize,
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          flexGrow: 'unset',
          margin: 20,
        }}
        variant="black"
      >
        <Typography variant="h5">{title}</Typography>
        <Popover
          marginThreshold={0}
          PaperProps={{
            style: {
              maxWidth: 'unset',
              overflowX: 'unset',
            },
          }}
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={e => {
            e.stopPropagation();
            setAnchorEl(null);
          }}
        >
          <Box
            n={4}
            variant="gradient"
            style={{
              padding: helpCardPadding,
              height: helpCardSize,
              width: helpCardSize,
              margin: 0,
            }}
          >
            <Typography variant="h5">{instructions}</Typography>
            {action && (
              <ButtonLink
                display="secondary"
                style={{ marginTop: 32 }}
                external
                href={href}
              >
                {action}
              </ButtonLink>
            )}
          </Box>
        </Popover>
      </Box>
    </>
  );
}

export default function Contact() {
  return (
    <Page
      documentTitle="Contact Us"
      title="Contact Us"
      subtitle="Want to chat? Choose from the options below."
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          flexWrap: 'wrap',
          maxWidth: 1200,
          margin: '0px auto',
        }}
      >
        <HelpCard
          title="Wildbook bugs and feature requests"
          instructions="Create an issue on the Wildbook community forums."
          action="Visit the forums"
          href="https://community.wildbook.org/"
        />
        <HelpCard
          title="Problems with this website"
          instructions="Thanks for pointing it out. Please email ben@wildme.org and I will get it fixed."
        />
        <HelpCard
          title="Volunteering"
          instructions="Thanks for offering to help! Please email dev@wildme.org with some information about your interests and availability."
        />
        <HelpCard
          title="Start a Wildbook"
          instructions="Please refer to our documentation on how to start a Wildbook."
          action="See the docs"
          href="http://wiki.wildbook.org/en/researchers/overview"
        />
        <HelpCard
          title="Partnerships, sponsorships, and grants"
          instructions="Please email jason@wildme.org and we will be in touch as soon as possible."
        />
        <HelpCard
          title="General inquiries"
          instructions="Send an email to info@wildme.org and we will get back to you soon!"
        />
      </div>
    </Page>
  );
}
