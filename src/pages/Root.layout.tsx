import Navbar from "@/components/shared/Navbar.component";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <Navbar />
      <main>
        text
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
