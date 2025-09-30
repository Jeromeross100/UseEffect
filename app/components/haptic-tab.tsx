import React from 'react';
import { Pressable, View } from 'react-native';
import * as Haptics from 'expo-haptics';
import type { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';

export function HapticTab({
  onPress,
  onLongPress,
  accessibilityState,
  style,
  children,
  ...rest
}: BottomTabBarButtonProps) {
  return (
    <Pressable
      onPress={async (e) => {
        try { await Haptics.selectionAsync(); } catch {}
        onPress?.(e);
      }}
      onLongPress={async (e) => {
        try { await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium); } catch {}
        onLongPress?.(e);
      }}
      accessibilityState={accessibilityState}
      style={style as any}  // RN type variance
      {...rest}
    >
      <View>{children}</View>
    </Pressable>
  );
}
