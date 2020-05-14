import React, { useState, createContext } from "react"

const BlogContext = createContext()

const BlogProvider = ({ children }) => {
  const [blogPosts, setblogPosts] = useState([])

  const addBlogPost = () => {
    setblogPosts([
      ...blogPosts,
      { title: `Blog Post #${blogPosts.length + 1}` }
    ])
  }

  return (
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  )
}

export { BlogProvider }
export default BlogContext
