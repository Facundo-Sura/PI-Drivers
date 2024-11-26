import style from "./SearchBar.module.css";
import search from "../../assets/search.png";
import { useSelector } from "react-redux";
import useSearch from "../../hooks/useSearch";

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
          <input
            type="text"
            className={style.input}
            value={input}
            onChange={handleChange}
            placeholder="search"
          />
          <button className={style.button} onClick={handleClick}>
            <img className={style.img} src={search} alt="search" />
          </button>
      </div>
    </>
  );
};

export default SearchBar;
