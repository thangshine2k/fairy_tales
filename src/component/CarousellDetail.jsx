import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { PrevArrow, NextArrow, NextArrowDetail } from './NextArrow/NextArrowDetail';
import ProductService from './js/ProductService';

function CarousellDetail() {
  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };
  
  const handleNext = () => {
    sliderRef.current.slickNext();
  };
  const [settings, setSettings] = useState({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    centerPadding: '0px',
    currentSlide: 0, // Add currentSlide property to state
    prevArrow: <PrevArrow onClick={handlePrev} />,
    nextArrow: <NextArrowDetail onClick={handleNext} />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      // {
      //   breakpoint: 1200,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 2,
      //   }
      // }
    ]
  });
  const [settings2, setSettings2] = useState({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    centerPadding: '0px',
    currentSlide: 0, // Add currentSlide property to state
    prevArrow: <PrevArrow onClick={handlePrev} />,
    nextArrow: <NextArrow onClick={handleNext} />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      // {
      //   breakpoint: 1200,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 2,
      //   }
      // }
    ]
  });

  const sliderRef = useRef(null);
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   ProductService.getProducts()
  //     .then(response => {
  //       setProducts(response.data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  //   const slideTimer = setInterval(() => {
  //     setSettings(prevSettings => {
  //       const newSettings = { ...prevSettings };
  //       newSettings.currentSlide += newSettings.slidesToScroll;
  //       return newSettings;
  //     });
  //   }, 5000);
  //   return () => clearInterval(slideTimer);
  // }, []);
const products  = [  
  {
    id: "1",
    name: "weft hair",
    image:"//product.hstatic.net/200000490033/product/z4159702250021_537e0b8bd61c7568fcd773bdc4dd4259_b699273fd1b6483a8f48d8e38a8429a0_large.jpg",
    brand: "halihair",
    material: "100% tóc việt Nam",
    length: "8''->32''",
    makeStyle: "straight, body wave, deep wave, loose wave, ocean wave, spanish curl , water wave, deep wave, natural wave,..nếu có kiểu khác khách hàng có thể gửi hình cho chúng tôi làm",
    color: "màu sắc làm theo yêu cầu của khách hàng",
    expiry: "từ 1 năm trở lên , với chăm sóc tốt"
  },
  {
    id: "2",
    name: "bulk hair",
    image: "//product.hstatic.net/200000490033/product/z4159702250021_537e0b8bd61c7568fcd773bdc4dd4259_b699273fd1b6483a8f48d8e38a8429a0_large.jpg",
    brand: "halihair",
    material: "100% tóc việt Nam",
    length: "8''->32''",
    color: "màu sắc làm theo yêu cầu của khách hàng",
    expiry: "từ 1 năm trở lên , với chăm sóc tốt"
  },
  {
    id: "3",
    name: "tape hair",
    image:"//product.hstatic.net/200000490033/product/z4158274225490_4c9969638bd326ae4eb1de8dab39c855_3d66638bc1ed45829de948dbdd1748ce_large.jpg",
    brand: "halihair",
    material: "100% tóc việt Nam",
    length: "8''->32''",
    makeStyle: "straight, body wave, deep wave, loose wave, ocean wave, spanish curl , water wave, deep wave, natural wave,..nếu có kiểu khác khách hàng có thể gửi hình cho chúng tôi làm",
    color: "màu sắc làm theo yêu cầu của khách hàng",
    expiry: "từ 1 năm trở lên , với chăm sóc tốt"
  },
  {
    id: "4",
    name: "Y Tip hair",
    image:"//product.hstatic.net/200000490033/product/z4158302549003_bb9849ae29fd57275d4c746d41074e3b_ca14c1785ffe4afc9de5fd14c6d6ed7c_large.jpg",
    brand: "halihair",
    material: "100% tóc việt Nam",
    length: "8''->32''",
    makeStyle: "straight, body wave, deep wave, loose wave, ocean wave, spanish curl , water wave, deep wave, natural wave,..nếu có kiểu khác khách hàng có thể gửi hình cho chúng tôi làm",
    color: "màu sắc làm theo yêu cầu của khách hàng",
    expiry: "từ 1 năm trở lên , với chăm sóc tốt"
  },
  {
    id: "5",
    name: "u tip hair",
    image:"//product.hstatic.net/200000490033/product/z4158274257811_5d7ace22c88ff79cbb78154c521f6f19_acd8a39d82a94884935f5f15b1a7d1cd_large.jpg",
    brand: "halihair",
    material: "100% tóc việt Nam",
    length: "8''->32''",
    makeStyle: "straight, body wave, deep wave, loose wave, ocean wave, spanish curl , water wave, deep wave, natural wave,..nếu có kiểu khác khách hàng có thể gửi hình cho chúng tôi làm",
    color: "màu sắc làm theo yêu cầu của khách hàng",
    expiry: "từ 1 năm trở lên , với chăm sóc tốt"
  },
  {
    id: "6",
    name: "I Tip hair",
    image:"//product.hstatic.net/200000490033/product/z4158274195930_0d8293ccb8a35f7a01f355f2e45af438_3de6e9c6c53d49a3ace5801ca0af7e48_large.jpg",
    brand: "halihair",
    material: "100% tóc việt Nam",
    length: "8''->32''",
    makeStyle: "straight, body wave, deep wave, loose wave, ocean wave, spanish curl , water wave, deep wave, natural wave,..nếu có kiểu khác khách hàng có thể gửi hình cho chúng tôi làm",
    color: "màu sắc làm theo yêu cầu của khách hàng",
    expiry: "từ 1 năm trở lên , với chăm sóc tốt"
  }
];

  return (
    <>
     <div>
        <div style={{width: '81.5%', margin: '0 auto',position: 'relative'}}>
          {/* <Slider ref={sliderRef} {...settings} prevArrow={<PrevArrow />} nextArrow={<NextArrowDetail />}>
              {products.map((product, index) => (
              <div key={index} style={{ margin: "0 12px" }}>
                  <img src={product.image} alt={`Slide ${index}`} style={{ width: "630px", margin: "0 10px 0 0", borderRadius: '10px',
                  objectFit: 'cover', height: '300px'}} />
              </div>
              ))}
          </Slider> */}
          <Slider ref={sliderRef} {...settings2} prevArrow={<PrevArrow />} nextArrow={<NextArrow />}>
              {products.map((product, index) => (
              <div key={index}>
                  <img src={product.image} alt={`Slide ${index}`} style={{ width: "100%", borderRadius: '10px',
                  height: '300px'}} />
              </div>
              ))}
          </Slider>
        </div>

   </div>
    </>
    
  );
};

export default CarousellDetail;