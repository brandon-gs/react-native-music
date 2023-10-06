import {StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

export interface SongControlsProps {
  size?: number;
  disabled?: boolean;
  isPlaying?: boolean;
  disabledPrev?: boolean;
  disabledNext?: boolean;
  onPlay: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const SongControls = ({
  size = 32,
  disabled = false,
  isPlaying = false,
  disabledPrev = false,
  disabledNext = false,
  onPlay,
  onNext,
  onPrev,
}: SongControlsProps) => {
  const color = disabled ? '#d3d3d3' : '#000';
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        disabled={disabled || disabledPrev}
        onPress={onPrev}>
        <Icon
          name="fast-rewind"
          size={size * 0.8}
          color={disabledPrev ? '#d3d3d3' : color}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        disabled={disabled}
        onPress={onPlay}>
        <Icon
          name={isPlaying ? 'pause' : 'play-arrow'}
          size={size * 1.1}
          color={color}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        disabled={disabled || disabledNext}
        onPress={onNext}>
        <Icon
          name="fast-forward"
          size={size * 0.8}
          color={disabledNext ? '#d3d3d3' : color}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    paddingHorizontal: 4,
  },
});
