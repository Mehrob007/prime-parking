import React from "react";
import logoHeader from "../../assets/icon/logo-header.svg";
import { NavLink, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header>
      <div className="nav-bar">
        <div>
          <NavLink to="./services">Услуги</NavLink>
          <NavLink to="./offer">Оферта</NavLink>
          <NavLink to="./parking-rules">Правила паркинга</NavLink>
        </div>
        <img onClick={() => navigate("./")} src={logoHeader} alt="logoHeader" />
        <a href="tel: +7 (495) 481 22 44">+7 (495) 481 22 44</a>
      </div>
    </header>
  );
}
