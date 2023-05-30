import Footer from "../component/Footer/Footer";
import Header from "../component/Header/Header";
import Info from "../component/Info/Info";
import React from 'react';
import { Carousel } from 'antd';
import img1 from "../asset/bgr/bg.jpg";
import img2 from "../asset/bgr/chụp ảnh lookbook.jpg";
import img3 from "../asset/bgr/pngtree-4-women-in-colorful-is-a-fashion-photo-picture-image_2668957.jpg";
import img4 from "../asset/bgr/Chup-quan-ao-treo-tuong.jpg";
import styles from "./HomePage.module.css";
import Products from "../component/product/Products";

const contentStyle: React.CSSProperties = {
  height: '100vh',
  color: '#fff',
  lineHeight: '560px',
  textAlign: 'center',
  background: '#364d79',
};
function HomePage() {
  return(
    <>
    <Header/>
        <Carousel className={styles.img2} autoplay>
    <div>
      <h3 style={contentStyle}>
        <img className={styles.img} src={img1} alt="" />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
      <img className={styles.img} src={img2} alt="" />
      </h3>
    </div>
    <div>
      
      <h3 style={contentStyle}>
      <img className={styles.img} src={img3} alt="" />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
      <img className={styles.img} src={img4} alt="" />

      </h3>
    </div>
  </Carousel>
  <Products/>
        <Footer/>
    </>
  );
  
}
export default HomePage;