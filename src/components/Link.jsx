import React from 'react';
import {
  Link as RouterLink,
  NavLink as RouterNavLink,
} from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
import { lato } from '../styles/materialTheme';

export default function Link({
  children,
  href,
  style,
  nav,
  disabled = false,
  noUnderline = false,
  external = false,
  onClick,
  ...rest
}) {
  const theme = useTheme();

  const styles = {
    color: disabled ? theme.palette.text.disabled : 'unset',
    textDecoration: noUnderline ? 'unset' : 'underline',
    cursor: disabled ? 'default' : 'pointer',
    fontFamily: lato,
    ...style,
  };

  if (disabled) {
    return (
      <div style={styles} {...rest}>
        {children}
      </div>
    );
  }

  if (external) {
    return (
      <a
        href={href}
        style={styles}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        {...rest}
      >
        {children}
      </a>
    );
  }

  if (nav) {
    return (
      <RouterNavLink
        to={href}
        activeStyle={{ textDecoration: 'none' }}
        style={styles}
        onClick={onClick}
        {...rest}
      >
        {children}
      </RouterNavLink>
    );
  }

  return (
    <RouterLink to={href} style={styles} onClick={onClick} {...rest}>
      {children}
    </RouterLink>
  );
}
