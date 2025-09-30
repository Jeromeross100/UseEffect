import React from 'react';
import { Text, type TextProps, StyleSheet, useColorScheme } from 'react-native';

export type ThemedTextProps = TextProps & {
  type?: 'title' | 'subtitle' | 'default' | 'defaultSemiBold' | 'link';
};

export function ThemedText({ type = 'default', style, ...props }: ThemedTextProps) {
  const scheme = useColorScheme();
  const color = scheme === 'dark' ? '#E6EDF3' : '#111111';

  return (
    <Text
      {...props}
      style={[{ color }, typeStyles[type], style]}
    />
  );
}

const typeStyles = StyleSheet.create({
  title: { fontSize: 28, fontWeight: '700' },
  subtitle: { fontSize: 18, fontWeight: '600' },
  default: { fontSize: 16 },
  defaultSemiBold: { fontSize: 16, fontWeight: '600' },
  link: { fontSize: 16, textDecorationLine: 'underline' },
});
