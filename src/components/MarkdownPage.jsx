import React from 'react';
import ReactMarkdown from 'react-markdown';
import Typography from '@material-ui/core/Typography';
import { Page, Row } from './Containers';

const renderers = {
  root: Typography,
};

export default function MarkdownPage(props) {
  const { content, imgSrc, title, style = {}, ...rest } = props;
  return (
    <Page documentTitle={title} title={title}>
      <div style={{ marginBottom: 80, ...style }} {...rest}>
        <Row>
          <img
            style={{ width: '100%', maxWidth: 1100 }}
            src={imgSrc}
            alt={title}
          />
        </Row>
        <Row>
          <ReactMarkdown renderers={renderers}>
            {content}
          </ReactMarkdown>
        </Row>
      </div>
    </Page>
  );
}
