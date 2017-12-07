import axios from 'axios'
import { BASE_API_URL } from '../global/util'

export const FETCH_DATA = 'FETCH_DATA'
export const fetchData = (state, action) => {
  return {
    type: FETCH_DATA
  }
}

export const REGISTER_USER = 'REGISTER_USER'
export const registerUser = (dataUser) => {
  console.log(dataUser)
  return {
    type: REGISTER_USER,
    payload: registerHander(dataUser)
  }
}

const registerHander = (dataUser) => {
  const { email, password } = dataUser
  console.log(email, password)
  if (email !== '' && password !== '') {
    const dataPayloads = {
      "email": email,
      "password": password
    } 
    const url =`${BASE_API_URL}/Users`
    return axios.post(url, dataPayloads)
                  .then(res => {
                    return res
                  })
                  .catch(err => {
                    console.log(err)
                  })
    }   
}
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
