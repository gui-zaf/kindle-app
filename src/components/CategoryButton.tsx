import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/theme';

type CategoryButtonProps = {
  label: string;
  isActive?: boolean;
  onPress?: () => void;
};

export const CategoryButton = ({ label, isActive = false, onPress }: CategoryButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        isActive && styles.activeContainer
      ]}
      onPress={onPress}
    >
      <Text style={[
        styles.text,
        isActive && styles.activeText
      ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.subtext,
    backgroundColor: colors.background,
    marginRight: 8,
  },
  activeContainer: {
    borderColor: colors.primary,
    backgroundColor: colors.primaryBackground,
  },
  text: {
    color: colors.subtext,
    fontSize: 14,
  },
  activeText: {
    color: colors.primary,
  },
}); 