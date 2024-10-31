import LandingHeader from "../landing/LandingHeader"
import LandingFooter from "../landing/LandingFooter"
import { Outlet } from "react-router-dom"
const LandingLayout = () => {
  return (
    <div>
        <LandingHeader/>
        <Outlet/>
        <LandingFooter/>
    </div>
  )
}

export default LandingLayout