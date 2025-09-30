import * as React from "react";
import { Linking, Pressable, Text } from "react-native";

type Props = { href: string; children?: React.ReactNode };

export function ExternalLink({ href, children }: Props) {
  return (
    <Pressable onPress={() => Linking.openURL(href)}>
      <Text style={{ color: "#2563eb" }}>{children ?? href}</Text>
    </Pressable>
  );
}
