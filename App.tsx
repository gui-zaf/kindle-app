import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Header } from './src/components/Header';
import { SectionTitle } from './src/components/SectionTitle';
import { BottomBar } from './src/components/BottomBar';
import { Drawer } from './src/components/Drawer';
import { colors } from './src/theme/theme';
import { useState } from 'react';
import { BookDetails } from './src/screens/BookDetails';
import { useNavigation } from '@react-navigation/native';
import { Book, RootStackParamList } from './src/types/navigation';

const DrawerNav = createDrawerNavigator<RootStackParamList>();

const myLibrary: Book[] = [
  {
    id: '1',
    title: 'Seduzida pelo meu chuveiro senciente',
    author: 'Chuck Tingle',
    cover: 'https://m.media-amazon.com/images/I/71AyRkdmuuL._SY522_.jpg',
    category: 'Romance',
    rating: 4.2,
    price: 29.90,
  },
  {
    id: '2',
    title: 'It - A Coisa',
    author: 'Stephen King',
    cover: 'https://m.media-amazon.com/images/I/91g9Dvtf+jL._AC_UY436_FMwebp_QL65_.jpg',
    category: 'Terror',
    rating: 4.8,
    price: 49.90,
  },
  {
    id: '3',
    title: 'Aprenda Kotlin',
    author: 'JetBrains',
    cover: 'https://m.media-amazon.com/images/I/610QH28c56L._AC_UY436_FMwebp_QL65_.jpg',
    category: 'Tecnologia',
    rating: 4.7,
    price: 89.90,
  },
  {
    id: '4',
    title: 'Aprenda Swift',
    author: 'Apple',
    cover: 'https://m.media-amazon.com/images/I/61kHBYlJT8L._AC_UY436_FMwebp_QL65_.jpg',
    category: 'Tecnologia',
    rating: 4.7,
    price: 89.90,
  },
  {
    id: '5',
    title: 'Lady Gaga',
    author: 'Maureen Callahan',
    cover: 'https://m.media-amazon.com/images/I/91CI4rCn07L._AC_UY436_FMwebp_QL65_.jpg',
    category: 'Biografia',
    rating: 4.5,
    price: 49.90,
  },
  {
    id: '6',
    title: 'Crime e Castigo',
    author: 'Fiódor Dostoiévski',
    cover: 'https://m.media-amazon.com/images/I/81nMV78XCuL._AC_UY436_FMwebp_QL65_.jpg',
    category: 'Literatura Internacional',
    rating: 4.9,
    price: 42.90,
  },
  {
    id: '7',
    title: 'Memórias Póstumas de Brás Cubas',
    author: 'Machado de Assis',
    cover: 'https://m.media-amazon.com/images/I/81qclZ+zb6L._AC_UY436_FMwebp_QL65_.jpg',
    category: 'Literatura Brasileira',
    rating: 4.8,
    price: 32.90,
  },
  {
    id: '8',
    title: 'Heartstopper',
    author: 'Alice Oseman',
    cover: 'https://m.media-amazon.com/images/I/91OtLO6tVdL._AC_UY436_FMwebp_QL65_.jpg',
    category: 'Romance',
    rating: 4.9,
    price: 35.90,
  },
  {
    id: '9',
    title: 'Entendendo Algoritmos',
    author: 'Aditya Bhargava',
    cover: 'https://m.media-amazon.com/images/I/91z0+pX2AkL._AC_UY436_FMwebp_QL65_.jpg',
    category: 'Tecnologia',
    rating: 4.8,
    price: 79.90,
  },
  {
    id: '10',
    title: 'Assassinato no Expresso Oriente',
    author: 'Agatha Christie',
    cover: 'https://m.media-amazon.com/images/I/91hS1+plMjL._AC_UY436_FMwebp_QL65_.jpg',
    category: 'Mistério',
    rating: 4.8,
    price: 34.90,
  },
  {
    id: '11',
    title: 'A Hora da Estrela',
    author: 'Clarice Lispector',
    cover: 'https://m.media-amazon.com/images/I/81WXzsT86ZL._AC_UY436_FMwebp_QL65_.jpg',
    category: 'Literatura Brasileira',
    rating: 4.7,
    price: 28.90,
  },
  {
    id: '12',
    title: 'Perto do Coração Selvagem',
    author: 'Clarice Lispector',
    cover: 'https://m.media-amazon.com/images/I/81e94f06FcL._AC_UY436_FMwebp_QL65_.jpg',
    category: 'Literatura Brasileira',
    rating: 4.6,
    price: 31.90,
  },
  {
    id: '13',
    title: 'O Pequeno Príncipe',
    author: 'Antoine de Saint-Exupéry',
    cover: 'https://m.media-amazon.com/images/I/81SVIwe5L9L._AC_UY436_FMwebp_QL65_.jpg',
    category: 'Literatura Internacional',
    rating: 4.9,
    price: 24.90,
  },
  {
    id: '14',
    title: 'A Pequena Lagarta',
    author: 'Eric Carle',
    cover: 'https://m.media-amazon.com/images/I/81Mvp8DmfmL._AC_UY436_FMwebp_QL65_.jpg',
    category: 'Infantil',
    rating: 4.9,
    price: 29.90,
  },
  {
    id: '15',
    title: 'SQL para Análise de Dados',
    author: 'Cathy Tanimura',
    cover: 'https://m.media-amazon.com/images/I/81YbSdLsYDL._AC_UY436_FMwebp_QL65_.jpg',
    category: 'Tecnologia',
    rating: 4.6,
    price: 69.90,
  },
  {
    id: '16',
    title: 'Aprenda C++',
    author: 'Bjarne Stroustrup',
    cover: 'https://m.media-amazon.com/images/I/61HhyoCP7ML._AC_UY436_FMwebp_QL65_.jpg',
    category: 'Tecnologia',
    rating: 4.8,
    price: 99.90,
  },
  {
    id: '17',
    title: 'It - Capítulo 2',
    author: 'Stephen King',
    cover: 'https://m.media-amazon.com/images/I/81jkDWxNuPL._AC_UY436_FMwebp_QL65_.jpg',
    category: 'Terror',
    rating: 4.7,
    price: 45.90,
  },
  {
    id: '18',
    title: 'A Garota do Lago',
    author: 'Charlie Donlea',
    cover: 'https://m.media-amazon.com/images/I/81TdSc3lwaL._AC_UY436_FMwebp_QL65_.jpg',
    category: 'Terror',
    rating: 4.5,
    price: 39.90,
  },
  {
    id: '19',
    title: 'Silo',
    author: 'Hugh Howey',
    cover: 'https://m.media-amazon.com/images/I/A1IC8Xt2E4L._AC_UY436_FMwebp_QL65_.jpg',
    category: 'Ficção Científica',
    rating: 4.7,
    price: 45.90,
  },
  {
    id: '20',
    title: 'Shift',
    author: 'Hugh Howey',
    cover: 'https://m.media-amazon.com/images/I/71m+f-fV0SL._AC_UY436_FMwebp_QL65_.jpg',
    category: 'Ficção Científica',
    rating: 4.6,
    price: 45.90,
  },
  {
    id: '21',
    title: '1984',
    author: 'George Orwell',
    cover: 'https://m.media-amazon.com/images/I/71kxa1-0mfL._AC_UY436_FMwebp_QL65_.jpg',
    category: 'Ficção Científica',
    rating: 4.8,
    price: 34.90,
  },
  {
    id: '22',
    title: 'A Revolução dos Bichos',
    author: 'George Orwell',
    cover: 'https://m.media-amazon.com/images/I/71Q3uDEpteS._AC_UY436_FMwebp_QL65_.jpg',
    category: 'Ficção Científica',
    rating: 4.9,
    price: 29.90,
  },
  {
    id: '23',
    title: 'O Senhor dos Anéis',
    author: 'J.R.R. Tolkien',
    cover: 'https://m.media-amazon.com/images/I/816C1V0nb7L._AC_UY436_FMwebp_QL65_.jpg',
    category: 'Fantasia',
    rating: 4.9,
    price: 49.90,
  },
  {
    id: '24',
    title: 'O Hobbit',
    author: 'J.R.R. Tolkien',
    cover: 'https://m.media-amazon.com/images/I/91zdxRRvabL._AC_UY436_FMwebp_QL65_.jpg',
    category: 'Fantasia',
    rating: 4.8,
    price: 39.90,
  },
];

