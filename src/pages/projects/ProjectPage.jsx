import React from 'react';
import { FormattedMessage } from 'react-intl';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import InvitationIcon from '@material-ui/icons/EmailOutlined';
import PublicIcon from '@material-ui/icons/Public';
import MainColumn from '../../components/MainColumn';

export default function ProjectPage({ data }) {
  const {
    name,
    inviteOnly,
    descriptionId,
    bannerLarge,
    sightings,
    individuals,
    partners,
  } = data;
  return (
    <MainColumn>
      <Typography variant="h2" style={{ paddingTop: 30 }}>
        {name}
      </Typography>
      <img src={bannerLarge} width="70%" alt={`Banner for ${name}`} />
      <Typography>
        <FormattedMessage id={descriptionId} />
      </Typography>
      <Chip
        icon={inviteOnly ? <InvitationIcon /> : <PublicIcon />}
        variant="outlined"
        label={
          <FormattedMessage
            id={inviteOnly ? 'INVITE_ONLY' : 'PUBLIC'}
          />
        }
      />
      <Typography>{`${sightings} sightings`}</Typography>
      <Typography>{`${individuals} individuals`}</Typography>
      {partners && (
        <div>
          <Typography variant="h5">Partners</Typography>
          <GridList
            cellHeight={100}
            cols={3}
            style={{ background: 'black' }}
          >
            {partners.map(partner => (
              <GridListTile>
                <img
                  style={{ height: 100, width: 'auto' }}
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                />
              </GridListTile>
            ))}
          </GridList>
        </div>
      )}
    </MainColumn>
  );
}
