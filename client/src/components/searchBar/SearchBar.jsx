import { Link } from "react-router-dom";
import useSearch from "../../hooks/useSearch";
import style from "./SearchBar.module.css";
import { useSelector } from "react-redux";
import filter from "../../hooks/filter";
const SearchBar = () => {
  const { input, setInput, handleSearch } = useSearch();
  const aux = useSelector((state) => state.aux);
  const handleChange = (event) => {
    setInput(event.target.value);
  };
  const handleClick = (event) => {
    event.preventDefault();
    handleSearch();
  };

  return (
    <>
      <div className={style.search}>
        <div className={style.createnew}>
          <Link to="/formPage">
            <button className={style.button}>Create new</button>
          </Link>
        </div>
        <div className={style.searchbar}>
          <input
            type="text"
            className={style.input}
            value={input}
            onChange={handleChange}
          />
          <button className={style.searchbutton} onClick={handleClick}>
            <img src="/src/imagenes/i3kvlpusd9rv8diq849o468brk.png" />
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
