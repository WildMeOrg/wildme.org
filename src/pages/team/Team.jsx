import React from 'react';
import { Page } from '../../components/Containers';
import PeopleGallery from './PeopleGallery';
import board from './board';
import staff from './staff';

export default function People() {
  return (
    <Page
      documentTitle="Team"
      title="Meet our team."
      subtitle="Our team works at the intersection of conservation, software development, and academia. We take pride in what we do, and even more pride in how we treat each other."
    >
      <PeopleGallery people={board} titleId="PAGE_TITLE_BOARD" />
      <PeopleGallery people={staff} titleId="PAGE_TITLE_STAFF" />
    </Page>
  );
}
