import { isBrightColor } from './isBrightColor';

export const getContrastTextColor = (
  color: string,
  brightContrastTextColor = '#000000',
  darkContrastTextColor = '#ffffff'
) => {
  return isBrightColor(color) ? brightContrastTextColor : darkContrastTextColor;
};
