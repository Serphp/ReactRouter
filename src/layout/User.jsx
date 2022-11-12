import { Outlet } from "react-router-dom";
//import Footer from "../components/footer";
import Navbar from "../components/Navbar";

const User = () => {
    return (
        <main className="amp-dark-mode amp-mode-mouse container">
            <Navbar />
            
            <Outlet />

            {/* FOOTER */}
            <button class="contrast">
            <a href="https://github.com/Serphp/ReactRouter"><kbd> <img src="src\icons\cat.png" width={30} /> Github</kbd></a>
            </button>
            
        </main>
    );
};
export default User;
