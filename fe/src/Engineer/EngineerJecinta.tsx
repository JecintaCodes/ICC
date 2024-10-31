import jec from "../assets/jec.jpg"
import jecci from "../assets/jecci.jpg"
import jecin from "../assets/jecin.jpg"
import jecinta from "../assets/jecinta.jpg"
import {SiHashnode} from "react-icons/si"
import {AiFillLinkedin,AiOutlineGithub,AiOutlineMail,AiOutlineInstagram} from "react-icons/ai"
import {FcGoogle} from "react-icons/fc"
import {ImFacebook} from "react-icons/im"


const EngineerJecinta = () => {
  return (
    <div className="w-[100%] h-[500px] mt-[100px]  ">

        <div className="flex w-[100%]  ">
            <div className="w-[60%] h-[500px] cursor-pointer ">
                <div className="flex gap-[10px]">
                <div className="w-[350px] h-[250px]  ">
                    <img 
                    className="w-[100%] h-[100%] object-cover rounded-md "
                    src={jecinta} alt={jecinta} />
                </div>
                <div className="w-[400px] h-[250px] ">
                <img 
                    className="w-[100%] h-[100%] object-cover rounded-md"
                    src={jec} alt={jec} />
                </div>
                </div>
              <div className="flex gap-[10px] mt-[10px] ">
              <div className="w-[350px] h-[250px]">
              <img 
                    className="w-[100%] h-[100%] object-cover rounded-md"
                    src={jecci} alt={jecci} />
              </div>
                <div className="w-[400px] h-[250px] ">
                <img 
                    className="w-[100%] h-[100%] object-cover rounded-md "
                    src={jecin} alt={jecin} />
                </div>
              </div>

            </div>
            <div className="w-[40%] h-[500px] p-5">
                <center>
                    <div className="text-[15px] font-bold ">Onyemaobi Jecinta Ugochi</div>
                   <div className="flex justify-center gap-[7px] ">
                   <div className="text-[13px] font-semibold ">Full Stack Software Engineer</div>
                    <div className="text-[13px] font-semibold ">(mainStack)</div>
                   </div>
                   <div className="text-[15px] font-[medium] mt-[20px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti impedit veniam nulla autem at rem unde aliquam dolorum distinctio delectus, facilis eos optio rerum et dicta aspernatur necessitatibus ad maiores asperiores error voluptates repellat fugiat doloremque! Iusto quaerat aliquid totam doloremque corrupti animi tempore ratione sapiente cumque, ut beatae dolorum similique, earum sint deleniti! Deserunt labore culpa magni veniam quod nisi a rerum facere dignissimos quis optio quae, quaerat omnis esse quidem! Libero obcaecati magnam officiis ipsum doloremque, facilis tempore magni eligendi! Perferendis eius facere, sapiente dolore officiis nobis voluptatum doloribus iure, architecto unde est? Repudiandae esse facilis minus. Nesciunt?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, ea qui voluptas voluptate, perferendis rerum iusto dicta, modi eligendi delectus eveniet. Eaque cumque hic eligendi quasi blanditiis saepe sed reprehenderit magni sapiente aliquid? Beatae labore, repellendus sed nesciunt.
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                   </div>
                   <div>
                    <div className="text-[13px] font-semibold ">phoneNo: 09126124352</div>
                    <div className="text-[13px] font-semibold ">you can follow me on these social medias</div>
                    <div className="mt-[15px] gap-[20px] flex justify-center items-center ">
                    <div className="w-[30px] h-[30px] bg-[dodgerblue] rounded-[50%] flex justify-center items-center ">
                        <ImFacebook className="text-[white] text[25px] "/>
                    </div>
                    <div className="flex justify-center items-center ">
                        <FcGoogle className="text[25px] "/>
                    </div>
                    <div className="justify-center items-center ">
                        <AiOutlineInstagram className=" text[25px] "/>
                    </div>
                    <div className="flex justify-center items-center ">
                        <AiOutlineGithub className="text[25px] "/>
                    </div>
                    <div className=" flex justify-center items-center ">
                        <AiOutlineMail className="text-[dodgerblue] text[25px] "/>
                    </div>
                    <div className="flex justify-center items-center ">
                        <AiFillLinkedin className=" text[25px] "/>
                    </div>
                    <div className="flex justify-center items-center ">
                        <SiHashnode className="text-[dodgerblue] text[25px] "/>
                    </div>
                    </div>
                   </div>
                </center>
            </div>
        </div>
    </div>
  )
}

export default EngineerJecinta