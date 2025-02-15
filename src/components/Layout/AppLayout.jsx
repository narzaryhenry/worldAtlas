import { Outlet } from "react-router-dom";
import Footers from "../ui/Footers";
import Headers from "../ui/Headers";

const AppLayout = () => {
  return (
    <>
      <Headers />
      <Outlet />
      <Footers />
    </>
  );
};

export default AppLayout;
