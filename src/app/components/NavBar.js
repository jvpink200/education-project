"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "../images/study_icon.png";
import "../css/navbar.scss";
import { useState } from "react";
export default function NavBar({ page }) {
  const [menuStatus, setMenuStatus] = useState(false);
  function handleToggleMenu() {
    setMenuStatus(!menuStatus);
  }
  return (
    <nav className="navbar">
      <div className="navbar__learning">
        <div className="logo">
          <Image src={Logo} alt="logo" />
        </div>
        <div className="menu" onClick={handleToggleMenu}>
          <div className="menu__item"></div>
          <div className="menu__item"></div>
          <div className="menu__item"></div>
        </div>
      </div>
      <ul className={menuStatus ? "links menu-active" : "links menu-hidden"}>
        <li className={page === "home" ? "active-home" : "home"}>
          <Link href="/">Home</Link>
        </li>
        <li className={page === "contact" ? "active-contact" : "contact"}>
          <Link href="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}
