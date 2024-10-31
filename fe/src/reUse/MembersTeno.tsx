import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img from "../assets/gabriel.jpg"

const MembersTeno = () => {
    const state  = [
        {
          title:"Part Leader",
          image: {img},
          name:"Obasi Francis"
        },
        {
          title:"Asst Part Leader",
          image: {img},
          name:"Emma Opara"
        },
        {
          title:"Members",
          image: {img},
          name:"Nono Francis"
        },
        {
          title:"Members",
          image: {img},
          name:"Secetary"
        },
        {
          title:"Members",
          image: {img},
          name:"hikajakikjhdl"
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
    
          <div className="text-center text-[20px] font-semibold">Teno (Third part)</div>
            
          <div className=" mt-5 flex justify-center items-center gap-[20px] ">
    
    
    {
     state.map((props: any)=>(
      // card
    <div className="w-[210px] min-h-[300px] p-3 overflow-hidden cursor-pointer rounded-[30px] ">
      {/* img */}
    <div className="w-[100%] h-[200px] " >
    <img
    className="w-[100%] h-[100%] object-cover transition-all duration-700 cursor-pointer hover:scale-[1.05 overflow-hidden  rounded-[30px]   "
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

export default MembersTeno