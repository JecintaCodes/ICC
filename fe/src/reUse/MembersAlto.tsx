import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img from "../assets/Fotos Em Prayers C14.jpeg"
import imgs from "../assets/rita.jpg"
import pix from "../assets/ngozi.jpg"
import helen from "../assets/helen.jpg"


const MembersAlto = () => {
    const state  = [
        {
          title:" Part Leader",
          image: {helen},
          name:"Ihuchukwu Helen"
        },
        {
          title:"Asst Part Leader",
          image: {imgs},
          name:"Onwuemene Rita"
        },
        {
          title:"Members",
          image: {img},
          name:"Onyinyechukwu Uwakwe"
        },
        {
          title:"Members",
          image: {img},
          name:"Onuorha Esther"
        },
        {
          title:"Members",
          image: {img},
          name:"Juliet Kosisochukwu"
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
        <div className="w-[100%] h-[100%] mt-[40px]  ">
    
          <div className="text-center text-[17px] font-semibold">Alto(Second Part)</div>
            
          <div className=" mt-5 flex justify-center items-center gap-3 ">
    {
     state?.map((props: any)=>(
      // card
    <div className="w-[210px] h-[300px] p-3 overflow-hidden cursor-pointer rounded-[30px] ">
      {/* img */}
    <div className="w-[100%] h-[200px] rounded-[30px]  " >
    <img
    className="w-[100%] h-[100%] object-cover transition-all duration-700 cursor-pointer hover:scale-[1.05] overflow-hidden rounded-[30px]   "
    src={imgs} alt={imgs} />
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

export default MembersAlto