import {ScrollView, StyleSheet, Text} from 'react-native';
import {theme} from '../utils/theme';
import {useFavoriteTracks} from '../hooks/useFavoriteTracks';
import {SongList} from '../components/SongList';
import {useMemo} from 'react';
import {EmptyState} from '../components/EmptyState';

export const MyFavoritesScreen = () => {
  const {favorites} = useFavoriteTracks();

  const tracks = useMemo(() => {
    return Object.values(favorites);
  }, [favorites]);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.title}>Mis favoritas</Text>
      {tracks.length > 0 ? <SongList tracks={tracks} /> : <EmptyState />}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.primary,
    paddingVertical: 16,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  title: {
    fontSize: 32,
    color: theme.white,
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 24,
    color: theme.white,
    textAlign: 'center',
  },
});
