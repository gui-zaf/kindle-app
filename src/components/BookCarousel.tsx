import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { BookCard } from './BookCard';

type Book = {
  id: string;
  title: string;
  author: string;
  cover: any;
  category: string;
  rating: number;
  price: number;
};

type BookCarouselProps = {
  books?: Book[];
};

export const BookCarousel = ({ books = [] }: BookCarouselProps) => {
  console.log('BookCarousel books:', books);
  
  const displayBooks = books.length > 0 
    ? books 
    : Array.from({ length: 5 }, (_, index) => ({ 
        id: `placeholder-${index}`,
        cover: undefined 
      }));

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {displayBooks.map((book) => (
        <BookCard key={book.id} imageUrl={book.cover} />
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