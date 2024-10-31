import { Link } from "react-router-dom"
import mary from "../../assets/mary.jpg"

const RegisterPage = () => {
  return (
    <div className="w-[100%] h-[100vh] flex justify-center  ">
 <div className="w-[90%] flex justify-center">
      
 <div className="w-[100%] h-[100%]  tablet:h-[500px] rounded-md flex justify-center items-center ">
    <div className="w-[50%] mobile:w-[100%]  h-[300px] rounded-md  ">
   <center className="">
   <center className="text-[25px] mobile:text-[20px] font-bold text-[dodgerblue] ">Welcome To Immaculate Conception Chior</center>
   <center className="text-[20px] mobile:text-[17px] font-bold text-[dodgerblue] mobile:mt-[10px] tablet:mt-[20px] ">Welcome To Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, nisi.</center>
   </center>
            <div className="mt-[70px] mobile:mt-[15px] tablet:mt-[50px] ">
              <Link to="/register-user">
              <div className="underline text-[dodgerblue] mobile:text-[14px] text-[17px] font-bold hover:cursor-pointer flex justify-center items-center ">
                    Sign up as a User                
                        </div>
              </Link>
               <Link to="/register">
               <div className="text-[17px] mt-[10px] font-bold underline hover:cursor-pointer text-[dodgerblue] mobile:text-[14px]  flex justify-center items-center">Sign up as a Member</div>
               </Link>
               <Link to="/admin-register">
               <div className="text-[17px] mt-[10px] mobile:text-[14px]  font-bold underline hover:cursor-pointer text-[dodgerblue] flex justify-center items-center">Sign up as an Admin</div>

               </Link>
            </div>
    </div>
                <div className="w-[50%] h-[100%] mobile:hidden  ">
                 <div className="w-100%] h-[100%] ">
                 <img className="w-[100%] h-[100%] rounded object-contain  "
                  src={mary} alt={mary} />
                 </div>
                </div>
        </div>
 </div>
    </div>
  )
}

export default RegisterPage