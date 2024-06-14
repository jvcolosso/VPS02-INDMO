import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DestaquesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Destaques</Text>
      <View style={styles.movie}>
        <Text style={styles.movieTitle}>Furisosa</Text>
        <Text style={styles.movieDescription}>"Furiosa" é um prelúdio de "Mad Max: Estrada da Fúria", centrado na origem da personagem Furiosa e sua luta por liberdade em um mundo pós-apocalíptico, apresentando cenas de ação intensas e uma narrativa cativante.</Text>
      </View>
      <View style={styles.movie}>
        <Text style={styles.movieTitle}>Godzilla vs. King Kong</Text>
        <Text style={styles.movieDescription}>Dois titãs lendários se enfrentam em uma batalha épica que abala o mundo.</Text>
      </View>
      <View style={styles.movie}>
        <Text style={styles.movieTitle}>Deadpool 2</Text>
        <Text style={styles.movieDescription}>"Deadpool 2" segue Wade Wilson, também conhecido como Deadpool, recrutando uma equipe de mutantes para proteger um jovem mutante, Russell, de um soldado do futuro. O filme mistura humor sarcástico, ação e temas de família enquanto Deadpool busca redenção.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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

export default DestaquesScreen;
