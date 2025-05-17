import React from 'react';
import { View, StyleSheet, Image, ImageSourcePropType, TouchableOpacity } from 'react-native';
import { colors } from '../theme/theme';

type BookCardProps = {
  imageUrl?: string | ImageSourcePropType;
  onPress?: () => void;
};

export const BookCard = ({ imageUrl, onPress }: BookCardProps) => {
  console.log('BookCard imageUrl:', imageUrl);
  
  const imageSource = React.useMemo(() => {
    if (!imageUrl) return null;
    if (typeof imageUrl === 'string') {
      return { uri: imageUrl };
    }
    return imageUrl;
  }, [imageUrl]);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {imageSource ? (
        <Image
          source={imageSource}
          style={styles.image}
          resizeMode="cover"
        />
      ) : (
        <View style={styles.placeholder} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 180,
    marginRight: 12,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  placeholder: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.surface,
    borderRadius: 8,
  },
}); 