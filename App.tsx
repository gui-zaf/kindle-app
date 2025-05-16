import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Header } from './src/components/Header';
import { SectionTitle } from './src/components/SectionTitle';
import { BookCarousel } from './src/components/BookCarousel';
import { BottomBar } from './src/components/BottomBar';
import { Drawer } from './src/components/Drawer';
import { colors } from './src/theme/theme';

const DrawerNav = createDrawerNavigator();

const HomeScreen = () => {
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
        <BookCarousel />
        
        <SectionTitle title="Livros em alta" icon="trending-up-outline" />
        <BookCarousel />

        <SectionTitle title="Novidades" icon="time-outline" />
        <BookCarousel />
      </ScrollView>
      <BottomBar />
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
});
