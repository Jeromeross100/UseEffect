import * as React from "react";
import { ViewStyle } from "react-native";
import { Ionicons } from "@expo/vector-icons";

/**
 * Simple icon wrapper that accepts SF-symbol-like names (e.g., "house.fill")
 * and maps them to a reasonable Ionicons equivalent.
 */
const mapToIonicon = (name: string): keyof typeof Ionicons.glyphMap => {
  switch (name) {
    case "house.fill":
    case "house":
    case "home.fill":
      return "home";
    case "paperplane.fill":
    case "paperplane":
      return "send";
    default:
      return (name as any) || "help-circle";
  }
};

type Props = {
  name: string;
  size?: number;
  color?: string;
  style?: ViewStyle;
};

export function IconSymbol({ name, size = 24, color, style }: Props) {
  const mapped = mapToIonicon(name);
  return <Ionicons name={mapped} size={size} color={color} style={style} />;
}
