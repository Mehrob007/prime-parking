import React from "react";
import iconCloase from "../../../assets/icon/iconCloase.svg";
import callIcon from "../../../assets/icon/callIcon.svg";
import PrimeParkingHeader from "../../../assets/icon/logo-header.svg";
import { functions } from "../../../store/globalState";
import { NavLink, useNavigate } from "react-router-dom";
export default function ModalMenu() {
  const { modalOpen, setModalOpen } = functions();
  const navigate = useNavigate();
  return (
    <div className="modal-menu">
      <div className="modal-menu-header">
        <img src={iconCloase} onClick={() => setModalOpen(modalOpen)} alt=" " />
      </div>
      <div className="modal-menu-content">
        <img onClick={() => navigate("./")} src={PrimeParkingHeader} alt="" />
        <div>
          <NavLink to="./services">Услуги</NavLink>
          <NavLink to="./offer">Оферта</NavLink>
          <NavLink to="./parking-rules">Правила паркинга</NavLink>
          <NavLink to="./parking-zoning">Зонирование</NavLink>
        </div>
        <a href="tel: +7 (495) 481 22 44">
          <img src={callIcon} alt=" " />
          <span>+7 (495) 481 22 44</span>
        </a>
      </div>
    </div>
  );
}
