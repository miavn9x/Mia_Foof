//import
import { memo } from "react";

// import { memo, useState } from "react";

import "./style.scss";
import { RiFacebookCircleFill } from "react-icons/ri";
import { AiFillTikTok } from "react-icons/ai";
import { FaYoutubeSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { LuMailMinus } from "react-icons/lu";
import { FaShippingFast } from "react-icons/fa";
import { formatter } from "../../../../utils/fomater";
import { BsCart3 } from "react-icons/bs";
import { ROUTERS } from "utils/router";
//
import { BsSearch } from "react-icons/bs";

// home
import { useState } from "react";

const HomePage = () => {
  const [Menus, setMenu] = useState([
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
                  Miễn phí đơn hàng trên {formatter(500000)}
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
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-3 ">
            <div className="header__logo">
              <h1>Mía Food</h1>
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
    </>
  );
};

export default memo(HomePage);
