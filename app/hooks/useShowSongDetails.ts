import {useMMKVStorage} from 'react-native-mmkv-storage';
import {storage} from './storage';

export const useShowSongDetails = () => {
  /**
   * handle if song details modal is expanded or is collapsed
   */
  const [showSongDetails, setShowSongDetails] = useMMKVStorage<boolean>(
    'showSongDetails',
    storage,
    false,
  );

  return {showSongDetails, setShowSongDetails};
};
