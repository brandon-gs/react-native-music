import {Track} from './tracks';

export enum SCREENS {
  About = 'About',
  Home = 'HomeScreen',
  MyProfile = 'MyProfileScreen',
  MyFavorites = 'MyFavoritesScreen',
}

export type SongDetailsScreenParams = {
  track: Track;
};

export type RootStackParamList = {
  [SCREENS.About]: undefined;
  [SCREENS.Home]: undefined;
  [SCREENS.MyProfile]: undefined;
  [SCREENS.MyFavorites]: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
