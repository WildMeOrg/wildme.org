import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { useTheme } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import Link from './Link';
import Button from './Button';

export default function AppHeaderMenu({ titleId, items }) {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        onClick={handleClick}
        style={{ color: theme.palette.common.white }}
        size="small"
      >
        <FormattedMessage id={titleId} />
      </Button>
      <Menu
        id={`${titleId}-menu`}
        getContentAnchorEl={null}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{ horizontal: 'left', vertical: 'top' }}
        MenuListProps={{
          style: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
          },
        }}
      >
        {items.map(item => (
          <Link
            key={item.labelId}
            nav
            noUnderline
            href={item.path}
            external={item.external}
            onClick={handleClose}
          >
            <MenuItem>
              <FormattedMessage id={item.labelId} />
            </MenuItem>
          </Link>
        ))}
      </Menu>
    </div>
  );
}
