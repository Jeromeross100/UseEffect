import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home (Bottom Tab)</Text>
      <Button title="Go to Users" onPress={() => navigation.navigate('UsersStack')} />
    </View>
  );
}
const styles = StyleSheet.create({ container:{flex:1,justifyContent:'center',alignItems:'center'}, title:{fontSize:20,fontWeight:'700',marginBottom:12} });
