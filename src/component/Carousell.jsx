import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { PrevArrow, NextArrow } from './NextArrow/NextArrow';

const Carousell = () => {
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
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    centerPadding: '0px',
    currentSlide: 0, 
    prevArrow: <PrevArrow onClick={handlePrev} />,
    nextArrow: <NextArrow onClick={handleNext} />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
    ]
  });

  const sliderRef = useRef(null);

  // useEffect(() => {
  //   const slideTimer = setInterval(() => {
  //     setSettings(prevSettings => {
  //       const newSettings = { ...prevSettings };
  //       newSettings.currentSlide += newSettings.slidesToScroll;
  //       return newSettings;
  //     });
  //   }, 3000);
  //   return () => clearInterval(slideTimer);
  // }, []);

  const images = [
    'https://media.karousell.com/media/photos/special-collection/2023/03/13/ec95dca7ff016f1f_(1500,610)',
    'https://media.karousell.com/media/photos/special-collection/2023/01/17/17581b777e3e4ef6_(1500,610)',
    'https://media.karousell.com/media/photos/special-collection/2023/01/05/592efeb1625655c1_(1500,610)',
    'https://media.karousell.com/media/photos/special-collection/2023/03/16/9f0bee5c51992698_(1500,610)',
    'https://media.karousell.com/media/photos/special-collection/2023/03/09/2c3a6d0ab1cf72c9_(1500,610)',
    'https://media.karousell.com/media/photos/special-collection/2023/02/20/26ebc5ea04d297b1_(1500,610)',
    'https://media.karousell.com/media/photos/special-collection/2023/01/26/c9e047a53562eaaa_(1500,610)',
    'https://media.karousell.com/media/photos/special-collection/2023/01/18/8689ea6a5031b940_(1500,610)',
    'https://media.karousell.com/media/photos/special-collections/2021/09/16/sg_homesvc-wk3435_spc-m_(1500,_610).png',
  ];

  return (
    <>
<div style={{ width: '83.3%', margin: '0 auto', top: '20px', position: 'relative', left:'14px'}}>
  <Slider ref={sliderRef} {...settings} prevArrow={<PrevArrow />} nextArrow={<NextArrow />}>
    {images.map((image, index) => (
      <div key={index}>
        <img src={image} alt={`Slide ${index}`} style={{ width: "612px", borderRadius: '8px'}} />
      </div>
    ))}
  </Slider>
</div>
    </>
    
  );
};

export default Carousell;