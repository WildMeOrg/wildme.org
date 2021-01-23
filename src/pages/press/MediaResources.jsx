import React from 'react';
import { FormattedMessage } from 'react-intl';
import Typography from '@material-ui/core/Typography';
import { Page, Row, Box } from '../../components/Containers';
import images from './images';

export default function MediaResources() {
  return (
    <Page documentTitle="Media resources" title="Media resources">
      <Row>
        <Box n={2} style={{ padding: '0 20px' }}>
          <Typography variant="h5">About Wild Me</Typography>
          <Typography style={{ marginTop: 8 }}>
            <FormattedMessage id="WILDME_PRESS_DESCRIPTON" />
          </Typography>
        </Box>
        <Box n={2} style={{ padding: '0 20px' }}>
          <Typography variant="h5">About Wildbook</Typography>
          <Typography style={{ marginTop: 8 }}>
            <FormattedMessage id="WILDBOOK_PRESS_DESCRIPTION" />
          </Typography>
        </Box>
      </Row>
      <Row>
        <Box n={2} style={{ padding: '0 20px' }}>
          <Typography variant="h5">Images</Typography>
          <Typography style={{ marginTop: 8 }}>
            These images can be used in editorials without express
            permission.
          </Typography>
        </Box>
      </Row>
      <Row>
        {images.map(image => (
          <Box
            n={3}
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <a download={image.src} href={image.src}>
              <img
                style={{ maxWidth: '100%' }}
                src={image.src}
                alt={image.description}
              />
            </a>
            <Typography variant="caption" style={{ marginTop: 4 }}>
              {image.description}
            </Typography>
          </Box>
        ))}
      </Row>
    </Page>
  );
}
