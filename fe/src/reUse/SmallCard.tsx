
const SmallCard = () => {

    const state = [
        {
            name:"DISCIPLINE",
            title:"    Often its simply a matter of being in the moment, being present and engaged with what you are doing at that paticule point in time."
        },
        {
            name:"DISCIPLINE",
            title:"    Often its simply a matter of being in the moment, being present and engaged with what you are doing at that paticule point in time."
        },
        {
            name:"COMMITMENT",
            title:"   Often its simply a matter of being in the moment, being present and engaged with what you are doing at that paticule point in time."
        },
        {
            name:"COMMITMENT",
            title:"   Often its simply a matter of being in the moment, being present and engaged with what you are doing at that paticule point in time."
        },
        {
            name:"MUSICAL INDEPENDENT",
            title:"   Often its simply a matter of being in the moment, being present and engaged with what you are doing at that paticule point in time."
        },
        {
            name:"HIGH TEAM SPIRIT",
            title:"   Often its simply a matter of being in the moment, being present and engaged with what you are doing at that paticule point in time."
        },
        {
            name:"RESPONSIBLITY",
            title:"   Often its simply a matter of being in the moment, being present and engaged with what you are doing at that paticule point in time."
        },
        {
            name:"RESPONSIBLITY",
            title:"   Often its simply a matter of being in the moment, being present and engaged with what you are doing at that paticule point in time."
        },
        {
            name:"SELF-AWARENESS",
            title:"   Often its simply a matter of being in the moment, being present and engaged with what you are doing at that paticule point in time."
        },
    ]

  return (
    <div className="w-[100%] ">
        <center className="mt-[40px] ">
            {/* small card */}
          <div className=" flex justify-center flex-wrap gap-[20px]">
          {
            state?.map((props: any)=>(
                <div className="w-[330px] h-[130px] bg-white rounded-[20px] p-3 ">
                <div className="text-[18px] font-semibold  ">{props.name}</div>
                <div className="mt-[10px] text-[15px] font-[semibold]  ">
                    {props.title}
                    </div>
            </div>
            ))
           }
          </div>
            {/*end small card */}
        </center>
    </div>
  )
}

export default SmallCard