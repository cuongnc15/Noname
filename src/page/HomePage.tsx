import Footer from "../component/Footer/Footer";
import Header from "../component/Header/Header";
import Info from "../component/Info/Info";
import React from 'react';
import { Carousel } from 'antd';
import img1 from "../asset/bgr/bg.jpg";
import styles from "./HomePage.module.css";

const contentStyle: React.CSSProperties = {
  height: '560px',
  color: '#fff',
  lineHeight: '560px',
  textAlign: 'center',
  background: '#364d79',
};
function HomePage() {
  return(
    <>
    <Header/>
        <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>
        <img className={styles.img} src={img1} alt="" />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
        <Footer/>
    </>
  );
  
}
export default HomePage;