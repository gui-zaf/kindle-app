import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { colors } from '../theme/theme';

type TabItem = {
  id: string;
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  activeIcon: keyof typeof Ionicons.glyphMap;
};

const tabs: TabItem[] = [
  { id: 'home', label: 'Início', icon: 'home-outline', activeIcon: 'home' },
  { id: 'library', label: 'Biblioteca', icon: 'library-outline', activeIcon: 'library' },
  { id: 'store', label: 'Explorar', icon: 'compass-outline', activeIcon: 'compass' },
  { id: 'profile', label: 'Mais', icon: 'menu-outline', activeIcon: 'menu' },
];

type DrawerParamList = {
  Home: undefined;
};

type BottomBarProps = {
  onTabPress: (tabId: 'home' | 'library' | 'store' | 'profile') => void;
};

export const BottomBar = ({ onTabPress }: BottomBarProps) => {
  const [activeTab, setActiveTab] = useState('home');
  const navigation = useNavigation<DrawerNavigationProp<DrawerParamList>>();

  const handleTabPress = (tabId: string) => {
    setActiveTab(tabId);
    if (tabId === 'profile') {
      navigation.openDrawer();
    } else {
      onTabPress(tabId as 'home' | 'library' | 'store' | 'profile');
    }
  };

  return (
    <View style={styles.container}>
      {tabs.map((tab) => (
        <TouchableOpacity 
          key={tab.id}
          style={styles.item}
          onPress={() => handleTabPress(tab.id)}
        >
          <Ionicons 
            name={activeTab === tab.id ? tab.activeIcon : tab.icon} 
            size={24} 
            color={activeTab === tab.id ? colors.primary : colors.text} 
          />
          <Text style={[
            styles.label,
            activeTab === tab.id && styles.activeLabel
          ]}>
            {tab.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.background,
    borderTopWidth: 1,
    borderTopColor: colors.surface,
    paddingVertical: 8,
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
  },
  label: {
    fontSize: 12,
    marginTop: 4,
    color: colors.text,
  },
  activeLabel: {
    color: colors.primary,
  },
}); 