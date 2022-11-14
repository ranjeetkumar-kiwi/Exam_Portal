import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { json } from 'react-router-dom'
const initialState = {
  msg: '',
  user: '',
  token: '',
  loading: false,
  error: ''
}

export const signUpUser = createAsyncThunk('signUpUser', async (body) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
  return await res.json()
})

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [signUpUser.pending]: (state, action) => {
      state.loading = true
    },
    [signUpUser.fulfilled]: (state, { payload: { error, msg } }) => {
      state.loading = false
      if (error) {
        state.error = error
      } else {
        state.msg = msg
      }
    },
    [signUpUser.rejected]: (state, action) => {
      state.loading = true
    }
  }
})

export default authSlice.reducer
