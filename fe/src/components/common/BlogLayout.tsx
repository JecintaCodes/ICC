import { Outlet } from "react-router-dom"
import BlogHeader from "../static/BlogHeader"
import Footer from "../static/Footer"

const BlogLayout = () => {
  return (
    <div>
        <BlogHeader/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default BlogLayout