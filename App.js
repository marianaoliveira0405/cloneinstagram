
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native';

import Lista from './src/Lista';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      feed: [
        {
          id: '1', 
          nome: 'Luis Carlos', 
          descricao: 'Mais um dia cheio de vitória :)', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',  
          likeada: true, 
          likers: 15,
          
         },
        {
          id: '2', 
          nome: 'Matheus Mendes', 
          descricao: 'Um dia fabuloso!!!!!', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png', 
          likeada: false, 
          likers: 14
        },
        {
          id: '3', 
          nome: 'Pedro Henrique', 
          descricao: 'Vamos que vamos, hoje grande dia', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',  
          likeada: false, 
          likers: 10
        },
        {
        
          id: '4', 
          nome: 'Caio Silva', 
          descricao: 'Equipe é isso todos unidos!', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto4.png', 
          likeada: false, 
          likers: 3
        },
        {
          id: '5', 
          nome: 'Mario Andrade', 
          descricao: 'Bom dia pessoal, desejo uma boa senama a todos...', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto5.png',
          likeada: false, 
          likers: 28
        }
      ]
     };
 
  }

  render() {
    return (
      <View style={styles.container}>
      
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
          source={require('./src/img/logo.png')}
          style={styles.logo}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
          source={require('./src/img/send.png')}
          style={styles.send}
          />
        </TouchableOpacity>
      </View>

      <FlatList
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      data={this.state.feed}
      renderItem={ ({item}) => <Lista data={item} /> }
      />

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    height: 55,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    borderBottomWidth: 0.2,
    shadowColor: '#000',
    elevation: 1,
  },
  send:{
    width: 23,
    height: 23
  }

});

export default App;