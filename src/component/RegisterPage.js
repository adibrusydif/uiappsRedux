import React, { Component} from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native'
import axios from 'axios'
import { connect } from 'react-redux'
import { REGISTER_USER } from '../actions'
// import { BASE_API_URL} from '../global/util'


class RegisterPage extends Component {
    state = {
        email:'',
        password:'',
        messageSuccess:'',
        messageError:''
    }
    registerClickHandler(){
        this.props.dispatch(registerUser())
        // this.setState ({ messageError :'', messageSuccess :''})
    
        // console.log(this.state.email , this.state.password)
        // // const { email, password }= this.state //es6 Destrucruring
        // if(this.state.email !== '' && this.state.password !== ''){
        //     const dataPayloads = {
        //     "email": this.state.email,
        //     "password":this.state.password
        //     } 
        //     axios.post(BASE_API_URL + '/Users', dataPayloads)
        //         .then(res=>{
        //             console.log(res)
        //             this.setState ({ messageSuccess : 'Success to Register'})
        //             setTimeout(()=>this.props.navigation.navigate('Main'),3000)
        //             // this.props.navigation.navigate('Main')

        //         })
        //         .catch(err=>{
        //             console.log(err)
                 
        //             this.setState({
        //                 messageError :"registation failed"
                        
                        
        //             })
                    
                  
        //         })
        //     }        
    }
 


    render() {
        return(
            <View style={{ flex: 1}}>
                <Text style={{marginLeft: 25, marginTop: 50 , fontSize: 25}}>Registration Form</Text>
                {this.state.messageSuccess !=='' && 
                    <Text style={{ color:'green', marginLeft: 25, marginTop: 20}}>{this.state.messageSuccess}</Text>
                }
                {this.state.messageError !=='' && 
                    <Text style={{ color:'red', marginLeft: 25,marginTop: 20}}>{this.state.messageError}</Text>
                }
                <View style={{ marginLeft: 25, marginTop: 100}}>
                    <TextInput 
                        returnKeyType='go' 
                        onChangeText={(text)=>this.setState({ email:text })}
                        style={{ width: '70%'}} placeholder="email">
                    </TextInput>
                    <TextInput 
                        onChangeText={(text)=>this.setState({ password:text })}
                        style={{ width: '70%'}} placeholder="password" secureTextEntry={true}>
                    </TextInput>
                </View>
                <View style={{ flexDirection: 'row', marginLeft: 25 , marginTop: 180}}>
                    <TouchableOpacity 
                        onPress={()=> this.registerClickHandler()}
                        style={{ backgroundColor: 'green', width: '40%'}}>
                        <Text style={{ textAlign: 'center', fontSize: 25, fontWeight:'500', color:'white',margin: 10}}> Register </Text>
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
export default connect()(RegisterPage )