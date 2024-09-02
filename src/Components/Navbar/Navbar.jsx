import "./Navbar.css";
import navLogo from "../../Assets/innoson.jpg";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-logo">
        <img src={navLogo} alt="IVM Logo" />
      </div>
      <ul className="nav-menu">
        <li>Home</li>
        <li>Explore</li>
        <li>About</li>
        <li className="nav-contact">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
