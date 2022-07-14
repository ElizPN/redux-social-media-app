import { configureStore } from '@reduxjs/toolkit'
import postsReducer from '../features/posts/postsSlice' //  postsSlice.reducer

export default configureStore({
  reducer: { posts: postsReducer },
})
