import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More text' },
]
// createSlice genarate reduser function that will handle our post data
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload) // new field
      console.log(action.payload)
    },
  },
})
//When we write the postAdded reducer function,
//createSlice will automatically generate an "action creator" function with the same name.
// So we can export this action creator and use it in our UI components
// to dispatch the action when the user clicks "Save Post".
export const { postAdded } = postsSlice.actions

//then we need to add this reduser function to our store // it will be postReduser in store.js
export default postsSlice.reducer
