import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';

const UserItem = ({ user, onPress }) => (
  <TouchableOpacity onPress={() => onPress(user)} style={styles.userItem}>
    <Text style={styles.name}>{user.name}</Text>
    <Text style={styles.email}>{user.email}</Text>
  </TouchableOpacity>
);

const Loading = () => (
  <View style={styles.loading}>
    <ActivityIndicator size="large" />
    <Text>Loading users...</Text>
  </View>
);

export default function UsersListScreen({ navigation }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!res.ok) throw new Error('Network response was not ok');
        const data = await res.json();
        setUsers(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <Loading />;

  if (error) {
    return (
      <View style={styles.error}>
        <Text style={{ color: 'red' }}>Error: {error}</Text>
      </View>
    );
  }

  const goToDetails = (user) => {
    // PASS the selected user as params
    navigation.navigate('UserDetail', { user });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Users List</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <UserItem user={item} onPress={goToDetails} />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f2f2f2' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  userItem: { padding: 15, backgroundColor: '#fff', borderRadius: 10 },
  name: { fontSize: 18, fontWeight: '600' },
  email: { fontSize: 14, color: 'gray' },
  separator: { height: 10 },
  loading: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  error: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
