import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const IndicacaoScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Indicações</Text>
      <View style={styles.movie}>
        <Text style={styles.movieTitle}>Matrix</Text>
        <Text style={styles.movieDescription}>Um jovem hacker descobre a verdadeira natureza da realidade e sua luta contra as máquinas que controlam o mundo.</Text>
      </View>
      <View style={styles.movie}>
        <Text style={styles.movieTitle}>O Poderoso Chefão</Text>
        <Text style={styles.movieDescription}>A saga de uma família mafiosa italiana nos Estados Unidos, liderada por Don Vito Corleone, o "Poderoso Chefão".</Text>
      </View>
      <View style={styles.movie}>
        <Text style={styles.movieTitle}>Vingadores:Ultimato</Text>
        <Text style={styles.movieDescription}>Os Vingadores buscam reverter o genocídio de Thanos através de viagens no tempo, enfrentando desafios pessoais e batalhas emocionantes. Com sacrifícios e determinação, eles restauram o equilíbrio do universo em uma épica conclusão da saga.</Text>
      </View>
      <View style={styles.movie}>
        <Text style={styles.movieTitle}>Avatar</Text>
        <Text style={styles.movieDescription}>Em 'Avatar', um ex-fuzileiro naval é enviado para Pandora em uma missão, onde se apaixona por uma nativa e se junta à luta do povo Na'vi contra a exploração humana, em uma batalha pela preservação do planeta e seu povo.</Text>
      </View>
      <View style={styles.movie}>
        <Text style={styles.movieTitle}>Deadpool</Text>
        <Text style={styles.movieDescription}>"Deadpool" é sobre Wade Wilson, um ex-mercenário transformado em anti-herói com poder de cura, que busca vingança enquanto quebra a quarta parede com humor ácido e ação.</Text>
      </View>
      <View style={styles.movie}>
        <Text style={styles.movieTitle}>Harry Potter</Text>
        <Text style={styles.movieDescription}>Um jovem bruxo enfrenta as forças das trevas em uma escola de magia.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8DC',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#8B4513',
  },
  movie: {
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FFE4C4',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  movieTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#8B4513',
  },
  movieDescription: {
    fontSize: 16,
    textAlign: 'justify',
    color: '#333',
  },
});

export default IndicacaoScreen;
