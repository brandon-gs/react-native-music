import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {theme} from '../utils/theme';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../types/navigation';

export const EmptyState = () => {
  const navigation = useNavigation();
  return (
    <View style={[styles.center, styles.container]}>
      <Icon name="music-off" size={160} color={theme.white} />
      <Text style={styles.textEmpty}>No hay canciones disponibles</Text>
      <TouchableOpacity
        style={styles.center}
        onPress={() => navigation.navigate(SCREENS.Home)}>
        <Text style={styles.navigateToCatalog}>Ir a Catalogo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 240,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textEmpty: {
    fontSize: 16,
    color: theme.white,
  },
  navigateToCatalog: {
    fontSize: 24,
    color: theme.white,
    paddingTop: 24,
    textDecorationLine: 'underline',
  },
});
