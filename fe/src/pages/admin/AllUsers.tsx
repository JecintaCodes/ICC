import img from "../../assets/jecinta.jpg"
const AllUsers = () => {
  return (
    <div className="w-[100%] h-[100vh] flex justify-center ">
        <div className="w-[90%] ">
          {/* styleing */}
          <div className="mt-[50px] flex gap-[20px] flex-wrap ">
           <div className="w-[320px] p-2 h-[150px] ">
      <div className="flex gap-[10px] justify-center items-center ">
      <div className="w-[70px] h-[70px] border rounded-[50%] ">
              <img
              className="w-[100%] rounded-[50%] object-cover h-[100%] hover:cursor-pointer hover:scale-[1.05] transition-all duration-700 "
               src={img} alt={img} />
            </div>          
          <div className="">
          <div className="text-[15px] font-bold ">Onyemaobi Jecinta Ugochi</div>
          </div>
      </div>
      <center className="">
        <div className="w-[70px] h-[35px] p-2 flex justify-center items-center bg-[red] text-[white] font-bold text-[13px] rounded-[5px] hover:cursor-pointer hover:scale-[1.05] transition-all duration-700 ">
        <button>Delete</button>

        </div>
   </center>
           </div>
          </div>
          {/*end styleing */}
        </div>
    </div>
  )
}

export default AllUsers