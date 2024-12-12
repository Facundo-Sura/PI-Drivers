import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
import SearchBar from "../../components/searchBar/SearchBar";

export default function Navbar() {
  return (
    <div className={style.container}>
      <div className={style.titlePage}>
        <img className={style.logo} src="./F1.webp" alt="f1" />
        <h1 className={style.title}>
          <span className={style.letter}>D</span>
          <span className={style.letter}>R</span>
          <span className={style.letter}>I</span>
          <span className={style.letter}>V</span>
          <span className={style.letter}>E</span>
          <span className={style.letter}>R</span>
          <span className={style.letter}>S</span>
        </h1>
      </div>
      <div className={style.nav}>
        <Link className={style.link} to="/">
          Landing
        </Link>
        <Link className={style.link} to="/home">
          Home
        </Link>
        <Link className={style.link} to="/formPage">
          Create
        </Link>
      </div>
      <div className={style.searchbar}>
        <a className={style.media} href="https://github.com/Facundo-Sura
">
          <img className={style.mLogo} src="./github.png" alt="github" />
        </a>
        <a className={style.media} href="https://www.linkedin.com/in/facundo-martin-emiliano-s-974b74253/">
          <img className={style.mLogo} src="./linkedin.png" alt="linkedin" />
        </a>
        <a className={style.media} href="https://www.facebook.com/facundo.sura/">
          <img className={style.mLogo} src="./facebook.png" alt="facebook" />
        </a>
      </div>
    </div>
  );
}
