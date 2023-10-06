import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import {forwardRef, useCallback, useEffect, useMemo, useState} from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {useShowSongDetails} from '../hooks/useShowSongDetails';
import {HEADER_HEIGHT} from '../utils/header';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {theme} from '../utils/theme';
import {getImageUrl} from '../services/images';
import {SongControls} from './SongControls';
import TrackPlayer, {
  AppKilledPlaybackBehavior,
  State,
  usePlaybackState,
  useProgress,
} from 'react-native-track-player';
import {addTracks, setupPlayer} from '../../service';
import {Slider} from '@miblanchard/react-native-slider';
import {SliderOnChangeCallback} from '@miblanchard/react-native-slider/lib/types';
import {useCurrentList} from '../hooks/useCurrentList';
import {useHistorySongs} from '../hooks/useHistorySongs';

const {height} = Dimensions.get('window');

const IMAGE_SM = 40;
const IMAGE_LG = 248;

const togglePlayback = async (playbackState: State) => {
  const currentTrack = await TrackPlayer.getCurrentTrack();
  if (currentTrack !== null) {
    if (playbackState === State.Playing) {
      await TrackPlayer.pause();
    } else if (
      playbackState === State.Ready ||
      playbackState === State.Paused
    ) {
      await TrackPlayer.play();
    }
  }
};

export const SongDetails = forwardRef<BottomSheet>((props, ref) => {
  const playbackState = usePlaybackState();
  const progressSong = useProgress();
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  const {addToHistory} = useHistorySongs();
  const {
    currentSongIndex,
    currentList,
    currentListType,
    skipToNext,
    skipToPrev,
  } = useCurrentList();
  const songDetails = currentList[currentSongIndex];
  const {setShowSongDetails} = useShowSongDetails();

  const snapPoints = useMemo(() => [142, height - HEADER_HEIGHT], []);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [wasAddedToHistory, setWasAddedToHistory] = useState<boolean>(false);

  const handleSheetChanges = useCallback(
    async (index: number) => {
      if (index === 0) {
        setShowSongDetails(false);
      } else if (index === 1 && playbackState !== State.Playing) {
        await TrackPlayer.play();
      }
      setCurrentIndex(index);
    },
    [setShowSongDetails, playbackState],
  );

  const showHorizontalView = currentIndex === 0;

  const nextSong = async () => {
    skipToNext();
    await TrackPlayer.skip(0);
    await TrackPlayer.play();
  };

  const previousSong = async () => {
    skipToPrev();
    await TrackPlayer.skip(0);
    await TrackPlayer.play();
  };

  const onPlayMusic = () => {
    togglePlayback(playbackState);
    if (playbackState !== State.Playing && !wasAddedToHistory) {
      setWasAddedToHistory(true);
    }
  };

  const onSlidingComplete: SliderOnChangeCallback = values => {
    const value = values[0];
    const seekTo = async () => {
      await TrackPlayer.seekTo(value);
    };
    seekTo();
  };

  useEffect(() => {
    async function setup() {
      let isSetup = await setupPlayer();

      if (isSetup) {
        await TrackPlayer.updateOptions({
          android: {
            // This is the default behavior
            appKilledPlaybackBehavior:
              AppKilledPlaybackBehavior.StopPlaybackAndRemoveNotification,
          },
        });
      }

      setIsPlayerReady(isSetup);
    }

    setup();
  }, []);

  useEffect(() => {
    setWasAddedToHistory(false);
  }, [currentSongIndex]);

  useEffect(() => {
    if (!wasAddedToHistory && songDetails) {
      addToHistory(songDetails);
      setWasAddedToHistory(true);
    }
  }, [addToHistory, songDetails, wasAddedToHistory]);

  useEffect(() => {
    if (!isPlayerReady || !songDetails) {
      return;
    }
    (async () => {
      const queue = await TrackPlayer.getQueue();
      if (queue.length <= 0) {
        await addTracks();
      }
    })();
  }, [isPlayerReady, songDetails]);

  return (
    <BottomSheet
      ref={ref}
      snapPoints={snapPoints}
      index={0}
      containerStyle={styles.modalContainer}
      backgroundStyle={styles.backgroundStyle}
      onChange={handleSheetChanges}>
      <BottomSheetScrollView contentContainerStyle={styles.scroll}>
        {showHorizontalView ? (
          <>
            <View style={styles.horizontalContentContainer}>
              {!songDetails ? (
                <Icon
                  name="my-library-music"
                  size={48}
                  color={theme.primary}
                  style={styles.horizontalImage}
                />
              ) : (
                <Image
                  width={IMAGE_SM}
                  height={IMAGE_SM}
                  source={{
                    uri: getImageUrl(songDetails.mbid, {
                      width: IMAGE_SM,
                      height: IMAGE_SM,
                    }),
                  }}
                  style={styles.horizontalImage}
                />
              )}

              <Text style={styles.horizontalSongName} numberOfLines={1}>
                {songDetails?.name ?? 'Selecciona una canción'}
              </Text>
              <SongControls
                disabled={!songDetails || !isPlayerReady}
                onPlay={onPlayMusic}
                isPlaying={playbackState === State.Playing}
                onNext={nextSong}
                onPrev={previousSong}
                disabledNext={currentSongIndex + 1 >= currentList.length}
                disabledPrev={currentSongIndex - 1 < 0}
              />
            </View>
            <View>
              <Slider
                disabled={!songDetails}
                value={progressSong.position}
                minimumValue={0}
                maximumValue={progressSong.duration}
                containerStyle={styles.slider}
                onSlidingComplete={onSlidingComplete}
              />
            </View>
          </>
        ) : (
          <View style={styles.contentContainer}>
            {!songDetails ? (
              <Icon
                name="my-library-music"
                size={IMAGE_LG}
                color={theme.primary}
                style={styles.horizontalImage}
              />
            ) : (
              <Image
                width={IMAGE_LG}
                height={IMAGE_LG}
                source={{
                  uri: getImageUrl(songDetails.mbid, {
                    width: IMAGE_LG,
                    height: IMAGE_LG,
                  }),
                }}
                style={styles.image}
              />
            )}
            <Text style={styles.songName} numberOfLines={1}>
              {songDetails?.name ?? 'Selecciona una canción'}
            </Text>
            <Text style={styles.artistName} numberOfLines={1}>
              {songDetails?.artist.name ?? 'Artista desconocido'}
            </Text>
            <View style={styles.barContainer}>
              <Text style={styles.musicTime}>
                {new Date(progressSong.position * 1000)
                  .toISOString()
                  .substring(14, 19)}
              </Text>
              <Slider
                disabled={!songDetails}
                value={progressSong.position}
                minimumValue={0}
                maximumValue={progressSong.duration}
                containerStyle={styles.slider}
                onSlidingComplete={onSlidingComplete}
              />
              <Text style={styles.musicTime}>
                {new Date(progressSong.duration * 1000)
                  .toISOString()
                  .substring(14, 19)}
              </Text>
            </View>

            <SongControls
              disabled={!songDetails || !isPlayerReady}
              size={48}
              onPlay={onPlayMusic}
              isPlaying={playbackState === State.Playing}
              onNext={nextSong}
              onPrev={previousSong}
              disabledNext={currentSongIndex + 1 >= currentList.length}
              disabledPrev={currentSongIndex - 1 < 0}
            />
            {currentListType !== '' && (
              <>
                <Text style={styles.listType}>
                  Estás reproduciendo la lista
                </Text>
                <Text style={[styles.listType, styles.listTypeName]}>
                  {listTitle[currentListType]}
                </Text>
              </>
            )}
          </View>
        )}
      </BottomSheetScrollView>
    </BottomSheet>
  );
});

