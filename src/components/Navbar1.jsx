import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Pulse from "../images/pulse.png";
import { Menu, X } from "lucide-react";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="top-0 sticky w-full h-[50px] z-[100] shadow-md  bg-transparent  text-white">
      <nav className="container mx-auto px-4 flex items-center justify-between h-full">

        <Link to="/">
          <img height="60" width="60" src={Pulse} alt="Logo" className="h-14" />
        </Link>

        <ul className="hidden lg:flex gap-10 oswald1">
          {["Home", "Services", "Doctors", "Appointment"].map(
            (item, index) => (
              <li key={index} className="relative group">
                <NavLink
                  to={`/${item.toLowerCase()}`}
                  className="text-white  hover:text-yellow-500 transition duration-300"
                >
                  {item}
                </NavLink>
               
              </li>
            )
          )}
        </ul>

        <div className="hidden lg:flex gap-4">
          {!isLoggedIn ? (
            <>
              <NavLink to="/login">
                <button className="px-3 py-2 border border-white rounded-sm">
                  Login
                </button>
              </NavLink>
         
            </>
          ) : (
            <button
              onClick={() => {
                setIsLoggedIn(false);
                toast.success("Logged Out");
              }}
              className="px-5 py-2 border border-red-400 rounded-md hover:bg-red-400 hover:text-white transition"
            >
              Logout
            </button>
          )}
        </div>

        
        <button onClick={toggleNavbar} className="lg:hidden">
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      <div
        className={`lg:hidden fixed inset-0 bg-transparent bg-gradient-to-tl from-[#12100e] to-[#3d3d3d] text-white p-6 flex flex-col items-center gap-6 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <button onClick={toggleNavbar} className="self-end">
          <X size={28} />
        </button>

        {["Home", "Services", "Doctors", "Appointment"].map(
          (item, index) => (
            <NavLink
              key={index}
              to={`/${item.toLowerCase()}`}
              className="text-xl oswald2 hover:text-yellow-400 transition duration-300"
              onClick={toggleNavbar}
            >
              {item}
            </NavLink>
          )
        )}

      
        {!isLoggedIn ? (
          <>
            <NavLink to="/login">
              <button
                className="w-full px-5 py-2 border border-yellow-400 rounded-md hover:bg-yellow-400 hover:text-gray-900 transition"
                onClick={toggleNavbar}
              >
                Login
              </button>
            </NavLink>
            <NavLink to="/signup">
            </NavLink>
          </>
        ) : (
          <button
            onClick={() => {
              setIsLoggedIn(false);
              toast.success("Logged Out");
              naviagate()
              toggleNavbar();
            }}
            className="w-full px-5 py-2 border border-red-400 rounded-md hover:bg-red-400 hover:text-white transition"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