const trendingBooks = [
  {
    id: '6',
    title: 'Crime e Castigo',
    author: 'Fiódor Dostoiévski',
    cover: 'https://m.media-amazon.com/images/I/81nMV78XCuL._AC_UY436_FMwebp_QL65_.jpg',
    category: 'Literatura Internacional',
    rating: 4.9,
    price: 42.90,
  },
  {
    id: '7',
    title: 'Memórias Póstumas de Brás Cubas',
    author: 'Machado de Assis',
    cover: 'https://m.media-amazon.com/images/I/81qclZ+zb6L._AC_UY436_FMwebp_QL65_.jpg',
    category: 'Literatura Brasileira',
    rating: 4.8,
    price: 32.90,
  },
  {
    id: '8',
    title: 'Heartstopper',
    author: 'Alice Oseman',
    cover: 'https://m.media-amazon.com/images/I/91OtLO6tVdL._AC_UY436_FMwebp_QL65_.jpg',
    category: 'Romance',
    rating: 4.9,
    price: 35.90,
  },
  {
    id: '9',
    title: 'Entendendo Algoritmos',
    author: 'Aditya Bhargava',
    cover: 'https://m.media-amazon.com/images/I/91z0+pX2AkL._AC_UY436_FMwebp_QL65_.jpg',
    category: 'Tecnologia',
    rating: 4.8,
    price: 79.90,
  },
  {
    id: '10',
    title: 'Assassinato no Expresso Oriente',
    author: 'Agatha Christie',
    cover: 'https://m.media-amazon.com/images/I/91hS1+plMjL._AC_UY436_FMwebp_QL65_.jpg',
    category: 'Mistério',
    rating: 4.8,
    price: 34.90,
  },
];

