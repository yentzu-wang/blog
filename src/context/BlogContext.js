import React, { createContext } from "react"

const BlogContext = createContext()

const BlogProvider = ({ children }) => {
  return <BlogContext.Provider value={5}>{children}</BlogContext.Provider>
}

export { BlogProvider }
export default BlogContext
