import React from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import Typography from '@material-ui/core/Typography';
import { Page, Row } from './Containers';

const maxArticleWidth = 680;

const renderers = {
  root: ({ style, ...rest }) => (
    <Typography
      style={{
        fontSize: 18,
        fontWeight: 300,
        lineHeight: '32px',
        margin: '0 auto',
        maxWidth: 800,
        width: '100%',
        ...style,
      }}
      {...rest}
    />
  ),
};

export default function MarkdownPage(props) {
  const {
    content,
    imgSrc,
    imgSubtitle,
    title,
    documentTitle,
    children,
    style = {},
    ...rest
  } = props;
  return (
    <Page
      documentTitle={documentTitle || title}
      title={title}
      titleStyles={{ maxWidth: maxArticleWidth + 200 }}
    >
      <div style={{ marginBottom: 80, ...style }} {...rest}>
        <Row style={{ maxWidth: maxArticleWidth }}>
          <div style={{ margin: '0 auto' }}>
            <img
              style={{
                width: '100%',
                maxWidth: maxArticleWidth,
                height: 'intrinsic', // safari fix
              }}
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
          </div>
        </Row>
        <Row style={{ maxWidth: maxArticleWidth }}>
          <ReactMarkdown renderers={renderers} allowDangerousHtml>
            {content}
          </ReactMarkdown>
        </Row>
        <Row>{children}</Row>
      </div>
    </Page>
  );
}
