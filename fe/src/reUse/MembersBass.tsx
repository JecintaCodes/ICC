import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img from "../assets/gerald.jpg"


const MembersBass = () => {
    const state  = [
        {
          title:"Part Leader",
          image: img,
          name:"Micheal Okonkwo"
        },
        {
          title:"Asst Part Leader",
          image: img,
          name:"Kennedy Kennedy"
        },
        {
          title:"Members",
          image: img,
          name:"Kelvin Kelvin"
        },
        {
          title:"Members",
          image: img,
          name:"Uwakwe Cornel"
        },
        {
          title:"Members",
          image: img,
          name:"Micheal Okorie"
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
    
          <div className="text-center text-[17px] font-semibold">Bass (Forth Part)</div>
            
          <div className=" mt-5 gap-[20px] flex justify-center items-center ">
   
   
  {
     state.map((props: any)=>(
      // card
    <div className="w-[300px] minh-[300px] p-3 border-[1px] border-[dodgerblue] overflow-hidden cursor-pointer rounded-[30px] m-[20px]">
      {/* img */}
    <div className="w-[100%] h-[200px]  rounded-[30px]  " >
    <img
    className="w-[100%] h-[100%] object-cover transition-all duration-700 cursor-pointer hover:scale-[1.05] overflow-hidden   rounded-[30px] "
    src={img} alt={img} />
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

export default MembersBass