import React from 'react';
import { Text } from 'react-native';

/**
 * Minimal placeholder icon component.
 * Replace with vector icons (e.g., @expo/vector-icons) when ready.
 */
export function IconSymbol({
  name,
  size = 24,
  color,
}: { name: string; size?: number; color?: string }) {
  return <Text style={{ fontSize: size, color }}>{name}</Text>;
}
