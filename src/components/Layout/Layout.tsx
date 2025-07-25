import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

export default function Layout(){
    return (
        <div className="pt-16 pb-16">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}