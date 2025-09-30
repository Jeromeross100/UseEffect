import React from "react";
import { Text, type TextProps, StyleSheet } from "react-native";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";

export type ThemedTextProps = TextProps & {
  type?: "default" | "title" | "subtitle" | "link";
};

export function ThemedText({ style, type = "default", ...props }: ThemedTextProps) {
  const scheme = useColorScheme();
  const palette = Colors[scheme ?? "light"]; 
  const typeStyle =
    type === "title" ? styles.title :
    type === "subtitle" ? styles.subtitle :
    type === "link" ? [styles.link, { color: palette.tint }] :
    styles.default;
  return <Text style={[{ color: palette.text }, typeStyle, style]} {...props} />;
}

const styles = StyleSheet.create({
  default: { fontSize: 16, lineHeight: 22 }, 
  title: { fontSize: 28, fontWeight: "700" }, 
  subtitle: { fontSize: 18, fontWeight: "600" }, 
  link: { fontSize: 16, textDecorationLine: "underline" }
});
