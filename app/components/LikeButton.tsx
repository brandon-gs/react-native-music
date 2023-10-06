import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {theme} from '../utils/theme';
import {IconProps} from 'react-native-vector-icons/Icon';

interface LikeButtonProps extends Omit<IconProps, 'name'> {
  liked: boolean;
}

export default function LikeButton({
  liked,
  size = 32,
  ...props
}: LikeButtonProps) {
  const color = liked ? theme.pink : theme.white;
  const name = liked ? 'favorite' : 'favorite-border';
  return <Icon {...props} color={color} name={name} size={size} />;
}
