import React from 'react';

const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
        style={{
          position: 'absolute',
          top: '50%',
          left: '9px',
          backgroundColor:'0 0 0 1px rgba(44,44,45,.07)',
          // box-shadow: 0 8px 12px 0 rgba(44,44,45,.27), 0 0 0 1px rgba(44,44,45,.07);
          transform: 'translateY(-50%) scale(1.96)',
          pointerEvents: 'auto', // sử dụng pointer-events: auto cho nút trượt
          zIndex: '3', // Đặt z-index lớn hơn img
        }}
      >
      </div>
    );
  };
  
  const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
        style={{
          position: 'absolute',
          top: '50%',
          right: '37px',
          transform: 'translateY(-50%) scale(2)', // tăng kích thước lên 2.5 lần
          pointerEvents: 'auto', // sử dụng pointer-events: auto cho nút trượt
          zIndex: '2', // Đặt z-index lớn hơn img
        }}
      >
      </div>
    );
  };

export { PrevArrow, NextArrow };