import { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import backendClient from './src/utils/backendClient'
import Cabecalho from './src/components/Cabecalho'
import ListaFilmes from './src/components/ListaFilmes'
import Carregando from './src/components/Carregando'
import Creditos from './src/components/Creditos'

export default function App() {
  const [filmes, setFilmes] = useState([])
  const [carregando, setCarregando] = useState(true)

  useEffect(() => {
    backendClient.get('/em-alta')
      .then(resposta => {
        setFilmes(resposta.data)
        setCarregando(false)
      })
      .catch(erro => {
        console.error(erro)
        setCarregando(false)
      })
  }, [])

  return (
    <View style={styles.container}>
      <Cabecalho />
      {carregando ? (
        <Carregando mensagem="Carregando filmes..." />
      ) : (
        <ListaFilmes titulo="Em alta da semana" filmes={filmes} aoTocarFilme={() => {}} />
      )}
      <Creditos />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#111' }
})