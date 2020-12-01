import React from 'react';
import ReactMarkdown from 'react-markdown';
import Typography from '@material-ui/core/Typography';
import ResponsiveText from './ResponsiveText';
import { Row } from './Containers';
import useDocumentTitle from '../hooks/useDocumentTitle';

const renderers = {
  root: Typography,
};

export default function MarkdownPage(props) {
  const { content, imgSrc, title, style = {}, ...rest } = props;
  useDocumentTitle(title);
  return (
    <div style={{ margin: '80px 0', ...style }} {...rest}>
      <Row>
        <ResponsiveText variant="h1" style={{ marginBottom: 20 }}>
          {title}
        </ResponsiveText>
      </Row>
      <Row>
        <img style={{ width: '100%', maxWidth: 1100 }} src={imgSrc} alt={title} />
      </Row>
      <Row>
        <ReactMarkdown renderers={renderers}>{content}</ReactMarkdown>
      </Row>
    </div>
  );
}
