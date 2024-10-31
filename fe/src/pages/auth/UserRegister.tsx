import {Link} from "react-router-dom"
import {ImFacebook} from "react-icons/im"
import {FcGoogle} from "react-icons/fc"

const UserRegister = () => {
  return (
    <div className="w-[100%] h-[100vh] flex justify-center bg-[dodgerblue] ">
    <div className="w-[90%] flex justify-center items-center  ">
    {/* card */}
      <form className="min-w-[400px] min-h-[300px] bg-white p-5 rounded-md ">
        <center>
          <div className=" text-[17px] font-semibold mt-[15px]  ">SignUp</div>
       
        <div className="mt-2 w-[400px] bg-none h-[50px] rounded-[5px] border-[silver] border-[1px] ">
          <input className="w-[100%] h-[100%] outline-none border-none rounded-[5px] p-2 text-[13px] "
          placeholder="Name"
          />
        </div>
        <div className="mt-2 w-[400px] bg-none h-[50px] rounded-[5px] border-[silver] border-[1px] ">
          <input className="w-[100%] h-[100%] outline-none border-none rounded-[5px] p-2 text-[13px] "
          placeholder="Email"
          />
        </div>
        <div className="mt-2 w-[400px] bg-none h-[50px] rounded-[5px] border-[silver] border-[1px] ">
          <input className="w-[100%] h-[100%] outline-none border-none rounded-[5px] p-2 text-[13px] "
          placeholder="Password"
          type="password"
          />
        </div>
        <div className="mt-2 w-[400px] bg-none h-[50px] rounded-[5px] border-[silver] border-[1px] ">
          <input className="w-[100%] h-[100%] outline-none border-none rounded-[5px] p-2  text-[13px]"
          placeholder="ConfirmPassword"
          type="password"
          />
        </div>

        {/* button */}

        <div className="mt-2 w-[400px] h-[50px] rounded-[5px] border-[silver] border-[1px] flex justify-center items-center bg-[dodgerblue] text-[white] font-medium ">
            <button type="submit">SignUp</button>
        </div>

        <div className="mt-2 w-[400px] h-[50px] rounded-[5px] flex justify-center items-center font-medium gap-[10px] ">
        <div className="text-[13px]  ">Already have an account?</div>
        <Link to="/sign-in-user">
        <div className="text-[13px] text-[dodgerblue]  ">Login</div>
        </Link>
        </div>
        {/* end button */}

        <div  className=" w-[400px] h-[30px] rounded-[5px] flex items-center font-medium gap-[10px]">
          <div className="w-[45%] border-t-[1px] border-t-[silver]  "></div>
          <div className="w-[10%] text-[15px] font-medium ">Or</div>
          <div className="w-[45%] border-t-[1px] border-t-[silver] "></div>
        </div>

        {/* icons */}
        <div className=" mt-2 w-[400px] rounded-[5px] flex items-center gap-[50px] font-medium bg-[dodgerblue] h-[50px] p-5 ">
          <div className="rounded-[50%] h-[30px] w-[30px] bg-[white] flex justify-center items-center ">
            <ImFacebook className="text-[20px] font-bold text-[dodgerblue] "/>
          </div>
          <div className=" text-[15px] font-semibold text-[white] ">Sign with Facebook</div>
        </div>

        <div className=" mt-2 w-[400px] rounded-[5px] flex items-center gap-[50px] font-medium  h-[50px] p-5 border-[silver] border-[1px] ">
          <div className=" bg-[white] flex justify-center items-center ">
            <FcGoogle className="text-[20px] font-bold "/>
          </div>
          <div className=" text-[15px] font-semibold text-[dodgerblue] ">Sign with Google</div>
        </div>
        {/* end icons */}
        </center>

      </form>
    {/* end card */}

    </div>
</div>
  )
}

export default UserRegister