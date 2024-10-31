import {AiOutlineBook,AiOutlineLogout,AiOutlineArrowRight,AiOutlineArrowLeft} from "react-icons/ai"
import { Link } from "react-router-dom"
import img from "../../assets/jecinta.jpg"
import { useState } from "react";
// import { Aifill, AiOutlineLeft } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { createToggle, returnToggle } from "../../global/GlobalState";

const AdminSider = () => {

  const [toggled, setToggled] = useState<boolean>(false);
  const toggle: any = useSelector((state: any) => state.toggle);

  const onToggle = () => {
    setToggled(!toggled)
  }
  const dispath = useDispatch()


  return (
    <div  className={`${!toggle ? "w-[100px]": "w-[250px]"}
    h-[100vh]
    text-[white]
    border
    flex
    justify-center
    `}>
      
        {/* styling */}
        {/* logo */}
        {/* <div className="fixed" onClick={() => {
        onToggle()
      }}>
        {toggled ? (
          <div>
            <AiOutlineLeft
              size={20}
              onClick={() => {
                  dispath(returnToggle())
            }}
            />
          </div>
        ) : (
          <div>
            <AiOutlineRight
              onClick={() => {
            dispath(createToggle())
              }}
            />
          </div>
        )}
      </div> */}
    <div className="w-[90% fixed">
    <div className="  h-[50px] font-bold text-[18px] text-[white] border-b-[2px] border-b-[white] p-2 flex justify-center items-center gap-[20px] "
        onClick={()=>{
          onToggle();
        }}
        >
          <div className="ml-[15px] ">
            <AiOutlineBook/>
            </div>
          <div>ICC</div>
         {
          toggled ? (
            <div className="ml-[90px] ">
            <AiOutlineArrowLeft
             size={20}
             onClick={() => {
                 dispath(createToggle())
           }}
           />
          </div>
          ) : (
            <div className="text-[black] ml-[10px] ">
            <AiOutlineArrowRight
            size={20}
               onClick={() => {
                dispath(createToggle())
                  }}
            />
          </div>
          )
         }
         
        </div>
        {/*end logo */}
          {/* navs */}
          <div>
            <Link to="/admin">
            <div className="w-[100%] h-[30px] mt-[20px] text-[14px] font-semibold text-[white] flex justify-center items-center hover:cursor-pointer hover:bg-[dodgerblue] rounded-[30px] transition-all duration-700 ">DashBord</div>
            </Link>
            <Link to="/all-users">
            <div className="w-[100%] h-[30px] mt-[20px] text-[14px] font-semibold text-[white] flex justify-center items-center hover:cursor-pointer hover:bg-[dodgerblue] rounded-[30px] transition-all duration-700 ">All Users</div>
            </Link>
            <Link to="/create-about-us">
            <div className="w-[100%] h-[30px] mt-[20px] text-[14px] font-semibold text-[white] flex justify-center items-center hover:cursor-pointer hover:bg-[dodgerblue] rounded-[30px] transition-all duration-700 ">About Us</div>
            </Link>
            <Link to="/admin-gallery">
            <div className="w-[100%] h-[30px] mt-[20px] text-[14px] font-semibold text-[white] flex justify-center items-center hover:cursor-pointer hover:bg-[dodgerblue] rounded-[30px] transition-all duration-700 ">Gallery</div>
            </Link>
            <Link to="/admin-events">
            <div className="w-[100%] h-[30px] mt-[20px] text-[14px] font-semibold text-[white] flex justify-center items-center hover:cursor-pointer hover:bg-[dodgerblue] rounded-[30px] transition-all duration-700 ">Events</div>
            </Link>
            <Link to="/admin-blog">
            <div className="w-[100%] h-[30px] mt-[20px] text-[15px] font-semibold text-[white] flex justify-center items-center hover:cursor-pointer hover:bg-[dodgerblue] rounded-[30px] transition-all duration-700 ">Blog</div>
            </Link>
           
            <div className="w-[100%] gap-[10px] h-[30px] mt-[50px]  font-semibold text-[white] flex justify-center items-center hover:cursor-pointer hover:bg-[dodgerblue] rounded-[30px] transition-all duration-700 ">
              <AiOutlineLogout size={18}
              />
              <div className="text-[13px]">Logout</div>
            </div>
       
          {/*end navs */}
            
            <center className="w-[100%] h-[100px] items-center text-[15px] font-semibold text-[white] mt-[80px] ">
            {/* fixed bottom-5 left-[50px] */}
            <div className="w-[30px] h-[30px] rounded-[50%]  ">
            <img 
            className="w-[100%] h-[100%]  object-cover rounded-[50%] "
            src={img} alt={img} />
           </div>
            <center className="text-[14px] font-semibold w-[100%] mt-1 ">Onyemaobi Jecinta</center>
            <center className="text-[11px] font-medium w-[100%]  ">onyemaobijecintaugochi@gmail.com</center>
           </center>
            </div>
            
    </div>
 
        {/*end styling */}
   </div>
  )
}

export default AdminSider