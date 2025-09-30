// app/components/haptic-tab.tsx
import React from 'react';
import { Pressable, View, type PressableProps } from 'react-native';
import * as Haptics from 'expo-haptics';

export function HapticTab({
  onPress,
  children,
  ...props
}: PressableProps & { children?: React.ReactNode }) {
  return (
    <Pressable
      onPress={async (e) => {
        try { await Haptics.selectionAsync(); } catch {}
        onPress?.(e);
      }}
      {...props}
    >
      <View>{children}</View>
    </Pressable>
  );
}
