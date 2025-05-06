import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Pulse from "../images/pulse.png";
import "../css/Navbar.css";
import Cookies from "js-cookie";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [menuOpen]);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const handleLogout = async () => {
        try {
            Cookies.remove("token");               
            setIsLoggedIn(false);                   
            setMenuOpen(false);                    
            toast.success("Logged Out");
    
            
            setTimeout(() => {
                window.location.href = "/login";    
            }, 100);
        } catch (err) {
            toast.error("Logout failed");
            console.error(err);
        }
    };
    
    return (
        <header className="navbar-container">
            <nav className="navbar">
                <div className="navbar-logo">
                    <Link to="/">
                        <img src={Pulse} alt="Logo" width="80" height="60" />
                    </Link>
                </div>

                <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
                    <li className="home"><NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
                    <li className="services"><NavLink to="/services" onClick={() => setMenuOpen(false)}>Services</NavLink></li>
                    <li className="doctors"><NavLink to="/doctors" onClick={() => setMenuOpen(false)}>Doctors</NavLink></li>
                    <li className="appointment"><NavLink to="/appointment" onClick={() => setMenuOpen(false)}>Appointment</NavLink></li>
                    {!isLoggedIn ? (
                        <li><NavLink to="/login" onClick={() => setMenuOpen(false)}><button className="login-btn">Login</button></NavLink></li>
                    ) : (
                        <li><button className="logout-btn" onClick={handleLogout}>Logout</button></li>
                    )}
                </ul>

                <div className="menu-toggle" onClick={toggleMenu}>
                    {menuOpen ? (
                        <span className="cross-icon">&times;</span>
                    ) : (
                        <div className="hamburger">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;