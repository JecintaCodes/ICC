
const UserResetPassword = () => {
    return (
      <div className="w-[100%] h-[100vh] flex justify-center bg-[dodgerblue] ">
          <div className="w-[90%] flex justify-center items-center  ">
          {/* card */}
            <form className="w-[450px] h-[400px] bg-white p-5 rounded-md mobile:w-[100%] ">
              <center>
                <div className=" text-[15px] font-semibold mobile:w-[100%] mt-[17px] text-[dodgerblue]  ">ResetPassword</div>
                {/* inputHolder */}
              <div className="mt-5 w-[400px] bg-none h-[50px] rounded-[5px] border-[silver] border-[1px] mobile:w-[100%] ">
                <input className="w-[100%] h-[100%] outline-none border-none rounded-[5px] p-2 text-[13px] "
                placeholder="Password"
                type="password"
                />
              </div>
              <div className="mt-5 w-[400px] bg-none h-[50px] rounded-[5px] border-[silver] border-[1px] mobile:w-[100%] ">
                <input className="w-[100%] h-[100%] outline-none border-none rounded-[5px] p-2 text-[13px] "
                placeholder="confirmPassword"
                type="password"
                />
              </div>
               {/* end inputHolder */}
  
              {/* button */}
  
              <div className="mt-5 w-[400px] h-[50px] rounded-[5px] border-[silver] border-[1px] flex justify-center items-center bg-[dodgerblue] text-[white] font-medium mobile:w-[100%] ">
                  <button type="submit">Submit</button>
              </div>
              {/* end button */}
              </center>
  
            </form>
          {/* end card */}
  
          </div>
      </div>
    )
  }
  
  export default UserResetPassword