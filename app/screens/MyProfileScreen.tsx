import {ScrollView, StyleSheet, Text} from 'react-native';
import {theme} from '../utils/theme';
import {EmptyState} from '../components/EmptyState';
import {useHistorySongs} from '../hooks/useHistorySongs';
import {SongList} from '../components/SongList';

export const MyProfileScreen = () => {
  const {historySongs} = useHistorySongs();
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.title}>Mi perfil</Text>
      <Text style={styles.subtitle}>Últimas canciones reproducidas</Text>
      {historySongs.length > 0 ? (
        <SongList tracks={historySongs} />
      ) : (
        <EmptyState />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginBottom: 8,
  },
});
