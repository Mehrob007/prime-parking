import React, { useEffect, useState } from "react";
import logoHeader from "../../assets/icon/logo-header.svg";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import callIcon from "../../assets/icon/callIcon.svg";
import burgerMenuIcon from "../../assets/icon/borgerMenuIcon.svg";
import useMediaQuery from "../../function/useMediaQuery";
import { functions } from "../../store/globalState";
export default function Header() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const navigate = useNavigate();
  const { modalOpen, setModalOpen } = functions();
  const lacation = useLocation();

  console.log("lacation", lacation?.pathname);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

  useEffect(() => {
    setModalOpen(modalOpen);
  }, [lacation?.pathname]);

  return (
    <header>
      <div className="nav-bar">
        {isMobile ? (
          <nav onClick={() => setModalOpen(modalOpen)}>
            <img src={burgerMenuIcon} alt="burgerMenuIcon" />
          </nav>
        ) : (
          <div>
            <NavLink to="./services">Услуги</NavLink>
            <NavLink to="./offer">Оферта</NavLink>
            <NavLink to="./parking-rules">Правила паркинга</NavLink>
          </div>
        )}
        <img onClick={() => navigate("./")} src={logoHeader} alt="logoHeader" />
        <a href="tel: +7 (495) 481 22 44">
          {!isMobile ? (
            "+7 (495) 481 22 44"
          ) : (
            <img src={callIcon} alt="call-icon" />
          )}
        </a>
      </div>
    </header>
  );
}
