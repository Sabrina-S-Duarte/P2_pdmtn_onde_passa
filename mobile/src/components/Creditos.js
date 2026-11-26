import { View, Text, StyleSheet } from 'react-native'

export default function Creditos() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>
        Este produto usa a API do TMDB, mas não é endossado nem certificado pelo TMDB.
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { padding: 16, alignItems: 'center' },
  texto: { fontSize: 12, color: '#999', textAlign: 'center' }
})
