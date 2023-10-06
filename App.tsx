import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootStackParamList, SCREENS} from './app/types/navigation';
import {HomeScreen, MyProfileScreen} from './app/screens';
import {QueryClientProvider} from '@tanstack/react-query';
import {queryClient} from './app/services/queryClient';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {MyFavoritesScreen} from './app/screens/MyFavoritesScreen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';
import TabNavigation from './app/components/TabNavigation';
import {Header} from './app/components/Header';
import {AboutScreen} from './app/screens/AboutScreen';

const Tabs = createBottomTabNavigator<RootStackParamList>();

const App = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaProvider>
        <NavigationContainer>
          <QueryClientProvider client={queryClient}>
            <Tabs.Navigator
              // eslint-disable-next-line react/no-unstable-nested-components
              tabBar={props => <TabNavigation {...props} />}
              screenOptions={() => ({
                // eslint-disable-next-line react/no-unstable-nested-components
                header: () => {
                  return <Header />;
                },
                tabBarLabelStyle: {
                  fontSize: 16,
                },
              })}>
              <Tabs.Screen
                name={SCREENS.About}
                component={AboutScreen}
                options={{
                  tabBarLabel: 'About',
                }}
              />
              <Tabs.Screen
                name={SCREENS.Home}
                component={HomeScreen}
                options={{
                  tabBarLabel: 'Inicio',
                }}
              />

              <Tabs.Screen
                name={SCREENS.MyProfile}
                component={MyProfileScreen}
                options={{
                  tabBarLabel: 'Perfil',
                }}
              />
              <Tabs.Screen
                name={SCREENS.MyFavorites}
                component={MyFavoritesScreen}
                options={{
                  tabBarLabel: 'Favoritas',
                }}
              />
            </Tabs.Navigator>
          </QueryClientProvider>
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
