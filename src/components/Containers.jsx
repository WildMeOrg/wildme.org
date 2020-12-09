import React from 'react';
import { get } from 'lodash-es';
import { useTheme } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import useDocumentTitle from '../hooks/useDocumentTitle';
import ResponsiveText from './ResponsiveText';

const smallestDeviceWidth = 320;
const minimumGutterWidth = 28;
const maxContentWidth = 1100;
const horizontalSpace = 24;
const verticalSpace = 40;
const minimumBoxWidth =
  smallestDeviceWidth - 4 * minimumGutterWidth - horizontalSpace;

export function Page({
  documentTitle,
  title,
  subtitle,
  children,
  style = {},
  ...rest
}) {
  useDocumentTitle(documentTitle);
  return (
    <div
      style={{ marginTop: 64, marginBottom: 100, ...style }}
      {...rest}
    >
      {title && (
        <div style={{ paddingTop: 40 }}>
          <ResponsiveText
            variant="h1"
            style={{
              margin: '0 auto 28px auto',
              width: 'fit-content',
              padding: '0 20px',
              textAlign: 'center',
              maxWidth: 1100,
            }}
          >
            {title}
          </ResponsiveText>
          {subtitle && (
            <Typography
              variant="subtitle1"
              style={{
                margin: '0 auto',
                padding: '40px 28px 20px 28px',
                maxWidth: 880,
                textAlign: 'center',
                width: 'fit-content',
              }}
            >
              {subtitle}
            </Typography>
          )}
        </div>
      )}
      {children}
    </div>
  );
}

export function Showcase({ children, style = {}, ...rest }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
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

export function Line({ style = {}, ...rest }) {
  return (
    <Divider
      style={{
        width: '80%',
        maxWidth: 1100,
        margin: '30px auto',
        ...style,
      }}
      {...rest}
    />
  );
}

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
  variant,
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
    5: '15%',
  };

  const backgroundMap = {
    blue: theme.palette.primary.main,
    green: theme.palette.secondary.main,
    black: theme.palette.common.black,
    gradient: 'linear-gradient(90deg, #21BDC1, #41D06A)',
  };

  const colorMap = {
    blue: theme.palette.common.white,
    green: theme.palette.common.white,
    black: theme.palette.common.white,
    gradient: theme.palette.common.white,
  };

  return (
    <div
      style={{
        minWidth: minimumBoxWidth,
        width: widthMap[n],
        margin: `${0.5 * verticalSpace}px ${0.5 * horizontalSpace}px`,
        background: get(backgroundMap, variant, 'unset'),
        color: get(colorMap, variant, 'unset'),
        borderRadius: 4,
        flexGrow: 1,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}

export function SpaceAroundCard({ reverse, children, style = {} }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        flexWrap: reverse ? 'wrap-reverse' : 'wrap',
        padding: 30,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
