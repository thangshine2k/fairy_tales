import React from "react";

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        position: "absolute",
        top: "50%",
        left: "10px",
        transform: "translateY(-50%) scale(2)",
        pointerEvents: "auto", // sử dụng pointer-events: auto cho nút trượt
        zIndex: "2", // Đặt z-index lớn hơn img
      }}
    >
      <i className="fas fa-chevron-left" />
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
        position: "absolute",
        top: "50%",
        right: "10px",
        transform: "translateY(-50%) scale(2)", // tăng kích thước lên 2.5 lần
        pointerEvents: "auto", // sử dụng pointer-events: auto cho nút trượt
        zIndex: "2", // Đặt z-index lớn hơn img
      }}
    >
      <i className="fas fa-chevron-right" />
    </div>
  );
};
const NextArrowDetail = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        position: "absolute",
        top: "50%",
        right: "3%",
        transform: "translateY(-50%) scale(2.2)", // tăng kích thước lên 2.5 lần
        pointerEvents: "auto", // sử dụng pointer-events: auto cho nút trượt
        zIndex: "2", // Đặt z-index lớn hơn img
      }}
    >
      <i className="fas fa-chevron-right" />
    </div>
  );
};
export { PrevArrow, NextArrow, NextArrowDetail };
