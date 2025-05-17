import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { BookCard } from './BookCard';
import { Book } from '../types/navigation';

type BookCarouselProps = {
  books?: Book[];
  onBookPress?: (book: Book) => void;
};

export const BookCarousel = ({ books = [], onBookPress }: BookCarouselProps) => {
  if (books.length === 0) {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        {Array.from({ length: 5 }, (_, index) => (
          <BookCard 
            key={`placeholder-${index}`}
            imageUrl={undefined}
          />
        ))}
      </ScrollView>
    );
  }

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {books.map((book) => (
        <BookCard 
          key={book.id} 
          imageUrl={book.cover} 
          onPress={() => onBookPress?.(book)}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
}); 