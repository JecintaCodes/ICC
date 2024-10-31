import pix from "../../assets/victoriaonyinye.jpg"

const GalleryPage = () => {
   
  return (
    <div className="w-[100%] [100%] flex justify-center   ">
        <div className="w-[90%] h-[100%] ">
           
            {/* styling */}
            <div className="w-[100%] flex h-[410px] mt-[30px] ">
                {/* left */}
                <div className="w-[30%] h-[100%] ">
                    <div className="w-[100%] h-[200px] ">
                        <img  src={pix} alt={pix}
                        className="w-[100%] h-[100%] object-cover rounded-sm "
                       
                         />
                    </div>
                    <div className="w-[100%] h-[200px] mt-[10px] ">
                        <img 
                        className="w-[100%] h-[100%] object-cover rounded-sm  "
                        src={pix} alt={pix} />
                    </div>
                </div>
                {/*end left */}
                {/* right */}
                <div className="w-[69%] h-[100%]  ">
                <div className="w-[100%] h-[100%] ml-[15px] ">
                        <img 
                        className="w-[100%] h-[100%] object-cover rounded-sm  "
                        src={pix} alt={pix} />
                    </div>
                </div>
                {/*end right */}
            </div>
            {/* secondComponents */}
            {/* right */}
            <div className="w-[100%] h-[700px] flex mt-[15px]   ">
                <div className="w-[75%] h-[100%] border ">
                <div className="w-[100%] border h-[350px] flex ">
                    <div className="w-[50%] h-[100%]  ">
                        <img 
                        className="w-[100%] h-[100%] object-cover rounded-md "
                        src={pix} alt={pix} />
                    </div>
                    <div className="w-[50%] h-[100%] ml-[15px] ">
                        <img 
                        className="w-[100%] h-[100%] object-cover rounded-md "
                        src={pix} alt={pix} />
                    </div>
                </div>
                <div className="w-[100%] h-[330px] mt-[15px] ">
                <img 
                        className="w-[100%] h-[100%] object-cover rounded-md "
                        src={pix} alt={pix} />
                     </div>
                </div>
                  {/*end right */}
                  {/* left */}
                  <div className="w-[24%] h-[100%] ">
                    <div className="w-[100%] h-[67%] ml-[15px] ">
                    <img 
                        className="w-[100%] h-[100%] object-cover rounded-md "
                        src={pix} alt={pix} />
                    </div>
                    <div className="w-[100%] h-[30%] ml-[15px] mt-[15px] ">
                    <img 
                        className="w-[100%] h-[100%] object-cover rounded-md "
                        src={pix} alt={pix} />
                    </div>
                  </div>
                  {/*end left */}
            </div>
            {/* secondComponents */}
            <div className="w-[100%] h-[500px] flex mt-[15px] ">
                <div className="w-[30%] h-[98%] ">
                    <div className="w-[100%] h-[50%]  ">
                    <img
                    className="w-[100%] h-[100%] object-cover rounded-sm "
                    src={pix} alt={pix} />
                    </div>
                    <div className="w-[100%] h-[50%] mt-2 ">
                    <img
                    className="w-[100%] h-[100%] object-cover rounded-sm "
                    src={pix} alt={pix} />
                    </div>
                </div>
                <div className="w-[70%] h-[100%] ">
                    <div className="ml-3 w-[99%] h-[100%] ">
                        <img 
                        className="w-[100%] h-[100%] object-cover rounded-sm "
                        src={pix} alt={pix} />
                    </div>
                </div>
            </div>
            {/* thirdComponent */}
            <div className="w-[100%] h-[500px] flex mt-[15px]  ">
                <div className="w-[63%] h-[100%] ">
                    <img 
                    className="w-[100%] h-[100%] rounded-sm object-cover "
                     src={pix} alt={pix} />
                </div>
                <div className="w-[20%] h-[100%] ml-[15px] ">
                <img 
                    className="w-[100%] h-[100%] rounded-sm object-cover "
                     src={pix} alt={pix} />
                </div>
                <div className="w-[20%] h-[100%] ml-[15px] ">
                    <div className="w-[100%] h-[49%] ">
                    <img 
                    className="w-[100%] h-[100%] rounded-sm object-cover "
                     src={pix} alt={pix} />
                    </div>
                    <div className="w-[100%] h-[49%] ">
                    <img 
                    className="w-[100%] h-[100%] mt-[15px] rounded-sm object-cover "
                     src={pix} alt={pix} />
                    </div>
                </div>
            </div>
            {/*end thirdComponent */}
            {/* fourthComponents */}
            <div className="w-[100%] h-[500px] flex mt-[15px]">
                <div className="w-[20%] h-[100%] ">
                <img 
                    className="w-[100%] h-[100%] rounded-sm object-cover "
                     src={pix} alt={pix} />
                </div>
                <div className="w-[80%] h-[100%]  ">
                    <div className="flex w-[100%] h-[50%] ">
                    <div className="w-[20%] h-[100%] ml-[15px]  ">
                    <img 
                    className="w-[100%] h-[100%] rounded-sm object-cover "
                     src={pix} alt={pix} />
                    </div>
                    <div className="w-[78%] h-[100%] ml-[15px] ">
                    <img 
                    className="w-[100%] h-[100%] rounded-sm object-cover "
                     src={pix} alt={pix} />
                    </div>
                    </div>
                    <div className="flex w-[100%] h-[47%] mt-[15px] ml-[15px] ">
                    <div className="w-[77%] h-[100%]  ">
                    <img 
                    className="w-[100%] h-[100%] rounded-sm object-cover "
                     src={pix} alt={pix} />
                    </div>
                    <div className="w-[20%] h-[100%]   ">
                    <img 
                    className="ml-[15px] w-[100%] h-[100%] rounded-sm object-cover "
                     src={pix} alt={pix} />
                    </div>
                    </div>
                   
                </div>
            </div>
            {/*end fourthComponents */}
            {/*end styling */}
        </div>
    </div>
  )
}

export default GalleryPage