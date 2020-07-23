import { createSlice } from '@reduxjs/toolkit'

const authSlice=createSlice({
  name: 'auth',
  initialState: {jwt: localStorage.getItem('jwt'), email: localStorage.getItem('email')},
  reducers:{
    storeJWT(state, action){
      console.log('storing jwt')
      state.jwt=action.payload
      localStorage.setItem('jwt', action.payload)
    },
    clearJWT(state, action){
      console.log('clearing jwt')
      state.jwt=null
      localStorage.setItem('jwt', null)
    },
    storeEmail(state, action){
      state.email=action.payload
      localStorage.setItem('email', action.payload)
    },
    clearEmail(state, action){
      state.email=null
      localStorage.setItem('email', null)
    },
  }
})

export const {storeJWT, clearJWT, storeEmail, clearEmail}=authSlice.actions

export default authSlice.reducer