import React from "react";
import Box5 from "./elements/Box5";
import { functions } from "../store/globalState";

export default function Offer() {
  const { redirect } = functions();

  return (
    <>
      <div className="offer">
        <h1>ОФЕРТА</h1>
        <div className="offer-content">
          <div>
            <h1>
              Публичная оферта на реализацию Программных <br />
              продуктов в целях обеспечения доступа <br />
              на Паркинг Комплекса ЖК «Прайм Парк»
            </h1>
            <div>
              <div>
                <button onClick={() => redirect("https://drive.google.com/drive/folders/1L-w__kci-_71FF9MGxtBfbkIFuAGyeXn?usp=drive_link")}>
                  <h3>Ознакомиться с основными положениями</h3>
                </button>
              </div>
              <p>
                Более старые версии:{" "}
                <a target="_blank" href="https://drive.google.com/drive/folders/1PpXHaUU-0e-mxsfROheVtvCGLuzJk0xW?usp=drive_link">
                  Скачать
                </a>
              </p>
            </div>
          </div>
          <div>
            <h1>
              Публичная оферта на оказание услуг в целях обеспечения <br />{" "}
              автомобилей клиентов Комплекса ЖК «Прайм Парк» топливом
            </h1>
            <div>
              <div>
                <button onClick={() => redirect("https://drive.google.com/drive/folders/17uyCWydSeWQ9bGqzT-5PwrufZYXa-i6F?usp=drive_link")}>
                  <h3>Ознакомиться с основными положениями</h3>
                </button>
              </div>
              <p>
                Более старые версии:{" "}
                <a target="_blank" href="https://drive.google.com/drive/folders/1-AjL6sUu7b1IX86NG1OU1d9JOBAs4fK7?usp=drive_link">
                  Скачать
                </a>
              </p>
            </div>
          </div>
          <div>
            <h1>
              Публичная оферта на реализацию Программных продуктов в <br />{" "}
              целях обеспечения оказания услуг мойки транспортных <br /> средств
              (далее – автомойка) Комплекса ЖК «Прайм Парк»
            </h1>
            <div>
              <div>
                <button onClick={() => redirect("https://drive.google.com/drive/folders/1TZ396IPBkTJ_Yeta5QHxn3Hw99hlip7M?usp=drive_link")}>
                  <h3>Ознакомиться с основными положениями</h3>
                </button>
              </div>
              <p>
                Более старые версии:{" "}
                <a target="_blank" href="https://drive.google.com/drive/folders/11s2I_6SG-bvTmKnRByd7opPQfx4zfSM0?usp=drive_link">
                  Скачать
                </a>
              </p>
            </div>
          </div>
        </div>
        <footer className="footer-com">
          <Box5 footerForm={2} />
        </footer>
      </div>
    </>
  );
}
