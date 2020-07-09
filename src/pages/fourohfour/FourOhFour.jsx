import React from 'react';
import { useIntl, FormattedMessage } from 'react-intl';
import NotFoundPage from '../../components/NotFoundPage';
import useDocumentTitle from '../../hooks/useDocumentTitle';

export default function({ variant = 'ocean' }) {
  const intl = useIntl();
  const pageNotFound = intl.formatMessage({ id: 'PAGE_NOT_FOUND' });
  useDocumentTitle(pageNotFound);
  return (
    <NotFoundPage
      title="404"
      subtitle={pageNotFound}
      details={<FormattedMessage id="404_DETAILS" />}
      variant={variant}
    />
  );
}
