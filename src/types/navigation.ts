import { NavigatorScreenParams } from '@react-navigation/native';

export type Book = {
  id: string;
  title: string;
  author: string;
  cover: string;
  category: string;
  rating: number;
  price: number;
  description: string;
};

export type RootStackParamList = {
  Home: undefined;
  BookDetails: { book: Book };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
} 