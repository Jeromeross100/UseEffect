import { Platform } from 'react-native';

export const Fonts = {
  rounded: Platform.select({
    ios: 'Avenir Next Rounded',
    android: 'sans-serif',
    default: 'system-ui',
  }) as string,
};
