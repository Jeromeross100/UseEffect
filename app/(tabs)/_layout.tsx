import { Tabs } from 'expo-router';
import React from 'react';
import type { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';

import { HapticTab } from '@/app/components/haptic-tab';
import { IconSymbol } from '@/app/components/ui/icon-symbol';
import { Colors } from '@/app/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

// Adapter so the tab bar passes correct props into our Pressable-based HapticTab
function HapticTabButton(props: BottomTabBarButtonProps) {
  return <HapticTab {...props}>{props.children}</HapticTab>;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: (props) => <HapticTabButton {...props} />,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }: { color: string }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }: { color: string }) => (
            <IconSymbol size={28} name="paperplane.fill" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
