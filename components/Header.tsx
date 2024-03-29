"use client";

import { useState } from "react";
import { HamburgerMenuIcon, PersonIcon, ExitIcon } from "@radix-ui/react-icons";
import Cookies from "js-cookie";

import Link from "next/link";
import Image from "next/image";

import hyperboreaWhite from "@/public/hyperborea preto.png";
import "@/styles/header.scss";

export function Header(): JSX.Element {
  const user = { email: Cookies.get("email"), username: Cookies.get("username") }
  const [isLogged, _setIsLogged] = useState<boolean>(user.email && user.username ? true : false);

  const logout = () => {
    Cookies.remove("email")
    Cookies.remove("username")
    Cookies.remove("token")
  }

  return (
    <header className="header">
      <div className="img-container">
        <Link href="/">
          <Image src={hyperboreaWhite} alt="hpb logo" />
        </Link>
      </div>
      <nav>
        <button className="default-btn transparent-btn hidden resp-nav-btn">
          <HamburgerMenuIcon />
        </button>
        <ul className="ulist">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/store">Store</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/extras">Extras</Link>
          </li>
        </ul>
      </nav>
      <div className="buttons">
        <Link href="/signin">
          <button className="transparent-btn default-btn">
            <PersonIcon />
          </button>
        </Link>
        {isLogged ? (
          <button className="transparent-btn default-btn" onClick={logout}>
            <ExitIcon />
          </button>
        ) : (
          ""
        )}
      </div>
    </header>
  );
}
