import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
import SearchBar from "../../components/searchBar/SearchBar";

export default function Navbar() {
  return (
    <div className={style.container}>
      <div className={style.titlePage}>
        <img src="" alt="f1" />
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
