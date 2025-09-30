import * as React from "react";
import { Pressable, View, Text } from "react-native";

type CollapsibleProps = {
  title: string;
  children?: React.ReactNode;
  defaultOpen?: boolean;
};

export function Collapsible({ title, children, defaultOpen = false }: CollapsibleProps) {
  const [open, setOpen] = React.useState(defaultOpen);
  return (
    <View style={{ borderWidth: 1, borderColor: "#ccc", borderRadius: 12, marginVertical: 8 }}>
      <Pressable onPress={() => setOpen(o => !o)} style={{ padding: 12 }}>
        <Text style={{ fontWeight: "600" }}>
          {title}{open ? " ▲" : " ▼"}
        </Text>
      </Pressable>
      {open ? <View style={{ paddingHorizontal: 12, paddingBottom: 12 }}>{children}</View> : null}
    </View>
  );
}
