import React from 'react';
import MarkdownPage from '../../components/MarkdownPage';
import content from './engineeringManager.md';

export default function EngineeringManager() {
  return (
    <MarkdownPage
      title="Engineering Manager"
      subtitle="Portland, OR or Remote (US)"
      content={content}
      backButtonText="Back to careers"
      backButtonHref="/careers"
    />
  );
}
