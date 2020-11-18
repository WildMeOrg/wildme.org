import React from 'react';
import PeopleGallery from './PeopleGallery';
import board from './board';
import staff from './staff';

export default function People() {
  return (
    <div style={{ marginTop: 64, padding: 40 }}>
      <PeopleGallery people={board} titleId="PAGE_TITLE_BOARD" />
      <PeopleGallery people={staff} titleId="PAGE_TITLE_STAFF" />
    </div>
  );
}
