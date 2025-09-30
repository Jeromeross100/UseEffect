import React, { type ReactNode } from 'react';
import { ScrollView, View, StyleSheet, useColorScheme, type ViewStyle } from 'react-native';

type Props = {
  headerBackgroundColor?: { light: string; dark: string };
  headerImage?: ReactNode;
  children?: ReactNode;
};

export default function ParallaxScrollView({
  headerBackgroundColor,
  headerImage,
  children,
}: Props) {
  const scheme = useColorScheme();
  const bg =
    (scheme === 'dark' ? headerBackgroundColor?.dark : headerBackgroundColor?.light) ??
    (scheme === 'dark' ? '#1D3D47' : '#A1CEDC');

  return (
    <ScrollView contentContainerStyle={styles.contentContainer} bounces>
      <View style={[styles.header, { backgroundColor: bg } as ViewStyle]}>
        <View style={styles.headerImageContainer}>{headerImage}</View>
      </View>
      <View style={styles.body}>{children}</View>
    </ScrollView>
  );
}

const HEADER_HEIGHT = 180;

const styles = StyleSheet.create({
  contentContainer: { paddingBottom: 24 },
  header: {
    height: HEADER_HEIGHT,
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  headerImageContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  body: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
});
