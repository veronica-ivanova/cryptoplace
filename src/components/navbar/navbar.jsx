import "./navbar.css";
import logo from "../../assets/logo.png";
import arrow_icon from "../../assets/arrow_icon.png";

export const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="" className="logo"/>
      <ul>
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className="nav-right">
        <select>
          <option value="usd">USD</option>
          <option value="usd">EUR</option>
          <option value="usd">RUB</option>
        </select>
        <button>
          Sign up <img src={arrow_icon} alt="" />
        </button>
      </div>
    </div>
  );
};
