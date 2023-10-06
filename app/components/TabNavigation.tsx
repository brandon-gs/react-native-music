import React, {memo, useEffect, useMemo, useRef} from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {
  Dimensions,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import isEqual from 'react-fast-compare';
import {theme} from '../utils/theme';
import {SCREENS} from '../types/navigation';
import BottomSheet from '@gorhom/bottom-sheet';
import {SongDetails} from './SongDetails';
import {useShowSongDetails} from '../hooks/useShowSongDetails';

const {width} = Dimensions.get('window');

interface INavigationTabProps extends BottomTabBarProps {
  onChangeTab?: () => void;
}

const NavigationTab = memo(
  ({navigation, state, descriptors, onChangeTab}: INavigationTabProps) => {
    const currentRoute = useMemo(
      () => state.routes[state.index],
      [state.index, state.routes],
    );

    const tabBarStyle = useMemo(() => {
      return (
        (descriptors[currentRoute.key].options
          .tabBarStyle as StyleProp<ViewStyle>) ?? {}
      );
    }, [currentRoute, descriptors]);

    return (
      <>
        <View
          style={[
            styles.root,
            tabBarStyle,
            {
              display: currentRoute.name === SCREENS.About ? 'none' : 'flex',
            },
          ]}>
          {state.routes.map((route, index) => {
            const isFocused = state.index === index;

            const {options} = descriptors[route.key];

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
                onChangeTab && onChangeTab();
              }
            };

            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };

            const tabBarIconStyles = options.tabBarIconStyle
              ? (options.tabBarStyle as StyleProp<ViewStyle>)
              : {};

            const colorIconAndText = isFocused ? theme.primary : theme.disabled;

            return (
              <TouchableOpacity
                key={`icon-tabbar-${index}`}
                accessibilityRole="button"
                accessibilityState={isFocused ? {selected: true} : {}}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  display: route.name === SCREENS.About ? 'none' : 'flex',
                }}>
                <View style={styles.tab}>
                  <Icon
                    name={ICONS[route.name]}
                    color={colorIconAndText}
                    style={[tabBarIconStyles]}
                    size={32}
                  />
                  <Text
                    style={{
                      color: colorIconAndText,
                    }}>
                    {options.tabBarLabel?.toString() ?? ''}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </>
    );
  },
  isEqual,
);

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    borderColor: theme.disabled,
    backgroundColor: theme.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginLeft: -0.5,
    marginTop: -16,
    borderWidth: 0.5,
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: 'hidden',
    justifyContent: 'space-evenly',
  },
  tab: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 4,
    paddingTop: 8,
    paddingHorizontal: 40,
  },
  modal: {
    marginTop: 24,
  },
});

export const TAB_HEIGHT = 64;

export const TAB_WIDTH = width / 5 - 10.7; // Tab width

const ICONS: Record<string, string> = {
  [SCREENS.Home]: 'house',
  [SCREENS.MyFavorites]: 'favorite',
  [SCREENS.MyProfile]: 'account-circle',
};

const TabNavigation = (props: INavigationTabProps) => {
  const {showSongDetails, setShowSongDetails} = useShowSongDetails();

  const songDetailsRef = useRef<BottomSheet>(null);

  useEffect(() => {
    if (!songDetailsRef.current) {
      return;
    }
    if (showSongDetails) {
      songDetailsRef.current.expand();
    } else {
      songDetailsRef.current.collapse();
    }
    return () => {
      setShowSongDetails(false);
    };
  }, [showSongDetails, setShowSongDetails]);

  const currentRoute = useMemo(
    () => props.state.routes[props.state.index],
    [props.state.index, props.state.routes],
  );

  return (
    <>
      {currentRoute.name !== SCREENS.About && (
        <SongDetails ref={songDetailsRef} />
      )}
      <NavigationTab
        {...props}
        onChangeTab={songDetailsRef.current?.collapse}
      />
    </>
  );
};

export default TabNavigation;
