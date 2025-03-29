import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

function LayoutWrapper() {
    return (
        <div className='font-(family-name:--font-nunito)'>
            <Navbar />
            <Outlet />
        </div>
    );
}

export default LayoutWrapper;