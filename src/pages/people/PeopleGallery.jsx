import React, { useState } from 'react';
import { get } from 'lodash-es';
import { FormattedMessage } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

export default function PeopleGallery({ people, titleId }) {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const onClose = () => setSelectedPerson(null);
  return (
    <div style={{ marginBottom: 80 }}>
      <Dialog
        open={Boolean(selectedPerson)}
        onClose={onClose}
        maxWidth="sm"
      >
        <DialogTitle>
          <span>{get(selectedPerson, 'name')}</span>
          <IconButton
            style={{ position: 'absolute', top: 4, right: 16 }}
            aria-label="close"
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent style={{ paddingBottom: 40 }}>
          <Typography
            variant="subtitle1"
            style={{ marginBottom: 20 }}
          >
            {get(selectedPerson, 'role')}
          </Typography>
          {selectedPerson && selectedPerson.renderDescription()}
        </DialogContent>
      </Dialog>
      <Typography variant="h4" style={{ marginBottom: 40 }}>
        <FormattedMessage id={titleId} />
      </Typography>
      <Grid style={{ maxWidth: 1300 }} spacing={3} container>
        {people.map(person => (
          <Grid item onClick={() => setSelectedPerson(person)}>
            <img
              src={person.img}
              alt={person.name}
              style={{ width: 300 }}
            />
            <div>
              <Typography
                style={{ textAlign: 'center' }}
                variant="h5"
              >
                {person.name}
              </Typography>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
