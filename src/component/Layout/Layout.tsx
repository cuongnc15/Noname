import { Fragment } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
const Layout = (props: any) => {
  return (
    <Fragment>
      <Header />
      {props.children}
      <Footer />
    </Fragment>
  );
};
export default Layout;
