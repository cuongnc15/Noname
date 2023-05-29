
import { useSelector } from "react-redux";
import Footer from "../component/Footer/Footer";
import Header from "../component/Header/Header";
import Register from "../register/Register";
import RegisterDone from "../register/RegisterDone";

function RegisterPage() {
  const isRegistered = useSelector((state: any) => state.auth.isRegistered);
  return(
    <>
        <Header/>
        {isRegistered && <RegisterDone />}
      {!isRegistered && <Register/>}
        
        <Footer/>
    </>
  );
  
}
export default RegisterPage;