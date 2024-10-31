import {Link} from "react-router-dom"
import logo from "../../assets/logo.jpg"
import { AiOutlineMenu } from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux";
import { createToggle, returnToggle } from "../../global/GlobalState";
import { useState } from "react";

 
const LandingHeader = () => {
    const [toggled, setToggled] = useState<boolean>(false);
    const toggle: any = useSelector((state: any) => state.toggle);
  
    const onToggle = () => {
      setToggled(!toggled)
    }
    const dispatch = useDispatch()
  
  return (
    <div className="w-[100%] h-[100px] flex justify-center  ">
        <div className="w-[90%] flex justify-between items-center   ">
            {/* styling */}
                {/* logo */}
               <div className="font-bold w-[100px] text-[30px] h-[70px] flex items-center justify-center" >
                  <div className=""
                  onClick={()=>{
                    onToggle()
                  }}
                  >
                  {
                    toggled ? (
                        <div className="hidden mobile:flex relative">
                       <AiOutlineMenu
                       onClick={()=>{
                        dispatch(returnToggle());
                       }}
                       />
                   </div>
                    ) : (
                        <div className="w-[75px]  h-[100px] rounded bg-[#020B32] text-[white] p-2 absolute "
                        onClick={()=>{
                            dispatch(createToggle());
                        }}
                        >
                        <center className="text-[13px] font-semibold hover:cursor-pointer hover:underline ">Home</center>
                        <center className="text-[13px] font-semibold hover:cursor-pointer hover:underline  ">Excos</center>
                        <center className="text-[13px] font-semibold hover:cursor-pointer hover:underline ">Members</center>
                        <center className="text-[13px] font-semibold hover:cursor-pointer hover:underline ">Committee</center>
                       </div>
                    )
                  }
               
                  </div>
                    <img className="object-cover h-[80%] w-[100%] rounded-sm "
                    src={logo} alt={logo} />
                </div>
               
                    <div className="flex gap-[10px] mobile:hidden">
                    <div className="text-[15px] font-bold  " >
                    Home
                </div>
                <div className="text-[15px] font-bold  " >
                    Members
                </div>
                <div className="text-[15px] font-bold  " >
                    Committee
                </div>
                <div className="text-[15px] font-bold  " >
                    Excos
                </div>
                    </div>

                {/* buttonHolder */}

                <div className=" flex gap-[10px]">
                  <Link  to="/register-page">
                  <div className="p-3 w-[100px] h-[50px] rounded-[10px] bg-white text-[dodgerblue] font-semibold hover:cursor-pointer flex justify-center items-center hover:scale-[1.05] duration-700 mobile:hidden">
                        <button  className=""
                        type="button">Register</button>
                    </div>
                  </Link>
                <Link to="/register-page">
                <div className="p-3 w-[80px] h-[50px] bg-[dodgerblue] text-[white] font-semibold hover:cursor-pointer hover:scale-[1.05] duration-700 rounded-[7px]  flex justify-center items-center    ">
                        <button  className=""
                        type="button">SignIn</button>
                    </div>
                </Link>
                </div>
                {/* buttonHolder */}
                
                {/* end logo */}
            {/*end styling */}
        </div>
    </div>
  )
}

export default LandingHeader