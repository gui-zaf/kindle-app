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
  Drawer: undefined;
  Home: undefined;
  BookDetails: { book: Book };
  BookPreview: { book: Book };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
} 