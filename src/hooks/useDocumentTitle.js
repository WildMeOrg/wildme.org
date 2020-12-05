import { useEffect } from 'react';

export default function(message, appendSitename = true) {
  const siteName = 'Wild Me';
  useEffect(() => {
    if (appendSitename && siteName) {
      document.title = `${message} | ${siteName}`;
    } else {
      document.title = message;
    }
  }, []);
}
