/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import MainPage from './component/MainPage'
import LoginPage from './component/Login'
import RegisterPage from './component/RegisterPage'
import { StackNavigator } from 'react-navigation'
// import Products from './src/Products'
// import ProductDetails from './src/products/productDetails'

const Router = StackNavigator({
  Main: {screen: MainPage},
  Login: {screen: LoginPage},
  Register: {screen: RegisterPage}
//   Products: {screen: Products},
//   ProductDetails: {screen: ProductDetails}
})

export default class Routes extends Component {
  render () {
    return <Router />
  }
}