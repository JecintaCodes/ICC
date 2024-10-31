import { Link } from "react-router-dom"

const BlogHeader = () => {
  return (
    <div className="w-[100%] h-[70px] flex justify-center ">
    <div className="w-[90%] flex justify-between items-center  ">
        <Link to="/">
        <div className="text-[20px] text-[dodgerblue] font-bold  ">Logo</div>
        </Link>
        <Link to="/blog">
        <div className="text-[20px] text-[dodgerblue] font-bold">Our Blog</div>
        </Link>
     <div className="flex gap-[20px] text-[dodgerblue] font-bold ">
        
        <Link to="/">
        <div>Home</div>
        </Link>
        <Link to="/about-us">
        <div>About</div>
        </Link>
        <Link to="/community">
        <div>Community</div>
        </Link>
        <Link to="/gallery">
        <div>Gallery</div>
        </Link>
        <Link to="/event">
        <div>Event</div>
        </Link>
        
     </div>
    </div>
    </div>
  )
}

export default BlogHeader