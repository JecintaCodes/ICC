import img from "../../assets/victoriaonyinye.jpg"

interface iProps{
  setToggle: any
}
const EventDetailPageImage:React.FC<iProps> = ({setToggle}) => {
  return (
    <div className="fixed right-0 top-0 bg-transparent h-full w-full flex justify-center items-center z-[2]  "
    style={{
      background:"rgba( 255, 255, 255, 0.25 ) ",
      boxShadow:"0 8px 32px 0 rgba( 31, 38, 135, 0.37 ) ",
      backdropFilter:"blur( 4px )",
      borderRadius:"10px",
      border:"1px solid rgba( 255, 255, 255, 0.18 ); ",
      WebkitBackdropFilter:" blur( 4px )"
    }}
    >

<div className="w-full h-full absolute z-[5] top-0 left-0 hover:cursor-pointer " 
      onClick={()=>
     {
      setToggle(false);
     }
    }/>

      <div className="w-[100%] h-[100vh] flex justify-center  ">
    <div className="w-[90%] flex justify-center items-center ">
{/* card */}
<div className="flex justify-center border-[2px] border-[#020B32] items-center mt-[20px] w-[100%] z-50 h-[85vh] p-2 ">
        <div className="w-[50%] h-[500px] border overflow-hidden rounded-[7px]  ">
            <img className="w-[100%] h-[100%] overflow-hidden rounded-[7px] object-cover "
             src={img} alt={img}  />
        </div>
    
        <div className="w-[50%] h-[500px] p-3">
            <div className="text-[20px] ml-[15px] font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, praesentium quasi incidunt dolorum consectetur nostrum.</div>
            <div className="text-[13x] ml-[15px] font-medium w-[100%] ">Lorem ipsum dolor orem doloremque voluptatem fugit. In labore praesentium iste cum harum est rerum, doloribus debitis dignissimos mollitia quia obcaecati quibusdam cumque magnam alias illum repudiandae unde quaerat laboriosam illo qui neque officiis. Voluptatibus fugiat officiis in pedit quia qui dolorum deserunt laudantium quo incidunt quos inventore repellendus quas laborum sapiente nisi sed, quod saepe velit. Nemo similique quaerat tempore aperiam perferendis explicabo dignissimos porro distinctio velit voluptatum! Iste possimus praesentium voluptate  quas inventore, quisquam dolore asperiores illo commodi enim at accusamus, laboriosam harum culpa deserunt quae vitae? Eaque odio est exercitationem dicta voluptatem,  mollitia beatae consequuntur neque distinctio. consectetur laboriosam cum corporis, sequi accusantium molestias, non excepturi tenetur voluptatibus nisi libero numquam sapiente tempora amet deleniti. Autem, debitis repellat. Laborum incidunt sed debitis accusantium nisi sunt, </div>
            <div className=" flex justify-evenly mt-[10px] items-center ">
                <div className="text-[15px] font-bold">15 oct 2023 </div>
            <div className="text-[15px] font-semibold">2 days ago</div>

            </div>
        </div>
</div>
{/*end card */}
    </div>
</div>
  </div>
  )
}

export default EventDetailPageImage