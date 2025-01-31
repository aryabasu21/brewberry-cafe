import { Search } from 'lucide-react';
import "./Navbar.css";
function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="/">Brewberry Cafe</a>
            </div>
            <ul className="navbar-as">
                <li><a href="/">Home</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
            <div className="navbar-search">
                <input type="text" placeholder="Search..." />
                <Search className='search-icon' />
            </div>
        </nav>
    );
};

export default Navbar;