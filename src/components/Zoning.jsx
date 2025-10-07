import Box5 from "./elements/Box5";
import zone1 from "../assets/img/zone1.png";
import zone2 from "../assets/img/zone2.png";
import zone3 from "../assets/img/zone3.png";
import zone4 from "../assets/img/zone4.png";
// import useMediaQuery from "../function/useMediaQuery";
import { Helmet } from "react-helmet";
import { HashLink } from "react-router-hash-link";

export default function Zoning() {
  // const isMobile = useMediaQuery("(max-width: 768px)");

  const scrollWithOffset = (el, behavior) => {
    // Добавляем небольшую задержку (например, 100 мс) перед прокруткой
    setTimeout(() => {
      el.scrollIntoView({ behavior, block: "start" });
    }, 100);
  };

  return (
    <div className="parking-rules">
      {/* <Helmet>
        <title> Prime Parking - Правила паркинга </title>
        <meta
          name="description"
          content="Explore our parking services at Prime Parking. We offer a range of solutions to meet your parking needs."
        />
        <link rel="canonical" href="https://primeparking.ru/parking-rules" />
      </Helmet> */}
      <h1>ЗОНИРОВАНИЕ</h1>
      <div>
        <h1>ЗОНИРОВАНИЕ ПАРКОВКИ</h1>
        <p>
          Для обеспечения порядка и безопасности на подземной территории в Жилом
          квартале действует система зонирования парковочных мест. Для каждой
          категории пользователей предусмотрены конкретные места или группа мест
          на подземной парковке -1 этажа.
        </p>
      </div>
      <div>
        <h1>СХЕМА ЗОНИРОВАНИЯ</h1>
        <p>
          Hyde Park Tower (R6), Gorky Park Tower (R5), Imperial Park Tower (R4)
        </p>
        <img src={zone1} alt="zone1-photo" />
      </div>
      <div>
        <h1>СХЕМА ЗОНИРОВАНИЯ</h1>
        <p>Regent's Park Tower (R3)</p>
        <img src={zone2} alt="zone2-photo" />
      </div>
      <div>
        <h1>СХЕМА ЗОНИРОВАНИЯ</h1>
        <p>Central Park Tower (R7)</p>
        <img src={zone3} alt="zone3-photo" />
      </div>
      <div>
        <h1>СХЕМА ЗОНИРОВАНИЯ</h1>
        <p>Queen Elizabeth Park Tower (R2)</p>
        <img src={zone4} alt="zone4-photo" />
      </div>
      <div>
        <h1>ВАЖНО</h1>
        <p>
          1. В случае заказа пропуска на автомобиль через мобильное приложение
          PRIME PARK APP или консьерж-службу по номеру <br /> телефона +7 495
          481-22-44 тариф парковки будет регламентироваться, как для сервисного
          трафика. <br />
          Подробнее о тарифах в разделе{" "}
          <HashLink to="/#prevate" smooth={scrollWithOffset}>
            сервисный трафик
          </HashLink>{" "}
          <br /> <br /> 2. Гостевая парковка доступна исключительно через
          Валет-сервис через сотрудника, который перегоняет Ваш авто из точки
          высадки-посадки у парадного входа на подземную парковку. Подробнее о
          тарифах в разделе{" "}
          <HashLink to="/#valet" smooth={scrollWithOffset}>
            гостевой valet service
          </HashLink>
          <br />
          <br />
          3. За нарушение зоны предусмотрен специальный тариф в размере 5 000
          рублей
          <br />
          <br />
          4. В случае занятости выделенных мест обратитесь к сотруднику службы
          безопасности
        </p>
      </div>
      {/* <div>
        <h1>Утверждено:</h1>
      </div> */}
      {/* <div>
        <h1>Исполнитель:</h1>
        <p>Индивидуальный Предприниматель Алексеев Владимир Сергеевич</p>
      </div>
      <div>
        <h1>Согласовано:</h1>
        <p>
          Генеральный директор <br />
          <br /> Управляющей организации ЖК «ПРАЙМ ПАРК» <br />
          <br /> ООО «ПРАЙМ ПАРК МЕНЕДЖМЕНТ» Мельникова И.В.
        </p>
      </div>
      <nav>
        <a
          target="_blank"
          href="https://drive.google.com/drive/folders/1rRhQ8FnQxw-EzLyeQYr0tYjJ8IMFGkfa?usp=drive_link"
        >
          <img src={iconPDFB} alt=" " /> <h1>Правила паркинга</h1>
        </a>
      </nav> */}
      <footer className="footer-com">
        <Box5 footerForm={2} />
      </footer>
    </div>
  );
}
