import {View, Text, StyleSheet} from 'react-native';
import {useCurrentList} from '../hooks/useCurrentList';
import {theme} from '../utils/theme';

export const Header = () => {
  const {currentList, currentSongIndex} = useCurrentList();
  const currentSong = currentList[currentSongIndex];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {currentSong ? `Reproduciendo ${currentSong?.name}` : 'ProdeiMusic'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 56,
    backgroundColor: theme.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: theme.disabled,
    borderBottomWidth: 1,
  },
  title: {
    color: theme.white,
    fontWeight: 'bold',
    fontSize: 18,
  },
});
