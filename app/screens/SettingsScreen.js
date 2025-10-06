import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function SettingsScreenImpl() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings (Bottom Tab)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{flex:1,justifyContent:'center',alignItems:'center'},
  title:{fontSize:20,fontWeight:'700'}
});

export default React.memo(SettingsScreenImpl);
