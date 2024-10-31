import { Outlet } from "react-router-dom"
import AboutUsHeader from "../static/AboutUsHeader"
import Footer from "../static/Footer"

const AboutUsLayout = () => {
  return (
    <div>
        <AboutUsHeader/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default AboutUsLayout