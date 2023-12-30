import { PersonIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import "./Header.scss";

export default function Header(): JSX.Element {
  return (
    <header className="header">
      <h1>Hyperborea Audio</h1>
      <nav>
        <button className="default-btn transparent-btn hidden resp-nav-btn"><HamburgerMenuIcon /></button>
        <ul className="ulist">
          <li>
            <a href="">Home</a>
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
      <button className="transparent-btn default-btn"><PersonIcon/></button>
    </header>
  );
}
