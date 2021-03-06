import React from 'react'
import { useSelector } from 'react-redux'

export const PostsList = () => {
  const posts = useSelector((state) => state.posts)
  console.log(posts) // when we add post

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
