import React, { useMemo } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabsNavigator from './TabsNavigator';
import AboutScreen from '../screens/AboutScreen';

const Drawer = createDrawerNavigator();

function DrawerNavigatorImpl() {
  // stable options object to avoid re-renders
  const mainOptions = useMemo(() => ({ title: 'Main' }), []);
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Main" component={TabsNavigator} options={mainOptions} />
      <Drawer.Screen name="About" component={AboutScreen} />
    </Drawer.Navigator>
  );
}

export default React.memo(DrawerNavigatorImpl);
