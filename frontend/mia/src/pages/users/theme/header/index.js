//import
import { memo } from "react";
import "./style.scss";
import { RiFacebookCircleFill } from "react-icons/ri";
import { AiFillTikTok } from "react-icons/ai";
import { FaYoutubeSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { LuMailMinus } from "react-icons/lu";
import { FaShippingFast } from "react-icons/fa";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { formatter } from "../../../../utils/fomater";
import { BsCart3 } from "react-icons/bs";
import { ROUTERS } from "utils/router";
import { BsSearch } from "react-icons/bs";
import React from "react";
import { useState } from "react";
import { FaHotjar } from "react-icons/fa";




import "../../../../pages/users/theme/header/style.scss";

import Carousel from "../../../../component/Carousel/index.js";

import ProductPage from "../../../../component/ProductPage/index.js";

const HomePage = () => {
  const [isshowcategory, setshowcategory] = useState(false); // đặt giá trị hiện thi và đong danh sách

  const [showProductPage, setShowProductPage] = useState(false);

  // const [Menus, setMenu] = useState([
  const [Menus] = useState([
    {
      name: "Trang chủ",
      path: ROUTERS.USERS.HOME,
    },
    {
      name: "Giới thiệu",
      path: ROUTERS.USERS.HOME,
    },
    {
      name: "Sản Phẩm",
      path: "/",
      isShowSubMenu: false, // Đảm bảo flag này được khai báo đúng
      child: [
        {
          name: "Trái Cây Tươi Nhập Khẩu",
          path: ROUTERS.USERS.PRODUCTS,
        },
        {
          name: "Trái Cây Khô",
          path: ROUTERS.USERS.PRODUCTS,
        },
        {
          name: "Giỏ Quà Tặng Trái",
          path: ROUTERS.USERS.PRODUCTS,
        },
      ],
    },
    {
      name: "Bài Viết",
      path: ROUTERS.USERS.HOME,
    },
  ]);

  return (
    <>
      <div className="header__top">
        <div className="container">
          <div className="row">
            <div className="col-6 header__top_left">
              <ul>
                <li>
                  <LuMailMinus /> Miavn9x@gmail.com
                </li>
                <li>
                  <FaShippingFast />
                  Miễn phí ship đơn hàng trên {formatter(500000)}
                </li>
              </ul>
            </div>
            <div className="col-6 header__top_right">
              <ul>
                <li>
                  <Link to={""}>
                    <RiFacebookCircleFill />
                  </Link>
                </li>
                <li>
                  <Link to={""}>
                    <AiFillTikTok />
                  </Link>
                </li>
                <li>
                  <Link to={""}>
                    <FaYoutubeSquare />
                  </Link>
                </li>

                <li>
                  <Link to={""}>
                    <FaRegUserCircle />
                  </Link>
                  <span>Đăng nhập</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* /logo/ */}
      <div className="header__">
        <div className="container">
          <div
            className="row"
            style={{
              textAlign: "center",
            }}
          >
            <div className="col-xl-3 col-lg-3 ">
              <div className="header__logo">
                <h1 onClick={() => setShowProductPage(!showProductPage)}>
                  Mía Food
                </h1>
              </div>
            </div>
            {/* menu */}
            <div className="col-xl-6 col-lg-6 ">
              <nav className="header__menu">
                <ul>
                  {Menus?.map((menu, menuKey) => (
                    <li key={menuKey} className={menuKey === 0 ? "active" : ""}>
                      <Link to={menu?.path}>{menu?.name}</Link>
                      {menu.child && (
                        <ul className="header__menu__dropdown">
                          {menu.child.map((childItem, childKey) => (
                            <li key={`${menuKey}-${childKey}`}>
                              <Link to={childItem.path}>{childItem.name} </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="col-xl-3 col-lg-3">
              <div className="header__cart">
                {/* Search Box */}
                <div className="header__search">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="header__search-input"
                  />
                  <button className="header__search-button">
                    <BsSearch />
                  </button>
                </div>
                <ul>
                  <li>
                    <Link to={""}>
                      <BsCart3 /> <span>0</span>
                    </Link>
                  </li>
                </ul>
                <div className="header__cart_price">
                  <span> {formatter(1000000)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /menu/ con */}
      <div className="container">
        <div className="row category__all">
          {/* trai */}
          <div className="col-xl-3 col-lg-3 category__list">
            <div
              className="category_list_menu"
              onClick={() => setshowcategory(!isshowcategory)}
            >
              <BsFillMenuButtonWideFill />
              <span> Danh sách Sản Phẩm</span>
            </div>
            {isshowcategory && (
              <ul>
                <li>
                  <Link to={""}>
                    <FaHotjar /> Sảm Phẩm Hot
                  </Link>
                </li>
                <li>
                  <Link to={""}>Trái Cây Tươi Nhập Khẩu</Link>
                </li>
                <li>
                  <Link to={""}>Trái Cây Khô</Link>
                </li>
                <li>
                  <Link to={""}>Giỏ Quà Tặng Trái</Link>
                </li>
              </ul>
            )}
          </div>
          {/* phải */}
          <div className="col-xl-9 col-lg-9 Carousel__img">
            <Carousel />
          </div>
        </div>
      </div>
      <div>
        <div>{showProductPage && <ProductPage />}</div>
      </div>
    </>
  );
};

export default memo(HomePage);
