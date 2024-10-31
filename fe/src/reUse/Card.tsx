import img from "../assets/victoriaonyinye.jpg"
const Card = () => {

        const state = [
            {
                title:"Rehearsal Days",
                description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, quam. Blanditiis, doloremque in! Itaque qui hic placeat illo enim ab? Cum natus totam voluptates sed vero quia a ipsa explicabo",
                
            },
            {
                title:"General meetings",
                description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, quam. Blanditiis, doloremque in! Itaque qui hic placeat illo enim ab? Cum natus totam voluptates sed vero quia a ipsa explicabo",
                
            },
            {
                title:"Music Class",
                description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta maiores fugit magnam, exercitationem in ab provident eius, eveniet voluptas temporibus dolore autem nam consequuntur, aliquid incidunt et ea voluptatum quisquam!",
               
            },
            {
                title:"Carol Outings",
                description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus repellendus, qui, laborum ab consequuntur labore tempore reiciendis numquam excepturi possimus obcaecati ",
                
            },
          
        ]

  return (
    <div className="w-[100%] mt-[50px] ">
       <center className="">
       <div className="w-[50%] text-[20px] font-bold mobile:w-[100%] mobile:mt-[500px]  ">Our Programms in Immaculate Conception Chior </div>
       <div className="w-[45%] mobile:w-[100%] mt-[20px] text-[15px] font-[medium] ">General Meetings, music Class Birthday celberation carol outings Rehearsal day's</div>

       {/* card */}
       <div className="mt-[30px] flex justify-center flex-wrap gap-[30px] ">
       {
        state?.map((props: any)=>(
            <div className="w-[200px] h-[300px] bg-[dodgerblue] rounded-[10px] p-3 ">
            <div className="w-[60px] h-[60px] rounded-[50%] mt-[5px] mr-[70%] ">
                <img className="w-[100%] h-[100%] rounded-[50%] object-cover "
                src={img} alt={img} />
            </div>
            <div className="text-[18px] mt-[5px] font-bold text-white ">{props.title}</div>
            <div className="w-[100%] mt-[5px] text-[15px] text-white font-[medium] ">{props.description}  </div>
        </div>
        ))
        
       }
         <div className="w-[250px] h-[300px] bg-[#020B32] rounded-[10px] p-3 ">
            <div className="w-[60px] h-[60px] rounded-[50%] mt-[5px] mr-[70%] ">
                <img className="w-[100%] h-[100%] rounded-[50%] object-cover "
                src={img} alt={img} />
            </div>
            <div className="text-[18px] mt-[5px] font-bold text-white ">Carol Outings</div>
            <div className="w-[100%] mt-[5px] text-[15px] text-white font-[medium] ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus repellendus, qui, laborum ab consequuntur labore tempore reiciendis numquam excepturi possimus obcaecati ",
                  </div>
        </div>
       </div>
       {/*end card */}
       </center>
    </div>
  )
}

export default Card