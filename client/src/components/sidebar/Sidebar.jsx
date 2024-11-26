import style from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <div className={style.contSearch}>
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
      </div>
      <div className="title">
        <h1></h1>
      </div>
    </div>
  );
}
