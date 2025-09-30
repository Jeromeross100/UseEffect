import * as React from "react";
import { View, ViewProps, useColorScheme } from "react-native";

export function ThemedView(props: ViewProps) {
  const scheme = useColorScheme();
  return (
    <View
      {...props}
      // @ts-ignore allow style override
      style={[{ backgroundColor: scheme === "dark" ? "#000" : "#fff" }, props.style]}
    />
  );
}
