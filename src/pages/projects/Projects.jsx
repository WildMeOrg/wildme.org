import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import MainColumn from '../../components/MainColumn';
import Link from '../../components/Link';
import projectData from './projectData';

export default function Legal() {
  return (
    <MainColumn>
      <Typography
        variant="h2"
        style={{ paddingTop: 30, textAlign: 'center' }}
      >
        Projects
      </Typography>
      <Grid container spacing={4} style={{ padding: '30px 0' }}>
        {projectData.map(project => (
          <Grid item>
            <Card style={{ width: 300 }}>
              <CardActionArea>
                <Link noUnderline href={`projects${project.path}`}>
                <CardMedia
                  style={{ height: 200 }}
                  image={project.bannerSmall}
                  title={project.name}
                />
                <CardContent>
                  <Typography variant="h5">{project.name}</Typography>
                  <Typography>{`${
                    project.sightings
                  } sightings`}</Typography>
                </CardContent>
                </Link>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </MainColumn>
  );
}
