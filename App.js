/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
  FlatList
} from 'react-native';
import Post from './src/components/Post'

const width = Dimensions.get('screen').width;

export default class InstaluraMobile extends Component {
  constructor() {
    super();
    this.state = {
      fotos: []
    }
  }

  componentDidMount() {
    fetch('https://instalura-api.herokuapp.com/api/public/fotos/rafael')
      .then(resposta => resposta.json())
      .then(json => this.setState({fotos: json}))
  }

  render() {
    return (
      <FlatList
          keyExtractor={item => String(item.id)}
          data={this.state.fotos}
          renderItem={ ({item}) =>
            <Post foto={item}/>
          }
      />
      );
  }
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  },
  cabecalho: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  fotodeperfil: {
    marginRight: 10,
    borderRadius: 40,
    width:80,
    height:80
  },
  foto: {
    width:width,
    height:width
  },
});

//export default App;
