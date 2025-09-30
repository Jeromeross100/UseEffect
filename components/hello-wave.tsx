import * as React from "react";
import { Animated, Text, View } from "react-native";

export function HelloWave() {
  const rotate = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(rotate, { toValue: 1, duration: 350, useNativeDriver: true }),
        Animated.timing(rotate, { toValue: -1, duration: 350, useNativeDriver: true }),
        Animated.timing(rotate, { toValue: 0, duration: 350, useNativeDriver: true }),
      ])
    );
    loop.start();
    return () => loop.stop();
  }, [rotate]);

  const tilt = rotate.interpolate({ inputRange: [-1, 1], outputRange: ["-15deg", "15deg"] });

  return (
    <View style={{ alignSelf: "flex-start", marginVertical: 8 }}>
      <Animated.Text style={{ transform: [{ rotate: tilt }], fontSize: 28 }}>👋</Animated.Text>
      <Text style={{ fontWeight: "600", fontSize: 18, marginTop: 4 }}>Hello!</Text>
    </View>
  );
}
