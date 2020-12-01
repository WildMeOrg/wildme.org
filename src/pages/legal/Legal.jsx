import React from 'react';
import MarkdownPage from '../../components/MarkdownPage';
import legalImage from '../../assets/legal.jpg';
import content from './pageContent.md';

export default function Legal() {
  return (
    <MarkdownPage
      title="Legal"
      imgSrc={legalImage}
      content={content}
    />
  );
}
