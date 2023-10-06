import {useMMKVStorage} from 'react-native-mmkv-storage';
import {storage} from './storage';
import type {Track} from '../types/tracks';
import {useCallback} from 'react';

export const useCurrentList = () => {
  const [currentListType, setCurrentListType] = useMMKVStorage<
    'top' | 'profile' | 'favorites' | ''
  >('currentListType', storage, '');
  const [currentSongIndex, setCurrentSongIndex] = useMMKVStorage<number>(
    'currentSongIndex',
    storage,
    0,
  );
  const [currentList, setCurrentList] = useMMKVStorage<Track[]>(
    'currentList',
    storage,
    [],
  );

  const skipToNext = useCallback(() => {
    setCurrentSongIndex(prev => prev + 1);
  }, [setCurrentSongIndex]);

  const skipToPrev = useCallback(() => {
    setCurrentSongIndex(prev => prev - 1);
  }, [setCurrentSongIndex]);

  return {
    currentList,
    currentListType,
    currentSongIndex,
    setCurrentSongIndex,
    setCurrentListType,
    setCurrentList,
    skipToNext,
    skipToPrev,
  };
};
