import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Track} from '../types/tracks';
import {ListRenderItemInfo} from '@shopify/flash-list';
import {memo} from 'react';
import LikeButton from './LikeButton';
import isEqual from 'react-fast-compare';
import {getImageUrl} from '../services/images';

export interface SongCardProps extends ListRenderItemInfo<Track> {
  liked: boolean;
  onPressLike: () => void;
  onSongDetails: () => void;
}

export const SongCard = memo(
  ({item, liked, onSongDetails, onPressLike}: SongCardProps) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={onSongDetails} style={styles.cardContainer}>
          <Image
            width={80}
            height={80}
            source={{uri: getImageUrl(item.mbid, {width: 80, height: 80})}}
            style={styles.image}
          />
          <View style={styles.infoContainer}>
            <Text style={styles.artistName} numberOfLines={1}>
              Rank #{parseInt(item['@attr'].rank, 10) + 1}
            </Text>
            <Text style={styles.songName} numberOfLines={1}>
              {item.name}
            </Text>
            <Text style={styles.artistName} numberOfLines={1}>
              {item.artist.name}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressLike} style={styles.buttonLike}>
          <LikeButton liked={liked} />
        </TouchableOpacity>
      </View>
    );
  },
  isEqual,
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  image: {
    borderRadius: 8,
    marginRight: 16,
  },
  infoContainer: {
    flexGrow: 1,
  },
  songName: {
    color: '#FFFFFF',
    fontSize: 24,
  },
  artistName: {
    fontSize: 16,
    color: '#78879a',
  },
  buttonLike: {
    padding: 8,
  },
  cardContainer: {
    flexDirection: 'row',
    flexGrow: 1,
  },
});
