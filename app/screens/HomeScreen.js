import React, { useCallback, useRef } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function HomeScreenImpl({ navigation }) {
  const lastNavTsRef = useRef(0);

  const goToUsers = useCallback(() => {
    const now = Date.now();
    // simple guard: ignore double taps within 500ms
    if (now - lastNavTsRef.current > 500) {
      lastNavTsRef.current = now;
      navigation.navigate('UsersStack');
    }
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home (Bottom Tab)</Text>
      <Button title="Go to Users" onPress={goToUsers} />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{flex:1,justifyContent:'center',alignItems:'center'},
  title:{fontSize:20,fontWeight:'700',marginBottom:12}
});

export default React.memo(HomeScreenImpl);
