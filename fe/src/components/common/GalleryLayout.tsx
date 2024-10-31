import { Outlet } from "react-router-dom"
import GalleryHeader from "../static/GalleryHeader."
import Footer from "../static/Footer"

const GalleryLayout = () => {
  return (
    <div>
        <GalleryHeader/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default GalleryLayout