import {useGetTopTracks} from '../hooks/useGetTopTracks';
import React, {useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import {theme} from '../utils/theme';
import {SongList} from '../components/SongList';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export const HomeScreen = () => {
  const topTracks = useGetTopTracks();

  const tracks = useMemo(() => {
    if (!topTracks.data) {
      return [];
    }
    return topTracks.data.pages.flatMap(page => {
      return page.data.tracks.track;
    });
  }, [topTracks.data]);

  if (topTracks.isLoading) {
    return (
      <View style={[styles.container, styles.skeletonContainer]}>
        <SkeletonPlaceholder
          borderRadius={8}
          backgroundColor={theme.secondary}
          highlightColor={theme.white}>
          <>
            {[1, 2, 3, 4, 5].map(index => {
              return (
                <SkeletonPlaceholder.Item
                  key={index + 'skeleton'}
                  flexDirection="row"
                  alignItems="center"
                  width="100%"
                  marginBottom={16}>
                  <SkeletonPlaceholder.Item width={80} height={80} />
                  <SkeletonPlaceholder.Item marginLeft={20}>
                    <SkeletonPlaceholder.Item width={120} height={20} />
                    <SkeletonPlaceholder.Item
                      marginTop={6}
                      width={240}
                      height={20}
                    />
                    <SkeletonPlaceholder.Item
                      marginTop={6}
                      width={'70%'}
                      height={20}
                    />
                  </SkeletonPlaceholder.Item>
                </SkeletonPlaceholder.Item>
              );
            })}
          </>
        </SkeletonPlaceholder>
      </View>
    );
  }

  if (topTracks.isError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <SongList
        tracks={tracks}
        refreshing={topTracks.isFetching}
        onEndReached={
          topTracks.isFetching ? undefined : topTracks.fetchNextPage
        }
        onEndReachedThreshold={0.1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.primary,
  },
  listContainer: {
    backgroundColor: theme.primary,
    paddingHorizontal: 8,
    paddingTop: 16,
    paddingBottom: 8,
  },
  skeletonContainer: {
    paddingHorizontal: 8,
    paddingTop: 16,
  },
});
