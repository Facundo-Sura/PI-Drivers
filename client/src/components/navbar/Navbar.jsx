import style from "./Navbar.module.css";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import { Link } from "react-router-dom";
import SearchBar from "../../components/searchBar/SearchBar";

export default function Navbar() {
  return (
    <div className={style.container}>
      <div className={style.media}>
        <a href="https://www.linkedin.com/in/facundo-martin-emiliano-s-974b74253/">
          <img className={style.contact} src={linkedin} alt="linkedin" />
        </a>
        <a href="https://github.com/Facundo-Sura">
          <img className={style.contact} src={github} alt="github" />
        </a>
      </div>
      <div className={style.nav}>
        <Link className={style.link} to="/">
          Landing
        </Link>
        <Link className={style.link} to="/home">
          Home
        </Link>
        <Link className={style.link} to="/formPage">
          Create new
        </Link>
      </div>
      <div className={style.searchbar}>
        <SearchBar />
      </div>
    </div>
  );
}
