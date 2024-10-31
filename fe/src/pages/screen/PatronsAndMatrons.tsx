import img from "../../assets/victoriaonyinye.jpg"

const PatronsAndMatrons = () => {
    const state = [
        {
            name:"H.Ibekwe Ogochukwu",
            title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam culpa odit nisi placeat cumque odio rem quo, veritatis at voluptates veniam aut aliquam illum impedit eius. Qui aliquid unde aut."

        },
        {
            name:"L.Rita Onwuemene",
            title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam culpa odit nisi placeat cumque odio rem quo, veritatis at voluptates veniam aut aliquam illum impedit eius. Qui aliquid unde aut."

        },
        {
            name:"C. Okeke Ogochukwu",
            title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam culpa odit nisi placeat cumque odio rem quo, veritatis at voluptates veniam aut aliquam illum impedit eius. Qui aliquid unde aut."

        },
        {
            name:"C. Uwakwe Cornel",
            title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam culpa odit nisi placeat cumque odio rem quo, veritatis at voluptates veniam aut aliquam illum impedit eius. Qui aliquid unde aut."

        },
        {
            name:"L.C. Ibekwe Ogochukwu",
            title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam culpa odit nisi placeat cumque odio rem quo, veritatis at voluptates veniam aut aliquam illum impedit eius. Qui aliquid unde aut."

        },
        {
            name:"L.G Ibekwe Ogochukwu",
            title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam culpa odit nisi placeat cumque odio rem quo, veritatis at voluptates veniam aut aliquam illum impedit eius. Qui aliquid unde aut."

        },
        {
            name:"P.Ibekwe Ogochukwu",
            title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam culpa odit nisi placeat cumque odio rem quo, veritatis at voluptates veniam aut aliquam illum impedit eius. Qui aliquid unde aut."

        },
        {
            name:"V.P. Ibekwe Ogochukwu",
            title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam culpa odit nisi placeat cumque odio rem quo, veritatis at voluptates veniam aut aliquam illum impedit eius. Qui aliquid unde aut."

        },
    ]

  return (
    <div className="w-[100%] min-h-[500px] mt-[40px] ">
        <center className="text-[25px] font-bold ">Our Patrons and Matrons</center>
        <div className="flex justify-center mt-[20px] flex-wrap gap-2">
            {/* card */}
            {
                state?.map((props: any)=>(
                    <div className=" w-[250px]  h-[350px] flex items-center flex-col justify-center  ">
                <div className="w-[200px] h-[200px] rounded-[50%] ">
                    <img 
                    className="w-[100%] h-[100%] rounded-[50%] "
                    src={img} alt={img} />
                </div>
                <div className="text-[15px] font-bold mt-[10px] ">{props.name}</div>
                <center className="text-[15px] font-[medium] mt-[10px] ">{props.title}</center>
            </div>
                ))
            }
            {/*end card */}
        </div>
    </div>
  )
}

export default PatronsAndMatrons