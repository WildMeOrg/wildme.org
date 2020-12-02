import React from 'react';
import { get } from 'lodash-es';
import { useIntl } from 'react-intl';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

export function searchMatch(object, properties, searchTerm) {
  const lowerSearchTerm = searchTerm.toLowerCase();
  let matched = false;
  properties.forEach(property => {
    const propertyValue = get(object, property, '').toLowerCase();
    if (propertyValue.includes(lowerSearchTerm)) matched = true;
  });
  return matched;
}

export default function FilterBar({
  onChange,
  value,
  instructions,
  width = 260,
  ...rest
}) {
  const intl = useIntl();
  const placeholder =
    instructions || intl.formatMessage({ id: 'SEARCH' });
  return (
    <Input
      style={{ margin: '16px 0', width }}
      placeholder={placeholder}
      value={value}
      onChange={e => onChange(e.target.value)}
      startAdornment={
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      }
      {...rest}
    />
  );
}
