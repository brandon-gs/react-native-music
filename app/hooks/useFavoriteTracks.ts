import {useCallback} from 'react';
import {useMMKVStorage} from 'react-native-mmkv-storage';
import type {Track} from '../types/tracks';
import {storage} from './storage';

export const useFavoriteTracks = () => {
  const [favorites, setFavorites] = useMMKVStorage<Record<string, Track>>(
    'favorites',
    storage,
    {},
  );

  const onAddFavorite = useCallback(
    (track: Track) => () => {
      setFavorites(prev => {
        // Remove from favorites
        if (prev[track.mbid]) {
          const copy = {...prev};
          delete copy[track.mbid];
          return copy;
        }
        // Add to favorites
        return {...prev, [track.mbid]: track};
      });
    },
    [setFavorites],
  );

  return {favorites, onAddFavorite};
};
