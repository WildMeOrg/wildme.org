import React from 'react';
import MarkdownPage from '../../components/MarkdownPage';
import services from '../../assets/services.jpg';
import content from './services.md';

export default function Services() {
  return (
    <MarkdownPage
      title="Services"
      imgSrc={services}
      content={content}
    />
  );
}
