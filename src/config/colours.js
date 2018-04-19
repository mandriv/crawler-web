export const primary = '#0072ff';
export const primaryLight = '#3DA5D4';
export const primaryDark = '#09478B';
export const dark = '#151722';
export const white = '#F8F9F7';
export const whiteSmoke = '#E3EDFF';

export const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  } : null;
};

export const rgba = (hex, alpha = 1.0) => {
  const rgb = hexToRgb(hex);
  if (!rgb) return '#FFFFFF';
  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
};
