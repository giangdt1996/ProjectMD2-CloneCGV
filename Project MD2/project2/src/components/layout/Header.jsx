import React, { useState } from "react";
import "./HomePage.css";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

function Header() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const userLogin = JSON.parse(localStorage.getItem("userLogin"));

  const handleLogOut = () => {
    localStorage.removeItem("userLogin");
    navigate("/login");
  };
  const handleLinkHistoty = () =>
    userLogin == null
      ? (alert("Xin vui lòng đăng nhập"), navigate("/login"))
      : navigate("/history");

  return (
    <div>
      <>
        <div className="page">
          <div className="header-container"></div>
          <div className="header-banner">
            <img src="https://advserver.cgv.vn/www/images/4071dd3a3df0579d220dad28e9c08679.jpg" />
          </div>
          <div className="header-tuyendung">
            <div className="tuyendung">
              <i className="fa-solid fa-user-group" />
              <div>TUYỂN DỤNG</div>
            </div>
            <div className="tinmoi">
              <i className="fa-sharp fa-solid fa-tags" />
              <div> TIN MỚI &amp; ƯU ĐÃI</div>
            </div>
            <div href="/history/history.html" className="vecuatoi">
              <i className="fa-solid fa-ticket-simple" />
              <div onClick={handleLinkHistoty}> VÉ CỦA TÔI</div>
            </div>
            {userLogin == null ? (
              <Link
                to="/login"
                id="btn-login-sigin"
                className="loginout"
                target="_blank"
                style={{color:"grey"}}
              >
                <i className="fa-solid fa-circle-user"></i>
                <div>ĐĂNG NHẬP/ĐĂNG KÝ</div>
              </Link>
            ) : (
              <>
                <div>Xin Chào {userLogin.name}</div>
                <div onClick={handleLogOut}> Thoát</div>
              </>
            )}

            <div className="greeting" />
          </div>
          <div className="toprepon">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <i className="fa-solid fa-circle-user" />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>
                  {" "}
                  <Link to="/login">ĐĂNG NHẬP</Link>
                </Dropdown.Item>

                <Dropdown.Item>
                  <Link to="register">ĐĂNG KÝ</Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <i className="fa-solid fa-bars" />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item> PHIM</Dropdown.Item>

                <Dropdown.Item>RẠP CGV</Dropdown.Item>
                <Dropdown.Item>THÀNH VIÊN</Dropdown.Item>
                <Dropdown.Item>CULTUREPLEX</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="header-main">
            <div>
              <Link to="/">
                <img
                  src="https://www.cgv.vn/skin/frontend/cgv/default/images/cgvlogo.png"
                  alt=""
                />
              </Link>
            </div>
            <div className="headtext">
              <div>
                <p>Phim</p>
              </div>
              <div>
                <p>Rạp CGV</p>
              </div>
              <div>
                <p>Thành viên</p>
              </div>
              <div>CULTUREPLEX</div>
            </div>
            <a href="#" className="cine">
              <img
                src="https://www.cgv.vn/media/wysiwyg/news-offers/mua-ve_ngay.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <div className="main-content">
          <div className="content-top">
            <ul>
              <li>
                <a href="">cgv theater</a>
              </li>
              <li>
                <a href="">now sh</a>
              </li>
              <li>
                <a href="">special</a>
              </li>
              <li>
                <a href="">rental</a>
              </li>
              <li>
                <a href="">contact</a>
              </li>
            </ul>
          </div>
        </div>
      </>
    </div>
  );
}

export default Header;
