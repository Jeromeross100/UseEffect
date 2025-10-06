import React, { useLayoutEffect, useMemo } from 'react';
import { View, Text } from 'react-native';

export default function UserDetailScreen({ route, navigation }) {
  const user = route.params?.user;
  const title = useMemo(() => user?.name ?? 'User Detail', [user?.name]);

  useLayoutEffect(() => {
    navigation.setOptions({ title });
  }, [navigation, title]);

  return (
    <View style={{ flex:1, alignItems:'center', justifyContent:'center' }}>
      <Text>User ID: {user?.id ?? '—'}</Text>
      <Text>Name: {user?.name ?? '—'}</Text>
      <Text>Email: {user?.email ?? '—'}</Text>
    </View>
  );
}
