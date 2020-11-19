import React from 'react';
import { useTheme } from '@material-ui/core/styles';

const smallestDeviceWidth = 320;
const minimumGutterWidth = 30;
const maxContentWidth = 1100;
const horizontalSpace = 24;
const verticalSpace = 40;
const minimumBoxWidth =
  smallestDeviceWidth - 2 * minimumGutterWidth - horizontalSpace;

export function Row({ children, style = {}, ...rest }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        maxWidth: maxContentWidth,
        margin: '0 auto',
        padding: `0 ${0.5 * minimumGutterWidth}px`,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}

export function Box({
  children,
  black = false,
  n = 1,
  style = {},
  ...rest
}) {
  const theme = useTheme();

  const widthMap = {
    1: '100%',
    2: '42%',
    3: '30%',
    4: '22%',
  };

  return (
    <div
      style={{
        minWidth: minimumBoxWidth,
        width: widthMap[n],
        margin: `${0.5 * verticalSpace}px ${0.5 * horizontalSpace}px`,
        background: black ? theme.palette.common.black : 'unset',
        flexGrow: 1,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}

export function SpaceAroundCard({ children }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        padding: 30,
      }}
    >
      {children}
    </div>
  );
}
