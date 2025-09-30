// app/(tabs)/StackNavigator.js
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UsersListScreen from '../screens/UsersListScreen';
import UserDetailScreen from '../screens/UserDetailScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="UsersList" component={UsersListScreen} options={{ title: 'Users' }} />
      <Stack.Screen name="UserDetail" component={UserDetailScreen} options={{ title: 'User Detail' }} />
    </Stack.Navigator>
  );
}
