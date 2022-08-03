import React from 'react';
import MarkdownPage from '../../components/MarkdownPage';
import content from './devopsEngineer.md';

export default function DevOpsEngineer() {
  return (
    <MarkdownPage
      title="DevOps Engineer"
      subtitle="Portland, OR or Remote (US)"
      content={content}
      backButtonText="Back to careers"
      backButtonHref="/careers"
    />
  );
}
