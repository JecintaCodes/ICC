import { useState } from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { createToggle, returnToggle } from "../global/GlobalState";
const sider = () => {
  const [toggled, setToggled] = useState<boolean>(false);
  const toggle: any = useSelector((state: any) => state.toggle);

  const onToggle = () => {
    setToggled(!toggled)
  }
  const dispath = useDispatch()
  return (
    <div
      className={`${!toggle ? "w-[100px]": "w-[250px]"}
      h-[100vh]
      text-[white]
      border
      `}
    >
      <div className="fixed" onClick={() => {
        onToggle()
      }}>
        {toggled ? (
          <div>
            <AiOutlineLeft
              size={20}
              onClick={() => {
                  dispath(returnToggle())
            }}
            />
          </div>
        ) : (
          <div>
            <AiOutlineRight
              onClick={() => {
            dispath(createToggle())
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default sider;
