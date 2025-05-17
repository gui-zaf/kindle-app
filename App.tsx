import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { View, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Header } from './src/components/Header';
import { SectionTitle } from './src/components/SectionTitle';
import { BottomBar } from './src/components/BottomBar';
import { Drawer } from './src/components/Drawer';
import { useState } from 'react';
import { BookDetails } from './src/screens/BookDetails';
import { useNavigation } from '@react-navigation/native';
import { Book, RootStackParamList } from './src/types/navigation';
import Toast from 'react-native-toast-message';
import { myLibrary, trendingBooks, newBooks } from './src/data/books';
import { styles } from './src/styles/app.styles';
import { BookPreview } from './src/screens/BookPreview';

const DrawerNav = createDrawerNavigator();
const Stack = createStackNavigator<RootStackParamList>();

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

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen 
        name="BookDetails" 
        component={BookDetails}
        options={{
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
      />
      <Stack.Screen 
        name="BookPreview" 
        component={BookPreview}
        options={{
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <DrawerNav.Navigator
          drawerContent={(props) => <Drawer {...props} />}
          screenOptions={{
            headerShown: false,
            drawerPosition: 'right',
          }}
        >
          <DrawerNav.Screen name="Home" component={HomeStack} />
        </DrawerNav.Navigator>
      </NavigationContainer>
      <Toast />
    </SafeAreaProvider>
  );
}
