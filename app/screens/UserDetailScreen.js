// app/screens/UserDetailScreen.js
import { View, Text } from 'react-native';
export default function UserDetailScreen({ route }) {
  const { id, name } = route.params ?? {};
  return (
    <View style={{ flex:1, alignItems:'center', justifyContent:'center' }}>
      <Text>User ID: {id}</Text>
      <Text>Name: {name}</Text>
    </View>
  );
}
