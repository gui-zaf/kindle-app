import React from 'react';
import { View, StyleSheet, Image, ImageSourcePropType } from 'react-native';
import { colors } from '../theme/theme';

type BookCardProps = {
  imageUrl?: string | ImageSourcePropType;
};

export const BookCard = ({ imageUrl }: BookCardProps) => {
  console.log('BookCard imageUrl:', imageUrl);
  
  const imageSource = React.useMemo(() => {
    if (!imageUrl) return null;
    if (typeof imageUrl === 'string') {
      return { uri: imageUrl };
    }
    return imageUrl;
  }, [imageUrl]);

  return (
    <View style={styles.container}>
      {imageSource ? (
        <Image
          source={imageSource}
          style={styles.image}
          resizeMode="cover"
        />
      ) : (
        <View style={styles.placeholder} />
      )}
    </View>
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