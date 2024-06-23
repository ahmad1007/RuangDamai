import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(authStatus === "true");
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    setIsAuthenticated(false);
    window.location.href = "/login";
  };

  const isActive = (path) => {
    return location.pathname === path ? "font-bold" : "";
  };

  return (
    <nav className="bg-[#38B6FF] p-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="/images/logo.png"
              alt="Go Peduli"
              className="h-10 mr-2 bg-white p-1 rounded-3xl"
            />
            <Link
              to="#"
              className="text-gray-800 font-bold text-sm mt-3"
            ></Link>
          </div>
          <div className="md:hidden">
            <button onClick={toggleDropdown} className="text-white">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } md:flex md:flex-grow md:items-center md:w-auto`}
          >
            <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 text-sm ml-5 gap-1">
              <li>
                <Link
                  to="/"
                  className={`text-gray-800 hover:text-gray-950 block py-2 md:py-0 ${isActive(
                    "/"
                  )}`}
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  to="/artikel"
                  className={`text-gray-800 hover:text-gray-950 block py-2 md:py-0 ${isActive(
                    "/artikel"
                  )}`}
                >
                  Artikel
                </Link>
              </li>
              <li>
                <Link
                  to="/video"
                  className={`text-gray-800 hover:text-gray-950 block py-2 md:py-0 ${isActive(
                    "/video"
                  )}`}
                >
                  Video
                </Link>
              </li>
              <li>
                <Link
                  to="/konseling"
                  className={`text-gray-800 hover:text-gray-950 block py-2 md:py-0 ${isActive(
                    "/konseling"
                  )}`}
                >
                  Konseling
                </Link>
              </li>
              <li>
                <Link
                  to="/Webiner"
                  className={`text-gray-800 hover:text-gray-950 block py-2 md:py-0 ${isActive(
                    "/Webiner"
                  )}`}
                >
                  Webiner
                </Link>
              </li>
            </ul>
          </div>
          {isAuthenticated ? (
            <div className="relative flex items-center">
              <div className="flex items-center">
                <button
                  style={{
                    height: "30px",
                    borderRadius: "20px",
                    width: "30px",
                    backgroundColor: "#FFA500",
                  }}
                  className="flex items-center justify-center focus:outline-none"
                  onClick={toggleProfileMenu}
                >
                  <FontAwesomeIcon icon={faUser} className="text-gray-800 b" />
                </button>
                {isProfileMenuOpen && (
                  <div className="absolute right-0 top-[2.5rem] w-48 bg-white border rounded-lg shadow-lg py-1 z-50">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Profil
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
              <p style={{ color: "#ffff" }} className="ml-2">
                Hi,sahabat damai
              </p>
            </div>
          ) : (
            <Link
              style={{
                marginLeft: "auto",
                display: "inline-block",
              }}
              to="/login"
              className={`text-gray-800 hover:text-gray-750 block py-2 md:py-0 ${isActive(
                "/login"
              )}`}
            >
              Daftar/Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
