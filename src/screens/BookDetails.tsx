import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/theme';
import { useNavigation, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';

type BookDetailsScreenRouteProp = RouteProp<RootStackParamList, 'BookDetails'>;

type BookDetailsProps = {
  route: BookDetailsScreenRouteProp;
};

export const BookDetails = ({ route }: BookDetailsProps) => {
  const { book } = route.params;
  const navigation = useNavigation();
  const [isCartPressed, setIsCartPressed] = useState(false);

  const formatTitle = (title: string) => {
    return title
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" size={24} color={colors.primary} />
          <Text style={styles.backText}>Voltar</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <View style={styles.coverContainer}>
            <Image
              source={{ uri: book.cover }}
              style={styles.cover}
              resizeMode="contain"
            />
          </View>

          <View style={styles.info}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{formatTitle(book.title)}</Text>
              <View style={styles.ratingContainer}>
                <Ionicons name="star" size={20} color={colors.primary} />
                <Text style={styles.rating}>{book.rating.toFixed(1)}</Text>
              </View>
            </View>
            <Text style={styles.author}>{book.author}</Text>
            
            <View style={styles.categoryContainer}>
              <Text style={styles.categoryLabel}>Categoria:</Text>
              <Text style={styles.category}>{book.category}</Text>
            </View>

            <View style={styles.priceContainer}>
              <Text style={styles.priceLabel}>Preço:</Text>
              <Text style={styles.price}>R$ {book.price.toFixed(2)}</Text>
            </View>

            <View style={styles.descriptionContainer}>
              <Text style={styles.descriptionTitle}>Sinopse</Text>
              <Text style={styles.description}>{book.description}</Text>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={[styles.button, styles.buyButton]}>
                <Text style={[styles.buttonText, styles.buyButtonText]}>Comprar Agora</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={[
                  styles.button, 
                  styles.cartButton,
                  isCartPressed && styles.cartButtonPressed
                ]}
                onPress={() => {
                  setIsCartPressed(true);
                  Toast.show({
                    type: 'success',
                    text1: 'Produto adicionado ao carrinho',
                    position: 'bottom',
                    props: {
                      style: {
                        borderLeftColor: colors.primary,
                      },
                    },
                  });
                  setTimeout(() => setIsCartPressed(false), 200);
                }}
              >
                <Ionicons 
                  name="cart-outline" 
                  size={24} 
                  color={isCartPressed ? colors.background : colors.primary} 
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.surface,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  backText: {
    fontSize: 16,
    color: colors.primary,
  },
  scrollView: {
    flex: 1,
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
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    flex: 1,
    marginRight: 16,
  },
  author: {
    fontSize: 18,
    color: colors.textSecondary,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: colors.surface,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  rating: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.primary,
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  categoryLabel: {
    fontSize: 16,
    color: colors.textSecondary,
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
    color: colors.textSecondary,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary,
  },
  descriptionContainer: {
    marginTop: 24,
    gap: 8,
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
  },
  description: {
    fontSize: 16,
    color: colors.textSecondary,
    lineHeight: 24,
  },
  buttonContainer: {
    marginTop: 40,
    flexDirection: 'row',
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
    flex: 0,
    width: 56,
    height: 56,
  },
  cartButtonPressed: {
    backgroundColor: colors.primary,
    transform: [{ scale: 0.95 }],
  },
  buyButton: {
    backgroundColor: colors.primary,
    flex: 1,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buyButtonText: {
    color: colors.background,
  },
}); 