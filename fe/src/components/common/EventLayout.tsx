import { Outlet } from "react-router-dom"
import EventHeader from "../static/EventHeader"
import Footer from "../static/Footer"

const EventLayout = () => {
  return (
    <div>
        <EventHeader/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default EventLayout