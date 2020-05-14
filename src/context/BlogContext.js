import React, { createContext } from "react"

const BlogContext = createContext()

const BlogProvider = ({ children }) => {
  const blogPosts = [
    {
      title: "Blog Post #1"
    },
    {
      title: "Blog Post #2"
    }
  ]

  return (
    <BlogContext.Provider value={blogPosts}>{children}</BlogContext.Provider>
  )
}

export { BlogProvider }
export default BlogContext
