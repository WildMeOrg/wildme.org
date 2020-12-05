import React from 'react';
import Button from './Button';
import Link from './Link';

export default function ButtonLink({
  children,
  href,
  external = false,
  linkProps,
  ...rest
}) {
  return (
    <Link
      noUnderline
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : 'unset'}
      external={external}
      {...linkProps}
    >
      <Button {...rest}>{children}</Button>
    </Link>
  );
}
