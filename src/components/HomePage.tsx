import { Link, Outlet } from "react-router-dom";
import scss from "./HomePage.module.scss";
const HomePage = () => {
  return (
    <div className={scss.HomePage}>
      <div className={scss.content}>
        <h1>Добро пожаловать!</h1>
        <div className={scss.links}>
          <Link to={"/calories"}>Подсчет суточной нормы</Link>
          <Link to={"/traker"}>Подсчет калорий в еде</Link>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default HomePage;
