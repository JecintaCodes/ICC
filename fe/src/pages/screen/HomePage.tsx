import back from "../../assets/background.jpg"
import pix from "../../assets/victoriaonyinye.jpg"
import SmallCard from "../../reUse/SmallCard"


const HomePage = () => {
  return (
    <div
    className="w-[100%] h-[100%] flex justify-center  "
    style={{
      backgroundImage: `url(${back})`,
      backgroundRepeat: "no-repeat",
      objectFit: "cover",
      backgroundColor: "red",
      backgroundSize:"cover",
      width:"100%",
      height:"100%"
    }}
  >
    <div className="w-[90%]">
        {/* smallcard */}
        <center>
            <div className="w-[50%] mobile:h-[200px] mobile:w-[100%] border h-[300px] mt-[-60px] mobile:mt-[-10px] flex "
              style={{
                backgroundImage: `url(${back})`,
                // backgroundRepeat: "no-repeat",
                objectFit: "cover",
                backgroundSize:"cover",
                borderRadius:"30px"
              }}
            >
                <div className="w-[50%] text-white ">
                    <div className="text-[15px] mobile:w-[100%] mobile:text-[13px] font-[medium] mobile:mt-2 m-5 ">The Immaculate Conception Choir, St Mary's Catholic Church, Ajegunle, Apapa,Lagos, Nigeria. Is A Group Of Talented Men And Women Bound Together As A Family And For Love Of Liturgical Music.</div>

                    <div className="text-[18px] mobile:mt-[15px] font-semibold hidden tablet:flex ">Welcome</div>

                    <div className="text-[15px] mobile:text-[12px] mobile:w-[100%] font-[medium] mobile:mt-1 tablet:flex hidden m-5">As You Go Through The Activities Of One Of The Best Chior In The Catholic Archdiocese Of Lagos.  </div>
                </div>
                <div className="w-[50%] flex justify-center">
                    <div className="w-[250px] mobile:[100%] mobile:h-[100%] h-[300px] rounded-[30px] ">
                        <img
                        className="object-cover w-[100%] h-[100%] rounded-[30px]  "
                         src={pix} alt={pix} />
                    </div>

                </div>

            </div>
        </center>
        {/*end smallcard */}

        <div className="text-[20px] font-semibold text-[white] mt-[20px]  ">Our Value</div>
                {/* another small card */}
        <div className="mobile:w-[100%]">
              <SmallCard/>
        </div>
               {/*end another small card */}
               <div className="mt-[50px] flex gap-[30px] mobile:flex-col ">
                <div className="text-[15px] font-bold text-white ">Gallery</div>

                        <div className="w-[600px] h-[400px] flex mobile:w-[100%] mobile:h-[300px] ">

                            <div className="w-[200px] h-[100%] ">
                                <div className="w-[100%] rounded-md  ">
                                        <img  className="w-[100%] h-[100%] object-cover "
                                        src={pix} alt={pix} />
                                </div>
                                <div className="w-[100%] rounded-md h-[200px] ">
                                        <img  className="w-[100%] h-[100%] object-cover "
                                        src={pix} alt={pix} />
                                </div>
                            </div>

                            <div className="w-[200px] h-[100%]  ">
                            <div className="w-[100%] rounded-md h-[100%] ">
                                        <img  className="w-[100%] h-[100%] object-cover mobile:h-[100%] "
                                        src={pix} alt={pix} />
                                </div>
                            </div>
                            <div className="w-[200px] h-[100%] ">
                                <div className="w-[100%] rounded-md h-[200px]  ">
                                        <img  className="w-[100%] h-[100%] object-cover "
                                        src={pix} alt={pix} />
                                </div>
                                <div className="w-[100%] rounded-sm h-[200px] ">
                                        <img  className="w-[100%] h-[100%] object-cover "
                                        src={pix} alt={pix} />
                                </div>
                            </div>
                        </div>
               </div>

               <div className="mt-[50px] mobile:mt-[90px] ">
                <div className="text-white text-[30px] font-bold ">ICC Academy</div>
                <div className="w-[18%] mobile:w-[100%] text-[14px] font-medium text-[white] mt-[15px] ">This is a musical Academy where the following are carried out</div>
                <ul className="mt-[10px] text-[white] mobile:flex mobile:gap-[20px] ">
                  <li className="text-[14px] font-medium text-[white] ">Music Master Class</li>
                  <li className="text-[14px] font-medium text-[white]  ">Instrument class</li>

                  <li className="text-[14px] font-medium text-[white]  ">Dancing class</li>
                </ul>
               </div>

               <center className="text-[20px] mobile:mt-[0px] mt-[70px] text-[white] font-bold ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</center>
                <center className="text-[15px] text-[white] font-[medium] ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis velit dolorum omnis voluptatibus eos deleniti, dolores obcaecati reiciendis ipsa quis provident.</center>
             <div className="w-[100%] h-[500px] mt-[30px]  text-[white] flex justify-center items-center gap-[15px] ">
              <div className="w-[50%] h-[100%] ">
                <div className="w-[100%] h-[70%]  ">
                  <img className="w-[100%] h-[100%] rounded object-cover "
                  src={pix} alt={pix} />
                </div>
                  <center className="text-[18px] font-bold mt-[10px] ">Lorem ipsum dolor sit amet.
                  </center>
                  <center className="text-[15px] font-[semibold] mt-[10px] ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero rem aperiam fuga possimus itaque illum, nobis alias quis nisi cumque distinctio eligendi vel provident dolorum. Et, molestiae! Dolores, voluptas officiis? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, odit natus officiis delectus quod voluptate voluptatum quae sint, quis amet voluptates pariatur placeat.
                  </center>
              </div>
              <div className="w-[50%] h-[100%] ">

                <div className="w-[100%] h-[30%] flex justify-center items-center  ">

                  <div className="w-[50%] h-[100%] mt-[20px]">
                    <img  className="w-[100%] h-[100%] object-cover rounded "
                    src={pix} alt={pix} />
                  </div>
                  <div className="w-[100%] h-[100%] ">
                    <div className=" text-[18px] mt-[30px] ml-[15px] font-bold ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit deleniti hic porro  </div>
                  </div>
                </div>
                <div className="w-[100%] h-[30%] mt-[20px] flex justify-center items-center  ">

                  <div className="w-[50%] mt-[15px] h-[100%]">
                    <img  className="w-[100%] h-[100%] object-cover rounded "
                    src={pix} alt={pix} />
                  </div>
                  <div className="w-[100%] h-[100%] ">
                    <div className=" text-[18px] mt-[30px] ml-[20px] font-bold ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit deleniti hic porro  </div>
                  </div>
                </div>
                <div className="w-[100%] mt-[20px] h-[30%] flex justify-center items-center  ">

                  <div className="w-[50%] h-[100%]">
                    <img  className="w-[100%] h-[100%] object-cover rounded "
                    src={pix} alt={pix} />
                  </div>
                  <div className="w-[100%] h-[100%] ">
                    <div className=" text-[18px] mt-[30px] ml-[15px] font-bold ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit deleniti hic porro  </div>
                  </div>
                </div>
              </div>
             </div>

             <div className="w-[100%] h-[650px]  mt-[70px] text-[white] flex justify-center items-center ">
              <div className="w-[50%] h-[100%] ">
                <div className="w-[80%] h-[50%] ">
                  <img className="w-[100%] h-[100%] object-cover rounded "
                   src={pix} alt={pix} />
                </div>
                <div className="w-[100%] h-[47%] flex gap-[15px] mt-[15px] ">
                  <div className="w-[50%] h-[100%] ">
                  <img className="w-[100%] h-[100%] object-cover rounded "
                   src={pix} alt={pix} />
                </div>
                  <div className="w-[50%] h-[100%] ">
                  <img className="w-[100%] h-[100%] object-conver rounded "
                   src={pix} alt={pix} />
                </div>
                  </div>
              </div>
              <div className="w-[50%] h-[100%]  ">
                <div className="text-[15px] font-[medium] ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                <div className="w-[90%] text-[20px] font-bold mt-[20px] ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dolorum et tenetur. Maxime, assumenda debitis.</div>
               
                <div className="text-[15px]  w-[90%] ml-[15px] font-[medium] mt-[160px] ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nam delectus asperiores sunt? Doloribus nihil explicabo pariatur dolorum? Hic voluptate aliquam corrupti laboriosam nisi quo perferendis at vitae nihil libero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio deserunt, tempore eius accusantium aliquam excepturi, magnam cupiditate itaque necessitatibus distinctio dolorum ab atque blanditiis fugit, amet animi pariatur accusamus voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt doloremque cumque omnis? Porro ipsa deleniti nihil optio dolore, autem dignissimos, quam quis repellat consectetur totam vitae ut molestias, eligendi possimus? </div>
                <div className="text-[15px] w-[90%] ml-[15px] font-[medium] mt-[30px] ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nam delectus asperiores sunt? Doloribus nihil explicabo pariatur dolorum? Hic voluptate aliquam corrupti laboriosam nisi quo perferendis at vitae nihil libero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio deserunt, tempore eius accusantium aliquam excepturi, magnam cupiditate itaque necessitatibus distinctio dolorum ab atque blanditiis fugit, amet animi pariatur accusamus voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt doloremque cumque omnis? Lorem ipsum dolor sit amet, consectetur adipisicing.</div>
              </div>
             </div>
               
              <div className="w-[100%] h-[500px] mt-[70px] text-[white] flex justify-center items-center ">
                <div className="w-[50%] h-[100%]  ">
                  <div className="text-[15px] text-[white] font-[medium] ">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
                  <div className="text-[20px] text-[white] font-bold ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
                  <div className="text-[15px] mt-[30px] text-[white] font-[medium] ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus officia voluptatibus veritatis exercitationem quidem ipsam voluptatum veniam, laboriosam ab sunt nobis esse, placeat repudiandae incidunt earum quo perferendis numquam provident. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere necessitatibus ipsam similique voluptatum animi est saepe fugit quidem, tempora nemo laborum debitis quam vel voluptate maxime nam itaque at maiores. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure repellat amet pariatur ut dicta libero minima quidem! Impedit odit dolore</div>

                  <div className="text-[15px] mt-[30px] text-[white] font-[medium] ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus officia voluptatibus veritatis exercitationem quidem ipsam voluptatum veniam, laboriosam ab sunt nobis esse, placeat repudiandae incidunt earum quo perferendis numquam provident. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere necessitatibus ipsam similique voluptatum animi est saepe fugit quidem, tempora nemo laborum debitis quam vel voluptate maxime nam itaque at maiores. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure repellat amet pariatur ut dicta libero minima quidem! Impedit odit dolore quae neque saepe aut praesentium, magni natus, illum temporibus nihil! Lorem.</div>
                </div>

                <div className="w-[50%] h-[100%] relative  ">
                  <div className="w-[80%] h-[100%] ml-[100px] ">
                    <img className="w-[100%] h-[100%] rounded-md object-cover "
                    src={pix} alt={pix} />
                  </div>
                  <div className="w-[50%] h-[65%] ml-[100px] absolute top-[200px] right-[250px] ">
                    <img className="w-[100%] h-[100%] rounded-md object-cover "
                    src={pix} alt={pix} />
                  </div>
                </div>
              </div>

    </div>

    </div>
  )
}

export default HomePage