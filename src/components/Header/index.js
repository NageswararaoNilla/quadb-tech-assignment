import { useState } from "react";
import { withRouter, Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { BsBriefcaseFill } from "react-icons/bs";
// import { FiLogOut } from "react-icons/fi";
import { AiOutlineLogin } from "react-icons/ai";
import { AiOutlineLogout } from "react-icons/ai";

import "./index.css";

const Header = (props) => {
  const [isLogin, setIsLogin] = useState(false);
  const { history } = props;

  const onLogoutOrLogin = () => {
    if (isLogin) {
      localStorage.removeItem("jwt_token");
      history.replace("/");
      setIsLogin(false);
    } else {
      history.replace("/login");
      setIsLogin(true);
    }
  };

  return (
    <nav className="nav-container">
      <div className="nav-content">
        <div>
          <Link to="/" className="link">
            <h1 className="header-logo">QuadB Tech</h1>
          </Link>
        </div>
        <ul className="icons-container">
          <Link to="/" className="link">
            <li>
              <AiFillHome color="white" size={20} />
            </li>
          </Link>
          <Link to="/jobs" className="link">
            <li>
              <BsBriefcaseFill color="white" size={20} />
            </li>
          </Link>
          <li>
            <button
              type="button"
              className="logout-icon"
              onClick={onLogoutOrLogin}
            >
              {isLogin ? (
                <AiOutlineLogout color="white" size={20} />
              ) : (
                <AiOutlineLogin color="white" size={20} />
              )}
            </button>
          </li>
        </ul>
        <div className="buttons-container">
          <div className="menu-container">
            <Link to="/" className="link">
              <p className="header-heading">Home</p>
            </Link>
            <Link to="/jobs" className="link">
              <p className="header-heading">Jobs</p>
            </Link>
          </div>
          <button
            type="button"
            className="logout-btn"
            onClick={onLogoutOrLogin}
          >
            {isLogin ? "Logout" : "Login/Signup"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default withRouter(Header);
