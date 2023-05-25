import Footer from "../component/Footer/Footer";
import Header from "../component/Header/Header";
import Info from "../component/Info/Info";
import React from 'react';
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
  height: '460px',
  color: '#fff',
  lineHeight: '460px',
  textAlign: 'center',
  background: '#364d79',
};
function HomePage() {
  return(
    <>
        <Header/>
        <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>1</h3>
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