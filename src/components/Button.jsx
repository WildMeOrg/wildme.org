import React from 'react';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import BackIcon from '@material-ui/icons/KeyboardBackspace';

const colorMap = {
  primary: 'linear-gradient(90deg, #21BDC1, #41D06A)',
  panel: 'linear-gradient(90deg, #21BDC1, #41D06A)',
  black: 'black',
  secondary: '#fafafa',
  tertiary: 'white',
};

export default function CustomButton({
  children,
  display = 'panel',
  loading = false,
  style,
  disabled,
  size,
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
        style={style}
        {...rest}
      >
        {children}
      </Button>
    );
  }

  if (
    ['primary', 'secondary', 'tertiary', 'subtle', 'black'].includes(
      display,
    )
  ) {
    variant = 'contained';

    if (display === 'subtle') {
      color = 'default';
    } else {
      roleStyles.background = colorMap[display];
      roleStyles.color = 'white';
      if (display === 'secondary') roleStyles.color = 'black';
    }
  }

  if (display === 'panel') {
    variant = 'outlined';
  }

  if (disabled) {
    delete roleStyles.background;
    delete roleStyles.color;
  }

  return (
    <Button
      variant={variant}
      disabled={disabled}
      style={{
        padding: size === 'small' ? '8px 20px' : '20px 32px',
        ...roleStyles,
        ...style,
      }}
      size={size}
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
