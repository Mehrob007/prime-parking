import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../../components/elements/Header.jsx";
import ScrollToTop from "../../components/elements/com/ScrollToTop.jsx";
import { functions } from "../../store/globalState.js";
import ModalMenu from "../../components/elements/componentSite/ModalMenu.jsx";
import FileViewer from "../../components/elements/componentSite/FileViewer.jsx";
const Home = lazy(() => import("../../components/Home.jsx"));
const Services = lazy(() => import("../../components/Services.jsx"));
const Offer = lazy(() => import("../../components/Offer.jsx"));
const ParkingRules = lazy(() => import("../../components/ParkingRules.jsx"));

export default function Router() {
  const { modalOpen } = functions();
  return (
    <>
      <Header />
      <div>
        <Suspense fallback={<p>Loading...</p>}>
          <ScrollToTop /> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/offer" element={<Offer />} />
            <Route path="/parking-rules" element={<ParkingRules />} />
            <Route path="/:key" element={<FileViewer />} />
          </Routes>
        </Suspense>
      </div>
      {modalOpen && <ModalMenu />}
    </>
  );
}
