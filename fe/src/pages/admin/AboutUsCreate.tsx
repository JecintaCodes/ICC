import CreateBestSingers from "./aboutUs/CreateBestSingers"
import CreateCommittee from "./aboutUs/CreateCommittee"
import CreateExecutives from "./aboutUs/CreateExecutives"
import CreateValues from "./aboutUs/CreateValues"
import FeastDay from "./aboutUs/FeastDay"
import ICCDescription from "./aboutUs/ICCDescription"
import OldMembersAndFriends from "./aboutUs/OldMembersAndFriends"
import OurPriests from "./aboutUs/OurPriests"
import PatronAndMatons from "./aboutUs/PatronAndMatons"
import PatronSaints from "./aboutUs/PatronSaints"
import Programmes from "./aboutUs/Programmes"

const AboutUsCreate = () => {
  return (
    <div className="w-[100%] h-[100%] flex justify-center gap-[70px] flex-wrap ">
            {/* icc */}
          <div className="">
            <ICCDescription/>
          </div>
          <div className="">
            <OldMembersAndFriends/>
          </div>
          <div className="">
            <PatronSaints/>
          </div>
          <div className="">
            <PatronAndMatons/>
          </div>
          <div className="">
            <CreateValues/>
          </div>
          <div className="">
            <OurPriests/>
          </div>
          <div className="">
            <Programmes/>
          </div>
          <div className="">
            <CreateBestSingers/>
          </div>
          <div className="">
            <CreateCommittee/>
          </div>
          <div className="">
            <CreateExecutives/>
          </div>
          <div className="">
            <FeastDay/>
          </div>
            {/*end icc */}
    

    </div>
  )
}

export default AboutUsCreate