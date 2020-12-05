import React from 'react';
import MarkdownPage from '../../components/MarkdownPage';

export default function NewsArticle({ articleData }) {
  const { title, image, markdown, dateString } = articleData;
  return (
    <MarkdownPage
      title={title}
      imgSrc={image}
      imgSubtitle={dateString}
      content={markdown}
    />
  );
}
