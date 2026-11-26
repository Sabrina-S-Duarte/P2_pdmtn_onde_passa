import { View, StyleSheet } from 'react-native'
import Cabecalho from './src/components/Cabecalho'
import Creditos from './src/components/Creditos'

export default function App() {
  return (
    <View style={styles.container}>
      <Cabecalho />
      <Creditos />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#111' }
})
