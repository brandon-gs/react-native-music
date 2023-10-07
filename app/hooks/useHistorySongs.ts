import {useMMKVStorage} from 'react-native-mmkv-storage';
import {Track} from '../types/tracks';
import {storage} from './storage';
import {useCallback} from 'react';

export const useHistorySongs = () => {
  const [historySongs, setHistorySongs] = useMMKVStorage<Track[]>(
    'history',
    storage,
    [],
  );

  const addToHistory = useCallback(
    (track: Track) => {
      if (historySongs.length < 10) {
        setHistorySongs(prev => [track, ...prev]);
        return;
      }
      setHistorySongs(prev => {
        const newHistorySongs = [track, ...prev];
        // remove last song after 10 songs
        newHistorySongs.pop();
        return newHistorySongs;
      });
    },
    [historySongs.length, setHistorySongs],
  );

  return {historySongs, addToHistory};
};
