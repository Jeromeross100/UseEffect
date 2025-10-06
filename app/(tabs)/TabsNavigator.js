import React, { useMemo } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import StackNavigator from './StackNavigator';

const Tab = createBottomTabNavigator();

function TabsNavigatorImpl() {
  const usersOptions = useMemo(() => ({ title: 'Users' }), []);
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="UsersStack" component={StackNavigator} options={usersOptions} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default React.memo(TabsNavigatorImpl);
