import { View, Text, FlatList, StyleSheet } from 'react-native'
import CartaoFilme from './CartaoFilme'

export default function ListaFilmes({ titulo, filmes, aoTocarFilme }) {
  return (
    <View>
      <Text style={styles.titulo}>{titulo}</Text>
      <FlatList
        data={filmes}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <CartaoFilme filme={item} aoTocar={() => aoTocarFilme(item.id)} />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  titulo: { fontSize: 18, fontWeight: 'bold', margin: 8 }
})
