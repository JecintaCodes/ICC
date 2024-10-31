import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img from "../assets/jeccirita.jpg"

const BestSingersOfTheMonth = () => {
 
    const state  = [
        {
          title:"Sopurano (FirstPart)",
          image: {img},
          name:"Ogochukwu Ibekwe"
        },
        {
          title:"Sopurano (FirstPart)",
          image: {img},
          name:"Ogochukwu Ibekwe"
        },
        {
          title:"Alto (SecondPart)",
          image: {img},
          name:"Onwuemene Rita"
        },
       
     
        {
          title:"Teno (ThirdPart)",
          image: {img},
          name:"Basil Francis"
        },
        {
          title:"Bass (FourthPart)",
          image: {img},
          name:"Okorie Micheal"
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
    
          <div className="text-center text-[20px] font-semibold">Our Best Singers Of the Month</div>
            
          <div className=" mt-5 flex items-center justify-center gap-[20px] ">
    {
     state.map((props: any)=>(
      // card
    <div className="w-[210px] min-h-[300px] p-3 overflow-hidden cursor-pointer rounded-[30px] ">
      {/* img */}
    <div className="w-[100%] h-[200px] " >
    <img
    className="w-[100%] h-[100%] object-cover transition-all duration-700 cursor-pointer hover:scale-[1.05] overflow-hidden rounded-[30px] "
    src={img} alt={img} />
    </div>
    {/*end img */}
    <div className="w-[100%] mt-5 ">
    <div className=" text-[15px] font-semibold">{props.title}</div>
    <div className="text-[13px] font-semibold 
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

export default BestSingersOfTheMonth