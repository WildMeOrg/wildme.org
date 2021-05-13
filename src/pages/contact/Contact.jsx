import React from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { Page } from '../../components/Containers';
import ButtonLink from '../../components/ButtonLink';

const helpItems = [
  {
    title: 'Wildbook bugs and feature requests',
    instructions:
      'If you have an idea for a new feature or need to report a bug, write a post on the Wildbook community forums. Our staff monitors the forums closely.',
    buttonText: 'Visit the forums',
    href: 'https://community.wildme.org/',
  },
  {
    title: 'Request a Wildbook account',
    href:
      'https://us7.list-manage.com/contact-form?u=c5af097df0ca8712f52ea1768&form_id=335cfeba915bbb2a6058d6ba705598ce',
    buttonText: 'Send Request',
    instructions:
      'If you want to join one of our Wildbooks, use the form below to request an invitation. Platforms policies vary, but most Wildbooks are available to new researchers.',
  },
  {
    title: 'I want to volunteer',
    email: 'dev@wildme.org',
    buttonText: 'Email Us',
    instructions:
      'Thanks for offering to help! Send an email to dev@wildme.org with information about your interests and availability.',
  },
  {
    title: 'Start a Wildbook',
    instructions:
      'Refer to our documentation on how to start a Wildbook.',
    buttonText: 'See the docs',
    href: 'https://docs.wildme.org/docs/researchers/overview',
  },
  {
    title: 'Problems with this website',
    email: 'ben@wildme.org',
    buttonText: 'Email Ben',
    instructions:
      'Send an email to ben@wildme.org and he will get it fixed. Thanks for pointing it out.',
  },
  {
    title: 'Partnerships, sponsorships, and grants',
    email: 'jason@wildme.org',
    buttonText: 'Email Jason',
    instructions:
      'If you are interested in developing a partnership, sponsorship, or grant we would love to hear from you. Send an email to jason@wildme.org and he will be in touch as soon as possible.',
  },
  {
    title: 'Something else',
    email: 'info@wildme.org',
    buttonText: 'Email Us',
    instructions:
      'Send an email to info@wildme.org and we will get back to you soon!',
  },
];

export default function Contact() {
  return (
    <Page
      style={{
        maxWidth: 480,
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
      documentTitle="Contact Us"
      title="Contact Us"
    >
      {helpItems.map((item, i) => {
        const href = item.href || `mailto:${item.email}`;
        return (
          <>
            {i === 0 ? null : (
              <Divider style={{ margin: '30px 0' }} />
            )}
            <div style={{ padding: '0 20px' }} key={item.title}>
              <Typography variant="h5">{item.title}</Typography>
              <Typography
                style={{ marginTop: 12, marginBottom: 12 }}
                variant="body2"
              >
                {item.instructions}
              </Typography>
              <ButtonLink size="small" external href={href}>
                {item.buttonText}
              </ButtonLink>
            </div>
          </>
        );
      })}
    </Page>
  );
}
