
import Nav from "../NabBar/Nav";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";





const MainLayout = () => {
    return (
        <div>
             
              <Nav></Nav>
            
            <Outlet></Outlet>
            <Footer></Footer>

              
        </div>
    );
};

export default MainLayout;