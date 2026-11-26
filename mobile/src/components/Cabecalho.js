import { View, Text, Image, StyleSheet } from 'react-native'

export default function Cabecalho() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/icon.png')} style={styles.icone} />
      <Text style={styles.titulo}>OndePassa</Text>
      <Text style={styles.subtitulo}>Descubra onde assistir qualquer filme</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', padding: 16 },
  icone: { width: 50, height: 50 },
  titulo: { fontSize: 24, fontWeight: 'bold' },
  subtitulo: { fontSize: 14, color: '#666' }
})