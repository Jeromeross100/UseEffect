import { useColorScheme as _useColorScheme, ColorSchemeName } from 'react-native';

export function useColorScheme(): NonNullable<ColorSchemeName> {
  // Some environments (web/emulator) can return null — default to light.
  return _useColorScheme() ?? 'light';
}
