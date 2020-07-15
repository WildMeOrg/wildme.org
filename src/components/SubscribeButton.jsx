import React from 'react';
import Button from './Button';

export default function SubscribeButton() {
  return (
    <div>
      <data
        id="mj-w-res-data"
        data-token="76129678ff3640e14cae7132d5016ef6"
        className="mj-w-data"
        data-apikey="3l7P"
        data-w-id="DBg"
        data-lang="en_US"
        data-base="https://app.mailjet.com"
        data-width="640"
        data-height="328"
        data-statics="statics"
      />
      <Button
        onClick={event => {
          console.log(event, this);
          window.mjOpenPopin(event, window.globalThis);
        }}
        data-token="76129678ff3640e14cae7132d5016ef6"
      >
        Subscribe
      </Button>
    </div>
  );
}
