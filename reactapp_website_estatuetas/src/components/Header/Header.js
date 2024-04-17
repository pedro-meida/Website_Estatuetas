import React, { useState } from "react";
import "./Header.css";
import { FaSearch } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

export function Header({ setMenuIsVisible }) {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleSearchClick = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <header className="baseHeader">
      <div className="headerContainer">
        <div className="headerLogo">
          <img
            src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
            alt="Netflix Logo"
          />
        </div>
        <nav className="headerMenu">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/Produtos">Produtos</a>
            </li>
            <li>
              <a href="/Categorias">Categorias</a>
            </li>
            <li>
              <a href="Contact">Contate-nos</a>
            </li>

            {!isSearchVisible ? (
              <>
                <li className="searchIcon">
                  <FaSearch
                    size={25}
                    onClick={handleSearchClick}
                    style={{ visibility: "visible" }}
                  />
                </li>

                <li className="menuIcon">
                  <RiMenu3Fill size={25} onClick={setMenuIsVisible} />
                </li>
              </>
            ) : (
              <div className="searchContainer">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchValue}
                  onChange={handleSearchChange}
                />
                <IoClose
                  size={25}
                  onClick={handleSearchClick}
                  style={{ backgroundColor: "white", cursor: "pointer" }}
                />
              </div>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
