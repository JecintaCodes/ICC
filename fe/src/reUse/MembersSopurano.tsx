import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img from "../assets/jecin.jpg"
import Jeccirita from "../assets/jeccirita.jpg"


const MembersSopurano = () => {
    const state  = [
        {
          title:"Part Leader",
          image: {img},
          name:"Ogochukwu Okonkwo"
        },
        {
          title:"Asst Part Leader",
          image: {img},
          name:"OgoChukwu Ibekwe"
        },
        {
          title:"Members",
          image: {img},
          name:"Onyemaobi Jecinta"
        },
        {
          title:"Members",
          image: {img},
          name:"Felicia Nwoba"
        },
        {
          title:"Members",
          image: {img},
          name:"Agnes Agor"
        },
     
      ]
    
      const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows:true,
        autoplay:true,
        autoplaySpeed:3000
      };
    
      return (
        <div className="w-[100%] h-[100%] mt-[40px]    ">
    
          <center className="text-center text-[25px] font-bold">Active Members</center>
          <div className="text-center text-[17px] mt-[20px] font-semibold">Sopurano(FirstPart)</div>
            
          <div className=" mt-5 flex justify-center gap-[20px] ">
 
    {
     state.map((props: any)=>(
      // card
    <div className="w-[210px] min-h-[300px] p-3 border-[1px] overflow-hidden cursor-pointer rounded-[30px] ">
      {/* img */}
    <div className="w-[100%] h-[200px] " >
    <img
    className="w-[100%] h-[100%] object-cover transition-all duration-700 cursor-pointer hover:scale-[1.05] overflow-hidden  rounded-[30px]   "
    src={Jeccirita} alt={img} />
    </div>
    {/*end img */}
    <div className="w-[100%] mt-5 ">
    <div className=" text-[15px] font-semibold">{props.title}</div>
    <div className="text-[13px] font-bold 
    ">{props.name}</div>
    </div>
    </div>
      // end card
     ))
    }  
     </div>
        </div>
  )
}

export default MembersSopurano