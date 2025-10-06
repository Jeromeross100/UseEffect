import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  memo,
} from 'react';
import {
  View, Text, FlatList, StyleSheet, ActivityIndicator, TouchableOpacity,
} from 'react-native';

// ----- Pure, memoized leaf components -----
const Separator = memo(() => <View style={styles.separator} />);

const Loading = memo(() => (
  <View style={styles.loading}>
    <ActivityIndicator size="large" />
    <Text>Loading users...</Text>
  </View>
));

// Compare only what matters to avoid unnecessary re-renders
const areUserItemEqual = (prev, next) =>
  prev.user?.id === next.user?.id &&
  prev.user?.name === next.user?.name &&
  prev.user?.email === next.user?.email &&
  prev.onPress === next.onPress;

const UserItemBase = ({ user, onPress }) => (
  <TouchableOpacity onPress={() => onPress(user)} style={styles.userItem}>
    <Text style={styles.name}>{user.name}</Text>
    <Text style={styles.email}>{user.email}</Text>
  </TouchableOpacity>
);
const UserItem = memo(UserItemBase, areUserItemEqual);

// ----- Screen -----
export default function UsersListScreen({ navigation }) {
  const usersRef = useRef([]);            // keep last data (no re-render)
  const listRef = useRef(null);           // FlatList ref for imperatives
  const isMountedRef = useRef(true);      // avoid setState after unmount

  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  // Fetch once
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!res.ok) throw new Error('Network response was not ok');
        const data = await res.json();
        if (isMountedRef.current) {
          setUsers(data);
          usersRef.current = data;
        }
      } catch (e) {
        if (isMountedRef.current) setError(e.message);
      } finally {
        if (isMountedRef.current) setLoading(false);
      }
    })();

    return () => {
      isMountedRef.current = false;
    };
  }, []);

  // Derived data (e.g., alphabetized) without recomputing
  const sortedUsers = useMemo(() => {
    return [...users].sort((a, b) => a.name.localeCompare(b.name));
  }, [users]);

  // Header reacts to count instantly (layout phase for smoother updates)
  useLayoutEffect(() => {
    navigation.setOptions({
      title: `Users (${sortedUsers.length})`,
    });
  }, [navigation, sortedUsers.length]);

  // Stable callbacks
  const keyExtractor = useCallback((item) => String(item.id), []);
  const goToDetails = useCallback(
    (user) => navigation.navigate('UserDetail', { user }),
    [navigation]
  );
  const renderItem = useCallback(
    ({ item }) => <UserItem user={item} onPress={goToDetails} />,
    [goToDetails]
  );

  // When data changes, scroll to top once
  useEffect(() => {
    if (sortedUsers.length > 0 && listRef.current) {
      listRef.current.scrollToOffset({ offset: 0, animated: false });
    }
  }, [sortedUsers.length]);

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
        ref={listRef}
        data={sortedUsers}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ItemSeparatorComponent={Separator}
        // RN FlatList perf hints:
        removeClippedSubviews
        initialNumToRender={10}
        windowSize={5}
        maxToRenderPerBatch={10}
        updateCellsBatchingPeriod={50}
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
