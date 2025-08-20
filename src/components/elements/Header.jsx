import React, { useEffect, useState } from "react";
import logoHeader from "../../assets/icon/logo-header.svg";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import callIcon from "../../assets/icon/callIcon.svg";
import callIconDesk from "../../assets/icon/telDesk.svg";
import burgerMenuIcon from "../../assets/icon/borgerMenuIcon.svg";
import useMediaQuery from "../../function/useMediaQuery";
import { functions } from "../../store/globalState";
export default function Header() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const navigate = useNavigate();
  const { modalOpen, setModalOpen } = functions();
  const lacation = useLocation();
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
    if(modalOpen){
      setModalOpen(modalOpen);
    }
  }, [lacation?.pathname]);

  return (
    <header>
      <div className="nav-bar">
        {isMobile ? (
          <nav onClick={() => setModalOpen(modalOpen)}>
            <img src={burgerMenuIcon} alt="" />
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
          {!isMobile ? (<>
            <img src={callIconDesk} alt="call-icon" /> <span>+7 (495) 481 22 44</span>
          </>) : (
            <img src={callIcon} alt="call-icon" />
          )}
        </a>
      </div>
    </header>
  );
}
