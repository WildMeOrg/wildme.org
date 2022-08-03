import React from 'react';
import MarkdownPage from '../../components/MarkdownPage';
import content from './mlEngineer.md';

export default function MLEngineer() {
  return (
    <MarkdownPage
      title="ML Engineer"
      subtitle="Portland, OR or Remote (US)"
      content={content}
      backButtonText="Back to careers"
      backButtonHref="/careers"
    />
  );
}
