import React from 'react'
import { useSelector } from 'react-redux'

export const PostsList = () => {
  // using useSelector we can read data from our store
  // state - is our object that we passed to store
  // state.posts - is what will return postsReducer that we passed as property of posts { posts: postsReducer }
  // postsReducer will return array with all posts
  const posts = useSelector((state) => state.posts)
  console.log(posts)

  const renderedPost = posts.map((post) => (
    <article className='"post-excerpt' key={post.id}>
      <h3>{post.title}</h3>
      <p className='"post-content'>{post.content.substring(0, 100)}</p>
    </article>
  ))

  return (
    <section className="post-list">
      <h2>Posts</h2>
      {renderedPost}
    </section>
  )
}