const listTitle = {
  top: 'Top México',
  favorites: 'Favoritos',
  profile: 'Historial',
};

const styles = StyleSheet.create({
  scroll: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  horizontalContentContainer: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 40,
  },
  modalContainer: {
    marginBottom: 56,
  },
  backgroundStyle: {
    borderRadius: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  horizontalImage: {
    borderRadius: 260,
    marginRight: 8,
  },
  image: {
    borderRadius: 16,
    marginBottom: 48,
  },
  horizontalSongName: {
    fontSize: 16,
    color: theme.primary,
    flexGrow: 1,
  },
  songName: {
    fontSize: 24,
    color: theme.primary,
    marginBottom: 8,
  },
  artistName: {
    fontSize: 16,
    color: theme.secondary,
    marginBottom: 24,
  },
  barContainer: {
    width: 320,
    marginBottom: 32,
    flexDirection: 'row',
    alignItems: 'center',
  },
  musicTime: {
    fontSize: 14,
    color: theme.secondary,
  },
  slider: {
    flexGrow: 1,
    marginHorizontal: 8,
  },
  listType: {
    textAlign: 'right',
    alignSelf: 'flex-end',
    color: theme.primary,
    fontSize: 14,
    marginTop: 40,
    marginRight: 24,
  },
  listTypeName: {
    marginTop: 4,
  },
});
