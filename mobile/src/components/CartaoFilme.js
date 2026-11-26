import { View, Text, Image, StyleSheet, Pressable } from 'react-native'

export default function CartaoFilme({ filme, aoTocar }) {
  return (
    <Pressable onPress={aoTocar} style={styles.container}>
      {filme.poster && <Image source={{ uri: filme.poster }} style={styles.poster} />}
      <View style={styles.info}>
        <Text style={styles.titulo}>{filme.titulo}</Text>
        <Text>{filme.ano}</Text>
        <Text>★ {filme.nota}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', margin: 8, backgroundColor: '#222', borderRadius: 8 },
  poster: { width: 80, height: 120, borderTopLeftRadius: 8, borderBottomLeftRadius: 8 },
  info: { padding: 8, flex: 1 },
  titulo: { color: '#fff', fontWeight: 'bold' }
})