import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { colors } from '../theme/theme';

type DrawerItem = {
  id: string;
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
};

const drawerItems: DrawerItem[] = [
  { id: 'cart', label: 'Carrinho', icon: 'cart-outline' },
  { id: 'settings', label: 'Configurações', icon: 'settings-outline' },
  { id: 'help', label: 'Ajuda', icon: 'help-circle-outline' },
  { id: 'about', label: 'Sobre', icon: 'information-circle-outline' },
];

export const Drawer = (props: any) => {
  const handleItemPress = (label: string) => {
    Alert.alert('Aviso', 'Essa funcionalidade ainda não está disponível');
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Menu</Text>
          <TouchableOpacity 
            style={styles.closeButton}
            onPress={() => props.navigation.closeDrawer()}
          >
            <Ionicons name="close" size={24} color={colors.text} />
          </TouchableOpacity>
        </View>
        
        {drawerItems.map((item) => (
          <TouchableOpacity 
            key={item.id} 
            style={styles.item}
            onPress={() => handleItemPress(item.label)}
          >
            <Ionicons name={item.icon} size={24} color={colors.text} />
            <Text style={styles.itemText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.surface,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text,
  },
  closeButton: {
    padding: 4,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.surface,
  },
  itemText: {
    fontSize: 16,
    color: colors.text,
    marginLeft: 12,
  },
}); 