import React from 'react';
import MarkdownPage from '../../components/MarkdownPage';
import legalImage from '../../assets/legal.jpg';
import content from './pageContent.md';

export default function Legal() {
  return (
    <MarkdownPage
      title="Codex Terms of Use"
      imgSrc={legalImage}
      content={content}
    />
  );
}
