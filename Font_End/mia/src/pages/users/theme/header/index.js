import { memo } from 'react';
import './style.scss';
import { RiFacebookCircleFill } from "react-icons/ri";
import { AiFillTikTok } from "react-icons/ai";
import { FaYoutubeSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaRegUserCircle } from "react-icons/fa";
const HomePage = () => {
    return (
        <div className='header__top'>
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>trái</div>
                    <div className='col-6 header__top_right'  >
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
    );
};

export default memo(HomePage);
