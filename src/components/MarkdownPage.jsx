import React from 'react';
import ReactMarkdown from 'react-markdown';
import Typography from '@material-ui/core/Typography';
import { Page, Row } from './Containers';

const renderers = {
  root: Typography,
};

export default function MarkdownPage(props) {
  const {
    content,
    imgSrc,
    imgSubtitle,
    title,
    children,
    style = {},
    ...rest
  } = props;
  return (
    <Page documentTitle={title} title={title}>
      <div style={{ marginBottom: 80, ...style }} {...rest}>
        <Row>
          <img
            style={{ width: '100%', maxWidth: 1100 }}
            src={imgSrc}
            alt={title}
          />
          {imgSubtitle && (
            <Typography
              variant="body2"
              style={{ marginTop: 8, marginBottom: 20 }}
            >
              {imgSubtitle}
            </Typography>
          )}
        </Row>
        <Row>
          <ReactMarkdown renderers={renderers}>
            {content}
          </ReactMarkdown>
        </Row>
        <Row>{children}</Row>
      </div>
    </Page>
  );
}
