import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More text' },
]
// createSlice genarate reduser function that will handle our post data
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
})

//then we need to add this reduser function to our store // it will be postReduser in store.js
export default postsSlice.reducer
