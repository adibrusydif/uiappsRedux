import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    ActivityIndicator,
    Image,
    ScrollView,
    Button,
    AsyncStorage
} from 'react-native'
import axios from 'axios'
// import { BASE_API_URL, getToken } from './global/util'
// import ProductList from './products/ProductList'

class Products extends Component {
  
  static navigationOptions = ({ navigation }) => ({
  
    title: `Catalog`,

  });
    state = {
        dataProducts: [],
        products: [],
        product_names: [],
        product_prices: [],
    }
    
    //   componentDidMount(){
    //     this.getProducts()
    //   }

      logoutfunc = async ()=>{
        // const dataToken = await getToken()
        // const logout_api = `${BASE_API_URL}/Users/logout?access_token=${dataToken}`
        // console.log(logout_api)
        // axios.post(logout_api,{})
        //   .then(response =>{
        //     console.log(response)
        //     AsyncStorage.removeItem('token')
        //     this.props.navigation.navigate('Main')
        //   })
        //   .catch(err =>{
        //     console.log(err)
        //   })
      }
    

      getProducts = () => {
        // console.log('function getProducts dipanggil')

        // axios.get(BASE_API_URL + '/shoppinglists')
        //     .then(response => {
        //         console.log(response)
        //         this.setState({ 
        //             dataProducts: response.data,
        //         })
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })
      }

    
      render(){
        console.log(this.state.dataProducts)
        
        return (
          <View style={{ flex:1}}>
              <ScrollView>
                {this.state.dataProducts.length === 0 ? (
                  <ActivityIndicator 
                    style={{ marginTop: 50 }}
                    size="large"/>) : (
                      this.state.dataProducts.map((dataku, index) =>
                          <ProductList key={index} 
                            data={dataku}
                            navigation={this.props.navigation}
                          />
                      )
        
                    )}
              </ScrollView>
              <View>
                  <TouchableOpacity 
                    onPress={() => this.logoutfunc()}
                    style={{ backgroundColor: 'red' }}>
                    <Text style={{ margin: 5, color: 'white', fontSize: 14, fontWeight: 'bold' , textAlign:"center"}}>Logout</Text>
                  </TouchableOpacity>
              </View>
          </View>
        )
      }
}

export default Products