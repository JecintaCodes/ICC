import {AiOutlineArrowRight} from "react-icons/ai"
import { Link } from "react-router-dom"
import img from "../../assets/victoriaonyinye.jpg" 
import Card from "../../reUse/Card"
import maria from "../../assets/mariadinnso.jpg"

const LandingPage = () => {
  return (
    <div className="w-[100%] h-[100%] flex justify-center ">
        <div className="w-[90%] h-[100%] ">
            {/* styling */}
            {/* firstComponent */}
          
          <div className="w-[100%] flex justify-center items-center ">
          <div className="w-[70%] h-[800px] mobile:h-[1000px] p-2 mobile:w-[100%]  "
           style={{
            backgroundImage:`url(${maria})`,
            backgroundRepeat:"no-repeat",
            backgroundSize:"cover",
            borderRadius:"3px"
           }}
        
           >            {/* right */}
                <center className=" ">
                    <div className="w-[60%] tablet:w-[75%] tablet:text-[20px] mobile:w-[85%] mobile:text-[17px] text-[25px] font-bold mt-[25px] text-[dodgerblue] ">
                        Immaculate Conception Chior (I.c.c) Of Saint Mary's Catholic Church Ajegunle
                    </div>
                    <div className="mt-[20px] text-[15px] mobile:mt-[20px] mobile:text-[14px] font-medium w-[100%] tablet:mt-[20px] tablet:text-[15px] tablet:w-[80%]   ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laboriosam, esse quo earum inventore, nam cupiditate mollitia accusantium et reiciendis debitis vel incidunt, quis atque a magni id quam natus.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum reiciendis consectetur corporis, cupiditate aperiam necessitatibus nemo dolor cumque magni omnis excepturi. Tempora molestias unde maxime accusantium mollitia, atque ratione voluptas!
                    </div>
                    {/* <div className="w-[70%] font-[medium] mt-[20px] text-[15px] mobile:mt-[20px] mobile:w-[100%] ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, nesciunt impedit eius magnam nisi libero! Vero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora labore ducimus dolor, quod obcaecati dolores architecto possimus saepe cumque molestiae.</div> */}
                 
                    <div className="mt-[50px] mobile:mt-[20px] text-[15px] font-medium w-[100%]  ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laboriosam, esse quo earum inventore, nam cupiditate mollitia accusantium et reiciendis debitis vel incidunt, quis atque a magni id quam natus.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum reiciendis consectetur corporis, cupiditate aperiam necessitatibus nemo dolor cumque magni omnis excepturi. Tempora molestias unde maxime accusantium mollitia, atque ratione voluptas!
                    </div>
           
                    <div className="w-[70%] mobile:mt-[0px] mt-[80px] font-[medium] text-[15px] mobile:w-[100%] mobile:hidden ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, nesciunt repudiandae perspiciatis itaque exercitationem illum saepe laboriosam molestias placeat. Placeat porro enim tempore a explicabo ipsam veritatis culpa mollitia obcaecati, facere, ad beatae expedita. Nam eos obcaecati rerum illum dolorem quam fuga optio voluptatem doloremque exercitationem, recusandae molestiae. Numquam eveniet quasi odit alias, dignissimos laudantium consequuntur dolorem quia enim, consectetur assumenda sint voluptatibus. Itaque odio voluptatum fugit expedita exercitationem magnam? Sapiente odio id vero eum incidunt culpa. </div>
               <Link to="/register-page">
               <div className="w-[150px] h-[50px] flex justify-center items-center gap-2 font-bold text-[18px] rounded-[5px] bg-[dodgerblue] mt-[30px] text-[white] transition-all hover:scale-[1.05] duration-700 mobile:mt-[20px]   ">
                    <button>Get Started</button> 
                        <div className="text-[15px] font-bold ">
                    <AiOutlineArrowRight/>
                         </div>          
                     </div>
               </Link>
                </center>
                {/*end right */}
            </div>  
          </div>
                  
            {/*end firstComponent */}
            {/* secondComponents */}
            <div className="w-[100%] mobile:mt-[30px] mt-[70px] h-[400px] flex justify-center items-center ">
                {/* left */}
                <div className="w-[50%] mobile:w-[100%] h-[100%]   ">
                    <div className="w-[90%] h-[100%] ">
                        <img
                        className="w-[100%] h-[100%] object-cover rounded-sm "
                        src={img} alt={img} />
                    </div>
                </div>
                {/*end left */}
                {/* right */}
                <div className="w-[50%] mobile:mt-[15px] mobile:flex  justify-center flex-wrap mobile:w-[100%] h-[100%]  ml-[15px] ">
                    <div className="text-[28px] text-[dodgerblue] font-bold ">About Us</div>
                    <div className="w-[100%] text-[15px] mobile:mt-[15px] font-[medium] mt-[35px] ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem accusamus aliquam laudantium. Non voluptates cumque iste quae exercitationem. Accusamus, ullam harum! Obcaecati sapiente est nostrum sequi, doloremque excepturi similique ab! Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum libero eum iusto dignissimos suscipit facere.</div>
                    <div className="w-[90%] mobile:mt-[16px] mobile:w-[100%] text-[13px] font-[medium] mt-[35px]  ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nostrum nisi rem non laborum impedit, aliquam architecto nemo quasi! Fugiat, odit! Odio cupiditate similique voluptate animi maxime ducimus numquam debitis?</div>
                    <div className="flex mt-[35px] justify-center items-center gap-[20px] ">
                    <Link to="/register-page">
                        <div className="bg-[dodgerblue] w-[120px] h-[40px] rounded-[5px] flex justify-center items-center text-[15px] font-bold text-[white] transition-all hover:scale-[1.05] duration-700  ">
                            <button className="bg-[dodgerblue] ">Know More</button>
                        </div>
                    </Link>
                      <Link to="/register-page">
                        <div className="border-[1px] border-[dodgerblue] w-[120px] h-[40px] rounded-[5px] flex justify-center items-center text-[15px] font-bold text-[white]  ">
                            <button className="text-[dodgerblue] transition-all hover:scale-[1.05] duration-700 ">Get Started</button>
                        </div>
                      </Link>
                    </div>
                </div>
                {/*end right */}
            </div>
            {/*end secondComponents */}
            {/* thirdComponents */}
        <div>
            <Card/>
        </div>
            {/*end thirdComponents */}
                {/* fourthComponents */}
                <div className="w-[100%] rounded-sm h-[450px] mobile:h-[1200px] flex justify-center mobile:flex-col  bg-[#020B32] mt-[50px]  ">
                    <div className="w-[50%] mobile:mt-[20px] mobile:w-[100%] h-[100%] flex items-center ">
                       <div className=" w-[100%] h-[80%] ">
                       <img className="w-[100%] h-[100%] rounded-md object-contain "
                         src={img} alt={img} />
                       </div>
                    </div>
                    {/* right */}
                    <div className="w-[50%] mobile:flex mobile:justify-center mobile:flex-wrap h-[100%] mobile:mt-[0] mobile:w-[100%]">
                        <div className="text-[20px] mt-[20px] mobile:m-[0] font-bold text-[white] ">Lorem, ipsum dolor.?</div>
                        <div className="mt-[30px] text-[white] text-[15px] font-bold mobile:w-[90%] ">
                        <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
                        <div className="w-[90%] text-[white] mt-[10px] text-[12px] font-[medium] ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, dignissimos obcaecati molestiae facere beatae laborum distinctio, laboriosam in, deserunt architecto suscipit modi ut dolores recusandae delectus quidem perspiciatis? Delectus, in.</div>
                        </div>
                        <div className="mt-[30px] mobile:w-[90%] text-[white] text-[15px] font-bold ">
                        <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
                        <div className="w-[90%] text-[white] mt-[10px] text-[12px] font-[medium] ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, dignissimos obcaecati molestiae facere beatae laborum distinctio, laboriosam in, deserunt architecto suscipit modi ut dolores recusandae delectus quidem perspiciatis? Delectus, in.</div>
                        </div>
                        <div className="mt-[30px] text-[white] text-[15px] font-bold mobile:w-[90%] mobile:mt-[15px] ">
                        <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
                        <div className="w-[90%] text-[white] mt-[10px] text-[12px] font-[medium] ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, dignissimos obcaecati molestiae facere beatae laborum distinctio, laboriosam in, deserunt architecto suscipit modi ut dolores recusandae delectus quidem perspiciatis? Delectus, in.</div>
                        </div>
                    </div>
                    {/*end right */}
                </div>
                {/*end fourthComponents */}

                <center className="w-[100%] h-[100%] mt-[50px] flex items-center justify-center flex-col">
                    {/* istComponents */}
                    <div className="flex  justify-center w-[90%] h-[500px] items-center flex-wrap ">
                        <div className="w-[50%] h-[100%] mobile:w-[100%]  ">
                            <div className="text-[18px] font-bold ">See Our Projects</div>
                            <div className="text-[13px] w-[80%] font-[medium] mt-[20px] mobile:w-[100%] ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae necessitatibus dicta libero earum voluptatum, iure itaque at laborum quam vitae voluptates. Amet, atque odit. Omnis eveniet quibusdam maxime pariatur mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ea quos veniam rem dolorem repellat temporibus sint tempore maiores? Fugiat magni nesciunt ullam odio eos facere quos repellendus similique enim?</div>
                           <Link to="/register-page">
                           <div className="w-[130px] mt-[70px] h-[40px] rounded-[5px] text-[16px] font-semibold flex justify-center items-center bg-[dodgerblue] text-[white] transition-all hover:scale-[1.05] duration-700 mobile:mt-[30px] ">
                                <button>Know More</button>
                            </div>
                           </Link>
                            <div className="mt-[20px] text-[16px] w-[30%] font-bold mobile:w-[100%] ">Web Design Project Title goes here</div>
                            <div className="text-[13px] w-[80%] font-[medium] mt-[10px] mobile:w-[100%] ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae necessitatibus dicta libero earum voluptatum, iure itaque at laborum quam vitae voluptates. Amet, atque odit. Omnis eveniet quibusdam maxime pariatur mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ea quos veniam rem dolorem repellat temporibus sint tempore maiores? Fugiat magni nesciunt ullam odio eos facere quos repellendus similique enim?</div>
                        </div>
                        <div className="w-[50%] h-[100%] mobile:h-[350px] mobile:mt-[100px] mobile:w-[100%] flex ">
                                <img className="w-[100%] rounded-sm h-[100%] object-cover "
                                 src={img} alt={img} />                         
                        </div>
                    </div>    
                    {/*end istComponents */}
                    {/* 2ndComponents */}
                    <div className="w-[90%] h-[300px] mt-[30px] flex justify-center flex-wrap mobile:mt-[300px] ">
                        <div className="w-[500px] h-[100%] mobile:w-[50%] mobile:h-[250px] ">
                           <div className="w-[300px] mobile:w-[200px] h-[100%]  ">
                           <img className="w-[100%] h-[100%] rounded-md object-cover "
                            src={img} alt={img} />
                        </div>
                           </div>
                        <div className="w-[500px] h-[100%]  ">
                       <Link to="/register-page">
                       <div className="w-[130px] mt-[20px] h-[40px] rounded-[5px] text-[16px] font-semibold flex justify-center items-center bg-[#020B32] text-[white]  hover:scale-[1.05] duration-700  ">
                                <button>Know More</button>
                            </div>
                       </Link>
                            <div className="mt-[20px] mobile:w-[100%] text-[16px] w-[30%] font-bold">Web Design Project Title goes here</div>
                            <div className="text-[13px] mobile:w-[100%] mobile:m-[10px]  w-[80%] font-[medium] mt-[10px] ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae necessitatibus dicta libero earum voluptatum, iure itaque at laborum quam vitae voluptates. Amet, atque odit. Omnis eveniet quibusdam maxime pariatur mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ea quos veniam rem dolorem repellat temporibus sint tempore maiores? Fugiat magni nesciunt ullam odio eos facere quos repellendus similique enim?</div>
                        </div>
                           </div>
                    {/* 2ndComponents */}
                    {/* thirdComponents */}
                    <div className="w-[100%] h-[300px] mobile:min-h-[300px] mt-[30px] flex justify-center items-center flex-wrap  ">
                    <div className="w-[50%] h-[100%] mobile:flex mobile:justify-center mobile:flex-wrap ">
              <Link to="/register-page">
              <div className="w-[130px] mt-[50px] h-[40px] rounded-[5px] text-[16px] font-semibold flex justify-center items-center flex-wrap bg-[dodgerblue] text-[white]  ">
                                <button>Know More</button>
                            </div>
              </Link>
                            <div className="mt-[30px] text-[16px] w-[30%] font-bold  moblie:w-[100%] ">Web Design Project Title goes here</div>
                            <div className="text-[13px] w-[80%] font-[medium] mt-[30px]  ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae necessitatibus dicta libero earum voluptatum, iure itaque at laborum quam vitae voluptates. Amet, atque odit. Omnis eveniet quibusdam maxime pariatur mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ea quos veniam rem dolorem repellat temporibus sint tempore maiores? Fugiat magni nesciunt ullam odio eos facere quos repellendus similique enim?</div>
                        </div>
                        <div className="w-[50%] h-[100%]  ">
                           <div className="w-[300px] h-[100%] ">
                           <img className="w-[100%] h-[100%] rounded-sm object-cover "
                            src={img} alt={img} />
                        </div>
                           </div>
                    </div>
                    <Link to="/register-page">
                    <div className="w-[130px] mt-[30px] h-[40px] rounded-[5px] text-[16px] font-semibold flex justify-center items-center bg-[#020B32] text-[white] hover:scale-[1.05] duration-700  ">
                                <button>Know More</button>
                            </div>
                    </Link>
                    {/*end thirdComponents */}
                    {/* 4thComponrnts */}
                    <div className="w-[100%] h-[400px] mt-[35px] bg-[dodgerblue] rounded p-2  ">
                        <div className="text-[25px] mt-[10px] font-bold text-[white]  ">Lorem ipsum dolor sit amet.</div>
                        <div className="mt-[30px]  w-[100%] flex justify-center items-center flex-wrap ">
                            <div className="w-[50%] h-[300px]  ">
                                <img className="w-[100%] h-[100%] mr-[-50px] object-contain rounded-md "
                                 src={img} alt={img} />
                            </div>
                            <div className="w-[50%]  ">
                                <div className="ml-[-100px] w-[99%] text-[15px] font-medium text-[white] ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ut dolor sunt corporis, recusandae ipsa officiis! Ad, enim voluptatum tenetur aspernatur provident delectus incidunt hic quaerat tempora. Reprehenderit temporibus architecto nulla libero delectus necessitatibus voluptatum, quia explicabo eveniet quam ratione commodi consequatur repellat laborum molestiae dolores beatae eaque nisi quis Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad fugiat cumque sequi accusamus animi placeat quod error ullam porro, corporis cupiditate autem. Dignissimos unde, consequatur temporibus magni quibusdam repellendus est! Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae odit quo quis sequi laboriosam architecto minima aliquam, sed dolorem porro non libero ratione ducimus accusantium, suscipit nisi dignissimos similique vel.</div>
                            </div>
                        </div>
                    </div>
                    {/*end 4thComponrnts */}
                    {/* 5thComponrnts */}
                    <center className="w-[100%] h-[300px] mt-[40px] flex  ">
                <div className="w-[50%] h-[100%]  ">
                  <div className="w-[70%] text-[20px] font-bold ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, facere!</div>
                  <div className="text-[15px]  font-[medium] mt-[20px] ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, perferendis deleniti? Officiis blanditiis pariatur natus accusantium eos ad, eligendi suscipit dolore dignissimos doloremque quae ut cum non totam repellendus perferendis?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum mollitia exercitationem laboriosam eveniet voluptatem sunt itaque quis fuga accusamus eos repellat atque, voluptate, ab beatae culpa quas quos, corporis ut?</div>
                  <div className="text-[15px] font-[medium] mt-[20px] ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, perferendis deleniti? Officiis blanditiis pariatur natus accusantium eos ad, eligendi suscipit dolore dignissimos doloremque quae ut cum non totam repellendus perferendis?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum mollitia exercitationem laboriosam eveniet voluptatem sunt itaque quis fuga accusamus eos repellat atque, voluptate, ab beatae culpa quas quos, corporis ut?</div>
                </div>
                <div className="w-[50%] h-[100%] ">
                  <div className="w-[100%] h-[100%]  ">
                    <img className="w-[100%] h-[100%] object-cover rounded  "
                     src={img} alt={img} />
                  </div>
                </div>
               </center>
                    {/*end 5thComponrnts */}

                    {/* 6thComponrnts */}
                    {/* <div className="w-[100%] h-[500px] mt-[40px]  ">

                        <center className="text-[20px] font-bold ">Services</center>
                        <center className="text-[13px] font-bold ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quis.</center>
                        <div className="w-[100%] h-[49%] mt-[25px]  flex gap-[15px] ">
                            <div className="w-[30%] h-[100%]  ">
                            <div className="text-[18px] font-bold ">Lorem ipsum dolor sit amet.</div>
                            <div className="text-[15px] font-[medium] ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae rerum suscipit sequi quibusdam a iure ab amet explicabo. Hic distinctio dolorem sint laborum nam, eum deleniti sapiente! Aut, aspernatur iste? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis nihil sint sed consequuntur itaque aliquid, in dolores quisquam perferendis? Sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, similique! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, voluptate? </div>
                            </div>
                            <div className="w-[30%] h-[100%]  ">
                            <div className="text-[18px] font-bold ">Lorem ipsum dolor sit amet.</div>
                            <div className="text-[15px] font-[medium] ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio ipsa assumenda ea eos commodi inventore, cupiditate consequuntur voluptatibus veritatis expedita dolorum aperiam voluptas? Iste porro ullam accusantium consequuntur animi quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aperiam, quasi nisi dolores odit sint harum! Ipsa, autem at ea deserunt praesentium quam rerum, doloremque, dolorem explicabo id laborum harum voluptatibus
                            </div>
                            </div>
                            <div className="w-[30%] h-[100%]  ">
                            <div className="text-[18px] font-bold ">Lorem ipsum dolor sit amet.</div>
                            <div className="text-[15px] font-[medium] ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum earum deleniti voluptatibus error molestias. Iusto, molestias provident sint corporis porro nam doloremque. Accusantium illo tenetur, itaque laboriosam nihil sequi et! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio voluptatum architecto, unde vel praesentium quod doloribus porro delectus iure quidem, veniam quaerat laudantium totam quam. Tempora rem sed eligendi aliquam iusto.</div>
                            </div>

                        </div>
                        <div className="w-[100%] h-[49%] ">
                        <div className="w-[100%] h-[50%] flex gap-[15px] ">
                            <div className="w-[30%] h-[100%]  ">
                            <div className="text-[18px] font-bold ">Lorem ipsum dolor sit amet.</div>
                            <div className="text-[15px] font-[medium] ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque consequatur eligendi quisquam nobis illum quibusdam aut consequuntur soluta, eveniet voluptate, tempora vero inventore! Minus ducimus, praesentium beatae cupiditate provident quae. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, nobis aspernatur fugiat qui culpa </div>
                            </div>
                            <div className="w-[30%] h-[100%]  ">
                            <div className="text-[18px] font-bold ">Lorem ipsum dolor sit amet.</div>
                            <div className="text-[15px] font-[medium] ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque consequatur eligendi quisquam nobis illum quibusdam aut consequuntur soluta, eveniet voluptate, tempora vero inventore! Minus ducimus, praesentium beatae cupiditate provident quae. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, nobis aspernatur fugiat qui culpa architecto, </div>
                            </div>
                            <div className="w-[30%] h-[100%]  ">
                            <div className="text-[18px] font-bold ">Lorem ipsum dolor sit amet.</div>
                            <div className="text-[15px] font-[medium] ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque consequatur eligendi quisquam nobis illum quibusdam aut consequuntur soluta, eveniet voluptate, tempora vero inventore! Minus ducimus, praesentium beatae cupiditate provident quae. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, nobis aspernatur fugiat qui culpa architecto. </div>
                            </div>

                        </div>
                        </div>
                    </div> */}
                    {/*end 6thComponrnts */}
                    {/* 7thComponrnts */}
                    {/* <div className="w-[100%] h-[500px] mt-[40px]  flex justify-center items-center gap-[15px]  ">
                        <div className="w-[300px] h-[400px]  p-1 ">
                            <div className="w-[100%] h-[200px]   ">
                                <img className="w-[100%] h-[100%] rounded-sm object-contain   "
                                src={img} alt={img} />
                            </div>
                            <center className="text-[15px] font-bold mt-[10px] " >Lorem, ipsum dolor.</center>
                                <div className="text-[15px] font-[medium] mt-[10px] ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quisquam officia error, sint illo voluptate suscipit cupiditate nulla maiores, quam tenetur ex non nam, veniam minima obcaecati quis ab pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim exercitationem pariatur veniam ipsum </div>
                        </div>
                        <div className="w-[300px] h-[400px]  p-1 ">
                            <div className="w-[100%] h-[200px]   ">
                                <img className="w-[100%] h-[100%] rounded-sm object-contain   "
                                src={img} alt={img} />
                            </div>
                            <center className="text-[15px] font-bold mt-[10px] " >Lorem, ipsum dolor.</center>
                                <div className="text-[15px] font-[medium] mt-[10px] ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quisquam officia error, sint illo voluptate suscipit cupiditate nulla maiores, quam tenetur ex non nam, veniam minima obcaecati quis ab pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim exercitationem pariatur veniam ipsum </div>
                        </div>
                        <div className="w-[300px] h-[400px]  p-1 ">
                            <div className="w-[100%] h-[200px]   ">
                                <img className="w-[100%] h-[100%] rounded-sm object-contain   "
                                src={img} alt={img} />
                            </div>
                            <center className="text-[15px] font-bold mt-[10px] " >Lorem, ipsum dolor.</center>
                                <div className="text-[15px] font-[medium] mt-[10px] ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quisquam officia error, sint illo voluptate suscipit cupiditate nulla maiores, quam tenetur ex non nam, veniam minima obcaecati quis ab pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim exercitationem pariatur veniam ipsum </div>
                        </div>
                    </div> */}
                    {/*end 7thComponrnts */}
                    </center>
            {/* end styling */}
                </div>
        </div>

   
  )
}

export default LandingPage