import { PersonIcon, ExitIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";
import hyperboreaWhite from "/hyperborea-black.png";
import "./Header.scss";
import { useState } from "react";

const Header = () => {
  const [isLogged, _setIsLogged] = useState<boolean>(false);

  return (
    <header className="header">
      <div className="img-container">
        <Link to="/">
          <img src={hyperboreaWhite} alt="hpb logo" />
        </Link>
      </div>
      <nav>
        <button className="default-btn transparent-btn hidden resp-nav-btn">
          <HamburgerMenuIcon />
        </button>
        <ul className="ulist">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="">Store</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Extras</a>
          </li>
        </ul>
      </nav>
      <div className="buttons">
        <button className="transparent-btn default-btn">
          <PersonIcon />
        </button>
        {isLogged ? (
          <button className="transparent-btn default-btn">
            <ExitIcon />
          </button>
        ) : (
          ""
        )}
      </div>
    </header>
  );
};

export default Header;
