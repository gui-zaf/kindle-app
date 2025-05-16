import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/theme';
import { globalStyles } from '../styles/global';
import { CategoriesBar } from './CategoriesBar';

export const Header = () => {
  return (
    <View>
      <SafeAreaView edges={['top']} style={globalStyles.safeArea} />
      <View style={globalStyles.header}>
        <TouchableOpacity style={globalStyles.iconButton}>
          <Ionicons name="notifications-outline" size={24} color={colors.subtext} />
        </TouchableOpacity>
        
        <View style={globalStyles.searchContainer}>
          <Ionicons name="search" size={20} color={colors.subtext} />
          <TextInput
            style={globalStyles.searchInput}
            placeholder="Pesquisar livro"
            placeholderTextColor={colors.subtext}
          />
        </View>
      </View>
      <CategoriesBar />
    </View>
  );
}; 