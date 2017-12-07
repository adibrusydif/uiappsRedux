/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
  TouchableHighlight
} from 'react-native';
import axios from 'axios'
// import Carousel from 'react-native-carousel'
// import {getToken} from './global/util'

export default class MainPage extends Component {

//   componentDidMount(){
//     this.fetchToken()
//   }

//   fetchToken = async ()=>{
//     const token = await getToken()
//     console.log(token)
//     if(token){
//       this.props.navigation.navigate('Products')
//     }
//   }


  render() {
    const {
      viewContainer,
      btnContainer,
      judul,
      judulContainer,
      btnGreen,
      login,
      btnRegister,
      register
    } = styles
    return (
      <View style={ viewContainer } >
        <View style={ judulContainer }>
          <Text style={ judul}>Join</Text>
          <Text style={ judul}>Our Apps</Text>
          <Text style={ judul}>Now</Text>
        </View>
        <View style={ btnContainer}>
          <TouchableOpacity onPress={ ()=> this.props.navigation.navigate('Login')} style={ btnGreen}>
            <Text style={login}> Login </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={ ()=> this.props.navigation.navigate('Register')} style={ btnRegister}>
            <Text style={register}> Register </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  static navigationOptions = {
    header:null
  }
}
const styles = StyleSheet.create({
  viewContainer:{flex: 1,backgroundColor: '#6fa1f2'},
  btnContainer:{flexDirection: 'row', marginLeft: 25 , marginTop: 180},
  judul:{color: 'white', fontSize: 45, fontWeight:'bold'},
  judulContainer:{marginLeft: 25, marginTop: 100 },
  btnGreen:{backgroundColor: 'green', width: '40%'},
  login:{textAlign: 'center', fontSize: 25, fontWeight:'500', color:'white',margin: 10},
  btnRegister:{backgroundColor: 'grey', width: '40%', borderRadius: 3, marginLeft: 25},
  register:{ textAlign: 'center', fontSize: 25, fontWeight:'500', color:'white',margin: 10}
})