const newBooks = [
  {
    id: '11',
    title: 'A Hora da Estrela',
    author: 'Clarice Lispector',
    cover: 'https://m.media-amazon.com/images/I/81WXzsT86ZL._AC_UY436_FMwebp_QL65_.jpg',
    category: 'Literatura Brasileira',
    rating: 4.7,
    price: 28.90,
  },
  {
    id: '12',
    title: 'Perto do Coração Selvagem',
    author: 'Clarice Lispector',
    cover: 'https://m.media-amazon.com/images/I/81e94f06FcL._AC_UY436_FMwebp_QL65_.jpg',
    category: 'Literatura Brasileira',
    rating: 4.6,
    price: 31.90,
  },
  {
    id: '13',
    title: 'O Pequeno Príncipe',
    author: 'Antoine de Saint-Exupéry',
    cover: 'https://m.media-amazon.com/images/I/81SVIwe5L9L._AC_UY436_FMwebp_QL65_.jpg',
    category: 'Literatura Internacional',
    rating: 4.9,
    price: 24.90,
  },
  {
    id: '14',
    title: 'A Pequena Lagarta',
    author: 'Eric Carle',
    cover: 'https://m.media-amazon.com/images/I/81Mvp8DmfmL._AC_UY436_FMwebp_QL65_.jpg',
    category: 'Infantil',
    rating: 4.9,
    price: 29.90,
  },
  {
    id: '15',
    title: 'SQL para Análise de Dados',
    author: 'Cathy Tanimura',
    cover: 'https://m.media-amazon.com/images/I/81YbSdLsYDL._AC_UY436_FMwebp_QL65_.jpg',
    category: 'Tecnologia',
    rating: 4.6,
    price: 69.90,
  },
];

