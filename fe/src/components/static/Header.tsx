import { Link } from "react-router-dom";
import img from "../../assets/background.jpg";
import marys from "../../assets/mothermary.jpg"
import {AiOutlineMenu,AiOutlineMenuUnfold} from "react-icons/ai"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createToggle, returnToggle } from "../../global/GlobalState";

const Header = () => {
  const dispatch = useDispatch();
  const [toggle,setToggle] = useState<boolean>(false)

  const onToggle = ()=>{
    setToggle(toggle)
  }

  return (
    <div
      className="w-[100%] h-[100%] flex justify-center  "
      style={{
        backgroundImage: `url(${img})`,
        backgroundRepeat: "no-repeat",
        objectFit: "cover",
        backgroundColor: "red",
        backgroundSize:"cover",
        width:"100%",
        height:"100%"
      }}
    >
      <div className="w-[95%] h-[100%]">

{/* navsheader */}
      <div className="mt-[15px] flex justify-between items-center mobile:flex-wrap ">

      <div className="text-[20px] text-white font-bold ">
            ICC
        </div>
      <div className="text-[20px] text-white font-bold  ">
            ICC
        </div>
      <div className="flex gap-[10px]">
      <div className=" w-[350px] h-[35px] rounded-[30px] mobile:w-[100%] ">
            <input 
            className="w-[100%] h-[100%] outline-none rounded-[30px] text-[12px] p-2 font-semibold "
            placeholder="Search"
            type="search" />
        </div>
        <div className="w-[100px] h-[35px] p-1 bg-[white] flex justify-center items-center rounded-[30px]  text-[15px] font-semibold hover:duration-700 hover:scale-[1.05] text-[dodgerblue] ">
            <button type="button">Submit</button>
        </div>
      </div>
      </div>
      {/*end navsheader */}
         <div className="flex justify-center mt-[30px] ">
            <div className="w-[80%] h-[600px] bg-[white] mobile:h-[400px] rounded-[30px] p-5 flex mobile:w-[100%] ">
                <div className="w-[50%] flex justify-center items-center">
                    <div className="h-[550px] mobile:h-[100%] mobile:mt-[20px] mt-[50px] ">
                    <img 
                    className="h-[100%] mobile:object-contain "
                     src={marys} alt={marys} />
                    </div>
                </div>
                     {/* navs */}
                <div className="w-[50%]  "
                // onClick={()=>{
                //   onToggle();
                // }}
                >
                {/* <div className="hover:text-[black] hover:cursor-pointer duration-700 flex justify-end font-bold " >
                {
                  toggle ? (
                    <AiOutlineMenu
                    size={25}
                    onClick={()=>{
                      dispatch(createToggle());
                    }}
                    className="tablet:hidden "
                    />
                  ) : (
                    <AiOutlineMenuUnfold
                    size={25}
                    onClick={()=>{
                      dispatch(returnToggle())
                    }}
                    className="tablet:hidden "
                    />
                  )
                }
                
                </div> */}
            <div className=" flex justify-between mobile:flex-wrap text-[dodgerblue] font-semibold mobile:text-[10px] mr-[-50] mobile:font-bold ">
             
                <Link to="/">
                <div className="hover:text-[white] hover:bg-[rgb(30,144,255)] hover:cursor-pointer duration-700 " >Home</div>
                </Link>
               <Link to="/about-us">
               <div className="hover:text-[white] hover:bg-[dodgerblue] hover:cursor-pointer duration-700  " >About Us</div>
               </Link>
              <Link to="/blog">
              <div className="hover:text-[white] hover:bg-[dodgerblue] hover:cursor-pointer duration-700  " >Blog</div>
              </Link>
                <Link to="/community">
                <div className="hover:text-[white] hover:bg-[dodgerblue] hover:cursor-pointer duration-700  " >Community</div>
                </Link>
              <Link to="/gallery">
              <div className="hover:text-[white] hover:bg-[dodgerblue] hover:cursor-pointer duration-700  " >Gallery</div>
              </Link>
              <Link to="/event">
              <div className="hover:text-[white] hover:bg-[dodgerblue] hover:cursor-pointer duration-700  " >Events</div>
              </Link>
            </div> 
         {/*end navs */}
         {/* writeup */}
         <div className="mt-[130px] mobile:mt-[15px]  ">
            <div className=" w-[55%] w-[90%] text-[30px] mobile:text-[17px] font-medium text-[dodgerblue] leading-1 ">God respects us
                    when we work
                    but he loves us when
                    we sing.</div>

                <div  className="mt-[30px] mobile:mt-[10px] ">
                <div className="text-[dodgerblue] mobile:text-[14px] font-[medium] text-[17px] ">Singing is a miracle.</div>
                    </div>  
              <div  className="text-[dodgerblue] font-[medium] mobile:text-[12px] text-[15px] mobile:w-[100%] ">
                                    singing on earth is an accomplishment we can take to heaven.it has been called the most complex coordinative act that human beingis ever called upon to perform.
                                 </div>
                                 <div className="w-[100px] mobile:text-[12px] mobile:w-[80px] mobile:h-[35px] mobile:mt-[8px] mt-[15px] h-[35px] p-1 bg-[dodgerblue] flex justify-center items-center rounded-[3px]  text-[15px] font-[semibold] hover:duration-700 hover:scale-[1.05] text-[white] ">
            <button type="button">Know More</button>
        </div>

                     </div>
         {/*end writeup */}
                </div>
            </div>

         </div>
        

      </div>
    </div>
  );
};

export default Header;
