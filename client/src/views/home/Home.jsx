import style from "./Home.module.css";
import Cards from "../../components/cards/Cards";
import useFilByOrigin from "../../hooks/useFilByOrigin";
import { useEffect } from "react";
import useFilByTeam from "../../hooks/useFilByTeam";
import { handle } from "../../hooks/handle";
import useFil from "../../hooks/useFilter";
import { useDispatch, useSelector } from "react-redux";
import { getTeams } from "../../redux/actions/getTeams";
import { stateFiltered } from "../../redux/actions/stateFilters";
import { keepStatePyN } from "../../redux/actions/keepState";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

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
      <Cards />
      <Footer />
    </div>
  );
};

export default Home;
