import { Outlet } from "react-router-dom"
import Navbar from "../Navbar/Navbar"

const AppLayout = () => {
  return (
    <div className="">
        <Navbar />
        <div className="h-96">
          <Outlet />
        </div>
    </div>
  )
}

export default AppLayout