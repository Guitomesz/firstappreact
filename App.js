import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <Text style={styles.title}>Meu primeiro App     </Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>React Native</Text>
        <Text style={styles.cardSubtitle}>Criando aplicações para Android e iOS</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2a2a2a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff'
  },
  card: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 3
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  cardSubtitle: {
    
  }
});
