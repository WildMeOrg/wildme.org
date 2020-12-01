import React from 'react';
import MarkdownPage from '../../components/MarkdownPage';
import services from '../../assets/services.jpg';
import content from './content.md';

export default function Volunteer() {
  return (
    <MarkdownPage
      title="Volunteer"
      imgSrc={services}
      content={content}
    />
  );
}
