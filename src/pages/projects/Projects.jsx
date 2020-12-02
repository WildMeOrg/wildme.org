import React from 'react';
import { useIntl } from 'react-intl';
import { useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import useDocumentTitle from '../../hooks/useDocumentTitle';
import { Page } from '../../components/Containers';
import Link from '../../components/Link';
import projectData from './projectData';

export default function Projects() {
  const theme = useTheme();
  const intl = useIntl();
  useDocumentTitle(intl.formatMessage({ id: 'PROJECTS' }));

  const translatedProjects = intl.formatMessage({ id: 'PROJECTS' });

  return (
    <Page
      documentTitle={translatedProjects}
      title={translatedProjects}
    >
      <Grid
        container
        spacing={4}
        justify="space-around"
        style={{ padding: '0 30px 80px 30px' }}
      >
        {projectData.map(project => (
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
                <Link noUnderline href={`projects${project.path}`}>
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
