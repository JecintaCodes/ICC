
const DashBoard = () => {
  return (
    <div className="w-[100%] h-[100%] flex justify-center ">
            <div className="w-[90%] ">
                {/* styling */}
          <div className="flex flex-wrap mt-[50px] gap-[30px] ">
                {/* users */}
        
          <div className="w-[300px]  h-[200px] flex justify-center flex-col items-center rounded bg-[dodgerblue] ">
                    <center className="text-[30px] font-bold  text-[white] ">0</center>
                    <center className="text-[18px] font-bold text-[white] ">Users</center>
                </div>
              
         
          <div className="w-[300px]  h-[200px] flex justify-center flex-col items-center rounded bg-[dodgerblue] ">
                    <center className="text-[30px] font-bold  text-[white] ">0</center>
                    <center className="text-[18px] font-bold text-[white] ">Members</center>
                </div>
        
                {/*end users */}
                {/* AboutUs */}
     
      <div className="w-[300px] h-[200px] flex justify-center flex-col items-center rounded bg-[#020B32] ">
                    <center className="text-[18px] font-bold  text-[white] ">Create</center>
                    <center className="text-[16px] font-bold  text-[white] ">AboutUs</center>
                </div>
    
                {/*end AboutUs */}
                {/* gallery */}
          <div className="w-[300px] ] h-[200px] flex justify-center flex-col items-center rounded bg-[dodgerblue] ">
                    <center className="text-[18px] font-bold  text-[white] ">create</center>
                    <center className="text-[16px] font-bold text-[white] ">Gallery</center>
                </div>
                {/*end gallery */}
                {/* events */}
          <div className="w-[300px]  h-[200px] flex justify-center flex-col items-center rounded bg-[dodgerblue] ">
                    <center className="text-[18px] font-bold  text-[white] ">create</center>
                    <center className="text-[16px] font-bold text-[white] ">Events</center>
                </div>
                {/*end events */}
                {/* blogs */}
          <div className="w-[300px]  h-[200px] flex justify-center flex-col items-center rounded bg-[dodgerblue] ">
                    <center className="text-[18px] font-bold  text-[white] ">Create</center>
                    <center className="text-[16px] font-bold text-[white] ">Blog</center>
                </div>
                {/*end blogs */}
                {/* users */}
       
                {/*end users */}


          </div>
                {/*end styling */}
            </div>
    </div>
  )
}

export default DashBoard