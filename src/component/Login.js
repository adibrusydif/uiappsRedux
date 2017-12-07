import React, { Component} from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    AsyncStrorage,
    AsyncStorage
}   from 'react-native'
// import {BASE_API_URL , getToken } from './global/util'
import axios from 'axios'

class LoginPage extends Component{
    state = {
        email:'',
        password:'',

    }

    saveToken = async (ini_token_saya)=>{
        // console.log('test save token')
        // await AsyncStorage.setItem('token', ini_token_saya)
        // const dataToken = await getToken()
        // if(dataToken){
        //     this.props.navigation.navigate('Products',{ token : dataToken , user : this.state.email})
        // }
    }

    LoginClickHandler(){
        // console.log('func login terpanggil')
        // const datakirim ={
        //     "email": this.state.email,
        //     "password": this.state.password
        // }
        // axios.post(BASE_API_URL +'/Users/login', datakirim)
        //     .then(res=>{
        //         const token = res.data.id
        //         console.log(res)
        //         // this.props.navigation.navigate('Products', { user:  user });

        //         this.saveToken(token)
        //     })
        //     .catch(err=>{
        //         console.log(err)
        //     })
        
    }

    render(){
        return(
            <View style={{ flex: 1}}>
                <Text style={{marginLeft: 25, marginTop: 50 , fontSize: 25}}>Login Form</Text>
                <View style={{ marginLeft: 25, marginTop: 100}}>
                    <TextInput 
                    onChangeText={(text)=>this.setState({ email:text })}
                    style={{ width: '70%'}} placeholder="email">
                    </TextInput>
                    <TextInput 
                    onChangeText={(text)=>this.setState({ password:text })}
                    style={{ width: '70%'}} placeholder="password">
                    </TextInput>
                </View>
                <View style={{ flexDirection: 'row', marginLeft: 25 , marginTop: 180}}>
                    <TouchableOpacity 
                        onPress={() => this.LoginClickHandler()}
                        style={{ backgroundColor: 'green', width: '40%'}}>
                        <Text style={{ textAlign: 'center', fontSize: 25, fontWeight:'500', color:'white',margin: 10}}> Login </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={ ()=> this.props.navigation.navigate('Main')}
                    style={{ backgroundColor: 'grey', width: '40%', borderRadius: 3, marginLeft: 25 }}>
                        <Text style={{ textAlign: 'center', fontSize: 25, fontWeight:'500', color:'white',margin: 10}}> Cancel </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
export default LoginPage ;