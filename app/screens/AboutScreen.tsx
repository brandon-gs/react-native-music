import {ScrollView, Text, StyleSheet, Button, View} from 'react-native';
import {theme} from '../utils/theme';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../types/navigation';

export const AboutScreen = () => {
  const navigation = useNavigation();

  const navigateToHome = () => {
    navigation.navigate(SCREENS.Home);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.text}>Prueba técnica de Prodei</Text>
        <Text style={styles.text}>Autor: Brandon García Sánchez</Text>
        <Text style={styles.text}>Nombre de la aplicación: ProdeiMusic</Text>
        <Text style={[styles.text, styles.important]}>
          Información sobre la app
        </Text>
        <Text style={styles.description}>
          Esta aplicación utiliza la API de lastFM para obtener información
          sobre canciones populares.
        </Text>
        <Text style={styles.description}>
          La API de lastFM{' '}
          <Text style={styles.important}>no nos regresa imágenes</Text> (sólo
          una imagén con una estrella blanca) por lo que se utilizo un servicio
          externo para mostrar imágenes en cada canción.
        </Text>
        <Text style={styles.description}>
          La API de lastFM tampoco nos permite obtener archivos de audio, por lo
          que siempre suena{' '}
          <Text style={styles.important}>LA MISMA CANCIÓN</Text>. (No es un
          error).
        </Text>
      </ScrollView>
      <Button title="Continuar" onPress={navigateToHome} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: 32,
    paddingHorizontal: 16,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  important: {
    color: 'red',
  },
  description: {
    color: theme.primary,
    fontSize: 16,
    marginBottom: 4,
  },
  text: {
    color: theme.primary,
    fontSize: 24,
    marginBottom: 8,
  },
});
