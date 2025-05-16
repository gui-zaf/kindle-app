import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { CategoryButton } from './CategoryButton';
import { colors } from '../theme/theme';

const categories = [
  'Explorar',
  'Romance',
  'Ficção Científica',
  'Terror',
  'Crime, suspense e mistério',
  'Tecnologia',
  'Infanto juvenil',
];

export const CategoriesBar = () => {
  const [activeCategory, setActiveCategory] = useState('Explorar');

  const handleCategoryPress = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {categories.map((category) => (
          <CategoryButton
            key={category}
            label={category}
            isActive={category === activeCategory}
            onPress={() => handleCategoryPress(category)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.surface,
    backgroundColor: colors.background,
    zIndex: 1,
    elevation: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
  },
}); 