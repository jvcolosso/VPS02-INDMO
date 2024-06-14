import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ContatoScreen() {
  // Informações de contato e descrição
  const informacoes = {
    contato: {
      email: "colossofilmes.com.br",
      telefone: "(19)78568-7854",
      endereco: "Rua Armacindo Cunha, 7854, Pedreira, São Paulo"
    },
    descricao: "  O Cinema na Mão é um aplicativo projetado para apaixonados por cinema, oferecendo destaques dos filmes mais recentes, funcionalidade de busca para encontrar filmes específicos e recomendações personalizadas baseadas nas preferências individuais dos usuários."
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contato / Quem Somos</Text>
      <Text style={styles.subtitle}>Entre em contato:</Text>
      <Text style={styles.info}>Email: {informacoes.contato.email}</Text>
      <Text style={styles.info}>Telefone: {informacoes.contato.telefone}</Text>
      <Text style={styles.info}>Endereço: {informacoes.contato.endereco}</Text>
      <Text style={styles.description}>{informacoes.descricao}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#8B4513',
  },
  info: {
    fontSize: 16,
    marginTop: 5,
    color: '#333',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    color: '#333',
  },
});
