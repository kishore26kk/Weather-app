import { Outlet } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer";

const AppLayout = () => {
  return (
    <div className="">
        <Navbar />
        <div className="">
          <Outlet />
        </div>
        <div className="mt-20">
          <Footer />
        </div>
    </div>
  ) 
} 
   
export default AppLayout 