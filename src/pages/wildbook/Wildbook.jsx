import React from 'react';
import wildbookBanner from '../../assets/wildbook-banner.jpg';
import MarkdownPage from '../../components/MarkdownPage';
import ButtonLink from '../../components/ButtonLink';
import markdown from './wb.md';

export default function Wildbook() {
  return (
    <MarkdownPage
      documentTitle="Wildbook"
      title="Wildbook: our flagship product."
      imgSrc={wildbookBanner}
      content={markdown}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          width: '100%',
          maxWidth: 600,
          margin: '40px auto 20px auto',
        }}
      >
        <ButtonLink
          style={{ marginTop: 20 }}
          display="primary"
          external
          href="http://wiki.wildbook.org/en/researchers"
        >
          Start a Wildbook
        </ButtonLink>
        <ButtonLink
          style={{ marginTop: 20 }}
          display="primary"
          external
          href="http://wiki.wildbook.org/en/researchers"
        >
          More information
        </ButtonLink>
      </div>
    </MarkdownPage>
  );
}
