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
import { formatter } from "../../../../utils/fomater";

// home
const HomePage = () => {
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

      {/* MENU */}

      <div className="container bg-white ">
        <div className="row">
          <div className="col-lg-3">LOGO</div>
        </div>
      </div>
    </>
  );
};

export default memo(HomePage);
