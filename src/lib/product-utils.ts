/**
 * List of keywords used to identify "Color" options across different languages.
 */
export const COLOR_KEYWORDS = [
  'color',
  'colour',
  'màu',
  'mau',
  'màu sắc',
  'mausac',
  'farbe',
  'couleur',
  'colorido',
  'colore',
  '色',
];

export function isColorOption(name: string): boolean {
  const normalized = name.toLowerCase().trim();
  return COLOR_KEYWORDS.some((keyword) => normalized.includes(keyword));
}

/**
 * Detects if a Shopify option name represents a "Gender" or internal metadata option.
 */
export function isGenderOption(name: string): boolean {
  const normalized = name.toLowerCase().trim();
  const genderKeywords = ['gender', 'giới tính', 'genders', 'sex'];
  return genderKeywords.some((keyword) => normalized.includes(keyword));
}

/**
 * Maps common color names to HEX values for swatches.
 */
export function getColorHex(colorName: string): string {
  const colorMap: Record<string, string> = {
    // English
    white: '#ffffff',
    black: '#000000',
    red: '#dc2626',
    blue: '#2563eb',
    navy: '#1e3a5a',
    green: '#16a34a',
    yellow: '#eab308',
    orange: '#ea580c',
    pink: '#ec4899',
    purple: '#9333ea',
    brown: '#78350f',
    gray: '#6b7280',
    grey: '#6b7280',
    beige: '#f5f5dc',
    khaki: '#c3b091',
    cream: '#fffdd0',
    charcoal: '#36454f',
    silver: '#c0c0c0',
    gold: '#ffd700',
    ivory: '#fffff0',
    olive: '#808000',
    maroon: '#800000',
    teal: '#008080',
    
    // Vietnamese
    'trắng': '#ffffff',
    'đen': '#000000',
    'đỏ': '#dc2626',
    'xanh': '#2563eb',
    'xanh dương': '#2563eb',
    'xanh lá': '#16a34a',
    'xanh lục': '#16a34a',
    'vàng': '#eab308',
    'cam': '#ea580c',
    'hồng': '#ec4899',
    'tím': '#9333ea',
    'nâu': '#78350f',
    'xám': '#6b7280',
    'be': '#f5f5dc',
    'ghi': '#6b7280',
    'than': '#36454f',
    'kem': '#fffdd0',
  };

  const key = colorName.toLowerCase().trim();
  return colorMap[key] || '#d1d5db'; // Fallback to light gray
}