interface BookCardProps {
  book: Book;
  onPress?: () => void;
}

const BookCard: React.FC<BookCardProps> = ({ book, onPress }) => {
  return (
    <TouchableOpacity style={styles.bookCard} onPress={onPress}>
      <Image
        source={{ uri: book.cover }}
        style={styles.bookCover}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
};

interface BookCarouselProps {
  books: Book[];
  onBookPress: (book: Book) => void;
}

const BookCarousel: React.FC<BookCarouselProps> = ({ books, onBookPress }) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.carouselContent}
    >
      {books.map((book) => (
        <BookCard key={book.id} book={book} onPress={() => onBookPress(book)} />
      ))}
    </ScrollView>
  );
};

const BookGrid: React.FC<{ books: Book[]; onBookPress: (book: Book) => void }> = ({ books, onBookPress }) => {
  const screenWidth = Dimensions.get('window').width;
  const bookWidth = (screenWidth - 48) / 2; // 48 = padding (16) * 2 + gap between books (16)

  return (
    <View style={styles.gridContainer}>
      {books.map((book) => (
        <TouchableOpacity 
          key={book.id} 
          style={[styles.gridBookCard, { width: bookWidth }]} 
          onPress={() => onBookPress(book)}
        >
          <Image
            source={{ uri: book.cover }}
            style={styles.gridBookCover}
            resizeMode="cover"
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const HomeScreen = () => {
  const [currentView, setCurrentView] = useState<'home' | 'library' | 'store' | 'profile'>('home');
  const navigation = useNavigation();

  const handleBookPress = (book: Book) => {
    navigation.navigate('BookDetails', { book });
  };

  const renderContent = () => {
    switch (currentView) {
      case 'library':
        return (
          <ScrollView 
            style={styles.content}
            bounces={true}
            overScrollMode="always"
            showsVerticalScrollIndicator={true}
            scrollEventThrottle={16}
            contentContainerStyle={styles.contentContainer}
          >
            <BookGrid books={myLibrary} onBookPress={handleBookPress} />
          </ScrollView>
        );
      case 'home':
      default:
        return (
          <ScrollView 
            style={styles.content}
            bounces={true}
            overScrollMode="always"
            showsVerticalScrollIndicator={true}
            scrollEventThrottle={16}
            contentContainerStyle={styles.contentContainer}
          >
            <SectionTitle title="Minha biblioteca" isFirst />
            <BookCarousel books={myLibrary} onBookPress={handleBookPress} />
            
            <SectionTitle title="Livros em alta" icon="trending-up-outline" />
            <BookCarousel books={trendingBooks} onBookPress={handleBookPress} />

            <SectionTitle title="Novidades" icon="time-outline" />
            <BookCarousel books={newBooks} onBookPress={handleBookPress} />
          </ScrollView>
        );
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <Header />
      {renderContent()}
      <BottomBar onTabPress={setCurrentView} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <DrawerNav.Navigator
          drawerContent={(props) => <Drawer {...props} />}
          screenOptions={{
            headerShown: false,
            drawerPosition: 'right',
            drawerStyle: {
              width: '80%',
            },
          }}
        >
          <DrawerNav.Screen name="Home" component={HomeScreen} />
          <DrawerNav.Screen name="BookDetails" component={BookDetails} />
        </DrawerNav.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 32,
  },
  carouselContent: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  bookCard: {
    width: 120,
    height: 180,
    marginRight: 12,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: colors.surface,
  },
  bookCover: {
    width: '100%',
    height: '100%',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 16,
    gap: 16,
    marginTop: 70,
  },
  gridBookCard: {
    height: 250,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: colors.surface,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  gridBookCover: {
    width: '100%',
    height: '100%',
  },
});
