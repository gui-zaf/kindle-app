import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../components/Header';
import { SectionTitle } from '../components/SectionTitle';
import { BookCarousel } from '../components/BookCarousel';
import { BottomBar } from '../components/BottomBar';
import { colors } from '../theme/theme';

const books = [
  {
    id: '1',
    title: 'O Cemitério',
    author: 'Stephen King',
    cover: require('../../assets/books/terror/o-cemiterio.jpg'),
    category: 'Terror',
    rating: 4.5,
    price: 39.90,
  },
  {
    id: '2',
    title: 'It - A Coisa',
    author: 'Stephen King',
    cover: require('../../assets/books/terror/it-a-coisa.jpg'),
    category: 'Terror',
    rating: 4.8,
    price: 49.90,
  },
  {
    id: '3',
    title: 'Jetpack Compose',
    author: 'Android Team',
    cover: require('../../assets/books/tecnologia/jetpack-compose.jpg'),
    category: 'Tecnologia',
    rating: 4.7,
    price: 89.90,
  },
  {
    id: '4',
    title: 'Kotlin Multiplataforma',
    author: 'JetBrains',
    cover: require('../../assets/books/tecnologia/kotlin-multiplataforma.jpg'),
    category: 'Tecnologia',
    rating: 4.6,
    price: 79.90,
  },
];

const newBooks = [
  {
    id: '5',
    title: 'Jetpack Compose',
    author: 'Android Team',
    cover: require('../../assets/books/tecnologia/jetpack-compose.jpg'),
    category: 'Tecnologia',
    rating: 4.7,
    price: 89.90,
  },
  {
    id: '6',
    title: 'Kotlin Multiplataforma',
    author: 'JetBrains',
    cover: require('../../assets/books/tecnologia/kotlin-multiplataforma.jpg'),
    category: 'Tecnologia',
    rating: 4.6,
    price: 79.90,
  },
];

export const HomeScreen = () => {
  console.log('HomeScreen books:', books);
  console.log('HomeScreen newBooks:', newBooks);

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <Header />
      <ScrollView 
        style={styles.content}
        bounces={true}
        overScrollMode="always"
        showsVerticalScrollIndicator={true}
        scrollEventThrottle={16}
        contentContainerStyle={styles.contentContainer}
      >
        <SectionTitle title="Minha biblioteca" isFirst />
        <BookCarousel books={books} />
        
        <SectionTitle title="Livros em alta" icon="trending-up-outline" />
        <BookCarousel books={books} />

        <SectionTitle title="Novidades" icon="time-outline" />
        <BookCarousel books={newBooks} />
      </ScrollView>
      <BottomBar />
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
  contentContainer: {
    paddingBottom: 16,
  },
}); 