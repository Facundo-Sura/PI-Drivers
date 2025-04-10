import { useEffect } from "react";
import useFilByOrigin from "../../hooks/useFilByOrigin";
import useFilByTeam from "../../hooks/useFilByTeam";
import useFil from "../../hooks/useFilter";
import { handle } from "../../hooks/handle";
import { useDispatch, useSelector } from "react-redux";
import { getTeams } from "../../redux/actions/getTeams";
import { stateFiltered } from "../../redux/actions/stateFilters";
import { keepStatePyN } from "../../redux/actions/keepState";
import Footer from "../../components/footer/Footer";
import Cards from "../../components/cards/Cards";
import Navbar from "../../components/navbar/Navbar";
import style from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const teams = useSelector((state) => state.teams);
  const { filByOr } = useFilByOrigin();
  const { filterTeam } = useFilByTeam();
  const { orderByAlpha } = useFil();

  useEffect(() => {
    if (!teams.length) dispatch(getTeams());
  }, []);

  return (
    <div className={style.home}>
      <Navbar />
      <div className={style.container}>
        <div className={style.filters}>
            <select
              name="filter"
              id="filter"
              className={style.selects}
              onChange={() => {
                handle(event, filterTeam);
                dispatch(stateFiltered(1));
                dispatch(keepStatePyN);
              }}
            >
              <option value="" disabled selected>
                Order by Team
              </option>
              {teams.map((team) => {
                const { name } = team;
                return (
                  <option key={name} value={name} id={name}>
                    {name}
                  </option>
                );
              })}
            </select>
            <select
              name="filter2"
              id="filter2"
              className={style.selects}
              onChange={() => handle(event, filByOr)}
            >
              <option value="all">All Drivers</option>
              <option value="api">Api</option>
              <option value="db">DataBase</option>
            </select>
            <select
              name="filter3"
              id="filter3"
              className={style.selects}
              onChange={() => handle(event, orderByAlpha)}
            >
              <option value="" disabled selected>
                Order by
              </option>
              <option value="desbyalfa">Descend Alphabetically</option>
              <option value="asbyalfa">Ascend Alphabetically</option>
              <option value="desbydob">Desend By Date Of Birth</option>
              <option value="asbydob">Ascend By Date Of Birth</option>
            </select>
          <div className="title">
          </div>
        </div>
        <Cards />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
