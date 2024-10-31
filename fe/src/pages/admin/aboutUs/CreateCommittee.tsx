import img from "../../../assets/jeccirita.jpg"
const CreateCommittee = () => {
  return (
    <div className='w-[100%] h-[100%] flex justify-center '>
    <div className="mt-[50px]">
        <div className="font-semibold text-[15px]">Create Committee</div>
        <form className="w-[350px] mt-[5px] min-h-[600px] border p-2 rounded-[3px] ">
        <div className="flex justifuy-center items-center mt-[10px] gap-[10px] ">
                <div className="text-[15px] font-bold ">Title:</div>
                <input className="w-[90%] h-[50px] font-medium text-[13px] border outline-none p-2 "
                 type="text" />
            </div>
            <div className="flex justifuy-center items-center mt-[10px] gap-[10px] ">
                <div className="text-[15px] font-bold ">Name:</div>
                <input className="w-[90%] h-[50px] font-medium text-[13px] border outline-none p-2 "
                 type="text" />
            </div>
           
         <div className=" gap-[10px] mt-[20px] ">
          <div className="text-[15px] font-bold">Description:</div>
          <textarea 
          className="w-[100%] h-[50px] font-medium text-[13px] border outline-none p-2 resize-none "
             name="" id="" />
         </div>

         <div className="">
          {/* <center className="font-semibold text-[15px]">Image</center> */}
          <label className="w-[100%] border ">
            <img 
            className="w-[100%] h-[200px] object-cover rounded-[5px] "
            src={img} alt={img} 
        
            />
          </label>
        <div className="flex justify-center items-center  ">
          <label htmlFor="" hidden className="hidden"
          id="image" />
        <label
          className="w-[80px] h-[35px] bg-[dodgerblue] text-[white] font-bold text-[13px] p-2 rounded-[3px] "
           htmlFor="image"
          >Upload</label>
        </div>
         </div>

       <div className="flex justify-end mt-[10px] ">
       <div className="w-[70px] h-[35px] flex justify-center items-center text-[13px] font-semibold bg-[#020B32] text-[white] rouded-[5px] ">
          <button type="submit">submit</button>
         </div>
       </div>
        </form>
       </div>
</div>
  )
}

export default CreateCommittee