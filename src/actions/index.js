
export const FETCH_DATA = 'FETCH_DATA'
export const fetchData = (state, action) => {
  return {
    type: FETCH_DATA
  }
}

export const REGISTER_USER = 'REGISTER_USER'
export const registerUser = (dataUser) => {
  console.log(dataUser)
  // return {
  //   type: REGISTER_USER
  // }
}
