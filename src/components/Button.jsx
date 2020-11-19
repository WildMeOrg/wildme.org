import React from 'react';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import BackIcon from '@material-ui/icons/KeyboardBackspace';

const colorMap = {
  primary: 'linear-gradient(90deg, #21BDC1, #41D06A)',
  panel: 'linear-gradient(90deg, #21BDC1, #41D06A)',
  secondary: 'grey',
  tertiary: 'white',
};

export default function CustomButton({
  children,
  display = 'panel',
  loading = false,
  style,
  disabled,
  ...rest
}) {
  let variant = undefined; // eslint-disable-line
  let color = undefined; // eslint-disable-line
  const roleStyles = {};

  if (display === 'back') {
    return (
      <Button
        size="small"
        startIcon={<BackIcon />}
        disabled={disabled}
        {...rest}
      >
        {children}
      </Button>
    );
  }

  if (
    ['primary', 'secondary', 'tertiary', 'subtle'].includes(display)
  ) {
    variant = 'contained';

    if (display === 'subtle') {
      color = 'default';
    } else {
      roleStyles.background = colorMap[display];
      roleStyles.color = 'white';
    }
  }

  if (display === 'panel') {
    variant = 'outlined';
  }

  if (disabled) {
    delete roleStyles.background;
    delete roleStyles.color;
  }

  console.log(roleStyles);

  return (
    <Button
      variant={variant}
      disabled={disabled}
      style={{ padding: '20px 32px', ...roleStyles, ...style }}
      {...rest}
    >
      {loading ? (
        <CircularProgress size={24} style={{ color: 'white' }} />
      ) : (
        children
      )}
    </Button>
  );
}
