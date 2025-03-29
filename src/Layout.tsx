import { Outlet } from "react-router-dom";
import Navbar from './components/Navbar';

const Layout = () => {
    return (
        <div className='w-full min-h-screen p-10 pt-0 flex flex-col bg-slate-900'>

            <Navbar />

            <Outlet />
        </div>
    );
};

export default Layout;