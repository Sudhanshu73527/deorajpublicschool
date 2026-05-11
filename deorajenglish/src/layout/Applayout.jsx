import { Outlet } from "react-router-dom";
import Navbar from "../Componets/Navbar/Navbar";
import Footer from "../Componets/Footer/Footer";

const AppLayout = () => {
  return (
    <>
    <Navbar/>
      <Outlet />
      <Footer/>
     
         </>
  );
};

export default AppLayout;
