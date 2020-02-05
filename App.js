import React from 'react';
import {Component} from 'react'
import {
  // SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  Dimensions,
  FlatList
} from 'react-native';

import Post from './src/components/Post'

export default class App extends Component {

  constructor(){
    super()
    this.state = {
      fotos:[]
    }
  }

  componentDidMount(){
    fetch('https://instalura-api.herokuapp.com/api/public/fotos/rafael')
    .then(resposta => resposta.json())
    .then(json => this.setState({fotos:json}))
  }
  

  // const fotos = [{ id: 1, usuario: 'Matheus' }, { id: 2, usuario: 'Suziane' }, { id: 3, usuario: 'Kalil' }]
  render(){
    return (
      <FlatList style={style.container}
        data={this.state.fotos}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) =>
          <Post foto={item} />
        }
      />
    );
  }
  
};

const style = StyleSheet.create({
  container:{ 
    marginTop: 20 
  }
})


// export default  (App);

