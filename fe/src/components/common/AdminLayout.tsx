import { Outlet } from "react-router-dom";
import AdminSider from "../static/AdminSider";
import { useSelector } from "react-redux";
// import Sider from "../../practice/sider";

const AdminLayout = () => {
  const toggled: any = useSelector((state: any) => state.toggle);
  return (
    <div
      className="
    flex
    w-full
    justify-between
    "
    >
      <div
        className={`${
          !toggled ? "w-[100px]" : "w-[300px]"
        } bg-[#020B32] text-[white]`}
      >
        <AdminSider />
      </div>

      <div className="w-[full] h-[100vh] ">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
