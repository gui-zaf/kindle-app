import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { Book } from '../types/book';
import { myLibrary, trendingBooks, newBooks } from '../data/books';
import { Header } from '../components/Header';
import { SectionTitle } from '../components/SectionTitle';
import { BookCarousel } from '../components/BookCarousel';
import { BottomBar } from '../components/BottomBar';
import { colors } from '../theme/theme';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Drawer'>;

export const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [currentView, setCurrentView] = useState<'home' | 'library' | 'store' | 'profile'>('home');

  const handleBookPress = (book: Book) => {
    navigation.navigate('BookDetails', { book });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView style={styles.content}>
        <SectionTitle title="Minha biblioteca" isFirst />
        <BookCarousel books={myLibrary} onBookPress={handleBookPress} />
        
        <SectionTitle title="Livros em alta" icon="trending-up-outline" />
        <BookCarousel books={trendingBooks} onBookPress={handleBookPress} />

        <SectionTitle title="Novidades" icon="time-outline" />
        <BookCarousel books={newBooks} onBookPress={handleBookPress} />
      </ScrollView>
      <BottomBar onTabPress={setCurrentView} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
  },
}); 