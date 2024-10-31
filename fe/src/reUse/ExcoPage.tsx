import { useState } from "react"
import img from "../assets/benedicta.jpg"
import DetailLandingPage from "./DetailLandingPage";


const ExcoPage = () => {
  const [toggle, setToggle] = useState<boolean>(false);

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
    {
      title:"Jecinta Ugochi",
      image: {img},
      name:"Special Person"
    },
  ]

  return (
    <div className="w-[100%] mt-[40px] flex justify-center flex-col  flex-wrap   ">

<div className="text-center text-[20px] font-bold">Our Executives the Pillers of the Chior</div>

        <div className=" flex gap-[50px] flex-wrap mt-5 ">
       {
        state.map((props: any)=>(
        //  <Link to={`/detail-landing-page`}>
              <div className="w-[200px] min-h-[300px] flex justify-center flex-col items-center p-3 overflow-hidden cursor-pointer rounded-[30px] ">
             <div className="w-[200px] h-[200px] rounded-[50%] ">
             <img
              className="w-[100%] h-[100%] rounded-[50%] object-cover transition-all duration-700 cursor-pointer hover:scale-[1.05]  overflow-hidden  "
               src={img} alt={img} 
              onClick={()=>{
                setToggle(true)
              }}
               />
             </div>
                <div className="w-[100%] mt-5 ">
              <div className=" text-[15px] font-semibold  ">{props.title}</div>
              <div className="text-[13px] font-bold 
              ">{props.name}</div>
              </div>
              </div>
        
        ))
       }

      {
        toggle && <DetailLandingPage toggle={toggle} setToggle={setToggle}/>
      }
       
        </div>
    </div>
  )
}

export default ExcoPage