import { useEffect } from 'react';

export default function(message, appendSitename = true) {
  const siteName = 'wildme.org';
  useEffect(() => {
    if (appendSitename && siteName) {
      document.title = `${message} | ${siteName}`;
    } else {
      document.title = message;
    }
  }, []);
}
