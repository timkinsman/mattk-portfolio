/** 
 * Check if a hex color is bright.
 * @param hexColor - The hex color code (e.g., "#FFFFFF" for white).
 * @returns True if the color is bright, false otherwise.
 * 
 * @example
 * // Example usage:
 * const brightColor = isBrightColor('#FFFFFF'); // true
 * const darkColor = isBrightColor('#000000'); // false
 *
 * @author ChatGPT 3.5 🤖
 */
export function isBrightColor(hexColor: string): boolean {
  // Ensure that the input is a valid hex color code
  const hexRegex = /^#([0-9A-Fa-f]{3}){1,2}$/;
  if (!hexRegex.test(hexColor)) {
    throw new Error('Invalid hex color code');
  }

  // Extract the RGB components from the hex color code
  const bigint = parseInt(hexColor.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  // Calculate the luminance using the YIQ formula
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  // Determine if the color is considered bright
  return luminance > 0.5;
}
