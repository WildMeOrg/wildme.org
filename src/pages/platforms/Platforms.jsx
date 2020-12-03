import React from 'react';
import { useIntl } from 'react-intl';
import { useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import { Page } from '../../components/Containers';
import Link from '../../components/Link';
import platformData from './platformData';

export default function Platforms() {
  const theme = useTheme();
  const intl = useIntl();
  const translatedPlatforms = intl.formatMessage({ id: 'PLATFORMS' });

  return (
    <Page
      documentTitle={translatedPlatforms}
      title={translatedPlatforms}
    >
      <Grid
        container
        spacing={4}
        justify="space-around"
        style={{ padding: '0 30px 80px 30px' }}
      >
        {platformData.map(project => (
          <Grid
            key={project.name}
            style={{
              width: 320,
              flexGrow: 1,
            }}
            item
          >
            <Card
              style={{
                background: theme.palette.common.black,
                color: theme.palette.common.white,
                borderRadius: 0,
              }}
            >
              <CardActionArea>
                <Link noUnderline href={`platforms${project.path}`}>
                  <CardMedia
                    style={{ height: 200 }}
                    image={project.bannerSmall}
                    title={project.name}
                  />
                  <CardContent>
                    <Typography variant="h5">
                      {project.name}
                    </Typography>
                    <Typography>{`${project.sightings.toLocaleString()} sightings`}</Typography>
                  </CardContent>
                </Link>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Page>
  );
}
