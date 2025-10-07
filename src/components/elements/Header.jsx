import { useEffect } from "react";
import PrimeParkingHeader from "../../assets/icon/logo-header.svg";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import callIcon from "../../assets/icon/callIcon.svg";
import callIconDesk from "../../assets/icon/telDesk.svg";
import PrimeParking from "../../assets/icon/borgerMenuIcon.svg";
import useMediaQuery from "../../function/useMediaQuery";
import { functions } from "../../store/globalState";
import ModalMenu from "./componentSite/ModalMenu";
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
    if (modalOpen) {
      setModalOpen(modalOpen);
    }
  }, [lacation?.pathname]);

  return (
    <header>
      <div className="nav-bar">
        <main>
          <img onClick={() => navigate("./")} src={PrimeParkingHeader} alt="" />
        </main>
        {/* {isMobile ? (
          <nav onClick={() => setModalOpen(modalOpen)}>
            <img src={PrimeParking} alt=" " />
          </nav>
        ) : (
          <div>
            <NavLink to="./services">Услуги</NavLink>
            <NavLink to="./offer">Оферта</NavLink>
            <NavLink to="./parking-rules">Правила паркинга</NavLink>
            <NavLink to="./parking-zoning">Зонирование</NavLink>
          </div>
        )} */}
        <nav onClick={() => setModalOpen(modalOpen)}>
          <img src={PrimeParking} alt=" " />
        </nav>
        <a href="tel: +7 (495) 481 22 44">
          {!isMobile ? (
            <>
              <img src={callIconDesk} alt=" " /> <span>+7 (495) 481 22 44</span>
            </>
          ) : (
            <img src={callIcon} alt=" " />
          )}
        </a>
      </div>
      {modalOpen && <ModalMenu />}
    </header>
  );
}
