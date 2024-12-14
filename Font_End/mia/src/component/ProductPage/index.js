import React from "react";
import { Link } from "react-router-dom";
import "./ProductPage.scss"; // Import custom styles

// Import images from the src folder or use absolute paths if in public
import img1 from "../../assets/images/11.png";
import img2 from "../../assets/images/22.jpg";
import img3 from "../../assets/images/44.jpg";
import img4 from "../../assets/images/55.png";
import img5 from "../../assets/images/66.png";
import img6 from "../../assets/images/77.png";
import img7 from "../../assets/images/88.jpg";
import img8 from "../../assets/images/99.png";
import img9 from "../../assets/images/100.png";

const ProductPage = () => {
  const products = [
    {
      id: 1,
      name: "Trái Cây Tươi Nhập Khẩu 1",
      price: 200000,
      image: img1,
    },
    {
      id: 2,
      name: "Trái Cây Khô 1",
      price: 150000,
      image: img2,
    },
    {
      id: 3,
      name: "Giỏ Quà Tặng Trái 1",
      price: 500000,
      image: img3,
    },
    {
      id: 4,
      name: "Trái Cây Tươi Nhập Khẩu 2",
      price: 220000,
      image: img4,
    },
    {
      id: 5,
      name: "Trái Cây Khô 2",
      price: 160000,
      image: img5,
    },
    {
      id: 6,
      name: "Giỏ Quà Tặng Trái 2",
      price: 550000,
      image: img6,
    },
    {
      id: 7,
      name: "Trái Cây Tươi Nhập Khẩu 3",
      price: 240000,
      image: img7,
    },
    {
      id: 8,
      name: "Trái Cây Khô 3",
      price: 170000,
      image: img8,
    },
    {
      id: 9,
      name: "Giỏ Quà Tặng Trái 3",
      price: 600000,
      image: img9,
    },
  ];

  // Formatter function for price
  const formatter = (price) => {
    return price.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  };

  return (
    <div className="product-page">
      <h2 className="product-page__title">Danh Sách Sản Phẩm</h2>
      <div className="product-page__grid">
        {products.map((product) => (
          <div key={product.id} className="product-page__item">
            <img
              src={product.image}
              alt={product.name}
              className="product-page__image"
            />
            <h3>{product.name}</h3>
            <p>{formatter(product.price)}</p>
            <Link to={`/product/${product.id}`} className="product-page__link">
              Xem Chi Tiết
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
