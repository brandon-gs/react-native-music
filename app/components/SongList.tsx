import {FlashList, FlashListProps, ListRenderItem} from '@shopify/flash-list';
import type {Track} from '../types/tracks';
import {StyleSheet} from 'react-native';
import {theme} from '../utils/theme';
import {useCallback, useId} from 'react';
import {useFavoriteTracks} from '../hooks/useFavoriteTracks';
import {SongCard} from './SongCard';
import {useShowSongDetails} from '../hooks/useShowSongDetails';
import {useRoute} from '@react-navigation/native';
import {useCurrentList} from '../hooks/useCurrentList';
import {SCREENS} from '../types/navigation';

export type SongListProps = {
  tracks: Track[];
} & Omit<
  FlashListProps<Track>,
  | 'data'
  | 'estimatedItemSize'
  | 'renderItem'
  | 'contentContainerStyle'
  | 'keyExtractor'
  | 'extraData'
>;

export const SongList = ({tracks, ...flashListProps}: SongListProps) => {
  const router = useRoute();
  const componentId = useId();
  const {setCurrentListType, setCurrentSongIndex, setCurrentList} =
    useCurrentList();
  const {setShowSongDetails} = useShowSongDetails();
  const {onAddFavorite, favorites} = useFavoriteTracks();

  const navigateToDetailsSong = useCallback(
    (index: number) => () => {
      setShowSongDetails(true);
      setCurrentSongIndex(index);
      setCurrentList(tracks);
      if (router.name === SCREENS.Home) {
        setCurrentListType('top');
      } else if (router.name === SCREENS.MyFavorites) {
        setCurrentListType('favorites');
      } else {
        setCurrentListType('profile');
      }
    },
    [
      setShowSongDetails,
      setCurrentListType,
      setCurrentSongIndex,
      setCurrentList,
      tracks,
      router,
    ],
  );

  const renderItem: ListRenderItem<Track> = useCallback(
    props => {
      const id = props.item.mbid;
      const liked = id in favorites;
      return (
        <SongCard
          onSongDetails={navigateToDetailsSong(props.index)}
          onPressLike={onAddFavorite(props.item)}
          liked={liked}
          {...props}
        />
      );
    },
    [onAddFavorite, navigateToDetailsSong, favorites],
  );

  return (
    <FlashList
      contentContainerStyle={styles.listContainer}
      data={tracks ?? []}
      estimatedItemSize={97}
      renderItem={renderItem}
      keyExtractor={(item, index) => componentId + index}
      extraData={favorites}
      {...flashListProps}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: theme.primary,
    paddingHorizontal: 8,
    paddingTop: 16,
    paddingBottom: 160,
  },
});
