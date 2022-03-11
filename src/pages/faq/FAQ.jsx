import React from 'react';
import Box from '@material-ui/core/Box';
import { useTheme } from '@material-ui/core/styles';

import faqs from './faqs';
import ResponsiveText from '../../components/ResponsiveText';
import { Page, Row } from '../../components/Containers';

const maxArticleWidth = 680;

export default function FAQ() {
  const lastFaqIndex = faqs.length - 1;
  const theme = useTheme();

  return (
    <Page documentTitle="FAQ">
      <Row
        style={{
          paddingTop: theme.spacing(5),
          maxWidth: maxArticleWidth,
        }}
      >
        <article>
          <header>
            <ResponsiveText
              variant="h1"
              align="center"
              style={{ marginBottom: theme.spacing(5) }}
            >
              Frequently asked questions
            </ResponsiveText>
          </header>
          {faqs.map((faq, index) => (
            <Box
              key={faq.id}
              component="section"
              mb={index === lastFaqIndex ? 0 : 5}
            >
              <ResponsiveText
                component="h2"
                variant="h3"
                style={{ marginBottom: theme.spacing(3) }}
              >
                {faq.question}
              </ResponsiveText>
              {faq.renderAnswer()}
            </Box>
          ))}
        </article>
      </Row>
    </Page>
  );
}
