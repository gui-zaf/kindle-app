import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/theme';

type SectionTitleProps = {
  title: string;
  icon?: keyof typeof Ionicons.glyphMap;
  isFirst?: boolean;
};

export const SectionTitle = ({ title, icon = 'library-outline', isFirst = false }: SectionTitleProps) => {
  return (
    <View style={[styles.container, isFirst && styles.firstContainer]}>
      <Ionicons name={icon} size={24} color={colors.text} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  firstContainer: {
    marginTop: 72,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text,
    marginLeft: 8,
  },
}); 