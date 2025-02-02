import { useState } from "react";
import { Search, User } from "lucide-react";
import "./Navbar.css";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">Brewberry Cafe</a>
      </div>
      <ul className="navbar-as">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/menu">Menu</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <div className="navbar-search">
        <input type="text" placeholder="Search..." />
        <Search className="search-icon" />
      </div>
      <div className="navbar-user">
        <div onClick={toggleDropdown} className="user-icon-container">
          <User className="user-icon" />
        </div>
        {dropdownOpen && (
          <div className="dropdown-menu">
            <div className="dropdown-menu-items">
              <a href="/settings">Settings</a>
            </div>
            <div className="dropdown-menu-items">
              <a href="/preferences">Preferences</a>
            </div>
            <div className="dropdown-menu-items">
              <a href="/login">Logout</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
