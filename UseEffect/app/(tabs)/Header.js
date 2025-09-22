import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';

// Custom component for each user item
const UserItem = ({ user }) => {
  return (
    <View style={styles.userItem}>
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>
    </View>
  );
};

// Custom component for loading indicator
const Loading = () => (
  <View style={styles.loading}>
    <ActivityIndicator size="large" color="#007BFF" />
    <Text>Loading users...</Text>
  </View>
);

// Main App component
const App = () => {
  const [users, setUsers] = useState([]);        // state for user list
  const [loading, setLoading] = useState(true);  // state for loading indicator
  const [error, setError] = useState(null);      // state for error handling

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []); // Empty dependency array -> runs once on mount

  if (loading) return <Loading />;

  if (error) {
    return (
      <View style={styles.error}>
        <Text style={{ color: 'red' }}>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Users List</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <UserItem user={item} />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

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

export default App;
