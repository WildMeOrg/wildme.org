import React, { useState } from 'react';
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
    <div style={{ marginBottom: 80, padding: 40 }}>
      <Dialog
        open={Boolean(selectedPerson)}
        onClose={onClose}
        maxWidth="sm"
      >
        <DialogTitle style={{ marginBottom: 20 }}>
          <IconButton
            style={{ position: 'absolute', top: 4, right: 16 }}
            aria-label="close"
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent style={{ paddingBottom: 40 }}>
          {selectedPerson && (
            <>
              <img
                src={selectedPerson.img}
                alt={selectedPerson.name}
                style={{
                  width: 300,
                  maxWidth: '100%',
                  float: 'left',
                  padding: '0px 20px 12px 0',
                }}
              />
              <Typography variant="h6">
                {selectedPerson.name}
              </Typography>
              <Typography
                variant="subtitle2"
                style={{ marginBottom: 20 }}
              >
                {selectedPerson.role}
              </Typography>
              {selectedPerson.renderDescription()}
            </>
          )}
        </DialogContent>
      </Dialog>
      <Typography variant="h5" style={{ marginBottom: 40 }}>
        <FormattedMessage id={titleId} />
      </Typography>
      <Grid style={{ maxWidth: 1300 }} spacing={3} container>
        {people.map(person => (
          <Grid
            item
            key={person.name}
            style={{ cursor: 'pointer' }}
            onClick={() => setSelectedPerson(person)}
          >
            <img
              src={person.img}
              alt={person.name}
              style={{ width: 300 }}
            />
            <div>
              <Typography
                style={{ textAlign: 'center' }}
                variant="h6"
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
