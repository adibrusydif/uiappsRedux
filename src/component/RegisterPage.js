import React, { Component} from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native'
import axios from 'axios'
import { connect } from 'react-redux'
import { registerUser } from '../actions'
// import { BASE_API_URL} from '../global/util'


class RegisterPage extends Component {
    state = {
        email:'',
        password:'',
        messageSuccess:'',
        messageError:''
    }
    registerClickHandler(){
        const dataUser ={
            email: this.state.email,
            password:this.state.password
        }
        this.props.dispatch(registerUser(dataUser))     
    }
 


    render() {
        const { isFetching, status } = this.props
        return(
            <View style={{ flex: 1}}>
                {
                    isFetching && (
                        <ActivityIndicator size="large" color='blue' />
                    )
                }
                <Text>{status}</Text>
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
const mapStateToProps = (state) => {
    console.log(state)
    return {
        isFetching: state.user.isFetching,
        status: state.user.status
    }
}
export default connect(mapStateToProps)(RegisterPage)