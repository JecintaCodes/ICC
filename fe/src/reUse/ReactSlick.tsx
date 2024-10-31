import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img from "../assets/mary5.jpeg"


const ReactSlick = () => {

  const state  = [
    {
      title:"Chior Master",
      image: {img},
      name:"Uwakwe Cornel"
    },
    {
      title:"Asst ChiorMiss1",
      image: {img},
      name:"Agor Agness"
    },
    {
      title:"Asst ChiorMiss2",
      image: {img},
      name:"Kelvin Kelvin"
    },
    {
      title:"Uwakwe Onyinyechukwu",
      image: {img},
      name:"Secetary"
    },
    {
      title:"Felicia Nwoba",
      image: {img},
      name:"Assistant Secetary"
    },
    {
      title:"Ogochukwu Ibekwe",
      image: {img},
      name:"Treasure "
    },
    {
      title:"Okeke Ogochukwu",
      image: {img},
      name:"Secetary "
    },
    {
      title:"Amadi Chidi ",
      image: {img},
      name:" Provost "
    },
    {
      title:"Abalu Franka",
      image: {img},
      name:"Assistant Provost "
    },
    {
      title:"Opara Emma",
      image: {img},
      name:"Pro "
    },
    {
      title:"Basil Francis",
      image: {img},
      name:"Liberian "
    },
    {
      title:"Onwuemene Rita",
      image: {img},
      name:"Assistant Liberian"
    },
    {
      title:"Jecinta Ugochi",
      image: {img},
      name:"Special Person"
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

      <div className="text-center text-[20px] font-semibold">Our Executives the Pillers of the Chior</div>
        
      <div className=" mt-5 gap-[20px] ">
<Slider {...settings}
>
{
 state.map((props: any)=>(
  // card
<div className="w-[210px] min-h-[300px] p-3 border-[1px] border-[dodgerblue] overflow-hidden cursor-pointer rounded-[30px] ">
  {/* img */}
<div className="w-[100%] h-[200px] " >
<img
className="w-[100%] h-[100%] object-cover transition-all duration-700 cursor-pointer hover:scale-[1.05] rounded-[7px] overflow-hidden  "
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
</Slider>
 </div>
    </div>
  )
}

export default ReactSlick