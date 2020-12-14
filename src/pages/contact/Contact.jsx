import React, { useState } from 'react';
import { get } from 'lodash-es';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import { Page } from '../../components/Containers';
import ButtonLink from '../../components/ButtonLink';
import contactUsBg from '../../assets/contact-us-bg.jpg';

const helpItems = [
  {
    id: 'wildbook-issues',
    title: 'Wildbook bugs and feature requests',
    instructions: 'Create an issue on the Wildbook community forums.',
    action: 'Visit the forums',
    href: 'https://community.wildbook.org/',
  },
  {
    id: 'wildme-dot-org',
    title: 'Problems with this website',
    instructions:
      'Send an email to ben@wildme.org and I will get it fixed. Thanks for pointing it out.',
  },
  {
    id: 'volunteer',
    title: 'I want to volunteer',
    instructions:
      'Thanks for offering to help! Send an email to dev@wildme.org with some information about your interests and availability.',
  },
  {
    id: 'start-a-wildbook',
    title: 'Start a Wildbook',
    instructions:
      'Refer to our documentation on how to start a Wildbook.',
    action: 'See the docs',
    href: 'https://docs.wildme.org/docs/researchers/overview',
  },
  {
    id: 'partners',
    title: 'Partnerships, sponsorships, and grants',
    instructions:
      'Send an email to jason@wildme.org and we will be in touch as soon as possible.',
  },
  {
    id: 'other',
    title: 'Something else',
    instructions:
      'Send an email to info@wildme.org and we will get back to you soon!',
  },
];

export default function Contact() {
  const [selectedItem, setSelectedItem] = useState('');

  console.log(selectedItem);

  return (
    <Page
      style={{ marginTop: 136, marginBottom: 0 }}
      documentTitle="Contact Us"
      title="Contact Us"
    >
      <div
        style={{
          position: 'absolute',
          zIndex: -1,
          top: 40,
          width: '100vw',
          background: `url('${contactUsBg}')`,
          filter: 'hue-rotate(300deg)',
          minHeight: '100vh',
          paddingBottom: 100,
        }}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <FormControl
          variant="outlined"
          style={{
            width: 'clamp(260px, 80vw, 800px)',
            marginTop: '3rem',
          }}
        >
          <InputLabel
            style={{ color: 'black', fontSize: '1.3rem' }}
            id="contact-us-selector-label"
          >
            How can we help you?
          </InputLabel>
          <Select
            labelId="contact-us-selector-label"
            id="contact-us-selector"
            value={get(selectedItem, 'id', '')}
            onChange={event => {
              const selectedItemId = event.target.value;
              setSelectedItem(
                helpItems.find(item => item.id === selectedItemId),
              );
            }}
            style={{ fontSize: '1.3rem' }}
            label="How can we help you?"
          >
            {helpItems.map(item => (
              <MenuItem value={item.id}>{item.title}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <Paper
          style={{
            width: 'clamp(260px, 80vw, 800px)',
            backgroundColor: 'rgba(255, 255, 255, 0.4)',
            marginTop: 60,
            padding: 30,
            boxSizing: 'border-box',
          }}
        >
          <Typography variant="subtitle1">
            {get(
              selectedItem,
              'instructions',
              'Select an option above to get started.',
            )}
          </Typography>
          {get(selectedItem, 'action') && (
            <ButtonLink
              display="black"
              style={{ marginTop: 32 }}
              external
              href={selectedItem.href}
            >
              {selectedItem.action}
            </ButtonLink>
          )}
        </Paper>
      </div>
    </Page>
  );
}
