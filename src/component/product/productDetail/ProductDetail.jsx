import React, { useState } from "react";
import "../index.css";
import CarousellDetail from "../../CarousellDetail";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';

function ProductDetail({ products }) {
  const [isHovered1, setIsHovered1] = useState(false);
  const [showContent1, setShowContent1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [showContent2, setShowContent2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [showContent3, setShowContent3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [showContent4, setShowContent4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);
  const [showContent5, setShowContent5] = useState(false);
  const [isMouseInside, setIsMouseInside] = useState(false);

  const [isHandleIcon, setIsHandleIcon] = useState(false);
  const [isHandleIcon2, setIsHandleIcon2] = useState(false);
  const [isHandleIcon3, setIsHandleIcon3] = useState(false);
  const [isHandleIcon4, setIsHandleIcon4] = useState(false);

  const [isHandleContact1, setIsHandleContact1] = useState(false);
  const [isHandleContact2, setIsHandleContact2] = useState(false);
  const [isHandleContact3, setIsHandleContact3] = useState(false);
  const [isHandleContact4, setIsHandleContact4] = useState(false);
  const [isHandleContact5, setIsHandleContact5] = useState(false);

  const [isMenuOpen, setMenuOpen] = useState(false);

  // const [isMenuClose, setMenuClose] = useState(false);

  const { id } = useParams();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };
  const handleMenuNotClick = () => {
    setMenuOpen(isMenuOpen);
  };

  const handleContactMouse1 = () => {
    setIsHandleContact1(true);
  };
  const handleContactMouseLeave1 = () => {
    setIsHandleContact1(false);
  };
  const handleContactMouse2 = () => {
    setIsHandleContact2(true);
  };
  const handleContactMouseLeave2 = () => {
    setIsHandleContact2(false);
  };
  const handleContactMouse3 = () => {
    setIsHandleContact3(true);
  };
  const handleContactMouseLeave3 = () => {
    setIsHandleContact3(false);
  };
  const handleContactMouse4 = () => {
    setIsHandleContact4(true);
  };
  const handleContactMouseLeave4 = () => {
    setIsHandleContact4(false);
  };
  const handleContactMouse5 = () => {
    setIsHandleContact5(true);
  };
  const handleContactMouseLeave5 = () => {
    setIsHandleContact5(false);
  };

  const handleIconMouse = () => {
    setIsHandleIcon(true);
  };
  const handleIconMouseLeave = () => {
    setIsHandleIcon(false);
  };
  const handleIconMouse2 = () => {
    setIsHandleIcon2(true);
  };
  const handleIconMouseLeave2 = () => {
    setIsHandleIcon2(false);
  };
  const handleIconMouse3 = () => {
    setIsHandleIcon3(true);
  };
  const handleIconMouseLeave3 = () => {
    setIsHandleIcon3(false);
  };
  const handleIconMouse4 = () => {
    setIsHandleIcon4(true);
  };
  const handleIconMouseLeave4 = () => {
    setIsHandleIcon4(false);
  };

  const handleMouseEnter1 = () => {
    setIsHovered1(true);
    setTimeout(() => {
      setShowContent1(true);
    }, 100);
  };

  const handleMouseLeave1 = () => {
    setIsHovered1(false);
    setShowContent1(false);
    setIsMouseInside(false);
  };

  const handleMouseEnter2 = () => {
    setIsHovered2(true);
    setTimeout(() => {
      setShowContent2(true);
    }, 100);
  };

  const handleMouseLeave2 = () => {
    setIsHovered2(false);
    setShowContent2(false);
    setIsMouseInside(false);
  };
  const handleMouseEnter3 = () => {
    setIsHovered3(true);
    setTimeout(() => {
      setShowContent3(true);
    }, 100);
  };

  const handleMouseLeave3 = () => {
    setIsHovered3(false);
    setShowContent3(false);
    setIsMouseInside(false);
  };
  const handleMouseEnter4 = () => {
    setIsHovered4(true);
    setTimeout(() => {
      setShowContent4(true);
    }, 100);
  };

  const handleMouseLeave4 = () => {
    setIsHovered4(false);
    setShowContent4(false);
    setIsMouseInside(false);
  };
  const handleMouseEnter5 = () => {
    setIsHovered5(true);
    setTimeout(() => {
      setShowContent5(true);
    }, 100);
  };

  const handleMouseLeave5 = () => {
    setIsHovered5(false);
    setShowContent5(false);
    setIsMouseInside(false);
  };

  const item2 = [
    { id: 1, text: "MÁY TIỆT TRÙNG" },
    { id: 2, text: "MÁY TIỆT TRÙNG HƠI NƯỚC" },
    { id: 3, text: "MÁY TIỆT TRÙNG SẤY" },
    { id: 4, text: "MÁY TIỆT TRÙNG SẤY KHÔ VÀ HÂM SỮA" },
  ];

  const item3 = [{ id: 1, text: "BÌNH ĐUN GIỮ NHIỆT THÔNG MINH" }];

  const item4 = [
    { id: 1, text: "MÁY HÚT SỮA ĐIỆN MÔI" },
    { id: 2, text: "MÁY HÚT SỮA KHÔNG DÂY" },
    { id: 3, text: "MÁY HÚT SỮA BẰNG TAY" },
  ];

  const item5 = [
    { id: 1, text: "BÌNH TRỮ" },
    { id: 2, text: "MÁY XAY CẦM TAY" },
    { id: 3, text: "NỒI NẤU CHẬU" },
  ];

  return (
    <div>
      <div className="header fake-header">
        <div div className="nav">
                    <div className="nav-img" id='mynav-img'>
                      <a href="">
                      <img src="https://mweb-cdn.karousell.com/build/carousell-logo-title-2Nnf7YFiNk.svg" alt="" />
                      </a>
                    </div>
                     <div className="nav-name">
                        <div className='nav-midde-name'><a>Electronics</a></div>
                        <div className='nav-midde-name'><a>Fashion</a></div>
                        <div className='nav-midde-name'><a>Luxury</a></div>
                        <div className='nav-midde-name'><a>Services</a></div>
                        <div className='nav-midde-name'><a>Cars</a></div>
                        <div className='nav-midde-name'><a>All Categories</a></div>

                          <div className="nav-right nav-sell-bg" id='onclick-nav-sell'>
                            <div className='nav-right-name'><a>Register</a></div>
                            <div className='nav-right-name'><a>Login</a></div> 
                            <div className='nav-sell'><span>Sell</span></div>
                          </div>
                        </div>
                    </div>
                  <div>
                </div>

              <div className='main'>
                  <div className='nav-spo'>
                      <div className='nav-search'>
                          <i className="fa fa-search" aria-hidden="true"></i>
                          <input
                          type="search" placeholder='Search for anything and everything'/>
                      </div>
                      <div className="nav-position">
                          <i className="fa fa-map-marker" aria-hidden="true"></i>
                          <input
                           type="search" placeholder='All of Singapore'/>
                      </div>
                      <div className="nav-seach-onclick">
                          <a>Search</a>
                      </div>
                  </div>
                </div>
              <div>
          </div>
      </div>
      
      <div className="header-productDetail">
          <div className="header-productLine">
              <span className="line1">
                  Product Line
              </span>

              <FontAwesomeIcon icon={faGreaterThan} style={{ fontSize: '7px', position:'relative', margin:'6px 8px', fontWeight:'bold'}} />

              <span className="line2">
                  Product
              </span>

              <FontAwesomeIcon icon={faGreaterThan} style={{ fontSize: '7px', position:'relative', margin:'6px 8px', fontWeight:'bold'}} />

              <span className="line3">
                Product name
              </span>

          </div>
          <CarousellDetail />

          <div className="title-productDetail">
            <span>
              Name Product
            </span>  
            <span>
              price product
            </span>
          </div> 

          <div className="reviews">

          </div>

          <div>
            <span>
            Condition
            </span>
            <span>
              Well used
            </span>
          </div> 

          <div>
            <span>
              Details
            </span>
            <span>

                <p>
                  Listed
                </p>
                <p>
                    Category
                </p>

                <p>
                over a year ago by nolongerinusee
                </p>

                <p>
                In Bicycles
                </p> 
            </span>
            <span>
            Getting this
            </span>
          </div> 

      </div>

      <div className='footer'>
              <div>
                  <div className='title-footer'> 
                    <h2>Sell and buy every kinda thing on Carousell</h2>
                  </div>
                  <div className='flex-img'>
                          <div className='flex-img1'>
                            <img src="https://sl3-cdn.karousell.com/homescreens/main/sg_web_homepage/main/blob1.gif" alt="" />  
                            <div>Sell and declutter</div>
                            <div>Make money while saving the earth</div>
                        </div>
                        <div className='flex-img2'>
                            <img src="https://sl3-cdn.karousell.com/homescreens/main/sg_web_homepage/main/blob2.gif" alt="" />
                            <div>Discover good deals</div>
                            <div>It’s also a great deal for the environment</div>
                        </div>
                        <div className='flex-img3'>
                            <img src="https://sl3-cdn.karousell.com/homescreens/main/sg_web_homepage/main/blob3.gif" alt="" />
                            <div>Chat instantly</div>
                            <div>Buy and sell simply by chatting</div>
                        </div>
                  </div>
                </div>

                  <h2 className='footer-contents'>Transact with a trusted local community</h2>
          <div className='footer-stars'>
            <div className='awesome-community'>
                <svg className='f-stars' fill="#008f79" fill-rule="nonzero" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d='M11.01 10.54l4.1-8.3a1 1 0 0 1 1.79 0l4.09 8.3 9.15 1.33a1 1 0 0 1 .56 1.7l-6.63 6.46 1.57 9.11a1 1 0 0 1-1.45 1.06L16 25.9l-8.19 4.3a1 1 0 0 1-1.45-1.06l1.57-9.11-6.63-6.46a1 1 0 0 1 .56-1.7L11 10.54z'
                    stroke="#008f79" stroke-width="2">
                    </path>
                </svg>
                <svg className='f-stars' fill="#008f79" fill-rule="nonzero" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d='M11.01 10.54l4.1-8.3a1 1 0 0 1 1.79 0l4.09 8.3 9.15 1.33a1 1 0 0 1 .56 1.7l-6.63 6.46 1.57 9.11a1 1 0 0 1-1.45 1.06L16 25.9l-8.19 4.3a1 1 0 0 1-1.45-1.06l1.57-9.11-6.63-6.46a1 1 0 0 1 .56-1.7L11 10.54z'
                    stroke="#008f79" stroke-width="2">
                    </path>
                </svg>
                <svg className='f-stars' fill="#008f79" fill-rule="nonzero" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d='M11.01 10.54l4.1-8.3a1 1 0 0 1 1.79 0l4.09 8.3 9.15 1.33a1 1 0 0 1 .56 1.7l-6.63 6.46 1.57 9.11a1 1 0 0 1-1.45 1.06L16 25.9l-8.19 4.3a1 1 0 0 1-1.45-1.06l1.57-9.11-6.63-6.46a1 1 0 0 1 .56-1.7L11 10.54z'
                    stroke="#008f79" stroke-width="2">
                    </path>
                </svg>
                <svg className='f-stars' fill="#008f79" fill-rule="nonzero" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d='M11.01 10.54l4.1-8.3a1 1 0 0 1 1.79 0l4.09 8.3 9.15 1.33a1 1 0 0 1 .56 1.7l-6.63 6.46 1.57 9.11a1 1 0 0 1-1.45 1.06L16 25.9l-8.19 4.3a1 1 0 0 1-1.45-1.06l1.57-9.11-6.63-6.46a1 1 0 0 1 .56-1.7L11 10.54z'
                    stroke="#008f79" stroke-width="2">
                    </path>
                </svg>
                <svg className='f-stars' fill="#008f79" fill-rule="nonzero" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d='M11.01 10.54l4.1-8.3a1 1 0 0 1 1.79 0l4.09 8.3 9.15 1.33a1 1 0 0 1 .56 1.7l-6.63 6.46 1.57 9.11a1 1 0 0 1-1.45 1.06L16 25.9l-8.19 4.3a1 1 0 0 1-1.45-1.06l1.57-9.11-6.63-6.46a1 1 0 0 1 .56-1.7L11 10.54z'
                    stroke="#008f79" stroke-width="2">
                    </path>
                </svg>
                  <h2>Awesome community</h2>
                <div className='content-f'>
                    Safe, reliable & easy to use user interface. Overall an awesome community to be in! 😁
                </div>
                <div className='content-g'>
                    @md.helmi
                </div>
            </div>
            <div className='decluttering'>
                <svg className='f-stars' fill="#008f79" fill-rule="nonzero" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d='M11.01 10.54l4.1-8.3a1 1 0 0 1 1.79 0l4.09 8.3 9.15 1.33a1 1 0 0 1 .56 1.7l-6.63 6.46 1.57 9.11a1 1 0 0 1-1.45 1.06L16 25.9l-8.19 4.3a1 1 0 0 1-1.45-1.06l1.57-9.11-6.63-6.46a1 1 0 0 1 .56-1.7L11 10.54z'
                    stroke="#008f79" stroke-width="2">
                    </path>
                </svg>
                <svg className='f-stars' fill="#008f79" fill-rule="nonzero" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d='M11.01 10.54l4.1-8.3a1 1 0 0 1 1.79 0l4.09 8.3 9.15 1.33a1 1 0 0 1 .56 1.7l-6.63 6.46 1.57 9.11a1 1 0 0 1-1.45 1.06L16 25.9l-8.19 4.3a1 1 0 0 1-1.45-1.06l1.57-9.11-6.63-6.46a1 1 0 0 1 .56-1.7L11 10.54z'
                    stroke="#008f79" stroke-width="2">
                    </path>
                </svg>
                <svg className='f-stars' fill="#008f79" fill-rule="nonzero" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d='M11.01 10.54l4.1-8.3a1 1 0 0 1 1.79 0l4.09 8.3 9.15 1.33a1 1 0 0 1 .56 1.7l-6.63 6.46 1.57 9.11a1 1 0 0 1-1.45 1.06L16 25.9l-8.19 4.3a1 1 0 0 1-1.45-1.06l1.57-9.11-6.63-6.46a1 1 0 0 1 .56-1.7L11 10.54z'
                    stroke="#008f79" stroke-width="2">
                    </path>
                </svg>
                <svg className='f-stars' fill="#008f79" fill-rule="nonzero" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d='M11.01 10.54l4.1-8.3a1 1 0 0 1 1.79 0l4.09 8.3 9.15 1.33a1 1 0 0 1 .56 1.7l-6.63 6.46 1.57 9.11a1 1 0 0 1-1.45 1.06L16 25.9l-8.19 4.3a1 1 0 0 1-1.45-1.06l1.57-9.11-6.63-6.46a1 1 0 0 1 .56-1.7L11 10.54z'
                    stroke="#008f79" stroke-width="2">
                    </path>
                </svg>
                <svg className='f-stars' fill="#008f79" fill-rule="nonzero" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d='M11.01 10.54l4.1-8.3a1 1 0 0 1 1.79 0l4.09 8.3 9.15 1.33a1 1 0 0 1 .56 1.7l-6.63 6.46 1.57 9.11a1 1 0 0 1-1.45 1.06L16 25.9l-8.19 4.3a1 1 0 0 1-1.45-1.06l1.57-9.11-6.63-6.46a1 1 0 0 1 .56-1.7L11 10.54z'
                    stroke="#008f79" stroke-width="2">
                    </path>
                </svg>
                  <h2>Decluttering and bargain finds</h2>
                  <div className='content-f'>
                   Love that we can make the most out of items. Helps me to clear my things without the guilt of throwing and purchase keeping the environment in mind.
                </div>
                <div className='content-g'>
                  @chrischross
                </div>
            </div>
            <div className='great-for-the-earth'>
                <svg className='f-stars' fill="#008f79" fill-rule="nonzero" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d='M11.01 10.54l4.1-8.3a1 1 0 0 1 1.79 0l4.09 8.3 9.15 1.33a1 1 0 0 1 .56 1.7l-6.63 6.46 1.57 9.11a1 1 0 0 1-1.45 1.06L16 25.9l-8.19 4.3a1 1 0 0 1-1.45-1.06l1.57-9.11-6.63-6.46a1 1 0 0 1 .56-1.7L11 10.54z'
                    stroke="#008f79" stroke-width="2">
                    </path>
                </svg>
                <svg className='f-stars' fill="#008f79" fill-rule="nonzero" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d='M11.01 10.54l4.1-8.3a1 1 0 0 1 1.79 0l4.09 8.3 9.15 1.33a1 1 0 0 1 .56 1.7l-6.63 6.46 1.57 9.11a1 1 0 0 1-1.45 1.06L16 25.9l-8.19 4.3a1 1 0 0 1-1.45-1.06l1.57-9.11-6.63-6.46a1 1 0 0 1 .56-1.7L11 10.54z'
                    stroke="#008f79" stroke-width="2">
                    </path>
                </svg>
                <svg className='f-stars' fill="#008f79" fill-rule="nonzero" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d='M11.01 10.54l4.1-8.3a1 1 0 0 1 1.79 0l4.09 8.3 9.15 1.33a1 1 0 0 1 .56 1.7l-6.63 6.46 1.57 9.11a1 1 0 0 1-1.45 1.06L16 25.9l-8.19 4.3a1 1 0 0 1-1.45-1.06l1.57-9.11-6.63-6.46a1 1 0 0 1 .56-1.7L11 10.54z'
                    stroke="#008f79" stroke-width="2">
                    </path>
                </svg>
                <svg className='f-stars' fill="#008f79" fill-rule="nonzero" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d='M11.01 10.54l4.1-8.3a1 1 0 0 1 1.79 0l4.09 8.3 9.15 1.33a1 1 0 0 1 .56 1.7l-6.63 6.46 1.57 9.11a1 1 0 0 1-1.45 1.06L16 25.9l-8.19 4.3a1 1 0 0 1-1.45-1.06l1.57-9.11-6.63-6.46a1 1 0 0 1 .56-1.7L11 10.54z'
                    stroke="#008f79" stroke-width="2">
                    </path>
                </svg>
                <svg className='f-stars' fill="#008f79" fill-rule="nonzero" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d='M11.01 10.54l4.1-8.3a1 1 0 0 1 1.79 0l4.09 8.3 9.15 1.33a1 1 0 0 1 .56 1.7l-6.63 6.46 1.57 9.11a1 1 0 0 1-1.45 1.06L16 25.9l-8.19 4.3a1 1 0 0 1-1.45-1.06l1.57-9.11-6.63-6.46a1 1 0 0 1 .56-1.7L11 10.54z'
                    stroke="#008f79" stroke-width="2">
                    </path>
                </svg>
                  <h2>Great for the earth</h2>
                <div className='content-f'>
                    Great way to save money and earth resources by buying secondhand; and giving new owners to things that are still working/ in great condition.
                </div>
                <div className='content-g'>
                    @mint_sg
                </div>
            </div>
            <div className='easy-to-buy-and-sell'>
                <svg className='f-stars' fill="#008f79" fill-rule="nonzero" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d='M11.01 10.54l4.1-8.3a1 1 0 0 1 1.79 0l4.09 8.3 9.15 1.33a1 1 0 0 1 .56 1.7l-6.63 6.46 1.57 9.11a1 1 0 0 1-1.45 1.06L16 25.9l-8.19 4.3a1 1 0 0 1-1.45-1.06l1.57-9.11-6.63-6.46a1 1 0 0 1 .56-1.7L11 10.54z'
                    stroke="#008f79" stroke-width="2">
                    </path>
                </svg>
                <svg className='f-stars' fill="#008f79" fill-rule="nonzero" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d='M11.01 10.54l4.1-8.3a1 1 0 0 1 1.79 0l4.09 8.3 9.15 1.33a1 1 0 0 1 .56 1.7l-6.63 6.46 1.57 9.11a1 1 0 0 1-1.45 1.06L16 25.9l-8.19 4.3a1 1 0 0 1-1.45-1.06l1.57-9.11-6.63-6.46a1 1 0 0 1 .56-1.7L11 10.54z'
                    stroke="#008f79" stroke-width="2">
                    </path>
                </svg>
                <svg className='f-stars' fill="#008f79" fill-rule="nonzero" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d='M11.01 10.54l4.1-8.3a1 1 0 0 1 1.79 0l4.09 8.3 9.15 1.33a1 1 0 0 1 .56 1.7l-6.63 6.46 1.57 9.11a1 1 0 0 1-1.45 1.06L16 25.9l-8.19 4.3a1 1 0 0 1-1.45-1.06l1.57-9.11-6.63-6.46a1 1 0 0 1 .56-1.7L11 10.54z'
                    stroke="#008f79" stroke-width="2">
                    </path>
                </svg>
                <svg className='f-stars' fill="#008f79" fill-rule="nonzero" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d='M11.01 10.54l4.1-8.3a1 1 0 0 1 1.79 0l4.09 8.3 9.15 1.33a1 1 0 0 1 .56 1.7l-6.63 6.46 1.57 9.11a1 1 0 0 1-1.45 1.06L16 25.9l-8.19 4.3a1 1 0 0 1-1.45-1.06l1.57-9.11-6.63-6.46a1 1 0 0 1 .56-1.7L11 10.54z'
                    stroke="#008f79" stroke-width="2">
                    </path>
                </svg>
                <svg className='f-stars' fill="#008f79" fill-rule="nonzero" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d='M11.01 10.54l4.1-8.3a1 1 0 0 1 1.79 0l4.09 8.3 9.15 1.33a1 1 0 0 1 .56 1.7l-6.63 6.46 1.57 9.11a1 1 0 0 1-1.45 1.06L16 25.9l-8.19 4.3a1 1 0 0 1-1.45-1.06l1.57-9.11-6.63-6.46a1 1 0 0 1 .56-1.7L11 10.54z'
                    stroke="#008f79" stroke-width="2">
                    </path>
                </svg>
                  <h2>Easy to buy and sell</h2>
                <div className='content-f'>
                    Easy and convenient platform. It’s convenient to buy and sell stuff. Get to chat directly with other Carousellers.
                </div>
                <div className='content-f'>
                   @joeboxer
                </div>
              </div>
           </div>

              <div className="line_top common-hover">
                  <div className="contact">
                    <div><h1>Facebook us</h1></div>
                    <div><a href="">Facebook</a></div>
                    <div><a href="">Twitter</a></div>
                    <div><a href="">Blog</a></div>
                    <div><a href="">Carousell College</a></div>
                  </div>
                  <div className="cars_and_property">
                    <div><h1>Cars & Property</h1></div>
                    <div><a href="">Cars</a></div>
                    <div><a href="">Car Accessories</a></div>
                    <div><a href="">Property</a></div>
                    <div><a href="">Motorcycles</a></div>
                  </div>
                  <div className="fashion">
                    <div><h1>Fashion</h1></div>
                    <div><a href="">Women's Fashion</a></div>
                    <div><a href="">Luxury</a></div>
                    <div><a href="">Men's Fashion</a></div>
                    <div><a href="">Beauty & Personal Care</a></div>
                  </div>
                  <div className="home_and_living">
                    <div><h1>Home & Living</h1></div>
                    <div><a href="">Furniture & Home Living</a></div>
                    <div><a href="">Babies & Kids</a></div>
                    <div><a href="">Health & Nutrition</a></div>
                    <div><a href="">Food & Drinks</a></div>
                    <div><a href="">Pet Supplies</a></div>
                  </div>
                  <div className="electronics_and_moblies">
                    <div><h1>Electronics & Mobiles</h1></div>
                    <div><a href="">Computers & Tech</a></div>
                    <div><a href="">Video Gaming</a></div>
                    <div><a href="">Mobile Phones & Gadgets</a></div>
                    <div><a href="">Audio</a></div>
                    <div><a href="">Photography</a></div>
                    <div><a href="">TV & Home Appliances</a></div>
                  </div>
                  <div className="hobbies_and_games">
                    <div><h1>Hobbies & Games</h1></div>
                    <div><a href="">Toys & Games</a></div>
                    <div><a href="">Music & Media</a></div>
                    <div><a href="">Books & Magazines</a></div>
                    <div><a href="">Stationery & Craft</a></div>
                    <div><a href="">Memorabilia & Collectibles</a></div>
                    <div><a href="">Travel</a></div>
                    <div><a href="">Sports Equipment</a></div>
                    <div><a href="">Tickets & Vouchers</a></div>
                  </div>
              </div>
              <div className="line_bottom common-hover">
                <div className="jobs_and_services">
                    <div><h1>Jobs & Services</h1></div>
                    <div><a href="">Jobs</a></div>
                    <div><a href="">Lifestyle Services</a></div>
                    <div><a href="">Business Services</a></div>
                    <div><a href="">Home Services</a></div>
                    <div><a href="">Learning & Enrichment</a></div>
                  </div>  
                  <div className="others">
                    <div><h1>Others</h1></div>
                    <div><a href="">Everything Else</a></div>
                    <div><a href="">Bulletin Board</a></div>
                    <div><a href="">Following</a></div>
                    <div><a href="">Free Items</a></div>
                  </div>
              </div>
                <div className='background-footer'>
                    <div className='qr-cat'>
                        <img src="https://storage.googleapis.com/carousell-sl/homescreens/main/carousell_qrcode_cats.png" alt="" />
                    </div>
                        <div className='title-introduce'>
                           Everyone Wins on Carousell
                        </div>
                        <div className='title-introduce-bottom'>
                            Unlock exclusive features when you download the Carousell app today!
                        </div>
                    <div className='qr-apple-store'>
                       <img src="https://storage.googleapis.com/carousell-sl/homescreens/main/carousell_qrcode_apple_store.svg" alt="" />
                    </div>
                    <div className='qr-gplay'>
                       <img src="https://storage.googleapis.com/carousell-sl/homescreens/main/carousell_qrcode_gplay.svg" alt="" />
                    </div>
                    <div className='qr-branch'>
                        <img src="https://storage.googleapis.com/carousell-sl/homescreens/main/carousell_qrcode_branch.png" alt="" />
                    </div>
                </div>
              <div className='end-page'>
                        <div className="end-introduce contact-about common-hover">
                            <div className="img-carousell-end" id='carousell-end'>
                            <img src="https://mweb-cdn.karousell.com/build/carousell-logo-title-2Nnf7YFiNk.svg" alt="" />
                            </div>  
                              <h1>© 2023 Carousell</h1>
                              <a href=''>Help Centre</a>
                              <a href=''>Contact Us</a>
                              <a href=''>Press</a>
                              <a href=''>Jobs</a>
                              <a href=''>Advertise with Us</a>
                              <a href=''>Terms</a>
                              <a href=''>Privacy</a>
                        </div>
                <div className="img-languages">
                      <div className="img-language1" >
                      <a href="">
                      <img src="https://mweb-cdn.karousell.com/build/flag-au-1Vu2Ly0cBR.jpg" alt="" />
                      </a>
                      </div>
                      <div className="img-language2">
                      <a href="">  
                      <img src="https://mweb-cdn.karousell.com/build/flag-ca-3zQT2z3CIo.jpg" alt="" />
                      </a>
                      </div>  
                      <div className="img-language3">
                      <a href="">  
                      <img src="https://mweb-cdn.karousell.com/build/flag-hk-1Fq4xKBpW1.jpg" alt="" />
                      </a>
                      </div>  
                      <div className="img-language4">
                      <a href="">  
                      <img src="https://mweb-cdn.karousell.com/build/flag-id-3hB56YEmaV.jpg" alt="" />
                      </a> 
                      </div>  
                      <div className="img-language5">
                      <a href="">  
                      <img src="https://mweb-cdn.karousell.com/build/flag-my-GKdsVkW7Qq.jpg" alt="" />
                      </a> 
                      </div>  
                      <div className="img-language6">
                      <a href="">  
                      <img src="https://mweb-cdn.karousell.com/build/flag-nz-24qlj462lw.jpg" alt="" />
                      </a> 
                      </div> 
                      <div className="img-language7">
                      <a href="">  
                      <img src="https://mweb-cdn.karousell.com/build/flag-ph-cYUSK6Hapb.jpg" alt="" />
                      </a> 
                      </div>  
                      <div className="img-language8">
                      <a href="">  
                      <img src="https://mweb-cdn.karousell.com/build/flag-sg-3PPSOjFS5a.jpg" alt="" />
                      </a> 
                      </div>  
                      <div className="img-language9">
                      <a href="">  
                      <img src="https://mweb-cdn.karousell.com/build/flag-tw-6cZEDUfY6q.jpg" alt="" />
                      </a> 
                      </div>  
                        <button className="english-button">
                          <div className='english-text'>
                            <a>English</a>
                          </div>
                          <i className="fa fa-chevron-down"></i>
                        </button>
                </div>
            </div>
          </div>  
    </div>
  );
}
export default ProductDetail;
