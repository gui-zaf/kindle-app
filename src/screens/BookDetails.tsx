import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/theme';
import { useNavigation, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';

type BookDetailsScreenRouteProp = RouteProp<RootStackParamList, 'BookDetails'>;

type BookDetailsProps = {
  route: BookDetailsScreenRouteProp;
};

export const BookDetails = ({ route }: BookDetailsProps) => {
  const { book } = route.params;
  const navigation = useNavigation();

  const formatTitle = (title: string) => {
    return title
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color={colors.text} />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.coverContainer}>
          <Image
            source={{ uri: book.cover }}
            style={styles.cover}
            resizeMode="contain"
          />
        </View>

        <View style={styles.info}>
          <Text style={styles.title}>{formatTitle(book.title)}</Text>
          <Text style={styles.author}>{book.author}</Text>
          
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={20} color={colors.primary} />
            <Text style={styles.rating}>{book.rating.toFixed(1)}</Text>
          </View>

          <View style={styles.categoryContainer}>
            <Text style={styles.categoryLabel}>Categoria:</Text>
            <Text style={styles.category}>{book.category}</Text>
          </View>

          <View style={styles.priceContainer}>
            <Text style={styles.priceLabel}>Preço:</Text>
            <Text style={styles.price}>R$ {book.price.toFixed(2)}</Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button, styles.cartButton]}>
              <Ionicons name="cart-outline" size={24} color={colors.primary} />
              <Text style={[styles.buttonText, styles.cartButtonText]}>Adicionar ao Carrinho</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.button, styles.buyButton]}>
              <Text style={[styles.buttonText, styles.buyButtonText]}>Comprar Agora</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    padding: 16,
    marginTop: 70,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    padding: 16,
  },
  coverContainer: {
    width: '100%',
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    padding: 8,
    backgroundColor: '#FFFFFF',
  },
  cover: {
    width: '100%',
    height: '100%',
    borderRadius: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  info: {
    gap: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
  },
  author: {
    fontSize: 18,
    color: colors.subtext,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  rating: {
    fontSize: 16,
    color: colors.text,
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  categoryLabel: {
    fontSize: 16,
    color: colors.subtext,
  },
  category: {
    fontSize: 16,
    color: colors.text,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  priceLabel: {
    fontSize: 16,
    color: colors.subtext,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary,
  },
  buttonContainer: {
    marginTop: 24,
    gap: 12,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 8,
    gap: 8,
  },
  cartButton: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  buyButton: {
    backgroundColor: colors.primary,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cartButtonText: {
    color: colors.primary,
  },
  buyButtonText: {
    color: colors.background,
  },
}); 