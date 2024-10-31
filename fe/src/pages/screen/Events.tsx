import { Link } from "react-router-dom"
import pix from "../../assets/victoriaonyinye.jpg"
import video from "../../assets/video (2160p).mp4"
import { useState } from "react"
import EventDetailPageImage from "./EventDetailPageImage"

const Events = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <div className="w-[100%] h-[100%] flex justify-center  "
    >
      <div className="w-[90%] mt-[20px] ">
        {/* card */}
       <div className="flex justify-center flex-wrap gap-[20px]">
       {/* <Link to="/event-detail-image"> */}
       <div className="w-[260px] min-h-[400px] rounded-md text-[black]  ">
        <div className="w-[100%] h-[60%] rounded-md overflow-hidden  hover:cursor-pointer  ">
          <img className="w-[100%] h-[100%] object-cover rounded-md hover:scale-[1.05] hover:cursor-pointer transition-all duration-700 overflow-hidden "
           src={pix} alt={pix} 
           onClick={()=>{
               setToggle(true)
           }}
           />
        </div>
        <div className="text-[18px] mt-[10px] text-center font-serif  w-[90%]  ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </div>
        <center className="text-[15px] font-[medium] mt-[10px] ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste ipsum nostrum est voluptas...</center>
        <div>
          <div className="text-[12px] ml-[15px] font-semibold  ">15 oct 2023</div>
        </div>
        </div>
       {/* </Link> */}
      
       </div>
        {/*end card */}

        {/* video */}
          {/* card */}
       <div className="flex justify-center text-[black] flex-wrap gap-[20px] mt-[20px] ">
        <Link to="/event-detail-video">
        <div className="w-[270px] h-[400px] rounded-md  ">
        <div className="w-[100%] h-[60%] rounded-md overflow-hidden  hover:cursor-pointer  ">
          <video className="w-[100%] h-[100%] object-cover rounded-md hover:scale-[1.05] hover:cursor-pointer transition-all duration-700 overflow-hidden "
           src={video} 
           autoPlay
           muted
           />
        </div>
        <div className="text-[18px] mt-[10px] text-center font-serif  w-[90%]  ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </div>
        <center className="text-[15px] font-[medium] mt-[10px] ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste ipsum nostrum est voluptas...</center>
        <div>
        <div className="text-[12px] ml-[15px] font-semibold  ">15 oct 2023</div>
        </div>
        </div>
        </Link>
      
       </div>
        {/*end video */}

        {
          toggle && <EventDetailPageImage toggle={toggle} setToggle={setToggle} />
        }
        
      </div>

    </div>
  )
}

export default Events