import { useState } from "react"
import img from "../assets/gera.jpg"
import DetailCommitteePage from "./DetailCommitteePage"

const Committee = () => {

  const [toggle, setToogle] = useState<boolean>(false)
    const state  = [
        {
          title:"Carol Committee",
          image: {img},
          name:"Gerald Uchechukwu"
        },
        {
          title:"Discipline Committee",
          image: {img},
          name:"Okeke Ogochukwu"
        },
        {
          title:"Cultural Committee",
          image: {img},
          name:"Onyemaobi Jecinta"
        },
        {
          title:"Excos",
          image: {img},
          name:"Uwakwe Cornel"
        },
        {
          title:"Chior Master",
          image: {img},
          name:"Ibekwe Ogochukwu"
        },
        {
          title:"Chior Master",
          image: {img},
          name:"Ibekwe Ogochukwu"
        },
        {
          title:"Chior Master",
          image: {img},
          name:"Ibekwe Ogochukwu"
        },
        {
          title:"Chior Master",
          image: {img},
          name:"Ibekwe Ogochukwu"
        },
        {
          title:"Chior Master",
          image: {img},
          name:"Ibekwe Ogochukwu"
        },
        {
          title:"Chior Master",
          image: {img},
          name:"Ibekwe Ogochukwu"
        },
      
     
      ]
    
      return (
        <div className="w-[100%] mt-[40px] flex justify-center flex-col  flex-wrap   ">
    
          <div className="text-center text-[20px] font-bold">Our Committee</div>
    
            <div className=" flex gap-[50px] flex-wrap mt-5 ">
           {
            state.map((props: any)=>(
             
              <div className="w-[200px] min-h-[300px] flex justify-center flex-col items-center p-3 overflow-hidden cursor-pointer rounded-[30px] ">
             <div className="w-[200px] h-[200px] rounded-[50%] "
             
             >
             <img
              className="w-[100%] h-[100%] rounded-[50%] object-cover transition-all duration-700 cursor-pointer hover:scale-[1.05]  overflow-hidden  "
               src={img} alt={img} 
               onClick={()=>(
                setToogle(true)
               )}
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
            toggle && <DetailCommitteePage toggle={toggle} setToggle={setToogle}/>
           }
           
            </div>
        </div>
      )
}

export default Committee