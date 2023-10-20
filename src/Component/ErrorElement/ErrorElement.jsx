import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

import Error from "../../assets/brandIMG/404.gif"
const ErrorElement = () => {
    return (
        <div>
            <Navbar></Navbar>
            {/* <h1 className="text-center">from error element</h1> */}
            <div className="flex justify-center items-center">
                 <img src={Error} alt="" />
            </div>
           
            <Footer></Footer>
        </div>
    );
};

export default ErrorElement;