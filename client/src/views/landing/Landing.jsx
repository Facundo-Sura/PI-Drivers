import style from "./Landing.module.css";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <div className={style.container}>
        <h1 className={style.title}>PI Drivers Henry</h1>
        <Link to="/home" className={style.button}>
          HOME
        </Link>
      </div>
    </div>
  );
};

export default Landing;
