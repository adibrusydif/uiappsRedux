import { combineReducers } from 'redux'
import { PENDING, FULFILLED, REJECTED } from 'redux-promise-middleware'
import { 
  FETCH_DATA, REGISTER_USER
} from '../actions/index'



export const data = (state = {
  items: '',
}, action) => {
  switch (action.type){
    case `${FETCH_DATA}`: 
      return {
        ...state,
        items: 'This is data from redux'
      }

    default: 
      return state
  }
}
export const user = (state = {
  isFetching: false,
  status: ''
}, action) => {
  switch (action.type) {
    case `${REGISTER_USER}_PENDING`:
      return {
        ...state,
        isFetching: true
      }
    case `${REGISTER_USER}_FULFILLED`: 
      return {
        ...state,
        isFetching: false,
        status: action.payload.status === 200 ? ('Success Register') : ('Register Failed')
      }   
    case `${REGISTER_USER}_REJECTED`:
      return { 
        ...state,
        isFetching: false
      }

    default: 
      return state
  }
}

const rootReducer = combineReducers({
  data,
  user
})

export default rootReducer
